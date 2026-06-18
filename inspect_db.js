// One-time database inspection script.
// Run from the project root with: node inspect_db.js
// Delete it after — it's just for reading the schema.

const pool = require('./backend/db');

async function inspect() {
  try {
    const tables = ['kpi_scores', 'agents', 'teams'];

    for (const table of tables) {
      console.log('\n========================================');
      console.log('TABLE: ' + table);
      console.log('========================================');
      const cols = await pool.query(
        `SELECT column_name, data_type
         FROM information_schema.columns
         WHERE table_name = $1
         ORDER BY ordinal_position`,
        [table]
      );
      if (cols.rows.length === 0) {
        console.log('  (table not found or no columns)');
      } else {
        cols.rows.forEach(c => {
          console.log('  ' + c.column_name + '  ->  ' + c.data_type);
        });
      }
    }

    // Show a few real agent names so we can match Excel names against them
    console.log('\n========================================');
    console.log('SAMPLE AGENTS (first 25)');
    console.log('========================================');
    const agents = await pool.query(
      'SELECT id, full_name, team_id FROM agents ORDER BY full_name LIMIT 25'
    );
    agents.rows.forEach(a => {
      console.log('  id=' + a.id + '  team_id=' + a.team_id + '  "' + a.full_name + '"');
    });

    // Show what KPI data already exists
    console.log('\n========================================');
    console.log('EXISTING KPI_SCORES (month/year counts)');
    console.log('========================================');
    const existing = await pool.query(
      'SELECT month, year, COUNT(*) as rows FROM kpi_scores GROUP BY month, year ORDER BY year, month'
    );
    if (existing.rows.length === 0) {
      console.log('  (no rows yet)');
    } else {
      existing.rows.forEach(r => {
        console.log('  ' + r.month + ' ' + r.year + ': ' + r.rows + ' rows');
      });
    }

    console.log('\nDone.');
  } catch (err) {
    console.error('Inspection error:', err.message);
  } finally {
    await pool.end();
  }
}

inspect();
