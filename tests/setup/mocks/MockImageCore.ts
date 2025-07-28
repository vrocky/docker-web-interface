import { IImageCore } from '../../../src/interfaces/core/IImageCore';
export class MockImageCore implements IImageCore {
  async listImages(options?: object): Promise<any[]> {
    return [{ Id: 'mock-image', RepoTag: 'alpine:latest' }];
  }
  async createImage(options: object): Promise<any> {
    return { Id: 'mock-image', RepoTag: (options as any).RepoTag || 'alpine:latest' };
  }
  async inspectImage(id: string): Promise<any> {
    return { Id: id, RepoTag: 'alpine:latest' };
  }
  async removeImage(id: string, options?: object): Promise<any> {
    return { status: 'removed', id };
  }
  async tagImage(id: string, repo: string, tag?: string): Promise<void> { return; }
  async pushImage(id: string, options?: object): Promise<any> { return {}; }
  async pullImage(repoTag: string, options?: object): Promise<any> { return {}; }
  async getImageHistory(id: string): Promise<any[]> { return []; }
  async searchImages(term: string, options?: object): Promise<any[]> { return []; }
  async pruneImages(options?: object): Promise<any> { return { ImagesDeleted: ['mock-image'] }; }
  async getImage(id: string): Promise<any> { return { Id: id }; }
  async loadImage(options: object): Promise<any> { return {}; }
  async importImage(options: object): Promise<any> { return {}; }
}
