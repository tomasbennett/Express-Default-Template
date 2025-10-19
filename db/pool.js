require('dotenv').config();
const { Pool } = require("pg");


module.exports = new Pool({
    user: process.env.AIVEN_DATABASE_USER,
    host: process.env.AIVEN_DATABASE_HOST,
    database: process.env.AIVEN_DATABASE_DATABASE_NAME,
    password: process.env.AIVEN_DATABASE_PASSWORD,
    port: Number(process.env.AIVEN_DATABASE_PORT),
    ssl: { rejectUnauthorized: false }
});