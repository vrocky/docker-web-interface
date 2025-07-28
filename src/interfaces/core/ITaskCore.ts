// Protocol-compliant interface for core layer, generated from checklist-task-apis.md
export interface ITaskCore {
  listTasks(options?: object): Promise<any[]>;
  inspectTask(id: string): Promise<any>;
  createTask(options: object): Promise<any>;
  removeTask(id: string): Promise<void>;
}
