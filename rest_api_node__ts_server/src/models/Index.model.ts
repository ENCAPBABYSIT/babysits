import sequelize from '../config/db';
import User from './User.model';

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: false }); // Usa { force: true } en desarrollo para borrar y crear tablas
    console.log('Tablas sincronizadas');
  } catch (error) {
    console.error('Error sincronizando tablas:', error);
  }
};

export { User, syncModels };
