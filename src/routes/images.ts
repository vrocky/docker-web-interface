import { Router } from 'express';
import { createImagesController } from '../controllers/images';

export function createImagesRouter(controller: ReturnType<typeof createImagesController>) {
  const router = Router();
  router.get('/', controller.listImages);
  router.delete('/:id', controller.removeImage);
  return router;
}
