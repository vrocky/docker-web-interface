// Interface for Volume operations (Protocol-compliant)
// Methods generated strictly from checklist-volume-apis.md
export interface IVolumeService {
  /**
   * List all volumes
   * HTTP: GET /volumes
   * dockerode: listVolumes
   */
  listVolumes(options?: object): Promise<any[]>;

  /**
   * Create a new volume
   * HTTP: POST /volumes
   * dockerode: createVolume
   */
  createVolume(options: object): Promise<any>;

  /**
   * Inspect a volume
   * HTTP: GET /volumes/:name
   * dockerode: getVolume(name).inspect
   */
  inspectVolume(name: string): Promise<any>;

  /**
   * Remove a volume
   * HTTP: DELETE /volumes/:name
   * dockerode: getVolume(name).remove
   */
  removeVolume(name: string, options?: object): Promise<void>;

  /**
   * Prune unused volumes
   * HTTP: POST /volumes/prune
   * dockerode: pruneVolumes
   */
  pruneVolumes(options?: object): Promise<any>;
}
