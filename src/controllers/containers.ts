
import { Request, Response } from 'express';
import { IContainerService } from '../interfaces/IContainerService';

export function createContainersController(containerService: IContainerService) {
  return {
    async listContainers(req: Request, res: Response) {
      try {
        const containers = await containerService.listContainers();
        res.json(containers);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },

    async startContainer(req: Request, res: Response) {
      try {
        await containerService.startContainer(req.params.id);
        res.json({ status: 'started' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },

    async stopContainer(req: Request, res: Response) {
      try {
        await containerService.stopContainer(req.params.id);
        res.json({ status: 'stopped' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },

    async restartContainer(req: Request, res: Response) {
      try {
        await containerService.restartContainer(req.params.id);
        res.json({ status: 'restarted' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },

    async removeContainer(req: Request, res: Response) {
      try {
        await containerService.removeContainer(req.params.id);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getContainerLogs(req: Request, res: Response) {
      try {
        const tail = req.query.tail ? Number(req.query.tail) : undefined;
        const logs = await containerService.getContainerLogs(req.params.id, tail);
        res.json({ logs });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}

