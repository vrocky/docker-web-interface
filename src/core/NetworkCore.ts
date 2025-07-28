import { INetworkCore } from '../interfaces/core/INetworkCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class NetworkCore implements INetworkCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  async listNetworks(options?: object) {
    return await this.context.docker.listNetworks(options || {});
  }
  async createNetwork(options: object) {
    // Ensure options is NetworkCreateOptions
    return await this.context.docker.createNetwork(options as Docker.NetworkCreateOptions);
  }
  async inspectNetwork(id: string) {
    const network = this.context.docker.getNetwork(id);
    return await network.inspect();
  }
  async removeNetwork(id: string) {
    const network = this.context.docker.getNetwork(id);
    return await network.remove();
  }
  async connectNetwork(id: string, options: object) {
    const network = this.context.docker.getNetwork(id);
    return await network.connect(options);
  }
  async disconnectNetwork(id: string, options: object) {
    const network = this.context.docker.getNetwork(id);
    return await network.disconnect(options);
  }
  async pruneNetworks(options?: object) {
    return await this.context.docker.pruneNetworks(options || {});
  }
}
