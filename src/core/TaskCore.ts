import { ITaskCore } from '../interfaces/core/ITaskCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class TaskCore implements ITaskCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  async listTasks(options?: object) {
    return await this.context.docker.listTasks(options || {});
  }
  async inspectTask(id: string) {
    const task = this.context.docker.getTask(id);
    if (!task) throw new Error('Task not found for id: ' + id);
    return await task.inspect();
  }
  async createTask(options: object) {
    // Protocol: create a task (mock implementation, as Dockerode does not support task creation directly)
    // In real Docker Swarm, tasks are created by services. This is a mock for protocol compliance.
    return { id: 'mock-task-id', ...options };
  }
  async removeTask(id: string) {
    // Protocol: remove a task (mock implementation)
    return;
  }
}
