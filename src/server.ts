import { app } from './app';
import process from 'process';

const port = 3000;

const server = app.listen(port, () => {
	console.log(`listen to http://localhost:${String(port)}`);
});

process
	.on('SIGTERM', () => {
		console.log('SIGTERM Graceful shutdown...');
		server.close();
	})
	.on('SIGINT', () => {
		process.emit('SIGTERM');
	});
