import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Image API (real app, DI mock core)', () => {
  it('GET /api/images should list images', async () => {
    const res = await request(app).get('/api/images');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/images should create an image', async () => {
    const res = await request(app).post('/api/images').send({ RepoTag: 'alpine:latest' });
    expect(res.status).toBe(200);
    expect(res.body.RepoTag).toBe('alpine:latest');
  });

  it('GET /api/images/:id should inspect an image', async () => {
    const res = await request(app).get('/api/images/mock-image');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-image');
  });

  it('DELETE /api/images/:id should remove an image', async () => {
    const res = await request(app).delete('/api/images/mock-image');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
