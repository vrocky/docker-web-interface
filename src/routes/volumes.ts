import { Router } from 'express';
import { createVolumesController } from '../controllers/volumes';

export function createVolumesRouter(controller: ReturnType<typeof createVolumesController>) {
  const router = Router();
  router.get('/', controller.listVolumes);
  router.post('/', controller.createVolume);
  router.get('/:name', controller.inspectVolume);
  router.delete('/:name', controller.removeVolume);
  router.post('/prune', controller.pruneVolumes);
  return router;
}
