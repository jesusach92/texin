import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import router  from './routes';

const app = express();

dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/", router);

export default app;