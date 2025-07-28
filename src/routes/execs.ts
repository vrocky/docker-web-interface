import { Router } from 'express';
import { createExecsController } from '../controllers/execs';

export function createExecsRouter(controller: ReturnType<typeof createExecsController>) {
  const router = Router();
  router.get('/', (req, res) => {
    if (controller.listExecs) {
      return controller.listExecs(req, res);
    }
    res.status(501).json({ error: 'Not implemented' });
  });
  router.post('/', (req, res) => {
    if (controller.createExecGlobal) {
      return controller.createExecGlobal(req, res);
    }
    res.status(501).json({ error: 'Not implemented' });
  });
  router.delete('/:id', (req, res) => {
    if (controller.removeExec) {
      return controller.removeExec(req, res);
    }
    res.status(501).json({ error: 'Not implemented' });
  });
  router.post('/:containerId', controller.createExec);
  router.get('/:execId', controller.inspectExec);
  router.post('/:execId/start', controller.startExec);
  router.post('/:execId/resize', controller.resizeExec);
  return router;
}
