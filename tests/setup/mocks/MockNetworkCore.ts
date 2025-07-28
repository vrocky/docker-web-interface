import { INetworkCore } from '../../../src/interfaces/core/INetworkCore';
export class MockNetworkCore implements INetworkCore {
  async listNetworks(options?: object): Promise<any[]> {
    return [{ Id: 'mock-net', Name: 'mock-net' }];
  }
  async createNetwork(options: object): Promise<any> {
    return { Id: 'mock-net', Name: (options as any).Name || 'mock-net' };
  }
  async inspectNetwork(id: string): Promise<any> {
    return { Id: id, Name: 'mock-net' };
  }
  async removeNetwork(id: string): Promise<void> { return; }
  async connectNetwork(id: string, options: object): Promise<void> { return; }
  async disconnectNetwork(id: string, options: object): Promise<void> { return; }
  async pruneNetworks(options?: object): Promise<any> { return { NetworksDeleted: ['mock-net'] }; }
}
