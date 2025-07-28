// Interface for Config operations (Protocol-compliant)
// Methods generated strictly from checklist-config-apis.md
export interface IConfigService {
  /**
   * List all configs
   * HTTP: GET /configs
   * dockerode: listConfigs
   */
  listConfigs(options?: object): Promise<any[]>;

  /**
   * Create a new config
   * HTTP: POST /configs
   * dockerode: createConfig
   */
  createConfig(options: object): Promise<any>;

  /**
   * Inspect a config
   * HTTP: GET /configs/:id
   * dockerode: getConfig(id).inspect
   */
  inspectConfig(id: string): Promise<any>;

  /**
   * Remove a config
   * HTTP: DELETE /configs/:id
   * dockerode: getConfig(id).remove
   */
  removeConfig(id: string, options?: object): Promise<void>;

  /**
   * Update a config
   * HTTP: POST /configs/:id/update
   * dockerode: getConfig(id).update
   */
  updateConfig(id: string, options: object): Promise<any>;
}
