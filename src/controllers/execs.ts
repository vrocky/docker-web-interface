import { Request, Response } from 'express';
import { IExecService } from '../interfaces/IExecService';

export function createExecsController(execService: IExecService) {
  return {
    async listExecs(req: Request, res: Response) {
      try {
        const result = await execService.listExecs();
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createExecGlobal(req: Request, res: Response) {
      try {
        const result = await execService.createExecGlobal(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeExec(req: Request, res: Response) {
      try {
        await execService.removeExec(req.params.id);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createExec(req: Request, res: Response) {
      try {
        const result = await execService.createExec(req.params.containerId, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectExec(req: Request, res: Response) {
      try {
        const result = await execService.inspectExec(req.params.execId);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async startExec(req: Request, res: Response) {
      try {
        const result = await execService.startExec(req.params.execId, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async resizeExec(req: Request, res: Response) {
      try {
        await execService.resizeExec(req.params.execId, req.body);
        res.json({ status: 'resized' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
