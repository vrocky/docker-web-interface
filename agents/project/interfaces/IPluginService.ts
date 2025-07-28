// Interface for Plugin operations (Protocol-compliant)
// Methods generated strictly from checklist-plugin-apis.md
export interface IPluginService {
  /**
   * List all plugins
   * HTTP: GET /plugins
   * dockerode: listPlugins
   */
  listPlugins(options?: object): Promise<any[]>;

  /**
   * Create plugin
   * HTTP: POST /plugins
   * dockerode: createPlugin
   */
  createPlugin(options: object): Promise<any>;

  /**
   * Inspect a plugin
   * HTTP: GET /plugins/:id
   * dockerode: getPlugin(id).inspect
   */
  inspectPlugin(id: string): Promise<any>;

  /**
   * Remove a plugin
   * HTTP: DELETE /plugins/:id
   * dockerode: getPlugin(id).remove
   */
  removePlugin(id: string, options?: object): Promise<void>;

  /**
   * Enable a plugin
   * HTTP: POST /plugins/:id/enable
   * dockerode: getPlugin(id).enable
   */
  enablePlugin(id: string, options?: object): Promise<void>;

  /**
   * Disable a plugin
   * HTTP: POST /plugins/:id/disable
   * dockerode: getPlugin(id).disable
   */
  disablePlugin(id: string, options?: object): Promise<void>;

  /**
   * Update a plugin
   * HTTP: POST /plugins/:id/update
   * dockerode: getPlugin(id).update
   */
  updatePlugin(id: string, options: object): Promise<void>;

  /**
   * Push a plugin
   * HTTP: POST /plugins/:id/push
   * dockerode: getPlugin(id).push
   */
  pushPlugin(id: string, options?: object): Promise<void>;

  /**
   * Configure a plugin
   * HTTP: POST /plugins/:id/configure
   * dockerode: getPlugin(id).configure
   */
  configurePlugin(id: string, options: object): Promise<void>;

  /**
   * Pull a plugin
   * HTTP: POST /plugins/:id/pull
   * dockerode: getPlugin(id).pull
   */
  pullPlugin(id: string, options?: object): Promise<void>;

  /**
   * Get plugin privileges
   * HTTP: GET /plugins/:id/privileges
   * dockerode: getPlugin(id).privileges
   */
  getPluginPrivileges(id: string): Promise<any>;
}
