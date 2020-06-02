const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: true
});

pool.connect();
pool.on('connect', () => {
	console.log('connected to the feel db');
});

module.exports = pool;
