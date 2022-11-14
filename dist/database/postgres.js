import dotenv from "dotenv";
import pg from 'pg';
var Pool = pg.Pool;
dotenv.config();
var connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
export default connection;
