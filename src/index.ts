

import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import containersRouter from './routes/containers';
import imagesRouter from './routes/images';

const app = express();
const HOST = '127.0.0.1';
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mount modular routers (all DI-wired)
app.use('/api/containers', containersRouter);
app.use('/api/images', imagesRouter);

// Error handler for user-friendly errors
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err) {
    res.status(500).json({ error: err.message || 'Internal server error' });
  } else {
    next();
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Docker Admin API listening at http://${HOST}:${PORT}`);
});
