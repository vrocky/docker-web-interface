import { Request, Response } from 'express';
import { ISecretService } from '../interfaces/ISecretService';

export function createSecretsController(secretService: ISecretService) {
  return {
    async listSecrets(req: Request, res: Response) {
      try {
        const result = await secretService.listSecrets(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createSecret(req: Request, res: Response) {
      try {
        const result = await secretService.createSecret(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectSecret(req: Request, res: Response) {
      try {
        const result = await secretService.inspectSecret(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeSecret(req: Request, res: Response) {
      try {
        await secretService.removeSecret(req.params.id);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async updateSecret(req: Request, res: Response) {
      try {
        const result = await secretService.updateSecret(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
