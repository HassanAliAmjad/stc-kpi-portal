const express = require('express');
const router = express.Router();
const multer = require('multer');
const XLSX = require('xlsx');
const pool = require('../db');
const auth = require('../middleware/authMiddleware');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'uploads/'); },
  filename: (req, file, cb) => { cb(null, Date.now() + '_' + file.originalname); }
});

const upload = multer({ storage });

router.post('/', auth, upload.single('kpifile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  const { month, year } = req.body;
  try {
    const workbook = XLSX.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    const uploadRecord = await pool.query(`
      INSERT INTO kpi_uploads (month, year, uploaded_by, filename, status)
      VALUES ($1, $2, $3, $4, 'processing') RETURNING id
    `, [month, year, req.user.id, req.file.originalname]);

    const uploadId = uploadRecord.rows[0].id;
    let processed = 0;

    for (const row of data) {
      try {
        const agentUser = row['Agent user'] || row['agent_user'];
        if (!agentUser) continue;
        const agentResult = await pool.query(
          'SELECT id FROM agents WHERE hr_id = $1', [String(agentUser)]
        );
        if (agentResult.rows.length === 0) continue;
        const agentId = agentResult.rows[0].id;
        await pool.query(`
          INSERT INTO kpi_scores (agent_id, upload_id, month, year, final_score,
            quality_score, quiz_score, aht_score, irt_score, referral_score, tags_score, absenteeism_days)
          VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
          ON CONFLICT (agent_id, month, year) DO UPDATE SET
            final_score = EXCLUDED.final_score,
            quality_score = EXCLUDED.quality_score,
            quiz_score = EXCLUDED.quiz_score,
            aht_score = EXCLUDED.aht_score,
            irt_score = EXCLUDED.irt_score,
            referral_score = EXCLUDED.referral_score,
            tags_score = EXCLUDED.tags_score,
            absenteeism_days = EXCLUDED.absenteeism_days
        `, [
          agentId, uploadId, month, year,
          row['Final Score'] || 0,
          row['Quality Score'] || 0,
          row['Quiz Score'] || 0,
          row['ACHT1 Score'] || 0,
          row['FRT1 Score'] || 0,
          row['Referral TT Score'] || 0,
          row['TAGS 1 Score'] || 0,
          row['Absenteeism'] || 0
        ]);
        processed++;
      } catch (e) { continue; }
    }

    await pool.query(
      'UPDATE kpi_uploads SET status = $1 WHERE id = $2',
      ['processed', uploadId]
    );

    res.json({ message: 'File processed successfully', processed });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error processing file' });
  }
});

router.get('/history', auth, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT ku.*, u.full_name as uploaded_by_name
      FROM kpi_uploads ku
      JOIN users u ON ku.uploaded_by = u.id
      ORDER BY ku.uploaded_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;