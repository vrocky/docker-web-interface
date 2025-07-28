
import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Volume API (real app, DI mock core)', () => {
  it('GET /api/volumes should list volumes', async () => {
    const res = await request(app).get('/api/volumes');
    expect(res.status).toBe(200);
    expect(res.body[0].Name).toBe('mock-volume');
  });

  it('POST /api/volumes should create a volume', async () => {
    const res = await request(app).post('/api/volumes').send({ Driver: 'local' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-volume');
  });

  it('GET /api/volumes/:name should inspect a volume', async () => {
    const res = await request(app).get('/api/volumes/mock-volume');
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-volume');
  });

  it('DELETE /api/volumes/:name should remove a volume', async () => {
    const res = await request(app).delete('/api/volumes/mock-volume');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });

  it('POST /api/volumes/prune should prune volumes', async () => {
    const res = await request(app).post('/api/volumes/prune');
    expect(res.status).toBe(200);
    expect(res.body.VolumesDeleted).toContain('mock-volume');
  });
});
