import { IImageService } from '../interfaces/IImageService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class ImageService implements IImageService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listImages(options?: object): Promise<any[]> {
    return this.appCore.images.listImages(options);
  }
  async removeImage(id: string, options?: object): Promise<any> {
    return await this.appCore.images.removeImage(id, options);
  }
  async createImage(options: object): Promise<any> {
    return this.appCore.images.createImage(options);
  }

  async inspectImage(id: string): Promise<any> {
    return this.appCore.images.inspectImage(id);
  }

  async tagImage(id: string, repo: string, tag?: string): Promise<void> {
    await this.appCore.images.tagImage(id, repo, tag);
  }

  async pushImage(id: string, options?: object): Promise<any> {
    return this.appCore.images.pushImage(id, options);
  }

  async pullImage(repoTag: string, options?: object): Promise<any> {
    return this.appCore.images.pullImage(repoTag, options);
  }

  async getImageHistory(id: string): Promise<any[]> {
    return this.appCore.images.getImageHistory(id);
  }

  async searchImages(term: string, options?: object): Promise<any[]> {
    return this.appCore.images.searchImages(term, options);
  }

  async pruneImages(options?: object): Promise<any> {
    return this.appCore.images.pruneImages(options);
  }

  async getImage(id: string): Promise<any> {
    return this.appCore.images.getImage(id);
  }

  async loadImage(options: object): Promise<any> {
    return this.appCore.images.loadImage(options);
  }

  async importImage(options: object): Promise<any> {
    return this.appCore.images.importImage(options);
  }
}