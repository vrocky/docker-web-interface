import { IExecService } from '../interfaces/IExecService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class ExecService implements IExecService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async createExec(containerId: string, options: object) {
    return this.appCore.execs.createExec(containerId, options);
  }
  async inspectExec(execId: string) {
    return this.appCore.execs.inspectExec(execId);
  }
  async startExec(execId: string, options?: object) {
    return this.appCore.execs.startExec(execId, options);
  }
  async resizeExec(execId: string, options: object) {
    return this.appCore.execs.resizeExec(execId, options);
  }
  async listExecs() {
    if (!this.appCore.execs.listExecs) throw new Error('Not implemented');
    return this.appCore.execs.listExecs();
  }
  async createExecGlobal(options: object) {
    if (!this.appCore.execs.createExecGlobal) throw new Error('Not implemented');
    return this.appCore.execs.createExecGlobal(options);
  }
  async removeExec(id: string) {
    if (!this.appCore.execs.removeExec) throw new Error('Not implemented');
    return this.appCore.execs.removeExec(id);
  }
}
