// Protocol-compliant interface, generated from checklist-volume-apis.md
export interface IVolumeService {
  listVolumes(options?: object): Promise<any[]>;
  createVolume(options: object): Promise<any>;
  inspectVolume(name: string): Promise<any>;
  removeVolume(name: string, options?: object): Promise<void>;
  pruneVolumes(options?: object): Promise<any>;
}
