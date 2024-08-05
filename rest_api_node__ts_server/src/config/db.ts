import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('dbwxlibrkaxkp9', 'unm3zcftonps6', 'jl2C@e`5h22%', {
  host: '34.174.182.48',
  dialect: 'mysql'
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}