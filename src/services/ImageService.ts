import { IImageService } from '../interfaces/IImageService';
import { IAppCore } from '../interfaces/IAppCore';

export class ImageService implements IImageService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listImages() {
    return this.appCore.images.listImages();
  }
  async removeImage(id: string) {
    await this.appCore.images.removeImage(id);
  }
}
