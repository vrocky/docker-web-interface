import Docker from 'dockerode';
import { IDockerUtils } from '../interfaces/core/IDockerUtils';

export interface ICoreContext {
  docker: Docker;
  dockerUtils: IDockerUtils;
  logger?: any;
  projectId?: string;
  userId?: string;
  // Add more context fields as needed
}

export class CoreContext implements ICoreContext {
  public docker: Docker;
  public dockerUtils: IDockerUtils;
  public logger?: any;
  public projectId?: string;
  public userId?: string;

  constructor(params: Partial<ICoreContext>) {
    this.docker = params.docker || new Docker();
    this.dockerUtils = params.dockerUtils || new (require('./DockerUtils').DockerUtils)();
    this.logger = params.logger;
    this.projectId = params.projectId;
    this.userId = params.userId;
  }
}
