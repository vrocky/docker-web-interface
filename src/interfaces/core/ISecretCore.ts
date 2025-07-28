// Protocol-compliant interface for core layer, generated from checklist-secret-apis.md
export interface ISecretCore {
  listSecrets(options?: object): Promise<any[]>;
  createSecret(options: object): Promise<any>;
  inspectSecret(id: string): Promise<any>;
  removeSecret(id: string): Promise<void>;
  updateSecret(id: string, options: object): Promise<any>;
}
