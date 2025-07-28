import { INodeCore } from '../../../src/interfaces/core/INodeCore';
export class MockNodeCore implements INodeCore {
  async listNodes(options?: object): Promise<any[]> {
    return [{ Id: 'mock-node', Name: 'mock-node' }];
  }
  async inspectNode(id: string): Promise<any> {
    return { Id: id, Name: 'mock-node' };
  }
  async removeNode(id: string): Promise<void> { return; }
  async updateNode(id: string, options: object): Promise<any> { return { Id: id, ...options }; }
  async createNode(options: object): Promise<any> {
    return { Id: 'mock-node-created', ...options };
  }
}
