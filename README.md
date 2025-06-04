# Neon PostgreSQL Node.js Demo

This project demonstrates how to connect a Node.js application to a Neon PostgreSQL database using the `pg` library.

## Features
- Connects to Neon PostgreSQL using a connection string from `.env`
- Fetches and displays data from the `employee` table

## Setup
1. Clone the repository
2. Run `npm install`
3. Add your Neon PostgreSQL connection string to a `.env` file as `DATABASE_URL`
4. Run the script with `node server.js`

## Files
- `server.js`: Main script to fetch and display employee data
- `.env`: Environment variables (not committed)
