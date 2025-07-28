import { IContainerCore } from './IContainerCore';
import { IImageCore } from './IImageCore';
import { IVolumeCore } from './IVolumeCore';
import { INetworkCore } from './INetworkCore';
import { IPluginCore } from './IPluginCore';
import { IServiceCore } from './IServiceCore';
import { ITaskCore } from './ITaskCore';
import { INodeCore } from './INodeCore';
import { ISecretCore } from './ISecretCore';
import { IConfigCore } from './IConfigCore';
import { IExecCore } from './IExecCore';
import Docker from 'dockerode';

export interface IAppCore {
  docker: Docker;
  containers: IContainerCore;
  images: IImageCore;
  volumes: IVolumeCore;
  networks: INetworkCore;
  plugins: IPluginCore;
  services: IServiceCore;
  tasks: ITaskCore;
  nodes: INodeCore;
  secrets: ISecretCore;
  configs: IConfigCore;
  execs: IExecCore;
}
