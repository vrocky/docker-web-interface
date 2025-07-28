// src/interfaces/IDockerUtils.ts
export interface IDockerUtils {
  isDockerRunning(docker: any): Promise<boolean>;
  ensureDockerRunning(docker: any): Promise<void>;
  // Add other utility methods as needed
}
