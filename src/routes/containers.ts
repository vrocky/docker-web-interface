import { Router } from 'express';
import * as containersController from '../controllers/containers';

const router = Router();

router.get('/', containersController.listContainers);
router.post('/:id/start', containersController.startContainer);
router.post('/:id/stop', containersController.stopContainer);
router.post('/:id/restart', containersController.restartContainer);
router.delete('/:id', containersController.removeContainer);
router.get('/:id/logs', containersController.getContainerLogs);

export default router;
