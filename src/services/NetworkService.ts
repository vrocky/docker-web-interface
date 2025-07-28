import { INetworkService } from '../interfaces/INetworkService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class NetworkService implements INetworkService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listNetworks(options?: object) {
    return this.appCore.networks.listNetworks(options);
  }
  async createNetwork(options: object) {
    return this.appCore.networks.createNetwork(options);
  }
  async inspectNetwork(id: string) {
    return this.appCore.networks.inspectNetwork(id);
  }
  async removeNetwork(id: string) {
    return this.appCore.networks.removeNetwork(id);
  }
  async connectNetwork(id: string, options: object) {
    return this.appCore.networks.connectNetwork(id, options);
  }
  async disconnectNetwork(id: string, options: object) {
    return this.appCore.networks.disconnectNetwork(id, options);
  }
  async pruneNetworks(options?: object) {
    return this.appCore.networks.pruneNetworks(options);
  }
}
