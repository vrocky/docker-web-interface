import Docker from 'dockerode';

import { ImageCore } from './ImageCore';
import { VolumeCore } from './VolumeCore';
import { NetworkCore } from './NetworkCore';
import { PluginCore } from './PluginCore';
import { ServiceCore } from './ServiceCore';
import { TaskCore } from './TaskCore';
import { NodeCore } from './NodeCore';
import { SecretCore } from './SecretCore';
import { ConfigCore } from './ConfigCore';
import { ExecCore } from './ExecCore';
import { IAppCore } from '../interfaces/core/IAppCore';
import { IContainerCore } from '../interfaces/core/IContainerCore';
import { IImageCore } from '../interfaces/core/IImageCore';
import { IVolumeCore } from '../interfaces/core/IVolumeCore';
import { INetworkCore } from '../interfaces/core/INetworkCore';
import { IPluginCore } from '../interfaces/core/IPluginCore';
import { IServiceCore } from '../interfaces/core/IServiceCore';
import { ITaskCore } from '../interfaces/core/ITaskCore';
import { INodeCore } from '../interfaces/core/INodeCore';
import { ISecretCore } from '../interfaces/core/ISecretCore';
import { IConfigCore } from '../interfaces/core/IConfigCore';
import { IExecCore } from '../interfaces/core/IExecCore';
import { CoreContext } from './CoreContext';
import { ContainerCore } from './ContainerCore';

export class AppCore implements IAppCore {
  public readonly docker: Docker;
  public readonly containers: IContainerCore;
  public readonly images: IImageCore;
  public readonly volumes: IVolumeCore;
  public readonly networks: INetworkCore;
  public readonly plugins: IPluginCore;
  public readonly services: IServiceCore;
  public readonly tasks: ITaskCore;
  public readonly nodes: INodeCore;
  public readonly secrets: ISecretCore;
  public readonly configs: IConfigCore;
  public readonly execs: IExecCore;

  constructor(params: Partial<CoreContext> = {}) {
    this.docker = params.docker || new Docker();
    const context = new CoreContext({ ...params, docker: this.docker });
    this.containers = new ContainerCore(context);
    this.images = new ImageCore(context);
    this.volumes = new VolumeCore(context);
    this.networks = new NetworkCore(context);
    this.plugins = new PluginCore(context);
    this.services = new ServiceCore(context);
    this.tasks = new TaskCore(context);
    this.nodes = new NodeCore(context);
    this.secrets = new SecretCore(context);
    this.configs = new ConfigCore(context);
    this.execs = new ExecCore(context);
  }
}
