
import { NodeCore } from '../../src/core/NodeCore';
import { createTestContext, dockerUtilsMock } from './setup';

describe('NodeCore (side effects, mocked)', () => {
  let core: NodeCore;
  let dockerMock: any;

  beforeEach(() => {
    dockerMock = {
      getNode: jest.fn().mockReturnValue({
        remove: jest.fn().mockResolvedValue(undefined),
      }),
    };
    core = new NodeCore(createTestContext({ docker: dockerMock, dockerUtils: dockerUtilsMock }));
  });

  test('removeNode throws if getNode returns undefined', async () => {
    dockerMock.getNode.mockReturnValueOnce(undefined);
    await expect(core.removeNode('badid')).rejects.toThrow('Container not found for id: badid');
  });

  test('updateNode throws if getNode returns undefined', async () => {
    dockerMock.getNode.mockReturnValueOnce(undefined);
    await expect(core.updateNode('badid', { Role: 'manager' })).rejects.toThrow('Container not found for id: badid');
  });

  test('inspectNode throws if getNode returns undefined', async () => {
    dockerMock.getNode.mockReturnValueOnce(undefined);
    await expect(core.inspectNode('badid')).rejects.toThrow('Container not found for id: badid');
  });

  test('removeNode calls docker.getNode().remove', async () => {
    await core.removeNode('nid');
    expect(dockerMock.getNode).toHaveBeenCalledWith('nid');
    expect(dockerMock.getNode().remove).toHaveBeenCalled();
  });
});
