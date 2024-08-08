import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

// Define la interfaz para tu modelo
interface UserAttributes {
  id?: number;
  name: string;
  lastname:string;
  user:string;
  email:string;
  confirmed:boolean;
  age:number;
  usertype:number;
  helpswith:string;
  about:string;
  pay:string;
  children: number;
  password: string;
}

// Define el modelo User
class User extends Model<UserAttributes> implements UserAttributes {
  declare id: number;
  declare name: string;
  declare lastname: string;
  declare user: string;
  declare email: string;
  declare confirmed: boolean;
  declare age: number;
  declare usertype: number;
  declare helpswith: string;
  declare pay:string;
  declare about: string;
  declare children: number;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usertype: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user: {
      type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    confirmed:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    age:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    helpswith:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    pay:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    about:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    children:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    password:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
