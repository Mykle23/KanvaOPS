import createDebug from 'debug';
import 'dotenv/config';
import { createServer } from 'http';
import { createApp, startApp } from './app.js';
import { dbConnect } from './tools/db.conect.js';

const debug = createDebug('KanvaOps:server');
debug('Starting server');

const port = process.env.PORT ?? 7373;

const app = createApp();
const server = createServer(app);

dbConnect().then(() => {
  startApp(app);
  server.listen(port);
}).catch((error: Error) => {
  debug('Database connection error:', error);
  process.exit(1);
});

server.on("error", (error) => {
  debug('Server error:', error);
  process.exit(1);
});

server.on('listening', () => {
  debug(`Server express running on port ${port}`);
});


