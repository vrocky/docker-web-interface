// Interface for Service operations (Protocol-compliant)
// Methods generated strictly from checklist-service-apis.md
export interface IServiceService {
  /**
   * List all services
   * HTTP: GET /services
   * dockerode: listServices
   */
  listServices(options?: object): Promise<any[]>;

  /**
   * Create a new service
   * HTTP: POST /services
   * dockerode: createService
   */
  createService(options: object): Promise<any>;

  /**
   * Inspect a service
   * HTTP: GET /services/:id
   * dockerode: getService(id).inspect
   */
  inspectService(id: string): Promise<any>;

  /**
   * Remove a service
   * HTTP: DELETE /services/:id
   * dockerode: getService(id).remove
   */
  removeService(id: string): Promise<void>;

  /**
   * Update a service
   * HTTP: POST /services/:id/update
   * dockerode: getService(id).update
   */
  updateService(id: string, options: object): Promise<any>;

  /**
   * Get service logs
   * HTTP: GET /services/:id/logs
   * dockerode: getService(id).logs
   */
  getServiceLogs(id: string, options?: object): Promise<any>;
}
