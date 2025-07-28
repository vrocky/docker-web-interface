import { Router } from 'express';
import * as imagesController from '../controllers/images';

const router = Router();

router.get('/', imagesController.listImages);
router.delete('/:id', imagesController.removeImage);

export default router;
