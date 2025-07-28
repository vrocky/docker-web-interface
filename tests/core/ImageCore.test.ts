import Docker from 'dockerode';
import { ImageCore } from '../../src/core/ImageCore';

describe('ImageCore (read-only)', () => {
  let docker: Docker;
  let core: ImageCore;

  beforeAll(() => {
    docker = new Docker();
    core = new ImageCore(docker);
  });

  test('listImages returns an array', async () => {
    const images = await core.listImages();
    expect(Array.isArray(images)).toBe(true);
  });
});

describe('ImageCore (side effects, mocked)', () => {
  let core: ImageCore;
  let dockerMock: any;

  beforeEach(() => {
    dockerMock = {
      getImage: jest.fn().mockReturnValue({
        remove: jest.fn().mockResolvedValue(undefined),
      }),
      listImages: jest.fn().mockResolvedValue([]),
    };
    core = new ImageCore(dockerMock);
  });

  test('removeImage calls docker.getImage().remove', async () => {
    await core.removeImage('imgid');
    expect(dockerMock.getImage).toHaveBeenCalledWith('imgid');
    expect(dockerMock.getImage().remove).toHaveBeenCalled();
  });
});
