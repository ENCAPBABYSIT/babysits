import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '34.174.182.48',
  user: 'unm3zcftonps6',
  password: '$1_d+eoq8s52',
  database: 'dbwxlibrkaxkp9'
});

export default pool;