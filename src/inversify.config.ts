
import { Container } from 'inversify';
import { IContainerService } from './interfaces/IContainerService';
import { IImageService } from './interfaces/IImageService';
import { IAppCore } from './interfaces/IAppCore';
import { AppCore } from './core/AppCore';
import { ContainerService } from './services/ContainerService';
import { ImageService } from './services/ImageService';

const TYPES = {
  IContainerService: Symbol.for('IContainerService'),
  IImageService: Symbol.for('IImageService'),
  IAppCore: Symbol.for('IAppCore'),
};

const container = new Container();

// Bind god object (AppCore) as singleton
container.bind<IAppCore>(TYPES.IAppCore).to(AppCore).inSingletonScope();

// Bind services, injecting god object
container.bind<IContainerService>(TYPES.IContainerService).toDynamicValue((ctx: any) => {
  const appCore = ctx.container.get(TYPES.IAppCore);
  return new ContainerService(appCore);
}).inSingletonScope();

container.bind<IImageService>(TYPES.IImageService).toDynamicValue((ctx: any) => {
  const appCore = ctx.container.get(TYPES.IAppCore);
  return new ImageService(appCore);
}).inSingletonScope();

export { container, TYPES };
