
# Docker GUI Browser API

## What is this?
A lightweight REST API for managing and exploring Docker containers and images on your local machine. No Docker CLI or Docker Desktop required—just use your browser or any HTTP client.

## Who is it for?
- Developers and testers running Docker locally (Linux, macOS, Windows)
- Anyone who prefers a browser or API over the Docker CLI
- Not for production Docker hosts (local/dev use only)

## Features
- List all Docker containers and images
- Start, stop, restart, and remove containers
- View container logs (tail last N lines)
- Remove images
- All endpoints are accessible only from localhost (127.0.0.1)
- No authentication required for MVP
- User-friendly error messages (no stack traces)

## How do I use it?
1. Make sure Docker is running on your machine
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
4. Access the API at `http://127.0.0.1:3000`
5. See [docs/documentation.md](./docs/documentation.md) and [docs/openapi.yaml](./docs/openapi.yaml) for full API documentation and usage examples

## Example Endpoints
- `GET /api/containers` — List all containers
- `POST /api/containers/{id}/start` — Start a container
- `GET /api/images` — List all images
- `DELETE /api/images/{id}` — Remove an image

## Requirements
- Docker Engine must be running on the same host
- Sufficient permissions to access Docker socket (docker.sock)
- On Windows, Docker Desktop is required

## Roadmap
- Authentication (optional, post-MVP)
- Docker Compose support
- Container stats, volume/network browser, remote host support

## Out of Scope (MVP)
- Swarm/Kubernetes management
- Multi-host/cluster management
- Registry browser/push/pull

## API Reference
See [docs/documentation.md](./docs/documentation.md) and [docs/openapi.yaml](./docs/openapi.yaml) for full details
