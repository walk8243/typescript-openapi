import express from 'express';
import { router as swaggerRouter } from './swagger';

import { router as indexRouter } from './route/index';

export const app = express();

app.disable('x-powered-by');

app
	.use(express.json())
	.use(express.urlencoded({extended: false}));

app
	.use(swaggerRouter)
	.use('/', indexRouter);

app
	.use((req, res, next) => {
		res.sendStatus(404);
	})
	.use(((err, req, res, next) => {
		console.error(err);
		res.sendStatus(500);
	}) as express.ErrorRequestHandler);
