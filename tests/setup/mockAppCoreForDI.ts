import { MockContainerCore } from './mocks/MockContainerCore';
import { MockImageCore } from './mocks/MockImageCore';
import { MockVolumeCore } from './mocks/MockVolumeCore';
import { MockNetworkCore } from './mocks/MockNetworkCore';
import { MockPluginCore } from './mocks/MockPluginCore';
import { MockServiceCore } from './mocks/MockServiceCore';
import { MockTaskCore } from './mocks/MockTaskCore';
import { MockNodeCore } from './mocks/MockNodeCore';
import { MockSecretCore } from './mocks/MockSecretCore';
import { MockConfigCore } from './mocks/MockConfigCore';
import { MockExecCore } from './mocks/MockExecCore';
import { IAppCore } from '../../src/interfaces/core/IAppCore';

export class MockAppCoreForDI implements IAppCore {
  public docker: any = {};
  public containers: any;
  public images: any;
  public volumes: any;
  public networks: any;
  public plugins: any;
  public services: any;
  public tasks: any;
  public nodes: any;
  public secrets: any;
  public configs: any;
  public execs: any;
  constructor() {
    this.containers = new MockContainerCore();
    this.images = new MockImageCore();
    this.volumes = new MockVolumeCore();
    this.networks = new MockNetworkCore();
    this.plugins = new MockPluginCore();
    this.services = new MockServiceCore();
    this.tasks = new MockTaskCore();
    this.nodes = new MockNodeCore();
    this.secrets = new MockSecretCore();
    this.configs = new MockConfigCore();
    this.execs = new MockExecCore();
  }
}
