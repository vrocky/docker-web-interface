import { ICoreImageApi } from '../interfaces/ICoreImageApi';
import Docker from 'dockerode';

export class ImageCore implements ICoreImageApi {
  private docker: Docker;
  constructor(docker?: Docker) {
    this.docker = docker || new Docker();
  }
  async listImages() {
    return this.docker.listImages();
  }
  async removeImage(id: string) {
    await this.docker.getImage(id).remove();
  }
}
