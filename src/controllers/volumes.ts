import { Request, Response } from 'express';
import { IVolumeService } from '../interfaces/IVolumeService';

export function createVolumesController(volumeService: IVolumeService) {
  return {
    async listVolumes(req: Request, res: Response) {
      try {
        const result = await volumeService.listVolumes(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createVolume(req: Request, res: Response) {
      try {
        const result = await volumeService.createVolume(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectVolume(req: Request, res: Response) {
      try {
        const result = await volumeService.inspectVolume(req.params.name);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeVolume(req: Request, res: Response) {
      try {
        await volumeService.removeVolume(req.params.name, req.query);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pruneVolumes(req: Request, res: Response) {
      try {
        const result = await volumeService.pruneVolumes(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
