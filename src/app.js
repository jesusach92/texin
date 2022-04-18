import express from 'express';
import routes from './routes/routes';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

const app = express();

dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(routes);
export default app;