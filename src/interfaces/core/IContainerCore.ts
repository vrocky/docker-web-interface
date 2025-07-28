// Protocol-compliant interface, generated from checklist-container-apis.md
export interface IContainerCore {
  listContainers(options?: object): Promise<any[]>;
  createContainer(options: object): Promise<any>;
  inspectContainer(id: string): Promise<any>;
  startContainer(id: string): Promise<void>;
  stopContainer(id: string): Promise<void>;
  restartContainer(id: string): Promise<void>;
  pauseContainer(id: string): Promise<void>;
  unpauseContainer(id: string): Promise<void>;
  removeContainer(id: string, options?: object): Promise<void>;
  updateContainer(id: string, options: object): Promise<any>;
  renameContainer(id: string, newName: string): Promise<void>;
  attachContainer(id: string, options?: object): Promise<any>;
  waitContainer(id: string): Promise<any>;
  killContainer(id: string, signal?: string): Promise<void>;
  commitContainer(id: string, options: object): Promise<any>;
  exportContainer(id: string): Promise<Buffer>;
  getContainerStats(id: string, options?: object): Promise<any>;
  getContainerLogs(id: string, options?: object): Promise<string>;
  getContainerTop(id: string, options?: object): Promise<any>;
  resizeContainer(id: string, options: object): Promise<void>;
  execInContainer(id: string, options: object): Promise<any>;
  getContainerChanges(id: string): Promise<any>;
  getContainerArchive(id: string, options: object): Promise<any>;
  putContainerArchive(id: string, options: object): Promise<any>;
  pruneContainers(options?: object): Promise<any>;
}
