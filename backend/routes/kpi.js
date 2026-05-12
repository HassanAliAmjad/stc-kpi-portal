const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/authMiddleware');

router.get('/scores', auth, async (req, res) => {
  const { month, year } = req.query;
  try {
    const result = await pool.query(`
      SELECT ks.*, a.full_name, a.hr_id, a.tabs_id, a.language,
        t.name as team_name, t.leader_name
      FROM kpi_scores ks
      JOIN agents a ON ks.agent_id = a.id
      JOIN teams t ON a.team_id = t.id
      WHERE ks.month = $1 AND ks.year = $2
      ORDER BY ks.final_score DESC
    `, [month, year]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/yearly', auth, async (req, res) => {
  const { year } = req.query;
  try {
    const result = await pool.query(`
      SELECT ks.*, a.full_name, a.hr_id, t.name as team_name, t.leader_name
      FROM kpi_scores ks
      JOIN agents a ON ks.agent_id = a.id
      JOIN teams t ON a.team_id = t.id
      WHERE ks.year = $1
      ORDER BY ks.month, ks.final_score DESC
    `, [year]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/team/:teamId', auth, async (req, res) => {
  const { teamId } = req.params;
  const { year } = req.query;
  try {
    const result = await pool.query(`
      SELECT ks.*, a.full_name, a.hr_id, a.language
      FROM kpi_scores ks
      JOIN agents a ON ks.agent_id = a.id
      WHERE a.team_id = $1 AND ks.year = $2
      ORDER BY ks.month, ks.final_score DESC
    `, [teamId, year]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/teams', auth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM teams ORDER BY name');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/agents', auth, async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT a.*, t.name as team_name, t.leader_name
      FROM agents a
      JOIN teams t ON a.team_id = t.id
      WHERE a.active = true
      ORDER BY t.name, a.full_name
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;