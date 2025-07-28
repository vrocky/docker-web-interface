
import { Request, Response } from 'express';
import { container, TYPES } from '../inversify.config';
import { IImageService } from '../interfaces/IImageService';

const imageService = container.get<IImageService>(TYPES.IImageService);

export async function listImages(req: Request, res: Response) {
  try {
    const images = await imageService.listImages();
    res.json(images);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function removeImage(req: Request, res: Response) {
  try {
    await imageService.removeImage(req.params.id);
    res.json({ status: 'removed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
