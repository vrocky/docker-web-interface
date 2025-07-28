import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Node API (real app, DI mock core)', () => {
  it('GET /api/nodes should list nodes', async () => {
    const res = await request(app).get('/api/nodes');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/nodes should create a node', async () => {
    const res = await request(app).post('/api/nodes').send({ Name: 'mock-node' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-node');
  });

  it('GET /api/nodes/:id should inspect a node', async () => {
    const res = await request(app).get('/api/nodes/mock-node');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-node');
  });

  it('DELETE /api/nodes/:id should remove a node', async () => {
    const res = await request(app).delete('/api/nodes/mock-node');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
