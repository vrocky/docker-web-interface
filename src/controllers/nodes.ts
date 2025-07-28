import { Request, Response } from 'express';
import { INodeService } from '../interfaces/INodeService';

export function createNodesController(nodeService: INodeService) {
  return {
    async createNode(req: Request, res: Response) {
      try {
        const result = await nodeService.createNode(req.body);
        res.status(200).json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async listNodes(req: Request, res: Response) {
      try {
        const result = await nodeService.listNodes(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectNode(req: Request, res: Response) {
      try {
        const result = await nodeService.inspectNode(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeNode(req: Request, res: Response) {
      try {
        await nodeService.removeNode(req.params.id);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async updateNode(req: Request, res: Response) {
      try {
        const result = await nodeService.updateNode(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
