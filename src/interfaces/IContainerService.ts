export interface IContainerService {
  listContainers(): Promise<any[]>;
  startContainer(id: string): Promise<void>;
  stopContainer(id: string): Promise<void>;
  restartContainer(id: string): Promise<void>;
  removeContainer(id: string): Promise<void>;
  getContainerLogs(id: string, tail?: number): Promise<string>;
}
