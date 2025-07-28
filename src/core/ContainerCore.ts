import { IContainerCore } from '../interfaces/core/IContainerCore';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';
import { DockerUtils } from './DockerUtils';

export class ContainerCore implements IContainerCore {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
  private async ensureDocker() {
    if (!this.context.docker) {
      if (this.context.logger) this.context.logger.error('[ContainerCore] No Docker project found: Docker connection is missing.');
      else console.error('[ContainerCore] No Docker project found: Docker connection is missing.');
      throw new Error('No Docker project found: Docker connection is missing.');
    }
    try {
      await this.context.dockerUtils.ensureDockerRunning(this.context.docker);
    } catch (err) {
      if (this.context.logger) this.context.logger.error('[ContainerCore] Docker engine is not running or not reachable.', err);
      else console.error('[ContainerCore] Docker engine is not running or not reachable.', err);
      throw err;
    }
  }

  async listContainers(options?: object) {
    await this.ensureDocker();
    return await this.context.docker.listContainers(options || {});
  }
  async createContainer(options: object) {
    await this.ensureDocker();
    return await this.context.docker.createContainer(options);
  }
  async inspectContainer(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) {
      console.error(`[ContainerCore] Container not found for id: ${id}`);
      throw new Error('Container not found for id: ' + id);
    }
    return await container.inspect();
  }
  async startContainer(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.start();
  }
  async stopContainer(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.stop();
  }
  async restartContainer(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.restart();
  }
  async pauseContainer(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.pause();
  }
  async unpauseContainer(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.unpause();
  }
  async removeContainer(id: string, options?: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.remove(options || {});
  }
  async updateContainer(id: string, options: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.update(options);
  }
  async renameContainer(id: string, newName: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.rename({ name: newName });
  }
  async attachContainer(id: string, options?: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.attach(options || {});
  }
  async waitContainer(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.wait();
  }
  async killContainer(id: string, signal?: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.kill({ signal });
  }
  async commitContainer(id: string, options: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.commit(options);
  }
  async exportContainer(id: string): Promise<Buffer> {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    const stream = await container.export();
    return await this.streamToBuffer(stream);
  }
  async getContainerStats(id: string, options?: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.stats(options || {});
  }
  async getContainerLogs(id: string, options?: object): Promise<string> {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    const logs = await container.logs(options || {});
    if (Buffer.isBuffer(logs)) {
      return logs.toString();
    }
    return typeof logs === 'string' ? logs : '';
  }
  private async streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];
      stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  }
  async getContainerTop(id: string, options?: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.top(options || {});
  }
  async resizeContainer(id: string, options: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.resize(options);
  }
  async execInContainer(id: string, options: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.exec(options);
  }
  async getContainerChanges(id: string) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.changes();
  }
  async getContainerArchive(id: string, options: object) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.getArchive(options);
  }

  async putContainerArchive(id: string, options: { path: string, stream: NodeJS.ReadableStream }) {
    await this.ensureDocker();
    const container = this.context.docker.getContainer(id);
    if (!container) throw new Error('Container not found for id: ' + id);
    return await container.putArchive(options.stream, { path: options.path });
  }

  async pruneContainers(options?: object) {
    await this.ensureDocker();
    return await this.context.docker.pruneContainers(options || {});
  }
}
