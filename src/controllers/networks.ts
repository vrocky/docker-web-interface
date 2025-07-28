import { Request, Response } from 'express';
import { INetworkService } from '../interfaces/INetworkService';

export function createNetworksController(networkService: INetworkService) {
  return {
    async listNetworks(req: Request, res: Response) {
      try {
        const result = await networkService.listNetworks(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createNetwork(req: Request, res: Response) {
      try {
        const result = await networkService.createNetwork(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectNetwork(req: Request, res: Response) {
      try {
        const result = await networkService.inspectNetwork(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeNetwork(req: Request, res: Response) {
      try {
        await networkService.removeNetwork(req.params.id);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async connectNetwork(req: Request, res: Response) {
      try {
        await networkService.connectNetwork(req.params.id, req.body);
        res.json({ status: 'connected' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async disconnectNetwork(req: Request, res: Response) {
      try {
        await networkService.disconnectNetwork(req.params.id, req.body);
        res.json({ status: 'disconnected' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pruneNetworks(req: Request, res: Response) {
      try {
        const result = await networkService.pruneNetworks(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
