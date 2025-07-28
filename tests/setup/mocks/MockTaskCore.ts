import { ITaskCore } from '../../../src/interfaces/core/ITaskCore';
export class MockTaskCore implements ITaskCore {
  async listTasks(options?: object): Promise<any[]> {
    return [{ Id: 'mock-task', Name: 'mock-task' }];
  }
  async inspectTask(id: string): Promise<any> {
    return { Id: id, Name: 'mock-task' };
  }
  async createTask(options: object): Promise<any> {
    return { Id: 'mock-task-created', ...options };
  }
  async removeTask(id: string): Promise<void> {
    return;
  }
}
