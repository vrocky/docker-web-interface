import { Request, Response } from 'express';
import { IPluginService } from '../interfaces/IPluginService';

export function createPluginsController(pluginService: IPluginService) {
  return {
    async listPlugins(req: Request, res: Response) {
      try {
        const result = await pluginService.listPlugins(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createPlugin(req: Request, res: Response) {
      try {
        const result = await pluginService.createPlugin(req.body);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectPlugin(req: Request, res: Response) {
      try {
        const result = await pluginService.inspectPlugin(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async removePlugin(req: Request, res: Response) {
      try {
        await pluginService.removePlugin(req.params.id, req.query);
        res.json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async enablePlugin(req: Request, res: Response) {
      try {
        await pluginService.enablePlugin(req.params.id, req.body);
        res.json({ status: 'enabled' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async disablePlugin(req: Request, res: Response) {
      try {
        await pluginService.disablePlugin(req.params.id, req.body);
        res.json({ status: 'disabled' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pushPlugin(req: Request, res: Response) {
      try {
        await pluginService.pushPlugin(req.params.id, req.body);
        res.json({ status: 'pushed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async configurePlugin(req: Request, res: Response) {
      try {
        await pluginService.configurePlugin(req.params.id, req.body);
        res.json({ status: 'configured' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async pullPlugin(req: Request, res: Response) {
      try {
        await pluginService.pullPlugin(req.params.id, req.body);
        res.json({ status: 'pulled' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async getPluginPrivileges(req: Request, res: Response) {
      try {
        const result = await pluginService.getPluginPrivileges(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
