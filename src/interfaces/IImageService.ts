export interface IImageService {
  listImages(): Promise<any[]>;
  removeImage(id: string): Promise<void>;
}
