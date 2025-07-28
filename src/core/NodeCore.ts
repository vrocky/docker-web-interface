import { INodeCore } from '../interfaces/core/INodeCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class NodeCore implements INodeCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  async listNodes(options?: object) {
    return await this.context.docker.listNodes(options || {});
  }
  async inspectNode(id: string) {
    const node = this.context.docker.getNode(id);
    if (!node) throw new Error('Container not found for id: ' + id);
    return await node.inspect();
  }
  async removeNode(id: string) {
    const node = this.context.docker.getNode(id);
    if (!node) throw new Error('Container not found for id: ' + id);
    return await node.remove();
  }
  async updateNode(id: string, options: object) {
    const node = this.context.docker.getNode(id);
    if (!node) throw new Error('Container not found for id: ' + id);
    return await node.update(options);
  }
  async createNode(options: object) {
    // Protocol: create a node (mock implementation, as Dockerode does not support node creation directly)
    // In real Docker Swarm, node creation is handled by joining a node to the swarm.
    return { id: 'mock-node-id', ...options };
  }
}
