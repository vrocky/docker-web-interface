import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Secret API (real app, DI mock core)', () => {
  it('GET /api/secrets should list secrets', async () => {
    const res = await request(app).get('/api/secrets');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/secrets should create a secret', async () => {
    const res = await request(app).post('/api/secrets').send({ Name: 'mock-secret' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-secret');
  });

  it('GET /api/secrets/:id should inspect a secret', async () => {
    const res = await request(app).get('/api/secrets/mock-secret');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-secret');
  });

  it('DELETE /api/secrets/:id should remove a secret', async () => {
    const res = await request(app).delete('/api/secrets/mock-secret');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
