// src/db/db.js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

const dbPath = path.join(__dirname, "../../data/database.sqlite");

// garantir que a pasta data existe
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Erro ao abrir BD:", err);
  } else {
    console.log("📦 Base de dados SQLite ligada");
  }
});

// ⬇️ CRIAÇÃO DAS TABELAS (ISTO É O QUE FALTAVA)
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS activities (
      id TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      type TEXT,
      difficulty TEXT,
      goal INTEGER
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS analytics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      activity_id TEXT,
      student_id TEXT,
      attempts INTEGER,
      runs INTEGER,
      syntax_errors INTEGER,
      time_spent INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
