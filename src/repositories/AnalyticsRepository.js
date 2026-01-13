const db = require("../db/db");

class AnalyticsRepository {
  save(data) {
    const sql = `
      INSERT INTO analytics (activity_id, student_id, attempts, runs, syntax_errors, time_spent)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    return new Promise((resolve, reject) => {
      db.run(sql, [
        data.activity_id,
        data.student_id,
        data.attempts,
        data.runs,
        data.syntax_errors,
        data.time_spent
      ], function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      });
    });
  }

  findByActivity(activityId) {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM analytics WHERE activity_id = ?",
        [activityId],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        }
      );
    });
  }
}

module.exports = AnalyticsRepository;
