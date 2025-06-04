// fetchUsers.js
import { config } from 'dotenv';
import pkg from 'pg';

config();                       // load DATABASE_URL from .env
const { Pool } = pkg;

// Configure the connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }   // needed for Neon
});

async function getAllUsers() {
  try {
    // "User" is a reserved word in Postgres, so keep it quoted
    const { rows } = await pool.query('SELECT * FROM "employee";');
    console.log('Users:', rows);
  } catch (err) {
    console.error('Error fetching users:', err);
  } finally {
    await pool.end();           // clean shutdown
  }
}

getAllUsers();
