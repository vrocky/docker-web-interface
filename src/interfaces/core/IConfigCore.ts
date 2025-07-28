// Protocol-compliant interface for core layer, generated from checklist-config-apis.md
export interface IConfigCore {
  listConfigs(options?: object): Promise<any[]>;
  createConfig(options: object): Promise<any>;
  inspectConfig(id: string): Promise<any>;
  removeConfig(id: string, options?: object): Promise<void>;
  updateConfig(id: string, options: object): Promise<any>;
}
