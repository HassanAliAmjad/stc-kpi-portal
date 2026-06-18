const express = require('express');
const router = express.Router();
const multer = require('multer');
const XLSX = require('xlsx');
const path = require('path');

// Configure file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  }
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

// Detect file type
function detectFileType(workbook) {
  const sheetNames = workbook.SheetNames.map(s => s.toLowerCase());
  
  // Check for KPI file
  if (sheetNames.some(s => s.includes('kpi') || s.includes('echannel') || s.includes('score'))) {
    return 'KPI';
  }
  
  // Check for Attendance file
  if (sheetNames.some(s => s.includes('login') || s.includes('attendance') || s.includes('activity'))) {
    return 'ATTENDANCE';
  }
  
  return 'UNKNOWN';
}

// Process KPI File
function processKPIFile(workbook) {
  try {
    const kpiSheet = workbook.SheetNames.find(s => 
      s.toLowerCase().includes('echannel') || s.toLowerCase().includes('kpi score')
    );

    if (!kpiSheet) {
      return { success: false, message: 'No KPI Score sheet found' };
    }

    const data = XLSX.utils.sheet_to_json(workbook.Sheets[kpiSheet]);
    
    if (data.length === 0) {
      return { success: false, message: 'No data in KPI sheet' };
    }

    // Find agent name and score columns
    const firstRow = data[0];
    const agentCol = Object.keys(firstRow).find(k => 
      k.toLowerCase().includes('agent') || k.toLowerCase().includes('name')
    );
    const scoreCol = Object.keys(firstRow).find(k => 
      k.toLowerCase().includes('score') && k.toLowerCase().includes('final')
    ) || Object.keys(firstRow).find(k => k.toLowerCase().includes('score'));

    if (!agentCol || !scoreCol) {
      return { success: false, message: 'Cannot find Agent Name or Score columns' };
    }

    const agents = data
      .filter(row => row[agentCol])
      .map(row => ({
        name: String(row[agentCol]).trim(),
        score: parseFloat(row[scoreCol]) || 0
      }));

    if (agents.length === 0) {
      return { success: false, message: 'No agents found in data' };
    }

    const scores = agents.map(a => a.score).filter(s => !isNaN(s));
    const avgScore = scores.length > 0 ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2) : 0;

    return {
      success: true,
      type: 'KPI',
      message: `KPI file processed: ${agents.length} agents, Avg Score: ${avgScore}`,
      agents: agents,
      summary: {
        totalAgents: agents.length,
        averageScore: parseFloat(avgScore),
        topScore: Math.max(...scores),
        lowestScore: Math.min(...scores)
      }
    };
  } catch (error) {
    return { success: false, message: `KPI processing error: ${error.message}` };
  }
}

// Process Attendance File
function processAttendanceFile(workbook) {
  try {
    const loginSheet = workbook.SheetNames.find(s => 
      s.toLowerCase().includes('login') || s.toLowerCase().includes('attendance')
    );

    if (!loginSheet) {
      return { success: false, message: 'No Login/Attendance sheet found' };
    }

    const data = XLSX.utils.sheet_to_json(workbook.Sheets[loginSheet]);

    if (data.length === 0) {
      return { success: false, message: 'No data in attendance sheet' };
    }

    // Extract agent names
    const firstRow = data[0];
    const agentCol = Object.keys(firstRow).find(k => 
      k.toLowerCase().includes('agent') || k.toLowerCase().includes('name')
    );

    if (!agentCol) {
      return { success: false, message: 'Cannot find Agent column' };
    }

    const agents = [...new Set(data.map(row => String(row[agentCol]).trim()).filter(Boolean))];

    if (agents.length === 0) {
      return { success: false, message: 'No agents found in data' };
    }

    return {
      success: true,
      type: 'ATTENDANCE',
      message: `Attendance file processed: ${agents.length} agents, ${data.length} records`,
      agents: agents,
      summary: {
        totalAgents: agents.length,
        totalRecords: data.length
      }
    };
  } catch (error) {
    return { success: false, message: `Attendance processing error: ${error.message}` };
  }
}

// Main upload endpoint
router.post('/', upload.single('kpifile'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  try {
    const workbook = XLSX.readFile(req.file.path);
    const fileType = detectFileType(workbook);

    let result;

    if (fileType === 'KPI') {
      result = processKPIFile(workbook);
    } else if (fileType === 'ATTENDANCE') {
      result = processAttendanceFile(workbook);
    } else {
      return res.status(400).json({ 
        success: false, 
        message: 'Unknown file type. Expected KPI or Attendance file.' 
      });
    }

    if (!result.success) {
      return res.status(400).json({ success: false, message: result.message });
    }

    res.json({
      success: true,
      fileType: result.type,
      message: result.message,
      summary: result.summary,
      agents: result.agents
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ success: false, message: `Server error: ${error.message}` });
  }
});

module.exports = router;