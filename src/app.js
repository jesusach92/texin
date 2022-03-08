import express from 'express';
import routes from './routes/routes';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(routes);
export default app;