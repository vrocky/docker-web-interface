import Docker from 'dockerode';
import { ContainerCore } from './ContainerCore';
import { ImageCore } from './ImageCore';
import { IAppCore } from '../interfaces/IAppCore';
import { ICoreContainerApi } from '../interfaces/ICoreContainerApi';
import { ICoreImageApi } from '../interfaces/ICoreImageApi';

export class AppCore implements IAppCore {
  public readonly docker: Docker;
  public readonly containers: ICoreContainerApi;
  public readonly images: ICoreImageApi;

  constructor() {
    this.docker = new Docker();
    this.containers = new ContainerCore(this.docker);
    this.images = new ImageCore(this.docker);
  }
}
