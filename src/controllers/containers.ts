
import { Request, Response } from 'express';
import { IContainerService } from '../interfaces/IContainerService';

export function createContainersController(containerService: IContainerService) {
  return {
    async listContainers(req: Request, res: Response) {
      try {
        const containers = await containerService.listContainers(req.query);
        res.json(containers);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createContainer(req: Request, res: Response) {
      try {
        const result = await containerService.createContainer(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectContainer(req: Request, res: Response) {
      try {
        const result = await containerService.inspectContainer(req.params.id);
        res.json(result);
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
    async pauseContainer(req: Request, res: Response) {
      try {
        await containerService.pauseContainer(req.params.id);
        res.json({ status: 'paused' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async unpauseContainer(req: Request, res: Response) {
      try {
        await containerService.unpauseContainer(req.params.id);
        res.json({ status: 'unpaused' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removeContainer(req: Request, res: Response) {
      try {
        await containerService.removeContainer(req.params.id, req.query);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async updateContainer(req: Request, res: Response) {
      try {
        const result = await containerService.updateContainer(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async renameContainer(req: Request, res: Response) {
      try {
        await containerService.renameContainer(req.params.id, req.body.newName);
        res.json({ status: 'renamed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async attachContainer(req: Request, res: Response) {
      try {
        const result = await containerService.attachContainer(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async waitContainer(req: Request, res: Response) {
      try {
        const result = await containerService.waitContainer(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async killContainer(req: Request, res: Response) {
      try {
        await containerService.killContainer(req.params.id, req.body.signal);
        res.json({ status: 'killed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async commitContainer(req: Request, res: Response) {
      try {
        const result = await containerService.commitContainer(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async exportContainer(req: Request, res: Response) {
      try {
        const result = await containerService.exportContainer(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getContainerStats(req: Request, res: Response) {
      try {
        const result = await containerService.getContainerStats(req.params.id, req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getContainerLogs(req: Request, res: Response) {
      try {
        const options: any = {};
        if (req.query.tail) options.tail = Number(req.query.tail);
        // Add other query params to options if needed
        const logs = await containerService.getContainerLogs(req.params.id, options);
        res.json({ logs });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getContainerTop(req: Request, res: Response) {
      try {
        const result = await containerService.getContainerTop(req.params.id, req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async resizeContainer(req: Request, res: Response) {
      try {
        await containerService.resizeContainer(req.params.id, req.body);
        res.json({ status: 'resized' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async execInContainer(req: Request, res: Response) {
      try {
        const result = await containerService.execInContainer(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getContainerChanges(req: Request, res: Response) {
      try {
        const result = await containerService.getContainerChanges(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getContainerArchive(req: Request, res: Response) {
      try {
        const result = await containerService.getContainerArchive(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async putContainerArchive(req: Request, res: Response) {
      try {
        const result = await containerService.putContainerArchive(req.params.id, req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pruneContainers(req: Request, res: Response) {
      try {
        const result = await containerService.pruneContainers(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}

