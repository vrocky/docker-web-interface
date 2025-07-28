import { IVolumeService } from '../interfaces/IVolumeService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class VolumeService implements IVolumeService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listVolumes(options?: object) {
    return this.appCore.volumes.listVolumes(options);
  }
  async createVolume(options: object) {
    return this.appCore.volumes.createVolume(options);
  }
  async inspectVolume(name: string) {
    return this.appCore.volumes.inspectVolume(name);
  }
  async removeVolume(name: string, options?: object) {
    return this.appCore.volumes.removeVolume(name, options);
  }
  async pruneVolumes(options?: object) {
    return this.appCore.volumes.pruneVolumes(options);
  }
}
