
import request from 'supertest';
import app from '../../src/index';

describe('E2E Safe API Tests', () => {
  test('GET /api/containers returns array', async () => {
    const res = await request(app).get('/api/containers');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/images returns array', async () => {
    const res = await request(app).get('/api/images');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
