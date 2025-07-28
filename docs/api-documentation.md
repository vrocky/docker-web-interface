# Docker Admin API Documentation

This document describes all available API endpoints for the Docker Admin Server, their methods, parameters, and expected responses. All endpoints are protocol-compliant and match the OpenAPI spec in `src/openapi.yaml`.

---

## Containers
- `GET /api/containers` — List all containers
- `POST /api/containers` — Create a new container
  - Body: `{ Image: string, ... }`
- `GET /api/containers/{id}` — Inspect a container
- `DELETE /api/containers/{id}` — Remove a container

## Images
- `GET /api/images` — List all images
- `POST /api/images` — Create a new image
  - Body: `{ RepoTag: string, ... }`
- `GET /api/images/{id}` — Inspect an image
- `DELETE /api/images/{id}` — Remove an image

## Volumes
- `GET /api/volumes` — List all volumes
- `POST /api/volumes` — Create a new volume
  - Body: `{ Driver: string, ... }`
- `GET /api/volumes/{id}` — Inspect a volume
- `DELETE /api/volumes/{id}` — Remove a volume
- `POST /api/volumes/prune` — Prune unused volumes

## Networks
- `GET /api/networks` — List all networks
- `POST /api/networks` — Create a new network
  - Body: `{ Name: string, ... }`
- `GET /api/networks/{id}` — Inspect a network
- `DELETE /api/networks/{id}` — Remove a network

## Execs
- `GET /api/execs` — List all execs
- `POST /api/execs` — Create a global exec
  - Body: `{ Cmd: string, ... }`
- `GET /api/execs/{id}` — Inspect an exec
- `DELETE /api/execs/{id}` — Remove an exec

## Nodes
- `GET /api/nodes` — List all nodes
- `POST /api/nodes` — Create a node
  - Body: `{ Name: string, ... }`
- `GET /api/nodes/{id}` — Inspect a node
- `DELETE /api/nodes/{id}` — Remove a node

## Tasks
- `GET /api/tasks` — List all tasks
- `POST /api/tasks` — Create a task
  - Body: `{ Name: string, ... }`
- `GET /api/tasks/{id}` — Inspect a task
- `DELETE /api/tasks/{id}` — Remove a task

## Services
- `GET /api/services` — List all services
- `POST /api/services` — Create a service
  - Body: `{ Name: string, ... }`
- `GET /api/services/{id}` — Inspect a service
- `DELETE /api/services/{id}` — Remove a service

## Plugins
- `GET /api/plugins` — List all plugins
- `POST /api/plugins` — Create a plugin
  - Body: `{ Name: string, ... }`
- `GET /api/plugins/{id}` — Inspect a plugin
- `DELETE /api/plugins/{id}` — Remove a plugin

## Secrets
- `GET /api/secrets` — List all secrets
- `POST /api/secrets` — Create a secret
  - Body: `{ Name: string, ... }`
- `GET /api/secrets/{id}` — Inspect a secret
- `DELETE /api/secrets/{id}` — Remove a secret

## Configs
- `GET /api/configs` — List all configs
- `POST /api/configs` — Create a config
  - Body: `{ Name: string, ... }`
- `GET /api/configs/{id}` — Inspect a config
- `DELETE /api/configs/{id}` — Remove a config

---

### Notes
- All endpoints return JSON responses.
- Path parameters (e.g., `{id}`) should be replaced with the actual resource ID.
- For creation endpoints, required body fields are shown; additional fields may be supported.
- For full request/response schemas, see `src/openapi.yaml`.
