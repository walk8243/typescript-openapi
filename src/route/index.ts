import { Router } from 'express';

export const router = Router();

router.get('/', (req, res, next) => {
	res.type('text/plain')
	res.send('TypeScript OpenAPI');
});
