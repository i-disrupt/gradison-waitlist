import { Database as sqlite3 } from "sqlite3";

async function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3("./mwl.db", (error) => {
      if (error) {
        reject(error);
      } else {
        db.exec(
          `
          CREATE TABLE IF NOT EXISTS members (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            memberCount INTEGER NOT NULL
          );
        `,
          (error) => {
            if (error) {
              reject(error);
            } else {
              resolve(db);
            }
          }
        );
      }
    });
  });
}

export default async function handler(req, res) {
  /**
   * @type boolean
   */
  const added = Boolean(req.query.added)

  try {
    
    const db = await initializeDatabase();

    let members = await new Promise((resolve, reject) => {
      db.get("SELECT * FROM members", (error, row) => {
        if (error) {
          reject(error);
        } else {
          resolve(row);
        }
      });
    });

    if (added) {
      const increment = 1;

        await new Promise((resolve, reject) => {
          db.run(
            "UPDATE members SET memberCount = memberCount + ?",
            increment,
            (error) => {
              if (error) {
                reject(error);
              } else {
                resolve();
              }
            }
          );
        });

        members = await new Promise((resolve, reject) => {
          db.get("SELECT * FROM members", (error, row) => {
            if (error) {
              reject(error);
            } else {
              resolve(row);
            }
          });
        });

        res
          .status(200)
          .json({ success: true, message: `${members.memberCount}` });

        return;
    }

    if (!members) {
      await new Promise((resolve, reject) => {
        db.run("INSERT INTO members (memberCount) VALUES (0)", (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });

      members = await new Promise((resolve, reject) => {
        db.get("SELECT * FROM members", (error, row) => {
          if (error) {
            reject(error);
          } else {
            resolve(row);
          }
        });
      });
    }

    if (Math.random() < 0.2) {
      const increment =
        Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);

      await new Promise((resolve, reject) => {
        db.run(
          "UPDATE members SET memberCount = memberCount + ?",
          increment,
          (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          }
        );
      });

      members = await new Promise((resolve, reject) => {
        db.get("SELECT * FROM members", (error, row) => {
          if (error) {
            reject(error);
          } else {
            resolve(row);
          }
        });
      });
    }

    res.status(200).json({ success: true, message: `${members.memberCount}` });
  } catch (error) {
    console.error(error);
    res.status(200).json({ success: false, message: error });
  }
}
