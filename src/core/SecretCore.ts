import { ISecretService } from '../interfaces/ISecretService';
import Docker from 'dockerode';
import { CoreContext } from './CoreContext';

export class SecretCore implements ISecretService {
  private context: CoreContext;
  constructor(context: CoreContext) {
    this.context = context;
  }
    async listSecrets(options?: object) {
      return await this.context.docker.listSecrets(options || {});
    }

    async createSecret(options: object) {
      return await this.context.docker.createSecret(options);
    }

    async inspectSecret(id: string) {
      const secret = this.context.docker.getSecret(id);
      return await secret.inspect();
    }

    async removeSecret(id: string) {
      const secret = this.context.docker.getSecret(id);
      return await secret.remove({});
    }

    async updateSecret(id: string, options: object) {
      const secret = this.context.docker.getSecret(id);
      return await secret.update(options);
    }
}
