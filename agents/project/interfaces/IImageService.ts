// Interface for Image operations (Protocol-compliant)
// Methods generated strictly from checklist-image-apis.md
export interface IImageService {
  /**
   * List all images
   * HTTP: GET /images
   * dockerode: listImages
   */
  listImages(options?: object): Promise<any[]>;

  /**
   * Create/pull image
   * HTTP: POST /images/create
   * dockerode: createImage
   */
  createImage(options: object): Promise<any>;

  /**
   * Inspect an image
   * HTTP: GET /images/:id
   * dockerode: getImage(id).inspect
   */
  inspectImage(id: string): Promise<any>;

  /**
   * Remove an image
   * HTTP: DELETE /images/:id
   * dockerode: getImage(id).remove
   */
  removeImage(id: string, options?: object): Promise<void>;

  /**
   * Tag an image
   * HTTP: POST /images/:id/tag
   * dockerode: getImage(id).tag
   */
  tagImage(id: string, repo: string, tag?: string): Promise<void>;

  /**
   * Push an image
   * HTTP: POST /images/:id/push
   * dockerode: getImage(id).push
   */
  pushImage(id: string, options?: object): Promise<any>;

  /**
   * Pull an image
   * HTTP: POST /images/:id/pull
   * dockerode: docker.pull
   */
  pullImage(repoTag: string, options?: object): Promise<any>;

  /**
   * Image history
   * HTTP: GET /images/:id/history
   * dockerode: getImage(id).history
   */
  getImageHistory(id: string): Promise<any[]>;

  /**
   * Search images
   * HTTP: GET /images/search
   * dockerode: searchImages
   */
  searchImages(term: string, options?: object): Promise<any[]>;

  /**
   * Prune images
   * HTTP: POST /images/prune
   * dockerode: pruneImages
   */
  pruneImages(options?: object): Promise<any>;

  /**
   * Get image
   * HTTP: GET /images/:id/get
   * dockerode: getImage(id).get
   */
  getImage(id: string): Promise<any>;

  /**
   * Load image
   * HTTP: POST /images/load
   * dockerode: loadImage
   */
  loadImage(options: object): Promise<any>;

  /**
   * Import image
   * HTTP: POST /images/import
   * dockerode: importImage
   */
  importImage(options: object): Promise<any>;
}
