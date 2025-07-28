import Docker from 'dockerode';
import { ContainerCore } from '../../src/core/ContainerCore';

describe('ContainerCore (read-only)', () => {
  let docker: Docker;
  let core: ContainerCore;

  beforeAll(() => {
    docker = new Docker();
    core = new ContainerCore(docker);
  });

  test('listContainers returns an array', async () => {
    const containers = await core.listContainers();
    expect(Array.isArray(containers)).toBe(true);
  });
});

// Side-effecting methods are mocked

describe('ContainerCore (side effects, mocked)', () => {
  let core: ContainerCore;
  let dockerMock: any;

  beforeEach(() => {
    dockerMock = {
      getContainer: jest.fn().mockReturnValue({
        start: jest.fn().mockResolvedValue(undefined),
        stop: jest.fn().mockResolvedValue(undefined),
        restart: jest.fn().mockResolvedValue(undefined),
        remove: jest.fn().mockResolvedValue(undefined),
        logs: jest.fn().mockResolvedValue('mock logs'),
      }),
      listContainers: jest.fn().mockResolvedValue([]),
    };
    core = new ContainerCore(dockerMock);
  });

  test('startContainer calls docker.getContainer().start', async () => {
    await core.startContainer('id');
    expect(dockerMock.getContainer).toHaveBeenCalledWith('id');
    expect(dockerMock.getContainer().start).toHaveBeenCalled();
  });

  test('stopContainer calls docker.getContainer().stop', async () => {
    await core.stopContainer('id');
    expect(dockerMock.getContainer).toHaveBeenCalledWith('id');
    expect(dockerMock.getContainer().stop).toHaveBeenCalled();
  });

  test('restartContainer calls docker.getContainer().restart', async () => {
    await core.restartContainer('id');
    expect(dockerMock.getContainer).toHaveBeenCalledWith('id');
    expect(dockerMock.getContainer().restart).toHaveBeenCalled();
  });

  test('removeContainer calls docker.getContainer().remove', async () => {
    await core.removeContainer('id');
    expect(dockerMock.getContainer).toHaveBeenCalledWith('id');
    expect(dockerMock.getContainer().remove).toHaveBeenCalledWith({ force: true });
  });

  test('getContainerLogs calls docker.getContainer().logs', async () => {
    const logs = await core.getContainerLogs('id', 50);
    expect(dockerMock.getContainer).toHaveBeenCalledWith('id');
    expect(dockerMock.getContainer().logs).toHaveBeenCalledWith({ stdout: true, stderr: true, tail: 50, timestamps: false });
    expect(logs).toBe('mock logs');
  });
});
