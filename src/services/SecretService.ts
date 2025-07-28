import { ISecretService } from '../interfaces/ISecretService';
import { IAppCore } from '../interfaces/core/IAppCore';

export class SecretService implements ISecretService {
  private appCore: IAppCore;
  constructor(appCore: IAppCore) {
    this.appCore = appCore;
  }
  async listSecrets(options?: object) {
    return this.appCore.secrets.listSecrets(options);
  }
  async createSecret(options: object) {
    return this.appCore.secrets.createSecret(options);
  }
  async inspectSecret(id: string) {
    return this.appCore.secrets.inspectSecret(id);
  }
  async removeSecret(id: string) {
    return this.appCore.secrets.removeSecret(id);
  }
  async updateSecret(id: string, options: object) {
    return this.appCore.secrets.updateSecret(id, options);
  }
}
