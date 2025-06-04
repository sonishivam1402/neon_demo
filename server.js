// server.js
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // for Neon
  },
});

app.use(express.json());

// Sample API route
app.get('/employees', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "employee"'); 
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving users');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}. Click http://localhost:${port}/employees to see the data.`);
});
