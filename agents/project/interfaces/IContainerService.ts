// Interface for Container operations (Protocol-compliant)
// Methods generated strictly from checklist-container-apis.md
export interface IContainerService {
  /**
   * List all containers
   * HTTP: GET /containers
   * dockerode: listContainers
   */
  listContainers(options?: object): Promise<any[]>;

  /**
   * Create a new container
   * HTTP: POST /containers
   * dockerode: createContainer
   */
  createContainer(options: object): Promise<any>;

  /**
   * Inspect a container
   * HTTP: GET /containers/:id
   * dockerode: getContainer(id).inspect
   */
  inspectContainer(id: string): Promise<any>;

  /**
   * Start a container
   * HTTP: POST /containers/:id/start
   * dockerode: getContainer(id).start
   */
  startContainer(id: string): Promise<void>;

  /**
   * Stop a container
   * HTTP: POST /containers/:id/stop
   * dockerode: getContainer(id).stop
   */
  stopContainer(id: string): Promise<void>;

  /**
   * Restart a container
   * HTTP: POST /containers/:id/restart
   * dockerode: getContainer(id).restart
   */
  restartContainer(id: string): Promise<void>;

  /**
   * Pause a container
   * HTTP: POST /containers/:id/pause
   * dockerode: getContainer(id).pause
   */
  pauseContainer(id: string): Promise<void>;

  /**
   * Unpause a container
   * HTTP: POST /containers/:id/unpause
   * dockerode: getContainer(id).unpause
   */
  unpauseContainer(id: string): Promise<void>;

  /**
   * Remove a container
   * HTTP: DELETE /containers/:id
   * dockerode: getContainer(id).remove
   */
  removeContainer(id: string, options?: object): Promise<void>;

  /**
   * Update a container
   * HTTP: POST /containers/:id/update
   * dockerode: getContainer(id).update
   */
  updateContainer(id: string, options: object): Promise<any>;

  /**
   * Rename a container
   * HTTP: POST /containers/:id/rename
   * dockerode: getContainer(id).rename
   */
  renameContainer(id: string, newName: string): Promise<void>;

  /**
   * Attach to a container
   * HTTP: POST /containers/:id/attach
   * dockerode: getContainer(id).attach
   */
  attachContainer(id: string, options?: object): Promise<any>;

  /**
   * Wait for a container
   * HTTP: POST /containers/:id/wait
   * dockerode: getContainer(id).wait
   */
  waitContainer(id: string): Promise<any>;

  /**
   * Kill a container
   * HTTP: POST /containers/:id/kill
   * dockerode: getContainer(id).kill
   */
  killContainer(id: string, signal?: string): Promise<void>;

  /**
   * Commit a container
   * HTTP: POST /containers/:id/commit
   * dockerode: getContainer(id).commit
   */
  commitContainer(id: string, options: object): Promise<any>;

  /**
   * Export a container
   * HTTP: GET /containers/:id/export
   * dockerode: getContainer(id).export
   */
  exportContainer(id: string): Promise<Buffer>;

  /**
   * Container stats
   * HTTP: GET /containers/:id/stats
   * dockerode: getContainer(id).stats
   */
  getContainerStats(id: string, options?: object): Promise<any>;

  /**
   * Container logs
   * HTTP: GET /containers/:id/logs
   * dockerode: getContainer(id).logs
   */
  getContainerLogs(id: string, options?: object): Promise<string>;

  /**
   * Top processes in container
   * HTTP: GET /containers/:id/top
   * dockerode: getContainer(id).top
   */
  getContainerTop(id: string, options?: object): Promise<any>;

  /**
   * Resize container TTY
   * HTTP: POST /containers/:id/resize
   * dockerode: getContainer(id).resize
   */
  resizeContainer(id: string, options: object): Promise<void>;

  /**
   * Exec in container
   * HTTP: POST /containers/:id/exec
   * dockerode: getContainer(id).exec
   */
  execInContainer(id: string, options: object): Promise<any>;

  /**
   * FS changes in container
   * HTTP: GET /containers/:id/changes
   * dockerode: getContainer(id).changes
   */
  getContainerChanges(id: string): Promise<any>;

  /**
   * Get archive from container
   * HTTP: GET /containers/:id/archive
   * dockerode: getContainer(id).getArchive
   */
  getContainerArchive(id: string, options: object): Promise<any>;

  /**
   * Put archive to container
   * HTTP: POST /containers/:id/archive
   * dockerode: getContainer(id).putArchive
   */
  putContainerArchive(id: string, options: object): Promise<any>;

  /**
   * Prune containers
   * HTTP: POST /containers/prune
   * dockerode: pruneContainers
   */
  pruneContainers(options?: object): Promise<any>;
}
