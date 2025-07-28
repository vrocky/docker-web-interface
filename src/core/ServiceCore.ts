import { IServiceCore } from '../interfaces/core/IServiceCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class ServiceCore implements IServiceCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  async listServices(options?: object) {
    return await this.context.docker.listServices(options || {});
  }
  async createService(options: object) {
    return await this.context.docker.createService(options);
  }
  async inspectService(id: string) {
    const service = this.context.docker.getService(id);
    return await service.inspect();
  }
  async removeService(id: string) {
    const service = this.context.docker.getService(id);
    return await service.remove();
  }
  async updateService(id: string, options: object) {
    const service = this.context.docker.getService(id);
    return await service.update(options);
  }
  async getServiceLogs(id: string, options?: object) {
    const service = this.context.docker.getService(id);
    return await service.logs(options || {});
  }
}
