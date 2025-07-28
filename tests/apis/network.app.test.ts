import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Network API (real app, DI mock core)', () => {
  it('GET /api/networks should list networks', async () => {
    const res = await request(app).get('/api/networks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/networks should create a network', async () => {
    const res = await request(app).post('/api/networks').send({ Name: 'mock-net' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-net');
  });

  it('GET /api/networks/:id should inspect a network', async () => {
    const res = await request(app).get('/api/networks/mock-net');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-net');
  });

  it('DELETE /api/networks/:id should remove a network', async () => {
    const res = await request(app).delete('/api/networks/mock-net');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
