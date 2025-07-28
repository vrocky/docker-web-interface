import { Router } from 'express';
import { createNodesController } from '../controllers/nodes';

export function createNodesRouter(controller: ReturnType<typeof createNodesController>) {
  const router = Router();
  router.get('/', controller.listNodes);
  router.post('/', (req, res) => {
    if (controller.createNode) {
      return controller.createNode(req, res);
    }
    res.status(501).json({ error: 'Not implemented' });
  });
  router.get('/:id', controller.inspectNode);
  router.delete('/:id', controller.removeNode);
  router.put('/:id', controller.updateNode);
  return router;
}
