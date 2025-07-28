import { Router } from 'express';
import { createContainersController } from '../controllers/containers';

export function createContainersRouter(controller: ReturnType<typeof createContainersController>) {
  const router = Router();
  router.get('/', controller.listContainers);
  router.post('/:id/start', controller.startContainer);
  router.post('/:id/stop', controller.stopContainer);
  router.post('/:id/restart', controller.restartContainer);
  router.delete('/:id', controller.removeContainer);
  router.get('/:id/logs', controller.getContainerLogs);
  return router;
}
