import Docker from 'dockerode';
import { ExecCore } from '../../src/core/ExecCore';

describe('ExecCore (side effects, mocked)', () => {
  let core: ExecCore;
  let dockerMock: any;

  beforeEach(() => {
    dockerMock = {
      getContainer: jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue({}),
      }),
      getExec: jest.fn().mockReturnValue({
        start: jest.fn().mockResolvedValue({}),
        inspect: jest.fn().mockResolvedValue({}),
        resize: jest.fn().mockResolvedValue(undefined),
      }),
    };
    const CoreContext = require('../../src/core/CoreContext').CoreContext;
    core = new ExecCore(new CoreContext({ docker: dockerMock }));
  });

  test('createExec calls docker.getContainer().exec', async () => {
    await core.createExec('cid', { Cmd: ['ls'] });
    expect(dockerMock.getContainer).toHaveBeenCalledWith('cid');
    expect(dockerMock.getContainer().exec).toHaveBeenCalledWith({ Cmd: ['ls'] });
  });

  test('startExec calls docker.getExec().start', async () => {
    await core.startExec('eid', {});
    expect(dockerMock.getExec).toHaveBeenCalledWith('eid');
    expect(dockerMock.getExec().start).toHaveBeenCalledWith({});
  });

  test('inspectExec calls docker.getExec().inspect', async () => {
    await core.inspectExec('eid');
    expect(dockerMock.getExec).toHaveBeenCalledWith('eid');
    expect(dockerMock.getExec().inspect).toHaveBeenCalled();
  });

  test('resizeExec calls docker.getExec().resize', async () => {
    await core.resizeExec('eid', { Height: 40, Width: 80 });
    expect(dockerMock.getExec).toHaveBeenCalledWith('eid');
    expect(dockerMock.getExec().resize).toHaveBeenCalledWith({ Height: 40, Width: 80 });
  });
});
