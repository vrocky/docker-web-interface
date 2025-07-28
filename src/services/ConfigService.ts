import { IConfigService } from '../interfaces/IConfigService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class ConfigService implements IConfigService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listConfigs(options?: object) {
    return this.appCore.configs.listConfigs(options);
  }
  async createConfig(options: object) {
    return this.appCore.configs.createConfig(options);
  }
  async inspectConfig(id: string) {
    return this.appCore.configs.inspectConfig(id);
  }
  async removeConfig(id: string, options?: object) {
    return this.appCore.configs.removeConfig(id, options);
  }
  async updateConfig(id: string, options: object) {
    return this.appCore.configs.updateConfig(id, options);
  }
}
