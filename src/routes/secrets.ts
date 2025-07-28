import { Router } from 'express';
import { createSecretsController } from '../controllers/secrets';

export function createSecretsRouter(controller: ReturnType<typeof createSecretsController>) {
  const router = Router();
  router.get('/', controller.listSecrets);
  router.post('/', controller.createSecret);
  router.get('/:id', controller.inspectSecret);
  router.delete('/:id', controller.removeSecret);
  router.put('/:id', controller.updateSecret);
  return router;
}
