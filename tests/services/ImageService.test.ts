import { ImageService } from '../../src/services/ImageService';
import { IAppCore } from '../../src/interfaces/IAppCore';

describe('ImageService', () => {
  let appCoreMock: jest.Mocked<IAppCore>;
  let service: ImageService;

  beforeEach(() => {
    appCoreMock = {
      images: {
        listImages: jest.fn().mockResolvedValue([]),
        removeImage: jest.fn().mockResolvedValue(undefined),
      },
      containers: {} as any,
      docker: {} as any,
    };
    service = new ImageService(appCoreMock);
  });

  test('listImages delegates to appCore.images.listImages', async () => {
    await service.listImages();
    expect(appCoreMock.images.listImages).toHaveBeenCalled();
  });

  test('removeImage delegates to appCore.images.removeImage', async () => {
    await service.removeImage('imgid');
    expect(appCoreMock.images.removeImage).toHaveBeenCalledWith('imgid');
  });
});
