import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

describe('OpenAPI Spec Integration', () => {
  const specPath = path.resolve(__dirname, '../../src/openapi.yaml');
  let app: any;
  let spec: any;

beforeAll(() => {
  const file = fs.readFileSync(specPath, 'utf8');
  spec = yaml.load(file);
  const testContainer = createTestContainer();
  app = createApp(testContainer);
});

it('should load OpenAPI spec and have paths', () => {
  expect(spec).toBeDefined();
  expect(spec.paths).toBeDefined();
});

if (spec && spec.paths) {
  for (const [url, methods] of Object.entries(spec.paths)) {
    for (const method of Object.keys(methods as object)) {
      const testName = `${method.toUpperCase()} ${url}`;
      it(`should respond for ${testName}`, async () => {
        let endpoint = url.replace(/{[^}]+}/g, 'mock-id');
        let res;
        if (method === 'get') {
          res = await request(app).get(`/api${endpoint}`);
        } else if (method === 'post') {
          res = await request(app).post(`/api${endpoint}`).send({});
        } else if (method === 'delete') {
          res = await request(app).delete(`/api${endpoint}`);
        } else {
          return;
        }
        expect([200, 201, 204, 404]).toContain(res.status);
      });
    }
  }
}
});
