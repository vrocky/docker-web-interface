import { Router } from 'express';
import { createConfigsController } from '../controllers/configs';

export function createConfigsRouter(controller: ReturnType<typeof createConfigsController>) {
  const router = Router();
  router.get('/', controller.listConfigs);
  router.post('/', controller.createConfig);
  router.get('/:id', controller.inspectConfig);
  router.delete('/:id', controller.removeConfig);
  router.put('/:id', controller.updateConfig);
  return router;
}
