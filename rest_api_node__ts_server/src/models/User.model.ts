import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db';

// Define la interfaz para tu modelo
interface UserAttributes {
  id?: number;
  name: string;
  lastname:string;
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
  public id!: number;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public confirmed!: boolean;
  public age!: number;
  public usertype!: number;
  public helpswith!: string;
  public pay!:string;
  public about!: string;
  public children!: number;
  public password!: string;
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
