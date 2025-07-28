import { IServiceCore } from '../../../src/interfaces/core/IServiceCore';
export class MockServiceCore implements IServiceCore {
  async listServices(options?: object): Promise<any[]> {
    return [{ Id: 'mock-service', Name: 'mock-service' }];
  }
  async createService(options: object): Promise<any> {
    return { Id: 'mock-service', Name: (options as any).Name || 'mock-service' };
  }
  async inspectService(id: string): Promise<any> {
    return { Id: id, Name: 'mock-service' };
  }
  async removeService(id: string): Promise<void> { return; }
  async updateService(id: string, options: object): Promise<any> { return { Id: id, ...options }; }
  async getServiceLogs(id: string, options?: object): Promise<any> { return {}; }
}
