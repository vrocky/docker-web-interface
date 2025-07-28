// Protocol-compliant interface, generated from checklist-exec-apis.md
export interface IExecService {
  createExec(containerId: string, options: object): Promise<any>;
  inspectExec(execId: string): Promise<any>;
  startExec(execId: string, options?: object): Promise<any>;
  resizeExec(execId: string, options: object): Promise<void>;
  listExecs(): Promise<any[]>;
  createExecGlobal(options: object): Promise<any>;
  removeExec(id: string): Promise<void>;
}
