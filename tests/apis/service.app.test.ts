import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Service API (real app, DI mock core)', () => {
  it('GET /api/services should list services', async () => {
    const res = await request(app).get('/api/services');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/services should create a service', async () => {
    const res = await request(app).post('/api/services').send({ Name: 'mock-service' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-service');
  });

  it('GET /api/services/:id should inspect a service', async () => {
    const res = await request(app).get('/api/services/mock-service');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-service');
  });

  it('DELETE /api/services/:id should remove a service', async () => {
    const res = await request(app).delete('/api/services/mock-service');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
