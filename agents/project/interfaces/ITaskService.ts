// Interface for Task operations (Protocol-compliant)
// Methods generated strictly from checklist-task-apis.md
export interface ITaskService {
  /**
   * List all tasks
   * HTTP: GET /tasks
   * dockerode: listTasks
   */
  listTasks(options?: object): Promise<any[]>;

  /**
   * Inspect a task
   * HTTP: GET /tasks/:id
   * dockerode: getTask(id).inspect
   */
  inspectTask(id: string): Promise<any>;

  /**
   * Get task logs
   * HTTP: GET /tasks/:id/logs
   * dockerode: getTask(id).logs
   */
  getTaskLogs(id: string, options?: object): Promise<any>;
}
