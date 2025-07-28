

import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { createContainersRouter } from './routes/containers';
import { createImagesRouter } from './routes/images';
import { createContainersController } from './controllers/containers';
import { createImagesController } from './controllers/images';
import { createContainer, TYPES } from './inversify.config';

const app = express();
const HOST = '127.0.0.1';
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Setup DI container and wire controllers/routers
const container = createContainer();
const containersController = createContainersController(container.get(TYPES.IContainerService));
const imagesController = createImagesController(container.get(TYPES.IImageService));
app.use('/api/containers', createContainersRouter(containersController));
app.use('/api/images', createImagesRouter(imagesController));

// Error handler for user-friendly errors
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err) {
    res.status(500).json({ error: err.message || 'Internal server error' });
  } else {
    next();
  }
});


if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`Docker Admin API listening at http://${HOST}:${PORT}`);
  });
}

export default app;
