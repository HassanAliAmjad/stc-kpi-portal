const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/authMiddleware');
const dotenv = require('dotenv');
dotenv.config();

router.post('/analyze', auth, async (req, res) => {
  const { question, month, year } = req.body;
  try {
    const kpiData = await pool.query(`
      SELECT a.full_name, t.leader_name, t.name as team_name,
        ks.month, ks.year, ks.final_score, ks.quality_score,
        ks.quiz_score, ks.aht_score, ks.irt_score,
        ks.referral_score, ks.tags_score, ks.absenteeism_days
      FROM kpi_scores ks
      JOIN agents a ON ks.agent_id = a.id
      JOIN teams t ON a.team_id = t.id
      WHERE ks.year = $1
      ORDER BY ks.month, ks.final_score DESC
    `, [year || 2026]);

    const dataContext = JSON.stringify(kpiData.rows);

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: `You are an AI KPI analyst for STC eChannels CCR team in Kuwait.
          Give specific professional answers with agent names and exact percentages.
          KPI weights: AHT 25%, Quality 20%, IRT 20%, Quiz 15%, Referral 10%, Tags 5%.
          Target score is 85%. Data: ${dataContext}`,
        messages: [{ role: 'user', content: question }]
      })
    });

    const aiResult = await response.json();
    const answer = aiResult.content[0].text;

    await pool.query(
      'INSERT INTO ai_insights (month, year, insight_type, content) VALUES ($1, $2, $3, $4)',
      [month || 'All', year || 2026, 'chat', answer]
    );

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'AI service error' });
  }
});

router.get('/insights', auth, async (req, res) => {
  const { year } = req.query;
  try {
    const result = await pool.query(
      'SELECT * FROM ai_insights WHERE year = $1 ORDER BY generated_at DESC LIMIT 20',
      [year || 2026]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;