
import { Request, Response } from 'express';
import { IImageService } from '../interfaces/IImageService';

export function createImagesController(imageService: IImageService) {
  return {
    async listImages(req: Request, res: Response) {
      try {
        const images = await imageService.listImages();
        res.json(images);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },

    async removeImage(req: Request, res: Response) {
      try {
        await imageService.removeImage(req.params.id);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    // Add other controller methods here as needed
  };
}
