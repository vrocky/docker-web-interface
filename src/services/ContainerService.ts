import { IContainerService } from '../interfaces/IContainerService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class ContainerService implements IContainerService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listContainers(options?: object) {
    return this.appCore.containers.listContainers(options);
  }
  async createContainer(options: object) {
    return this.appCore.containers.createContainer(options);
  }
  async inspectContainer(id: string) {
    return this.appCore.containers.inspectContainer(id);
  }
  async startContainer(id: string) {
    return this.appCore.containers.startContainer(id);
  }
  async stopContainer(id: string) {
    return this.appCore.containers.stopContainer(id);
  }
  async restartContainer(id: string) {
    return this.appCore.containers.restartContainer(id);
  }
  async pauseContainer(id: string) {
    return this.appCore.containers.pauseContainer(id);
  }
  async unpauseContainer(id: string) {
    return this.appCore.containers.unpauseContainer(id);
  }
  async removeContainer(id: string, options?: object) {
    return this.appCore.containers.removeContainer(id, options);
  }
  async updateContainer(id: string, options: object) {
    return this.appCore.containers.updateContainer(id, options);
  }
  async renameContainer(id: string, newName: string) {
    return this.appCore.containers.renameContainer(id, newName);
  }
  async attachContainer(id: string, options?: object) {
    return this.appCore.containers.attachContainer(id, options);
  }
  async waitContainer(id: string) {
    return this.appCore.containers.waitContainer(id);
  }
  async killContainer(id: string, signal?: string) {
    return this.appCore.containers.killContainer(id, signal);
  }
  async commitContainer(id: string, options: object) {
    return this.appCore.containers.commitContainer(id, options);
  }
  async exportContainer(id: string) {
    return this.appCore.containers.exportContainer(id);
  }
  async getContainerStats(id: string, options?: object) {
    return this.appCore.containers.getContainerStats(id, options);
  }
  async getContainerLogs(id: string, options?: object) {
    return this.appCore.containers.getContainerLogs(id, options);
  }
  async getContainerTop(id: string, options?: object) {
    return this.appCore.containers.getContainerTop(id, options);
  }
  async resizeContainer(id: string, options: object) {
    return this.appCore.containers.resizeContainer(id, options);
  }
  async execInContainer(id: string, options: object) {
    return this.appCore.containers.execInContainer(id, options);
  }
  async getContainerChanges(id: string) {
    return this.appCore.containers.getContainerChanges(id);
  }
  async getContainerArchive(id: string, options: object) {
    return this.appCore.containers.getContainerArchive(id, options);
  }
  async putContainerArchive(id: string, options: object) {
    return this.appCore.containers.putContainerArchive(id, options);
  }
  async pruneContainers(options?: object) {
    return this.appCore.containers.pruneContainers(options);
  }
}
