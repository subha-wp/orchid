import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';

const DB_PATH = path.join(process.cwd(), 'data', 'orchid.db');

// Ensure data directory exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    initializeDb(db);
  }
  return db;
}

function initializeDb(database: Database.Database) {
  // Create users table
  database.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create sessions table
  database.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      expires_at DATETIME NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Create index on sessions
  database.exec(`
    CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id)
  `);

  // Check if admin user exists, if not create it
  const adminEmail = 'orchid.dakshinbarasat@gmail.com';
  const adminExists = database.prepare('SELECT id FROM users WHERE email = ?').get(adminEmail);
  
  if (!adminExists) {
    // Default password is 'admin123', change it after first login
    const defaultPassword = 'admin123';
    const passwordHash = bcrypt.hashSync(defaultPassword, 10);
    
    database.prepare(`
      INSERT INTO users (email, password_hash)
      VALUES (?, ?)
    `).run(adminEmail, passwordHash);
    
    console.log('Admin user created with email:', adminEmail);
    console.log('Default password: admin123 - Please change it after first login!');
  }
}

export function closeDb() {
  if (db) {
    db.close();
    db = null;
  }
}

