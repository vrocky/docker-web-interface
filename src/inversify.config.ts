
import { Container } from 'inversify';
import { IContainerService } from './interfaces/IContainerService';
import { IImageService } from './interfaces/IImageService';
import { IVolumeService } from './interfaces/IVolumeService';
import { INetworkService } from './interfaces/INetworkService';
import { IPluginService } from './interfaces/IPluginService';
import { IServiceService } from './interfaces/IServiceService';
import { ITaskService } from './interfaces/ITaskService';
import { INodeService } from './interfaces/INodeService';
import { ISecretService } from './interfaces/ISecretService';
import { IConfigService } from './interfaces/IConfigService';
import { IExecService } from './interfaces/IExecService';
import { IAppCore } from './interfaces/core/IAppCore';
import { AppCore } from './core/AppCore';
import { ContainerService } from './services/ContainerService';
import { ImageService } from './services/ImageService';
import { VolumeService } from './services/VolumeService';
import { NetworkService } from './services/NetworkService';
import { PluginService } from './services/PluginService';
import { ServiceService } from './services/ServiceService';
import { TaskService } from './services/TaskService';
import { NodeService } from './services/NodeService';
import { SecretService } from './services/SecretService';
import { ConfigService } from './services/ConfigService';
import { ExecService } from './services/ExecService';

const TYPES = {
  IContainerService: Symbol.for('IContainerService'),
  IImageService: Symbol.for('IImageService'),
  IVolumeService: Symbol.for('IVolumeService'),
  INetworkService: Symbol.for('INetworkService'),
  IPluginService: Symbol.for('IPluginService'),
  IServiceService: Symbol.for('IServiceService'),
  ITaskService: Symbol.for('ITaskService'),
  INodeService: Symbol.for('INodeService'),
  ISecretService: Symbol.for('ISecretService'),
  IConfigService: Symbol.for('IConfigService'),
  IExecService: Symbol.for('IExecService'),
  IAppCore: Symbol.for('IAppCore'),
};

export function createContainer() {
  const container = new Container();

  // Bind god object (AppCore) as singleton
  container.bind<IAppCore>(TYPES.IAppCore).to(AppCore).inSingletonScope();

  // Bind services, injecting god object
  container.bind<IContainerService>(TYPES.IContainerService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new ContainerService(appCore);
  }).inSingletonScope();

  container.bind<IImageService>(TYPES.IImageService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new ImageService(appCore);
  }).inSingletonScope();

  container.bind<IVolumeService>(TYPES.IVolumeService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new VolumeService(appCore);
  }).inSingletonScope();

  container.bind<INetworkService>(TYPES.INetworkService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new NetworkService(appCore);
  }).inSingletonScope();

  container.bind<IPluginService>(TYPES.IPluginService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new PluginService(appCore);
  }).inSingletonScope();

  container.bind<IServiceService>(TYPES.IServiceService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new ServiceService(appCore);
  }).inSingletonScope();

  container.bind<ITaskService>(TYPES.ITaskService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new TaskService(appCore);
  }).inSingletonScope();

  container.bind<INodeService>(TYPES.INodeService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new NodeService(appCore);
  }).inSingletonScope();

  container.bind<ISecretService>(TYPES.ISecretService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new SecretService(appCore);
  }).inSingletonScope();

  container.bind<IConfigService>(TYPES.IConfigService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new ConfigService(appCore);
  }).inSingletonScope();

  container.bind<IExecService>(TYPES.IExecService).toDynamicValue(() => {
    const appCore = container.get<IAppCore>(TYPES.IAppCore);
    return new ExecService(appCore);
  }).inSingletonScope();

  return container;
}

export { TYPES };
