import { ISecretCore } from '../../../src/interfaces/core/ISecretCore';
export class MockSecretCore implements ISecretCore {
  async listSecrets(options?: object): Promise<any[]> {
    return [{ Id: 'mock-secret', Name: 'mock-secret' }];
  }
  async createSecret(options: object): Promise<any> {
    return { Id: 'mock-secret', Name: (options as any).Name || 'mock-secret' };
  }
  async inspectSecret(id: string): Promise<any> {
    return { Id: id, Name: 'mock-secret' };
  }
  async removeSecret(id: string): Promise<void> { return; }
  async updateSecret(id: string, options: object): Promise<any> { return { Id: id, ...options }; }
}
