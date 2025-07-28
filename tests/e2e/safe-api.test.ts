import request from 'supertest';
import express from 'express';
import containersRouter from '../../src/routes/containers';
import imagesRouter from '../../src/routes/images';

const app = express();
app.use(express.json());
app.use('/api/containers', containersRouter);
app.use('/api/images', imagesRouter);

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
