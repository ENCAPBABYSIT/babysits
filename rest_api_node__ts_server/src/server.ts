import express from "express";
import authRoutes from './routes/AuthRoutes';
import cors from 'cors';
import { corsConfig } from "./config/cors";
import { syncModels } from "./models/Index.model";

syncModels();

const server  = express();

server.use(cors(corsConfig));

//leer datos de formularios
server.use(express.json());

server.use('/api/auth', authRoutes)

export default server