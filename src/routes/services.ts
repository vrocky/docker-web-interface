import { Router } from 'express';
import { createServicesController } from '../controllers/services';

export function createServicesRouter(controller: ReturnType<typeof createServicesController>) {
  const router = Router();
  router.get('/', controller.listServices);
  router.post('/', controller.createService);
  router.get('/:id', controller.inspectService);
  router.delete('/:id', controller.removeService);
  router.put('/:id', controller.updateService);
  router.get('/:id/logs', controller.getServiceLogs);
  return router;
}
