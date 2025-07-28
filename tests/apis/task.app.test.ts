import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Task API (real app, DI mock core)', () => {
  it('GET /api/tasks should list tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/tasks should create a task', async () => {
    const res = await request(app).post('/api/tasks').send({ Name: 'mock-task' });
    expect(res.status).toBe(200);
    expect(res.body.Name).toBe('mock-task');
  });

  it('GET /api/tasks/:id should inspect a task', async () => {
    const res = await request(app).get('/api/tasks/mock-task');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-task');
  });

  it('DELETE /api/tasks/:id should remove a task', async () => {
    const res = await request(app).delete('/api/tasks/mock-task');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
