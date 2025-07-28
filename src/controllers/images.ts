
import { Request, Response } from 'express';
import { IImageService } from '../interfaces/IImageService';

export function createImagesController(imageService: IImageService) {
  return {
    async listImages(req: Request, res: Response) {
      try {
        const images = await imageService.listImages(req.query);
        res.json(images);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createImage(req: Request, res: Response) {
      try {
        const result = await imageService.createImage(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectImage(req: Request, res: Response) {
      try {
        const result = await imageService.inspectImage(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeImage(req: Request, res: Response) {
      try {
        const result = await imageService.removeImage(req.params.id, req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async tagImage(req: Request, res: Response) {
      try {
        await imageService.tagImage(req.params.id, req.body.repo, req.body.tag);
        res.json({ status: 'tagged' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pushImage(req: Request, res: Response) {
      try {
        const result = await imageService.pushImage(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pullImage(req: Request, res: Response) {
      try {
        const result = await imageService.pullImage(req.body.repoTag, req.body.options);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getImageHistory(req: Request, res: Response) {
      try {
        const result = await imageService.getImageHistory(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async searchImages(req: Request, res: Response) {
      try {
        const result = await imageService.searchImages(req.query.term as string, req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pruneImages(req: Request, res: Response) {
      try {
        const result = await imageService.pruneImages(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getImage(req: Request, res: Response) {
      try {
        const result = await imageService.getImage(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async loadImage(req: Request, res: Response) {
      try {
        const result = await imageService.loadImage(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async importImage(req: Request, res: Response) {
      try {
        const result = await imageService.importImage(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
