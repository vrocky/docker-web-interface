// Protocol-compliant interface for core layer, generated from checklist-exec-apis.md
export interface IExecCore {
  createExec(containerId: string, options: object): Promise<any>;
  inspectExec(execId: string): Promise<any>;
  startExec(execId: string, options?: object): Promise<any>;
  resizeExec(execId: string, options: object): Promise<void>;
  listExecs(): Promise<any[]>;
  createExecGlobal(options: object): Promise<any>;
  removeExec(id: string): Promise<void>;
}
