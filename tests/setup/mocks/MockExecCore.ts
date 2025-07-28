import { IExecCore } from '../../../src/interfaces/core/IExecCore';
export class MockExecCore implements IExecCore {
  async createExec(containerId: string, options: object): Promise<any> {
    return { Id: 'mock-exec', Cmd: (options as any).Cmd || 'echo hello' };
  }
  async inspectExec(execId: string): Promise<any> {
    return { Id: execId, Cmd: 'echo hello' };
  }
  async startExec(execId: string, options?: object): Promise<any> {
    return { started: true };
  }
  async resizeExec(execId: string, options: object): Promise<void> {
    return;
  }
  async listExecs(): Promise<any[]> {
    return [{ Id: 'mock-exec', Cmd: 'echo hello' }];
  }
  async createExecGlobal(options: object): Promise<any> {
    return { Id: 'mock-exec-global', ...options };
  }
  async removeExec(id: string): Promise<void> {
    return;
  }
}
