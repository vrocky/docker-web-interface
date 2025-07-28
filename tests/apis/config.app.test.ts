import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Config API (real app, DI mock core)', () => {
  it('GET /api/configs should list configs', async () => {
    const res = await request(app).get('/api/configs');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/configs should create a config', async () => {
    const res = await request(app).post('/api/configs').send({ Name: 'mock-config' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-config');
  });

  it('GET /api/configs/:id should inspect a config', async () => {
    const res = await request(app).get('/api/configs/mock-config');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-config');
  });

  it('DELETE /api/configs/:id should remove a config', async () => {
    const res = await request(app).delete('/api/configs/mock-config');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
