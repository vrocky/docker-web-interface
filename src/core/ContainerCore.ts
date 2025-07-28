import { ICoreContainerApi } from '../interfaces/ICoreContainerApi';
import Docker from 'dockerode';

export class ContainerCore implements ICoreContainerApi {
  private docker: Docker;
  constructor(docker: Docker) {
    this.docker = docker;
  }
  async listContainers() {
    return this.docker.listContainers({ all: true });
  }
  async startContainer(id: string) {
    await this.docker.getContainer(id).start();
  }
  async stopContainer(id: string) {
    await this.docker.getContainer(id).stop();
  }
  async restartContainer(id: string) {
    await this.docker.getContainer(id).restart();
  }
  async removeContainer(id: string) {
    await this.docker.getContainer(id).remove({ force: true });
  }
  async getContainerLogs(id: string, tail: number = 100) {
    const logs = await this.docker.getContainer(id).logs({ stdout: true, stderr: true, tail, timestamps: false });
    return logs.toString();
  }
}
