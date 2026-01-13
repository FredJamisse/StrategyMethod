const db = require("../db/db");

class ActivityRepository {
  create(activity) {
    return new Promise((resolve, reject) => {
      const sql = `
        INSERT INTO activities (id, title, description, type, difficulty, goal)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      db.run(
        sql,
        [
          activity.id,
          activity.title,
          activity.description,
          activity.type,
          activity.difficulty,
          activity.goal
        ],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      db.get(
        `SELECT * FROM activities WHERE id = ?`,
        [id],
        (err, row) => {
          if (err) reject(err);
          else resolve(row);
        }
      );
    });
  }
}

module.exports = ActivityRepository;
