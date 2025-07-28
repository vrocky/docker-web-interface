// Interface for Secret operations (Protocol-compliant)
// Methods generated strictly from checklist-secret-apis.md
export interface ISecretService {
  /**
   * List all secrets
   * HTTP: GET /secrets
   * dockerode: listSecrets
   */
  listSecrets(options?: object): Promise<any[]>;

  /**
   * Create a new secret
   * HTTP: POST /secrets
   * dockerode: createSecret
   */
  createSecret(options: object): Promise<any>;

  /**
   * Inspect a secret
   * HTTP: GET /secrets/:id
   * dockerode: getSecret(id).inspect
   */
  inspectSecret(id: string): Promise<any>;

  /**
   * Remove a secret
   * HTTP: DELETE /secrets/:id
   * dockerode: getSecret(id).remove
   */
  removeSecret(id: string): Promise<void>;

  /**
   * Update a secret
   * HTTP: POST /secrets/:id/update
   * dockerode: getSecret(id).update
   */
  updateSecret(id: string, options: object): Promise<any>;
}
