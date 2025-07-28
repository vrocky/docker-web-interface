import { IVolumeCore } from '../interfaces/core/IVolumeCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class VolumeCore implements IVolumeCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }

  async listVolumes(options?: object) {
    const result = await this.context.docker.listVolumes(options || {});
    return result.Volumes || [];
  }

  async createVolume(options: object) {
    return await this.context.docker.createVolume(options);
  }

  async inspectVolume(name: string) {
    const volume = this.context.docker.getVolume(name);
    return await volume.inspect();
  }

  async removeVolume(name: string, options?: object) {
    const volume = this.context.docker.getVolume(name);
    return await volume.remove(options || {});
  }

  async pruneVolumes(options?: object) {
    return await this.context.docker.pruneVolumes(options || {});
  }
}
