import { ITaskService } from '../interfaces/ITaskService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class TaskService implements ITaskService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
 
  async listTasks(options?: object) {
    return this.appCore.tasks.listTasks(options);
  }
  async inspectTask(id: string) {
    return this.appCore.tasks.inspectTask(id);
  }
  async createTask(options: object) {
    if (!this.appCore.tasks.createTask) throw new Error('Not implemented');
    return this.appCore.tasks.createTask(options);
  }
  async removeTask(id: string) {
    if (!this.appCore.tasks.removeTask) throw new Error('Not implemented');
    return this.appCore.tasks.removeTask(id);
  }
}
