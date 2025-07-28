
import Docker from 'dockerode';
import { IDockerUtils } from '../interfaces/core/IDockerUtils';

export class DockerUtils implements IDockerUtils {
  async isDockerRunning(docker: Docker): Promise<boolean> {
    try {
      await docker.ping();
      return true;
    } catch {
      return false;
    }
  }

  async ensureDockerRunning(docker: Docker): Promise<void> {
    const running = await this.isDockerRunning(docker);
    if (!running) {
      throw new Error('Docker engine is not running or not reachable.');
    }
  }
}
