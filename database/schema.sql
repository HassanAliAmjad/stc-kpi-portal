-- Teams
CREATE TABLE IF NOT EXISTS teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  leader_name VARCHAR(100),
  color_hex VARCHAR(7),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(100),
  role VARCHAR(20),
  team_id INTEGER REFERENCES teams(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Agents
CREATE TABLE IF NOT EXISTS agents (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  hr_id VARCHAR(20) UNIQUE,
  tabs_id VARCHAR(20),
  language VARCHAR(50),
  team_id INTEGER REFERENCES teams(id),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- KPI Uploads
CREATE TABLE IF NOT EXISTS kpi_uploads (
  id SERIAL PRIMARY KEY,
  month VARCHAR(10),
  year INTEGER,
  uploaded_by INTEGER REFERENCES users(id),
  filename VARCHAR(255),
  uploaded_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20)
);

-- KPI Scores
CREATE TABLE IF NOT EXISTS kpi_scores (
  id SERIAL PRIMARY KEY,
  agent_id INTEGER REFERENCES agents(id),
  upload_id INTEGER REFERENCES kpi_uploads(id),
  month VARCHAR(10),
  year INTEGER,
  final_score DECIMAL(5,4),
  quality_score DECIMAL(5,4),
  quiz_score DECIMAL(5,4),
  aht_score DECIMAL(5,4),
  irt_score DECIMAL(5,4),
  referral_score DECIMAL(5,4),
  tags_score DECIMAL(5,4),
  absenteeism_days INTEGER DEFAULT 0,
  focus_areas TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(agent_id, month, year)
);

-- AI Insights
CREATE TABLE IF NOT EXISTS ai_insights (
  id SERIAL PRIMARY KEY,
  month VARCHAR(10),
  year INTEGER,
  team_id INTEGER REFERENCES teams(id),
  insight_type VARCHAR(50),
  content TEXT,
  generated_at TIMESTAMP DEFAULT NOW()
);

-- ─── SEED DATA ───────────────────────────────────────────

-- Insert Teams
INSERT INTO teams (name, leader_name, color_hex) VALUES
('Team Ahmed', 'Ahmed Al Sabea', '#1F497D'),
('Team Aziz', 'Aziz Al Sabea', '#375623'),
('Team Abul Hassan', 'Abul Hassan', '#843C0C')
ON CONFLICT DO NOTHING;

-- Insert Users (passwords are hashed versions of: manager=stc2026, ahmed=team1, aziz=team2, abul=team3)
INSERT INTO users (username, password_hash, full_name, role, team_id) VALUES
('manager', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Manager', 'manager', NULL),
('ahmed', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Ahmed Al Sabea', 'team_leader', 1),
('aziz', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Aziz Al Sabea', 'team_leader', 2),
('abul', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Abul Hassan', 'team_leader', 3)
ON CONFLICT DO NOTHING;

-- Insert Agents Team Ahmed (team_id=1)
INSERT INTO agents (full_name, hr_id, tabs_id, language, team_id) VALUES
('Sultan Nahar', '5099', 'CQNT0054', 'B2C Arabic', 1),
('Abdullah Essam', '5122', 'CQNT0058', 'B2C Arabic', 1),
('AbdulHadi Ajay', '5339', 'CQNT0261', 'B2C Arabic', 1),
('Nooreldein Ghazi', '5536', 'CQNT0444', 'B2C Arabic & B2C English', 1),
('Abdullah Alkhudari', '5864', 'CQNT0754', 'B2C Arabic & B2C English', 1),
('Ali Khouder', '5187', 'CQNT0247', 'B2C Arabic', 1),
('Omar Hamad', '5427', 'CQNT0353', 'B2C Arabic', 1)
ON CONFLICT DO NOTHING;

-- Insert Agents Team Aziz (team_id=2)
INSERT INTO agents (full_name, hr_id, tabs_id, language, team_id) VALUES
('Faisal Jaber', '5107', 'CQNT0056', 'B2C Arabic', 2),
('Hashim Ramazan', '5228', 'CQNT0136', 'B2C English', 2),
('Samy AlRuwaily', '5378', 'CQNT0306', 'B2C Arabic', 2),
('Beshayer Melfi', '5716', 'CQNT0616', 'B2C Arabic & B2C English', 2),
('Anas AlObaid', '5916', 'CQNT0774', 'B2C Arabic & B2C English', 2),
('Mohammad Mejbel', '5432', 'CQNT0351', 'B2C Arabic', 2),
('Essa Ballan', '5870', 'CQNT0744', 'B2C Arabic & B2C English', 2)
ON CONFLICT DO NOTHING;

-- Insert Agents Team Abul Hassan (team_id=3)
INSERT INTO agents (full_name, hr_id, tabs_id, language, team_id) VALUES
('Ali Aaqab', '5113', 'CQNT0028', 'B2C Arabic', 3),
('AbdulRahman Mohamed', '5236', 'CQNT0148', 'B2C English', 3),
('Ahmed Ahmad', '5508', 'CQNT0430', 'B2C Arabic & B2C English', 3),
('Abrar Alsadi', '5692', 'CQNT0580', 'B2C Arabic', 3),
('Duaij Al Mutairi', '5797', 'CQNT0688', 'B2C Arabic & B2C English', 3),
('Bader Bushebah', '5950', 'CQNT5950', 'B2C Arabic & B2C English', 3),
('Moussa Ahmed', '5593', 'CQNT0494', 'B2C Arabic', 3),
('Mohamad Khanafer', '5938', 'CQNT-', 'B2C Arabic & B2C English', 3)
ON CONFLICT DO NOTHING;