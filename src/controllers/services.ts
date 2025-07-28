import { Request, Response } from 'express';
import { IServiceService } from '../interfaces/IServiceService';

export function createServicesController(serviceService: IServiceService) {
  return {
    async listServices(req: Request, res: Response) {
      try {
        const result = await serviceService.listServices(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createService(req: Request, res: Response) {
      try {
        const result = await serviceService.createService(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectService(req: Request, res: Response) {
      try {
        const result = await serviceService.inspectService(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeService(req: Request, res: Response) {
      try {
        await serviceService.removeService(req.params.id);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async updateService(req: Request, res: Response) {
      try {
        const result = await serviceService.updateService(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getServiceLogs(req: Request, res: Response) {
      try {
        const result = await serviceService.getServiceLogs(req.params.id, req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
