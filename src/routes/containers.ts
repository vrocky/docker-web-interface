import { Router } from 'express';
import { createContainersController } from '../controllers/containers';

export function createContainersRouter(controller: ReturnType<typeof createContainersController>) {
  const router = Router();
  router.get('/', controller.listContainers);
  router.post('/', controller.createContainer);
  router.get('/:id', controller.inspectContainer);
  router.post('/:id/start', controller.startContainer);
  router.post('/:id/stop', controller.stopContainer);
  router.post('/:id/restart', controller.restartContainer);
  router.post('/:id/pause', controller.pauseContainer);
  router.post('/:id/unpause', controller.unpauseContainer);
  router.delete('/:id', controller.removeContainer);
  router.put('/:id', controller.updateContainer);
  router.post('/:id/rename', controller.renameContainer);
  router.post('/:id/attach', controller.attachContainer);
  router.post('/:id/wait', controller.waitContainer);
  router.post('/:id/kill', controller.killContainer);
  router.post('/:id/commit', controller.commitContainer);
  router.get('/:id/export', controller.exportContainer);
  router.get('/:id/stats', controller.getContainerStats);
  router.get('/:id/logs', controller.getContainerLogs);
  router.get('/:id/top', controller.getContainerTop);
  router.post('/:id/resize', controller.resizeContainer);
  router.post('/:id/exec', controller.execInContainer);
  router.get('/:id/changes', controller.getContainerChanges);
  router.post('/:id/archive', controller.getContainerArchive);
  router.put('/:id/archive', controller.putContainerArchive);
  router.post('/prune', controller.pruneContainers);
  return router;
}
