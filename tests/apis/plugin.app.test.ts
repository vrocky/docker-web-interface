import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Plugin API (real app, DI mock core)', () => {
  it('GET /api/plugins should list plugins', async () => {
    const res = await request(app).get('/api/plugins');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/plugins should create a plugin', async () => {
    const res = await request(app).post('/api/plugins').send({ Name: 'mock-plugin' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-plugin');
  });

  it('GET /api/plugins/:id should inspect a plugin', async () => {
    const res = await request(app).get('/api/plugins/mock-plugin');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-plugin');
  });

  it('DELETE /api/plugins/:id should remove a plugin', async () => {
    const res = await request(app).delete('/api/plugins/mock-plugin');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
