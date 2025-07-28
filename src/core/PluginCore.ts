import { IPluginCore } from '../interfaces/core/IPluginCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class PluginCore implements IPluginCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  async listPlugins(options?: object) {
    return await this.context.docker.listPlugins(options || {});
  }
  async createPlugin(options: object) {
    return await this.context.docker.createPlugin(options);
  }
  async inspectPlugin(id: string, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.inspect();
  }
  async removePlugin(id: string, options?: object, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.remove(options || {});
  }
  async enablePlugin(id: string, options?: object, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.enable(options || {});
  }
  async disablePlugin(id: string, options?: object, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.disable(options || {});
  }
  async pushPlugin(id: string, options?: object, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.push(options || {});
  }
  async configurePlugin(id: string, options: object, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.configure(options);
  }
  async pullPlugin(id: string, options?: object, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.pull(options || {});
  }
  async getPluginPrivileges(id: string, remote?: string) {
    const plugin = this.context.docker.getPlugin(id, remote);
    return await plugin.privileges();
  }
  // prunePlugins is not supported by Dockerode
}
