
import { AppCore } from '../../src/core/AppCore';
import './setup';
import Docker from 'dockerode';


function testOrSkip(title: string, fn: jest.ProvidesCallback) {
  const dockerAvailable = process.env.DOCKER_RUNNING === 'true';
  (dockerAvailable ? test : test.skip)(title, fn);
}

function testOrSkipSwarm(title: string, fn: jest.ProvidesCallback) {
  const swarmAvailable = process.env.DOCKER_SWARM === 'true';
  (swarmAvailable ? test : test.skip)(title, fn);
}

describe('AppCore Integration (Read-Only)', () => {
  let appCore: AppCore;

  beforeAll(() => {
    appCore = new AppCore();
  });

  testOrSkip('should list containers (read-only)', async () => {
    const containers = await appCore.containers.listContainers();
    expect(Array.isArray(containers)).toBe(true);
  });

  testOrSkip('should list images (read-only)', async () => {
    const images = await appCore.images.listImages();
    expect(Array.isArray(images)).toBe(true);
  });

  testOrSkip('should list volumes (read-only)', async () => {
    const volumes = await appCore.volumes.listVolumes();
    expect(Array.isArray(volumes)).toBe(true);
  });

  testOrSkip('should list networks (read-only)', async () => {
    const networks = await appCore.networks.listNetworks();
    expect(Array.isArray(networks)).toBe(true);
  });

  testOrSkip('should list plugins (read-only)', async () => {
    const plugins = await appCore.plugins.listPlugins();
    expect(Array.isArray(plugins)).toBe(true);
  });

  testOrSkipSwarm('should list services (read-only)', async () => {
    const services = await appCore.services.listServices();
    expect(Array.isArray(services)).toBe(true);
  });

  testOrSkipSwarm('should list tasks (read-only)', async () => {
    const tasks = await appCore.tasks.listTasks();
    expect(Array.isArray(tasks)).toBe(true);
  });

  testOrSkipSwarm('should list nodes (read-only)', async () => {
    const nodes = await appCore.nodes.listNodes();
    expect(Array.isArray(nodes)).toBe(true);
  });

  testOrSkipSwarm('should list secrets (read-only)', async () => {
    const secrets = await appCore.secrets.listSecrets();
    expect(Array.isArray(secrets)).toBe(true);
  });

  testOrSkipSwarm('should list configs (read-only)', async () => {
    const configs = await appCore.configs.listConfigs();
    expect(Array.isArray(configs)).toBe(true);
  });
});
