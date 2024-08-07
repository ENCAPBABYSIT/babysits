import express from "express";
import authRoutes from './routes/AuthRoutes';
import { syncModels } from "./models/Index.model";

syncModels();

const server  = express();

//leer datos de formularios
server.use(express.json());

server.use('/api/auth', authRoutes)

export default server