const express = require('express');
const router = express.Router();
const multer = require('multer');
const XLSX = require('xlsx');
const pool = require('../db');

// ─── File upload config ──────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '_' + file.originalname)
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('spreadsheet') || file.originalname.endsWith('.xlsx')) {
      cb(null, true);
    } else {
      cb(new Error('Only .xlsx files allowed'), false);
    }
  }
});

// ─── Helpers ─────────────────────────────────────────────

// Safely turn a cell into a 0–1 decimal. Scores in the sheet are already
// fractions (0.2, 0.98). Guards against blanks / weird types.
function toDecimal(v) {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}

// Absenteeism is a whole number of days in the sheet ("Absenteeism" col).
function toInt(v) {
  const n = parseInt(v, 10);
  return isNaN(n) ? 0 : n;
}

// Find the KPI score sheet by name (tolerant of spacing/case).
function findKpiSheet(workbook) {
  return workbook.SheetNames.find(s => {
    const low = s.toLowerCase();
    return low.includes('echannel') || low.includes('kpi score') || low.includes('kpi');
  });
}

// ─── Main upload endpoint ────────────────────────────────
router.post('/', upload.single('kpifile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const month = (req.body.month || '').toString().slice(0, 10) || 'Unknown';
  const year = parseInt(req.body.year, 10) || new Date().getFullYear();

  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = findKpiSheet(workbook);

    if (!sheetName) {
      return res.status(400).json({
        success: false,
        message: 'No KPI score sheet found (looked for a sheet named like "eChannels KPI Score").'
      });
    }

    // Read with header row mapped to keys
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: null });

    if (rows.length === 0) {
      return res.status(400).json({ success: false, message: 'KPI sheet has no data rows.' });
    }

    // Record the upload itself
    const uploadRec = await pool.query(
      `INSERT INTO kpi_uploads (month, year, filename, status)
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [month, year, req.file.originalname, 'processing']
    );
    const uploadId = uploadRec.rows[0].id;

    const matched = [];
    const unmatched = [];

    for (const row of rows) {
      // HR ID lives in the "Agent user" column; it matches agents.hr_id
      const hrIdRaw = row['Agent user'];
      const agentName = (row['Agent Name'] || '').toString().trim();

      if (hrIdRaw === null || hrIdRaw === undefined || hrIdRaw === '') {
        continue; // skip blank rows
      }

      const hrId = String(hrIdRaw).trim();

      // Match agent by HR ID (primary), then by name (fallback)
      let agentResult = await pool.query(
        'SELECT id, full_name FROM agents WHERE hr_id = $1',
        [hrId]
      );

      if (agentResult.rows.length === 0 && agentName) {
        agentResult = await pool.query(
          'SELECT id, full_name FROM agents WHERE LOWER(TRIM(full_name)) = LOWER($1)',
          [agentName]
        );
      }

      if (agentResult.rows.length === 0) {
        unmatched.push({ hr_id: hrId, name: agentName });
        continue;
      }

      const agentId = agentResult.rows[0].id;

      // Map sheet columns -> DB columns
      const finalScore   = toDecimal(row['Final Score']);
      const qualityScore = toDecimal(row['Quality Score']);
      const quizScore    = toDecimal(row['Quiz Score']);
      const ahtScore     = toDecimal(row['ACHT1 Score']);
      const irtScore     = toDecimal(row['FRT1 Score']);
      const referralScore= toDecimal(row['Referral TT Score']);
      const tagsScore    = toDecimal(row['TAGS 1 Score']);
      const absenteeism  = toInt(row['Absenteeism']);

      // Upsert on (agent_id, month, year)
      await pool.query(
        `INSERT INTO kpi_scores
          (agent_id, upload_id, month, year, final_score, quality_score,
           quiz_score, aht_score, irt_score, referral_score, tags_score, absenteeism_days)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
         ON CONFLICT (agent_id, month, year)
         DO UPDATE SET
           upload_id = EXCLUDED.upload_id,
           final_score = EXCLUDED.final_score,
           quality_score = EXCLUDED.quality_score,
           quiz_score = EXCLUDED.quiz_score,
           aht_score = EXCLUDED.aht_score,
           irt_score = EXCLUDED.irt_score,
           referral_score = EXCLUDED.referral_score,
           tags_score = EXCLUDED.tags_score,
           absenteeism_days = EXCLUDED.absenteeism_days`,
        [agentId, uploadId, month, year, finalScore, qualityScore,
         quizScore, ahtScore, irtScore, referralScore, tagsScore, absenteeism]
      );

      matched.push({ hr_id: hrId, name: agentResult.rows[0].full_name, final_score: finalScore });
    }

    // Mark upload complete
    await pool.query(
      `UPDATE kpi_uploads SET status = $1 WHERE id = $2`,
      ['completed', uploadId]
    );

    return res.json({
      success: true,
      fileType: 'KPI',
      message: `${month} ${year}: ${matched.length} agents saved` +
        (unmatched.length ? `, ${unmatched.length} unmatched` : ''),
      summary: {
        month,
        year,
        matchedCount: matched.length,
        unmatchedCount: unmatched.length
      },
      matched,
      unmatched
    });

  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ success: false, message: `Server error: ${error.message}` });
  }
});

module.exports = router;
