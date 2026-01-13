-- Tabela de atividades
CREATE TABLE IF NOT EXISTS activities (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT,
    difficulty TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de configurações da atividade
CREATE TABLE IF NOT EXISTS activity_config (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    activity_id TEXT,
    key TEXT,
    value TEXT,
    FOREIGN KEY(activity_id) REFERENCES activities(id)
);

-- Tabela de analytics
CREATE TABLE IF NOT EXISTS analytics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    activity_id TEXT,
    student_id TEXT,
    attempts INTEGER,
    runs INTEGER,
    syntax_errors INTEGER,
    time_spent INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
