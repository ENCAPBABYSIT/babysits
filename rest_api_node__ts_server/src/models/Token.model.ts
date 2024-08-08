import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';
import User from './User.model';

// Define la interfaz para tu modelo
interface TokenAttributes {
  id?: number;
  token: string;
  userId: number;
}

class Token extends Model<TokenAttributes> implements TokenAttributes {
    declare id: number;
    declare token: string;
    declare userId: number;
  }

Token.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      token: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User,
            key: 'id',
        }
      }
    },
    {
      sequelize,
      tableName: 'tokens',
    }
  );
export default Token;