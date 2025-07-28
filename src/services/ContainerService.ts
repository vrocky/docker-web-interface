import { IContainerService } from '../interfaces/IContainerService';
import { IAppCore } from '../interfaces/IAppCore';

export class ContainerService implements IContainerService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listContainers() {
    return this.appCore.containers.listContainers();
  }
  async startContainer(id: string) {
    await this.appCore.containers.startContainer(id);
  }
  async stopContainer(id: string) {
    await this.appCore.containers.stopContainer(id);
  }
  async restartContainer(id: string) {
    await this.appCore.containers.restartContainer(id);
  }
  async removeContainer(id: string) {
    await this.appCore.containers.removeContainer(id);
  }
  async getContainerLogs(id: string, tail: number = 100) {
    return this.appCore.containers.getContainerLogs(id, tail);
  }
}
