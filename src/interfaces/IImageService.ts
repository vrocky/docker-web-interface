// Protocol-compliant interface, generated from checklist-image-apis.md
export interface IImageService {
  listImages(options?: object): Promise<any[]>;
  createImage(options: object): Promise<any>;
  inspectImage(id: string): Promise<any>;
  removeImage(id: string, options?: object): Promise<void>;
  tagImage(id: string, repo: string, tag?: string): Promise<void>;
  pushImage(id: string, options?: object): Promise<any>;
  pullImage(repoTag: string, options?: object): Promise<any>;
  getImageHistory(id: string): Promise<any[]>;
  searchImages(term: string, options?: object): Promise<any[]>;
  pruneImages(options?: object): Promise<any>;
  getImage(id: string): Promise<any>;
  loadImage(options: object): Promise<any>;
  importImage(options: object): Promise<any>;
}
