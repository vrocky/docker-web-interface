import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Container API (real app, DI mock core)', () => {
  it('GET /api/containers should list containers', async () => {
    const res = await request(app).get('/api/containers');
    expect(res.status).toBe(200);
    // Add protocol-compliant assertion for mock
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/containers should create a container', async () => {
    const res = await request(app).post('/api/containers').send({ Image: 'alpine' });
    expect(res.status).toBe(200);
    expect(res.body.Image).toBe('alpine');
  });

  it('GET /api/containers/:id should inspect a container', async () => {
    const res = await request(app).get('/api/containers/mock-container');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-container');
  });

  it('DELETE /api/containers/:id should remove a container', async () => {
    const res = await request(app).delete('/api/containers/mock-container');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
