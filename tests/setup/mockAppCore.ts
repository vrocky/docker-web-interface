import { MockVolumeCore } from './mocks/MockVolumeCore';

export class MockAppCore {
  public volumes: any;
  constructor() {
    this.volumes = new MockVolumeCore();
  }
  // Add other core mocks as needed
}
