import { Router } from 'express';
import { createPluginsController } from '../controllers/plugins';

export function createPluginsRouter(controller: ReturnType<typeof createPluginsController>) {
  const router = Router();
  router.get('/', controller.listPlugins);
  router.post('/', controller.createPlugin);
  router.get('/:id', controller.inspectPlugin);
  router.delete('/:id', controller.removePlugin);
  router.post('/:id/enable', controller.enablePlugin);
  router.post('/:id/disable', controller.disablePlugin);
  router.post('/:id/push', controller.pushPlugin);
  router.post('/:id/configure', controller.configurePlugin);
  router.post('/:id/pull', controller.pullPlugin);
  router.get('/:id/privileges', controller.getPluginPrivileges);
  return router;
}
