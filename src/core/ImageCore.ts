import { IImageCore } from '../interfaces/core/IImageCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class ImageCore implements IImageCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  async listImages(options?: object) {
    return await this.context.docker.listImages(options || {});
  }
  async createImage(options: object) {
    return await this.context.docker.createImage(options);
  }
  async inspectImage(id: string) {
    const image = this.context.docker.getImage(id);
    if (!image) throw new Error('Image not found for id: ' + id);
    return await image.inspect();
  }
  async removeImage(id: string, options?: object) {
    const image = this.context.docker.getImage(id);
    if (!image) throw new Error('Image not found for id: ' + id);
    return await image.remove(options || {});
  }
  async tagImage(id: string, repo: string, tag?: string) {
    const image = this.context.docker.getImage(id);
    if (!image) throw new Error('Image not found for id: ' + id);
    return await image.tag({ repo, tag });
  }
  async pushImage(id: string, options?: object) {
    const image = this.context.docker.getImage(id);
    if (!image) throw new Error('Image not found for id: ' + id);
    return await image.push(options || {});
  }
  async pullImage(repoTag: string, options?: object) {
    return await this.context.docker.pull(repoTag, options || {});
  }
  async getImageHistory(id: string) {
    const image = this.context.docker.getImage(id);
    if (!image) throw new Error('Image not found for id: ' + id);
    return await image.history();
  }
  async searchImages(term: string, options?: object) {
    return await this.context.docker.searchImages({ term, ...options });
  }
  async pruneImages(options?: object) {
    return await this.context.docker.pruneImages(options || {});
  }
  async getImage(id: string) {
    return this.context.docker.getImage(id);
  }
  async loadImage(options: object) {
    // Convert options to string or stream if needed
    const input = (options as any).input || options;
    return await this.context.docker.loadImage(input);
  }
  async importImage(options: object) {
    const input = (options as any).input || options;
    return await this.context.docker.importImage(input);
  }
}
