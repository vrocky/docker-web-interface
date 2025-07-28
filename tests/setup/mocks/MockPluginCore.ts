import { IPluginCore } from '../../../src/interfaces/core/IPluginCore';
export class MockPluginCore implements IPluginCore {
  async listPlugins(options?: object): Promise<any[]> {
    return [{ Id: 'mock-plugin', Name: 'mock-plugin' }];
  }
  async createPlugin(options: object): Promise<any> {
    return { Id: 'mock-plugin', Name: (options as any).Name || 'mock-plugin' };
  }
  async inspectPlugin(id: string): Promise<any> {
    return { Id: id, Name: 'mock-plugin' };
  }
  async removePlugin(id: string, options?: object): Promise<void> { return; }
  async enablePlugin(id: string, options?: object): Promise<void> { return; }
  async disablePlugin(id: string, options?: object): Promise<void> { return; }
  async pushPlugin(id: string, options?: object): Promise<void> { return; }
  async configurePlugin(id: string, options: object): Promise<void> { return; }
  async pullPlugin(id: string, options?: object): Promise<void> { return; }
  async getPluginPrivileges(id: string): Promise<any> { return {}; }
}
