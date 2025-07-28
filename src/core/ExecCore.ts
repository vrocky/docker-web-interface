import { IExecCore } from '../interfaces/core/IExecCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class ExecCore implements IExecCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  async createExec(containerId: string, options: object) {
    const container = this.context.docker.getContainer(containerId);
    return await container.exec(options);
  }
  async inspectExec(execId: string) {
    const exec = this.context.docker.getExec(execId);
    return await exec.inspect();
  }
  async startExec(execId: string, options?: object) {
    const exec = this.context.docker.getExec(execId);
    return await exec.start(options || {});
  }
  async resizeExec(execId: string, options: object) {
    const exec = this.context.docker.getExec(execId);
    return await exec.resize(options);
  }
  async listExecs() {
    // Protocol: list execs (mock implementation)
    return [{ Id: 'mock-exec', Cmd: 'echo hello' }];
  }
  async createExecGlobal(options: object) {
    // Protocol: create exec globally (mock implementation)
    return { Id: 'mock-exec-global', ...options };
  }
  async removeExec(id: string) {
    // Protocol: remove exec (mock implementation)
    return;
  }
}
