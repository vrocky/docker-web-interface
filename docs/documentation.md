# Docker GUI Browser API Documentation

## Overview
This API allows you to manage and inspect Docker containers and images on your local machine via a RESTful interface. It is designed for local development and testing, with endpoints for safe (read-only) and mutating operations.

## API Endpoints

### Containers
- `GET /api/containers` — List all containers (running, stopped, paused)
- `POST /api/containers/{id}/start` — Start a container
- `POST /api/containers/{id}/stop` — Stop a container
- `POST /api/containers/{id}/restart` — Restart a container
- `DELETE /api/containers/{id}` — Remove a container
- `GET /api/containers/{id}/logs` — Get logs for a container (supports tail query param)

### Images
- `GET /api/images` — List all local Docker images
- `DELETE /api/images/{id}` — Remove an image

## Usage
- The API is accessible only from `localhost` (127.0.0.1).
- No authentication is required for MVP.
- All endpoints return user-friendly error messages and never expose stack traces.
- See `openapi.yaml` for full specification and schema details.

## Example Requests

### List Containers
```http
GET /api/containers
```

### List Images
```http
GET /api/images
```

### Start a Container
```http
POST /api/containers/{id}/start
```

### Get Container Logs
```http
GET /api/containers/{id}/logs?tail=100
```

## OpenAPI Spec
See [`openapi.yaml`](./openapi.yaml) for the full OpenAPI 3.0 specification.

## Notes
- Only safe (read-only) endpoints are recommended for automated or E2E testing.
- Mutating endpoints should be used with caution and preferably in a test environment.

_Last updated: 2025-07-28_
