import { INodeService } from '../interfaces/INodeService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class NodeService implements INodeService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listNodes(options?: object) {
    return this.appCore.nodes.listNodes(options);
  }
  async inspectNode(id: string) {
    return this.appCore.nodes.inspectNode(id);
  }
  async removeNode(id: string) {
    return this.appCore.nodes.removeNode(id);
  }
  async updateNode(id: string, options: object) {
    return this.appCore.nodes.updateNode(id, options);
  }
  async createNode(options: object) {
    if (!this.appCore.nodes.createNode) throw new Error('Not implemented');
    return this.appCore.nodes.createNode(options);
  }
}
