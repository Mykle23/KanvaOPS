import createDebug from 'debug';
import 'dotenv/config';
import { createServer } from 'http';
import { createApp, startApp } from './app.js';

const debug = createDebug('KanvaOps:server');
debug('Starting server');

const port = process.env.PORT ?? 4200;

const app = createApp();
const server = createServer(app);

try {
  startApp(app);
  server.listen(port)
} catch (error) {
  server.emit("Error", error)
}

server.on("error", (error) => {
  debug('Error:', error);
  process.exit(1);
})

server.on('listening', () => {
  debug(`Server express running on port ${port}`);
});
