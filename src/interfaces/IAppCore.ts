import { ICoreContainerApi } from './ICoreContainerApi';
import { ICoreImageApi } from './ICoreImageApi';
import Docker from 'dockerode';

export interface IAppCore {
  docker: Docker;
  containers: ICoreContainerApi;
  images: ICoreImageApi;
}
