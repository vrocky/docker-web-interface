import { Request, Response } from 'express';
import { IConfigService } from '../interfaces/IConfigService';

export function createConfigsController(configService: IConfigService) {
  return {
    async listConfigs(req: Request, res: Response) {
      try {
        const result = await configService.listConfigs(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createConfig(req: Request, res: Response) {
      try {
        const result = await configService.createConfig(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectConfig(req: Request, res: Response) {
      try {
        const result = await configService.inspectConfig(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeConfig(req: Request, res: Response) {
      try {
        await configService.removeConfig(req.params.id, req.query);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async updateConfig(req: Request, res: Response) {
      try {
        const result = await configService.updateConfig(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
