// Protocol-compliant interface for core layer, generated from checklist-service-apis.md
export interface IServiceCore {
  listServices(options?: object): Promise<any[]>;
  createService(options: object): Promise<any>;
  inspectService(id: string): Promise<any>;
  removeService(id: string): Promise<void>;
  updateService(id: string, options: object): Promise<any>;
  getServiceLogs(id: string, options?: object): Promise<any>;
}
