import express, {json} from "express";
import cors from "cors";
import dotenv from 'dotenv';
import comanders from './comanders.js'

dotenv.config();

const server = express();

server.use(json())
server.use(cors())

server.use(comanders)

server.listen(process.env.PORT, ()=>console.log(process.env.PORT))