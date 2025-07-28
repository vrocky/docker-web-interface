import { IConfigCore } from '../interfaces/core/IConfigCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class ConfigCore implements IConfigCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }

  async listConfigs(options?: object) {
    return await this.context.docker.listConfigs(options || {});
  }

  async createConfig(options: object) {
    return await this.context.docker.createConfig(options);
  }

  async inspectConfig(id: string) {
    const config = this.context.docker.getConfig(id);
    return await config.inspect();
  }

  async removeConfig(id: string, options?: object) {
    const config = this.context.docker.getConfig(id);
    return await config.remove(options || {});
  }

  async updateConfig(id: string, options: object) {
    const config = this.context.docker.getConfig(id);
    return await config.update(options);
  }
}
