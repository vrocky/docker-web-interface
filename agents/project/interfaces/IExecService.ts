// Interface for Exec operations (Protocol-compliant)
// Methods generated strictly from checklist-exec-apis.md
export interface IExecService {
  /**
   * Create exec
   * HTTP: POST /exec
   * dockerode: createExec
   */
  createExec(containerId: string, options: object): Promise<any>;

  /**
   * Inspect exec
   * HTTP: GET /exec/:id
   * dockerode: getExec(id).inspect
   */
  inspectExec(execId: string): Promise<any>;

  /**
   * Start exec
   * HTTP: POST /exec/:id/start
   * dockerode: getExec(id).start
   */
  startExec(execId: string, options?: object): Promise<any>;

  /**
   * Resize exec
   * HTTP: POST /exec/:id/resize
   * dockerode: getExec(id).resize
   */
  resizeExec(execId: string, options: object): Promise<void>;
}
