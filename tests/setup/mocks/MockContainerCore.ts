import { IContainerCore } from '../../../src/interfaces/core/IContainerCore';
export class MockContainerCore implements IContainerCore {
  async listContainers(options?: object): Promise<any[]> {
    return [{ Id: 'mock-container', Image: 'alpine' }];
  }
  async createContainer(options: object): Promise<any> {
    return { Id: 'mock-container', Image: (options as any).Image || 'alpine' };
  }
  async inspectContainer(id: string): Promise<any> {
    return { Id: id, Image: 'alpine' };
  }
  async startContainer(id: string): Promise<void> { return; }
  async stopContainer(id: string): Promise<void> { return; }
  async restartContainer(id: string): Promise<void> { return; }
  async pauseContainer(id: string): Promise<void> { return; }
  async unpauseContainer(id: string): Promise<void> { return; }
  async removeContainer(id: string, options?: object): Promise<void> { return; }
  async updateContainer(id: string, options: object): Promise<any> { return { Id: id, ...options }; }
  async renameContainer(id: string, newName: string): Promise<void> { return; }
  async attachContainer(id: string, options?: object): Promise<any> { return {}; }
  async waitContainer(id: string): Promise<any> { return {}; }
  async killContainer(id: string, signal?: string): Promise<void> { return; }
  async commitContainer(id: string, options: object): Promise<any> { return { Id: id, ...options }; }
  async exportContainer(id: string): Promise<Buffer> { return Buffer.from('mock'); }
  async getContainerStats(id: string, options?: object): Promise<any> { return {}; }
  async getContainerLogs(id: string, options?: object): Promise<string> { return 'mock logs'; }
  async getContainerTop(id: string, options?: object): Promise<any> { return {}; }
  async resizeContainer(id: string, options: object): Promise<void> { return; }
  async execInContainer(id: string, options: object): Promise<any> { return {}; }
  async getContainerChanges(id: string): Promise<any> { return {}; }
  async getContainerArchive(id: string, options: object): Promise<any> { return {}; }
  async putContainerArchive(id: string, options: object): Promise<any> { return {}; }
  async pruneContainers(options?: object): Promise<any> { return { ContainersDeleted: ['mock-container'] }; }
}
