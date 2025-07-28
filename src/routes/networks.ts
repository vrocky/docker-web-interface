import { Router } from 'express';
import { createNetworksController } from '../controllers/networks';

export function createNetworksRouter(controller: ReturnType<typeof createNetworksController>) {
  const router = Router();
  router.get('/', controller.listNetworks);
  router.post('/', controller.createNetwork);
  router.get('/:id', controller.inspectNetwork);
  router.delete('/:id', controller.removeNetwork);
  router.post('/:id/connect', controller.connectNetwork);
  router.post('/:id/disconnect', controller.disconnectNetwork);
  router.post('/prune', controller.pruneNetworks);
  return router;
}
