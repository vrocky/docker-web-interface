import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { OpenAPIV3 } from 'openapi-types';
import SwaggerParser from '@apidevtools/swagger-parser';

describe('OpenAPI Spec', () => {
  const specPath = path.resolve(__dirname, '../../src/openapi.yaml');
  let spec: OpenAPIV3.Document;

  it('should load and parse the YAML file without error', () => {
    const file = fs.readFileSync(specPath, 'utf8');
    spec = yaml.load(file) as OpenAPIV3.Document;
    expect(spec).toBeDefined();
    expect(spec.openapi).toBe('3.0.3');
    expect(spec.paths).toBeDefined();
  });

  it('should validate against OpenAPI schema', async () => {
    const parser = new SwaggerParser();
    await expect(parser.validate(specPath)).resolves.toBeDefined();
  });

  it('should contain all main resource paths', () => {
    const expectedPaths = [
      '/containers', '/containers/{id}',
      '/images', '/images/{id}',
      '/volumes', '/volumes/{id}',
      '/networks', '/networks/{id}',
      '/execs', '/execs/{id}',
      '/nodes', '/nodes/{id}',
      '/tasks', '/tasks/{id}',
      '/services', '/services/{id}',
      '/plugins', '/plugins/{id}',
      '/secrets', '/secrets/{id}',
      '/config'
    ];
    for (const p of expectedPaths) {
      expect(spec.paths).toHaveProperty(p);
    }
  });

  it('should have required HTTP methods and response codes for all resources', () => {
    const resourceChecks = [
      { path: '/containers', methods: ['get', 'post'], codes: ['200'] },
      { path: '/containers/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/images', methods: ['get', 'post'], codes: ['200'] },
      { path: '/images/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/volumes', methods: ['get', 'post'], codes: ['200'] },
      { path: '/volumes/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/networks', methods: ['get', 'post'], codes: ['200'] },
      { path: '/networks/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/execs', methods: ['get', 'post'], codes: ['200'] },
      { path: '/execs/{id}', methods: ['delete'], codes: ['200'] },
      { path: '/nodes', methods: ['get', 'post'], codes: ['200'] },
      { path: '/nodes/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/tasks', methods: ['get', 'post'], codes: ['200', '201'] },
      { path: '/tasks/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/services', methods: ['get', 'post'], codes: ['200'] },
      { path: '/services/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/plugins', methods: ['get', 'post'], codes: ['200'] },
      { path: '/plugins/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/secrets', methods: ['get', 'post'], codes: ['200'] },
      { path: '/secrets/{id}', methods: ['get', 'delete'], codes: ['200'] },
      { path: '/config', methods: ['get'], codes: ['200'] },
    ];
    for (const { path, methods, codes } of resourceChecks) {
      const pathObj = spec.paths[path] as OpenAPIV3.PathItemObject | undefined;
      expect(pathObj).toBeDefined();
      for (const method of methods) {
        const op = (pathObj && (pathObj as any)[method]) as OpenAPIV3.OperationObject | undefined;
        expect(op).toBeDefined();
        const responses = op && op.responses;
        expect(responses).toBeDefined();
        for (const code of codes) {
          expect(responses && responses[code]).toBeDefined();
        }
      }
    }
  });
});
