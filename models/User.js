// models/User.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite3');

// Crear la tabla si no existe
db.serialize(() => { 
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      username TEXT,
      password TEXT,
      email TEXT,
      imagen TEXT,
      rol TEXT,
      updatedAt DATETIME
    )
  `);
});

module.exports = db;
