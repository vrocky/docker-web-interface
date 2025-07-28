export interface ICoreImageApi {
  listImages(): Promise<any[]>;
  removeImage(id: string): Promise<void>;
}
