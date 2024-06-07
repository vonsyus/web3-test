import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import tokenApi from './api/token';
import userApi from './api/user';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/health', (req: Request, res: Response) => res.send('ok'));

app.use('/token', tokenApi);
app.use('/user', userApi);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
