const Database = require('better-sqlite3');
const path = require('path');

// Database file stored in backend folder
const dbPath = path.join(__dirname, 'contact.db');
const db = new Database(dbPath);

// Create contact_submissions table - stores name, email, phone, and message together
// Each row = one complete form submission (no separate storage needed)
function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log('Database initialized');
}

function addSubmission({ name, email, phone, message }) {
  const stmt = db.prepare(`
    INSERT INTO contact_submissions (name, email, phone, message)
    VALUES (?, ?, ?, ?)
  `);
  const result = stmt.run(name, email, phone || null, message);
  return result.lastInsertRowid;
}

function getAllSubmissions() {
  const stmt = db.prepare(`
    SELECT id, name, email, phone, message, created_at
    FROM contact_submissions
    ORDER BY created_at DESC
  `);
  return stmt.all();
}

module.exports = {
  db,
  initDatabase,
  addSubmission,
  getAllSubmissions,
};
