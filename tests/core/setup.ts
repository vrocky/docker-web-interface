// tests/core/setup.ts
// Global Jest setup for all core tests

import { CoreContext } from '../../src/core/CoreContext';
import { IDockerUtils } from '../../src/interfaces/core/IDockerUtils';

export const dockerUtilsMock: IDockerUtils = {
  isDockerRunning: jest.fn().mockResolvedValue(true),
  ensureDockerRunning: jest.fn().mockResolvedValue(true),
};

export function createTestContext(overrides: any = {}) {
  return new CoreContext({
    docker: overrides.docker || {},
    dockerUtils: overrides.dockerUtils || dockerUtilsMock,
    logger: overrides.logger,
    projectId: overrides.projectId,
    userId: overrides.userId,
  });
}

// Optionally, silence console.error for cleaner test output
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});
