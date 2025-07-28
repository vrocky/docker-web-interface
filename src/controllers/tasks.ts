import { Request, Response } from 'express';
import { ITaskService } from '../interfaces/ITaskService';

export function createTasksController(taskService: ITaskService) {
  return {
    async removeTask(req: Request, res: Response) {
      try {
        await taskService.removeTask(req.params.id);
        res.status(200).json({ status: 'removed' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async createTask(req: Request, res: Response) {
      try {
        const result = await taskService.createTask(req.body);
        res.status(200).json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async listTasks(req: Request, res: Response) {
      try {
        const result = await taskService.listTasks(req.query);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
    async inspectTask(req: Request, res: Response) {
      try {
        const result = await taskService.inspectTask(req.params.id);
        res.json(result);
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    },
  };
}
