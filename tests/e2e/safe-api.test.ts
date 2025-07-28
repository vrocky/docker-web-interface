// Conditional test helpers
function testOrSkip(title: string, fn: jest.ProvidesCallback) {
  const dockerAvailable = process.env.DOCKER_RUNNING === 'true';
  (dockerAvailable ? test : test.skip)(title, fn);
}

function testOrSkipSwarm(title: string, fn: jest.ProvidesCallback) {
  const swarmAvailable = process.env.DOCKER_SWARM === 'true';
  (swarmAvailable ? test : test.skip)(title, fn);
}
import { spawn } from 'child_process';
import request from 'supertest';

const HOST = '127.0.0.1';
const PORT = 3100; // Use a test port
const BASE_URL = `http://${HOST}:${PORT}`;
let serverProcess: any;

// Helper to wait for server to be ready
function waitForServer(url: string, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    (function check() {
      request(url).get('/api/containers').end((err, res) => {
        if (res && res.status === 200) return resolve(true);
        if (Date.now() - start > timeout) return reject(new Error('Server did not start in time'));
        setTimeout(check, 200);
      });
    })();
  });
}

beforeAll(async () => {
  serverProcess = spawn('npx', ['ts-node', 'src/index.ts', `--port=${PORT}`, `--host=${HOST}`], {
    stdio: 'inherit',
    shell: true,
  });
  await waitForServer(BASE_URL);
});

afterAll(() => {
  if (serverProcess) serverProcess.kill();
});

describe('Safe API E2E', () => {
  testOrSkip('GET /api/containers should list containers', async () => {
    const res = await request(BASE_URL).get('/api/containers');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkip('GET /api/images should list images', async () => {
    const res = await request(BASE_URL).get('/api/images');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkip('GET /api/volumes should list volumes', async () => {
    const res = await request(BASE_URL).get('/api/volumes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body) || typeof res.body === 'object').toBe(true);
  });

  testOrSkip('GET /api/networks should list networks', async () => {
    const res = await request(BASE_URL).get('/api/networks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkip('GET /api/plugins should list plugins', async () => {
    const res = await request(BASE_URL).get('/api/plugins');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkipSwarm('GET /api/services should list services', async () => {
    const res = await request(BASE_URL).get('/api/services');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkipSwarm('GET /api/tasks should list tasks', async () => {
    const res = await request(BASE_URL).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkipSwarm('GET /api/nodes should list nodes', async () => {
    const res = await request(BASE_URL).get('/api/nodes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkipSwarm('GET /api/secrets should list secrets', async () => {
    const res = await request(BASE_URL).get('/api/secrets');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkipSwarm('GET /api/configs should list configs', async () => {
    const res = await request(BASE_URL).get('/api/configs');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  testOrSkip('GET /api/execs should list execs', async () => {
    const res = await request(BASE_URL).get('/api/execs');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
