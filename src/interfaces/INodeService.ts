// Protocol-compliant interface, generated from checklist-node-apis.md
export interface INodeService {
  listNodes(options?: object): Promise<any[]>;
  inspectNode(id: string): Promise<any>;
  removeNode(id: string): Promise<void>;
  updateNode(id: string, options: object): Promise<any>;
  createNode(options: object): Promise<any>;
}
