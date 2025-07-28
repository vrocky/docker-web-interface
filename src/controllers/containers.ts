
import { Request, Response } from 'express';
import { container, TYPES } from '../inversify.config';
import { IContainerService } from '../interfaces/IContainerService';

const containerService = container.get<IContainerService>(TYPES.IContainerService);

export async function listContainers(req: Request, res: Response) {
  try {
    const containers = await containerService.listContainers();
    res.json(containers);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function startContainer(req: Request, res: Response) {
  try {
    await containerService.startContainer(req.params.id);
    res.json({ status: 'started' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function stopContainer(req: Request, res: Response) {
  try {
    await containerService.stopContainer(req.params.id);
    res.json({ status: 'stopped' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function restartContainer(req: Request, res: Response) {
  try {
    await containerService.restartContainer(req.params.id);
    res.json({ status: 'restarted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function removeContainer(req: Request, res: Response) {
  try {
    await containerService.removeContainer(req.params.id);
    res.json({ status: 'removed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getContainerLogs(req: Request, res: Response) {
  try {
    const tail = parseInt(req.query.tail as string) || 100;
    const logs = await containerService.getContainerLogs(req.params.id, tail);
    res.type('text/plain').send(logs);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
