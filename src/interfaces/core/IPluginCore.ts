// Protocol-compliant interface for core layer, generated from checklist-plugin-apis.md
export interface IPluginCore {
  listPlugins(options?: object): Promise<any[]>;
  createPlugin(options: object): Promise<any>;
  inspectPlugin(id: string): Promise<any>;
  removePlugin(id: string, options?: object): Promise<void>;
  enablePlugin(id: string, options?: object): Promise<void>;
  disablePlugin(id: string, options?: object): Promise<void>;
  pushPlugin(id: string, options?: object): Promise<void>;
  configurePlugin(id: string, options: object): Promise<void>;
  pullPlugin(id: string, options?: object): Promise<void>;
  getPluginPrivileges(id: string): Promise<any>;
}
