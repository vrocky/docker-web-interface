import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

let app: any;

beforeAll(() => {
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

describe('Exec API (real app, DI mock core)', () => {
  it('GET /api/execs should list execs', async () => {
    const res = await request(app).get('/api/execs');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/execs should create an exec', async () => {
    const res = await request(app).post('/api/execs').send({ Cmd: 'echo hello' });
    expect(res.status).toBe(200);
    expect(res.body.Cmd).toBe('echo hello');
  });

  it('GET /api/execs/:id should inspect an exec', async () => {
    const res = await request(app).get('/api/execs/mock-exec');
    expect(res.status).toBe(200);
    expect(res.body.Id).toBe('mock-exec');
  });

  it('DELETE /api/execs/:id should remove an exec', async () => {
    const res = await request(app).delete('/api/execs/mock-exec');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('removed');
  });
});
