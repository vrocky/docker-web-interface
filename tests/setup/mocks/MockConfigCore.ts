import { IConfigService } from '../../../src/interfaces/IConfigService';
export class MockConfigCore implements IConfigService {
  async listConfigs(options?: object): Promise<any[]> {
    return [{ Id: 'mock-config', Name: 'mock-config' }];
  }
  async createConfig(options: object): Promise<any> {
    return { Id: 'mock-config', Name: (options as any).Name || 'mock-config' };
  }
  async inspectConfig(id: string): Promise<any> {
    return { Id: id, Name: 'mock-config' };
  }
  async removeConfig(id: string, options?: object): Promise<void> {
    // No-op for mock
    return;
  }
  async updateConfig(id: string, options: object): Promise<any> {
    return { Id: id, ...options };
  }
}
