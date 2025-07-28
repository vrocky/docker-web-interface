// Protocol-compliant interface for core layer, generated from checklist-network-apis.md
export interface INetworkCore {
  listNetworks(options?: object): Promise<any[]>;
  createNetwork(options: object): Promise<any>;
  inspectNetwork(id: string): Promise<any>;
  removeNetwork(id: string): Promise<void>;
  connectNetwork(id: string, options: object): Promise<void>;
  disconnectNetwork(id: string, options: object): Promise<void>;
  pruneNetworks(options?: object): Promise<any>;
}
