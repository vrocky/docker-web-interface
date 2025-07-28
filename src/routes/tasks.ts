import { Router } from 'express';
import { createTasksController } from '../controllers/tasks';

export function createTasksRouter(controller: ReturnType<typeof createTasksController>) {
  const router = Router();
  router.get('/', controller.listTasks);
  router.post('/', (req, res) => {
    if (controller.createTask) {
      return controller.createTask(req, res);
    }
    res.status(501).json({ error: 'Not implemented' });
  });
  router.get('/:id', controller.inspectTask);
  router.delete('/:id', controller.removeTask);
  return router;
}
