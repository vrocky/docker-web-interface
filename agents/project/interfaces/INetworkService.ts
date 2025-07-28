// Interface for Network operations (Protocol-compliant)
// Methods generated strictly from checklist-network-apis.md
export interface INetworkService {
  /**
   * List all networks
   * HTTP: GET /networks
   * dockerode: listNetworks
   */
  listNetworks(options?: object): Promise<any[]>;

  /**
   * Create a new network
   * HTTP: POST /networks
   * dockerode: createNetwork
   */
  createNetwork(options: object): Promise<any>;

  /**
   * Inspect a network
   * HTTP: GET /networks/:id
   * dockerode: getNetwork(id).inspect
   */
  inspectNetwork(id: string): Promise<any>;

  /**
   * Remove a network
   * HTTP: DELETE /networks/:id
   * dockerode: getNetwork(id).remove
   */
  removeNetwork(id: string): Promise<void>;

  /**
   * Connect to network
   * HTTP: POST /networks/:id/connect
   * dockerode: getNetwork(id).connect
   */
  connectNetwork(id: string, options: object): Promise<void>;

  /**
   * Disconnect from network
   * HTTP: POST /networks/:id/disconnect
   * dockerode: getNetwork(id).disconnect
   */
  disconnectNetwork(id: string, options: object): Promise<void>;

  /**
   * Prune unused networks
   * HTTP: POST /networks/prune
   * dockerode: pruneNetworks
   */
  pruneNetworks(options?: object): Promise<any>;
}
