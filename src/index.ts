

import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { createContainersRouter } from './routes/containers';
import { createImagesRouter } from './routes/images';
import { createVolumesRouter } from './routes/volumes';
import { createNetworksRouter } from './routes/networks';
import { createPluginsRouter } from './routes/plugins';
import { createServicesRouter } from './routes/services';
import { createTasksRouter } from './routes/tasks';
import { createNodesRouter } from './routes/nodes';
import { createSecretsRouter } from './routes/secrets';
import { createConfigsRouter } from './routes/configs';
import { createExecsRouter } from './routes/execs';

import { createContainersController } from './controllers/containers';
import { createImagesController } from './controllers/images';
import { createVolumesController } from './controllers/volumes';
import { createNetworksController } from './controllers/networks';
import { createPluginsController } from './controllers/plugins';
import { createServicesController } from './controllers/services';
import { createTasksController } from './controllers/tasks';
import { createNodesController } from './controllers/nodes';
import { createSecretsController } from './controllers/secrets';
import { createConfigsController } from './controllers/configs';
import { createExecsController } from './controllers/execs';
import { createContainer, TYPES } from './inversify.config';




// CLI argument parsing utility
function getArg(name: string, defaultValue: string): string {
  const arg = process.argv.find(a => a.startsWith(`--${name}=`));
  if (arg) {
    return arg.split('=')[1];
  }
  return defaultValue;
}

// App factory
// ...existing code...

// Main entrypoint for CLI usage
function runCli() {
  const HOST: string = getArg('host', '127.0.0.1');
  const PORT: number = parseInt(getArg('port', '3000'), 10);
  const container = createContainer();
  const app = createApp(container);
  app.listen(PORT, HOST, () => {
    console.log(`Docker Admin API listening at http://${HOST}:${PORT}`);
  });
}

export function createApp(container: any) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // Wire controllers/routers from DI container
  const containersController = createContainersController(container.get(TYPES.IContainerService));
  const imagesController = createImagesController(container.get(TYPES.IImageService));
  const volumesController = createVolumesController(container.get(TYPES.IVolumeService));
  const networksController = createNetworksController(container.get(TYPES.INetworkService));
  const pluginsController = createPluginsController(container.get(TYPES.IPluginService));
  const servicesController = createServicesController(container.get(TYPES.IServiceService));
  const tasksController = createTasksController(container.get(TYPES.ITaskService));
  const nodesController = createNodesController(container.get(TYPES.INodeService));
  const secretsController = createSecretsController(container.get(TYPES.ISecretService));
  const configsController = createConfigsController(container.get(TYPES.IConfigService));
  const execsController = createExecsController(container.get(TYPES.IExecService));

  app.use('/api/containers', createContainersRouter(containersController));
  app.use('/api/images', createImagesRouter(imagesController));
  app.use('/api/volumes', createVolumesRouter(volumesController));
  app.use('/api/networks', createNetworksRouter(networksController));
  app.use('/api/plugins', createPluginsRouter(pluginsController));
  app.use('/api/services', createServicesRouter(servicesController));
  app.use('/api/tasks', createTasksRouter(tasksController));
  app.use('/api/nodes', createNodesRouter(nodesController));
  app.use('/api/secrets', createSecretsRouter(secretsController));
  app.use('/api/configs', createConfigsRouter(configsController));
  app.use('/api/execs', createExecsRouter(execsController));

  // Error handler for user-friendly errors
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err) {
      res.status(500).json({ error: err.message || 'Internal server error' });
    } else {
      next();
    }
  });

  return app;
}


// Export for module usage
export const container = createContainer();
export const app = createApp(container);
export { TYPES, createContainer };

// If run directly, start the server using CLI args
if (require.main === module) {
  runCli();
}
