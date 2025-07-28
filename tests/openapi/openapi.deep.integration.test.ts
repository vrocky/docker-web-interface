import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import request from 'supertest';
import { createApp } from '../../src/index';
import { createTestContainer } from '../setup/createTestContainer';

describe('OpenAPI Deep Integration', () => {
  const specPath = path.resolve(__dirname, '../../src/openapi.yaml');
  let app: any;
  let spec: any;

  beforeAll(() => {
    const file = fs.readFileSync(specPath, 'utf8');
    spec = yaml.load(file);
    const testContainer = createTestContainer();
    app = createApp(testContainer);
  });

  it('should have valid OpenAPI structure', () => {
    expect(spec).toBeDefined();
    expect(spec.paths).toBeDefined();
    expect(spec.info).toBeDefined();
    expect(spec.openapi).toMatch(/^3/);
  });

  if (spec && spec.paths) {
    for (const [url, methods] of Object.entries(spec.paths)) {
      for (const [method, details] of Object.entries(methods as object)) {
        const testName = `${method.toUpperCase()} ${url}`;
        it(`should respond correctly for ${testName}`, async () => {
          let endpoint = url.replace(/{[^}]+}/g, 'mock-id');
          let req;
          if (method === 'get') {
            req = request(app).get(`/api${endpoint}`);
          } else if (method === 'post') {
            // Try to send a body if requestBody is defined
            const body = details.requestBody ? { Name: 'test', Cmd: 'echo', Image: 'alpine', RepoTag: 'alpine:latest', Driver: 'local' } : {};
            req = request(app).post(`/api${endpoint}`).send(body);
          } else if (method === 'delete') {
            req = request(app).delete(`/api${endpoint}`);
          } else {
            return;
          }
          const res = await req;
          // Check status code
          const expectedCodes = Object.keys(details.responses || {}).map(Number);
          expect(expectedCodes).toContain(res.status);
          // Check response body shape
          if (details.responses && details.responses[res.status]) {
            const desc = details.responses[res.status].description;
            expect(typeof desc).toBe('string');
          }
          // If schema is defined, check for required keys
          if (details.responses && details.responses[res.status] && details.responses[res.status].content) {
            const content = details.responses[res.status].content['application/json'];
            if (content && content.schema && content.schema.type === 'object') {
              expect(typeof res.body).toBe('object');
            }
          }
        });
      }
    }
  }
});
