// Mock implementation for VolumeCore used in DI tests
import { IVolumeService } from '../../../src/interfaces/IVolumeService';
export class MockVolumeCore implements IVolumeService {
  async listVolumes(options?: object): Promise<any[]> {
    return [{ Name: 'mock-volume', Driver: 'local' }];
  }
  async createVolume(options: object): Promise<any> {
    return { Name: (options as any).Name || 'mock-volume', Driver: (options as any).Driver || 'local' };
  }
  async inspectVolume(name: string): Promise<any> {
    return { Name: name, Driver: 'local', Mountpoint: '/mock' };
  }
  async removeVolume(name: string, options?: object): Promise<void> {
    // No-op for mock
    return;
  }
  async pruneVolumes(options?: object): Promise<any> {
    return { VolumesDeleted: ['mock-volume'], SpaceReclaimed: 12345 };
  }
}
