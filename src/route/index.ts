import { Response, Router } from 'express';

export const router = Router();

router.get('/', (_, res: Response<string>) => {
	res.type('text/plain')
	res.send('TypeScript OpenAPI');
});
