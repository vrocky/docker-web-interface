import { IPluginService } from '../interfaces/IPluginService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class PluginService implements IPluginService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listPlugins(options?: object) {
    return this.appCore.plugins.listPlugins(options);
  }
  async createPlugin(options: object) {
    return this.appCore.plugins.createPlugin(options);
  }
  async inspectPlugin(id: string) {
    return this.appCore.plugins.inspectPlugin(id);
  }
  async removePlugin(id: string, options?: object) {
    return this.appCore.plugins.removePlugin(id, options);
  }
  async enablePlugin(id: string, options?: object) {
    return this.appCore.plugins.enablePlugin(id, options);
  }
  async disablePlugin(id: string, options?: object) {
    return this.appCore.plugins.disablePlugin(id, options);
  }
  async pushPlugin(id: string, options?: object) {
    return this.appCore.plugins.pushPlugin(id, options);
  }
  async configurePlugin(id: string, options: object) {
    return this.appCore.plugins.configurePlugin(id, options);
  }
  async pullPlugin(id: string, options?: object) {
    return this.appCore.plugins.pullPlugin(id, options);
  }
  async getPluginPrivileges(id: string) {
    return this.appCore.plugins.getPluginPrivileges(id);
  }
}
