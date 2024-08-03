import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite'
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}





// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: '34.174.182.48',
//   user: 'unm3zcftonps6',
//   password: '$1_d+eoq8s52',
//   database: 'dbwxlibrkaxkp9'
// });

// export default pool;