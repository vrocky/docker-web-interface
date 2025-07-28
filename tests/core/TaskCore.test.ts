describe('TaskCore (read-only)', () => {
  test('listTasks returns an array', async () => {
    const dockerMock = {
      listTasks: jest.fn().mockResolvedValue(['task1', 'task2']),
    };
    const CoreContext = require('../../src/core/CoreContext').CoreContext;
    const core = new TaskCore(new CoreContext({ docker: dockerMock }));
    const tasks = await core.listTasks();
    expect(tasks).toEqual(['task1', 'task2']);
  });
});
describe('TaskCore (side effects, mocked)', () => {
  let core: TaskCore;
  let dockerMock: any;
  beforeEach(() => {
    dockerMock = {
      getTask: jest.fn(),
    };
    const CoreContext = require('../../src/core/CoreContext').CoreContext;
    core = new TaskCore(new CoreContext({ docker: dockerMock }));
  });
  test('inspectTask throws if getTask returns undefined', async () => {
    dockerMock.getTask.mockReturnValueOnce(undefined);
    await expect(core.inspectTask('badid')).rejects.toThrow('Task not found for id: badid');
  });
  test('inspectTask calls docker.getTask().inspect', async () => {
    const inspectMock = jest.fn().mockResolvedValue({});
    dockerMock.getTask.mockReturnValueOnce({ inspect: inspectMock });
    await core.inspectTask('tid');
    expect(dockerMock.getTask).toHaveBeenCalledWith('tid');
    expect(inspectMock).toHaveBeenCalled();
  });
});

import { TaskCore } from '../../src/core/TaskCore';
import { createTestContext, dockerUtilsMock } from './setup';

describe('TaskCore (read-only)', () => {
  test('listTasks returns an array', async () => {
    const dockerMock = {
      listTasks: jest.fn().mockResolvedValue(['task1', 'task2']),
    };
    const core = new TaskCore(createTestContext({ docker: dockerMock, dockerUtils: dockerUtilsMock }));
    const tasks = await core.listTasks();
    expect(tasks).toEqual(['task1', 'task2']);
  });
});

describe('TaskCore (side effects, mocked)', () => {
  let core: TaskCore;
  let dockerMock: any;

  beforeEach(() => {
    dockerMock = {
      getTask: jest.fn(),
    };
    core = new TaskCore(createTestContext({ docker: dockerMock, dockerUtils: dockerUtilsMock }));
  });

  test('inspectTask throws if getTask returns undefined', async () => {
    dockerMock.getTask.mockReturnValueOnce(undefined);
    await expect(core.inspectTask('badid')).rejects.toThrow('Task not found for id: badid');
  });

  test('inspectTask calls docker.getTask().inspect', async () => {
    const inspectMock = jest.fn().mockResolvedValue({});
    dockerMock.getTask.mockReturnValueOnce({ inspect: inspectMock });
    await core.inspectTask('tid');
    expect(dockerMock.getTask).toHaveBeenCalledWith('tid');
    expect(inspectMock).toHaveBeenCalled();
  });
});
