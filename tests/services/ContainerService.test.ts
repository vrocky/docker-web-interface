import { ContainerService } from '../../src/services/ContainerService';
import { IAppCore } from '../../src/interfaces/IAppCore';

describe('ContainerService', () => {
  let appCoreMock: jest.Mocked<IAppCore>;
  let service: ContainerService;

  beforeEach(() => {
    appCoreMock = {
      containers: {
        listContainers: jest.fn().mockResolvedValue([]),
        startContainer: jest.fn().mockResolvedValue(undefined),
        stopContainer: jest.fn().mockResolvedValue(undefined),
        restartContainer: jest.fn().mockResolvedValue(undefined),
        removeContainer: jest.fn().mockResolvedValue(undefined),
        getContainerLogs: jest.fn().mockResolvedValue('mock logs'),
      },
      images: {} as any,
      docker: {} as any,
    };
    service = new ContainerService(appCoreMock);
  });

  test('listContainers delegates to appCore.containers.listContainers', async () => {
    await service.listContainers();
    expect(appCoreMock.containers.listContainers).toHaveBeenCalled();
  });

  test('startContainer delegates to appCore.containers.startContainer', async () => {
    await service.startContainer('id');
    expect(appCoreMock.containers.startContainer).toHaveBeenCalledWith('id');
  });

  test('stopContainer delegates to appCore.containers.stopContainer', async () => {
    await service.stopContainer('id');
    expect(appCoreMock.containers.stopContainer).toHaveBeenCalledWith('id');
  });

  test('restartContainer delegates to appCore.containers.restartContainer', async () => {
    await service.restartContainer('id');
    expect(appCoreMock.containers.restartContainer).toHaveBeenCalledWith('id');
  });

  test('removeContainer delegates to appCore.containers.removeContainer', async () => {
    await service.removeContainer('id');
    expect(appCoreMock.containers.removeContainer).toHaveBeenCalledWith('id');
  });

  test('getContainerLogs delegates to appCore.containers.getContainerLogs', async () => {
    await service.getContainerLogs('id', 50);
    expect(appCoreMock.containers.getContainerLogs).toHaveBeenCalledWith('id', 50);
  });
});
