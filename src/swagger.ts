import { Request, Router } from 'express';
import * as swaggerUI from 'swagger-ui-express';
import * as jsYaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const openApiSchema = jsYaml.load(fs.readFileSync(path.resolve(__dirname, '../openapi.yaml'), 'utf8'));

export const router = Router();

if(checkSwaggerDoc(openApiSchema)) {
	router
		.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(openApiSchema))
		.get('/api-docs', (req: Request<{}, any, {}, SwaggerDocsRequest>, res) => {
			switch(req.query.type) {
				case 'yaml':
					res.contentType('yaml');
					res.send(jsYaml.dump(openApiSchema));
					break;
				case 'json': default:
					res.contentType('json');
					res.json(openApiSchema);
			}
		});
}

function checkSwaggerDoc(schema: any): schema is swaggerUI.JsonObject {
	return schema instanceof Object
		&& Object.keys(schema).every((key) => typeof key === 'string');
}

interface SwaggerDocsRequest {
	type: 'json' | 'yaml' | undefined;
}
