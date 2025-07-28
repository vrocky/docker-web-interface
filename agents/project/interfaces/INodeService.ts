// Interface for Node operations (Protocol-compliant)
// Methods generated strictly from checklist-node-apis.md
export interface INodeService {
  /**
   * List all nodes
   * HTTP: GET /nodes
   * dockerode: listNodes
   */
  listNodes(options?: object): Promise<any[]>;

  /**
   * Inspect a node
   * HTTP: GET /nodes/:id
   * dockerode: getNode(id).inspect
   */
  inspectNode(id: string): Promise<any>;

  /**
   * Remove a node
   * HTTP: DELETE /nodes/:id
   * dockerode: getNode(id).remove
   */
  removeNode(id: string): Promise<void>;

  /**
   * Update a node
   * HTTP: POST /nodes/:id/update
   * dockerode: getNode(id).update
   */
  updateNode(id: string, options: object): Promise<any>;
}
