// Custom test DI container setup for integration tests
import { Container } from 'inversify';
import { TYPES } from '../../src/inversify.config';
import { IAppCore } from '../../src/interfaces/core/IAppCore';
import { MockAppCoreForDI } from './mockAppCoreForDI';
import { IContainerService } from '../../src/interfaces/IContainerService';
import { ContainerService } from '../../src/services/ContainerService';
import { IImageService } from '../../src/interfaces/IImageService';
import { ImageService } from '../../src/services/ImageService';
import { IVolumeService } from '../../src/interfaces/IVolumeService';
import { VolumeService } from '../../src/services/VolumeService';
import { INetworkService } from '../../src/interfaces/INetworkService';
import { NetworkService } from '../../src/services/NetworkService';
import { IPluginService } from '../../src/interfaces/IPluginService';
import { PluginService } from '../../src/services/PluginService';
import { IServiceService } from '../../src/interfaces/IServiceService';
import { ServiceService } from '../../src/services/ServiceService';
import { ITaskService } from '../../src/interfaces/ITaskService';
import { TaskService } from '../../src/services/TaskService';
import { INodeService } from '../../src/interfaces/INodeService';
import { NodeService } from '../../src/services/NodeService';
import { ISecretService } from '../../src/interfaces/ISecretService';
import { SecretService } from '../../src/services/SecretService';
import { IConfigService } from '../../src/interfaces/IConfigService';
import { ConfigService } from '../../src/services/ConfigService';
import { IExecService } from '../../src/interfaces/IExecService';
import { ExecService } from '../../src/services/ExecService';

export function createTestContainer() {
  const container = new Container();
  // Bind mock AppCore
  container.bind<IAppCore>(TYPES.IAppCore).toConstantValue(new MockAppCoreForDI());
  // Bind all services to use the mock AppCore
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
