import { IServiceService } from '../interfaces/IServiceService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class ServiceService implements IServiceService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listServices(options?: object) {
    return this.appCore.services.listServices(options);
  }
  async createService(options: object) {
    return this.appCore.services.createService(options);
  }
  async inspectService(id: string) {
    return this.appCore.services.inspectService(id);
  }
  async removeService(id: string) {
    return this.appCore.services.removeService(id);
  }
  async updateService(id: string, options: object) {
    return this.appCore.services.updateService(id, options);
  }
  async getServiceLogs(id: string, options?: object) {
    return this.appCore.services.getServiceLogs(id, options);
  }
}
