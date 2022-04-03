import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as jsYaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

import { router as indexRouter } from './route/index';

const openApiSchema = jsYaml.load(fs.readFileSync(path.resolve(__dirname, '../openapi.yaml'), 'utf8')) as any;
console.log(openApiSchema);

export const app = express();

app.disable('x-powered-by');

app
	.use(express.json())
	.use(express.urlencoded({extended: false}));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openApiSchema));

app
	.use('/', indexRouter);

app
	.use((req, res, next) => {
		res.sendStatus(404);
	})
	.use(((err, req, res, next) => {
		console.error(err);
		res.sendStatus(500);
	}) as express.ErrorRequestHandler);
