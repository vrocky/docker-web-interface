# Docker GUI Browser - Requirements Document

## 1. Project Overview
A lightweight web-based GUI for managing and exploring Docker containers, images, and logs on a local machine, powered by Node.js and dockerode.

## 2. Target Users
- Developers/testers running Docker locally (Linux, macOS, Windows)
- Anyone who prefers a browser UI over Docker CLI or Docker Desktop
- Not designed for production Docker hosts (local/dev use only for MVP)

## 3. Functional Requirements
### 3.1. Container Management
- List all Docker containers (running, stopped, paused)
- Show details: name, image, status, ports, uptime, commands
- Start/stop/restart/remove containers
- View container logs (tail last N lines, auto-refresh optional)
- (Optional) Create/run a new container from image with basic options (image, port mapping, env vars)

### 3.2. Image Management
- List all local Docker images (repo/tag, size, created time)
- Remove/delete image
- (Optional) Pull image from Docker Hub (by name/tag)

### 3.3. Log Viewing
- View and filter logs for individual containers
- Tail live logs (refresh every 2 seconds, e.g.)
- Download logs as text file (optional)

### 3.4. UI/UX
- Dashboard homepage: Summary of containers/images
- Tables for containers/images with actions as buttons
- Responsive layout (desktop/mobile)
- Simple error handling (show errors to user, not stack traces)

### 3.5. Security
- Accessible only on localhost by default (127.0.0.1)
- No authentication for MVP (option to add password later)
- No external network exposure by default

## 4. Non-Functional Requirements
- **Performance:** Initial load and common actions < 1 second for up to 50 containers/images.
- **Portability:** Should run on any machine with Node.js and Docker installed.
- **Simplicity:** Minimal dependencies; easy to install and run (npm install && npm start).
- **Extensibility:** Codebase structured for adding new endpoints/UI panels.

## 5. System Architecture
- **Backend:** Node.js Express server using dockerode for Docker API access. REST endpoints for frontend.
- **Frontend:** (Optional) React + Vite (or static HTML/JS). Communicates with backend via REST API.
- No database—all info from live Docker engine.

## 6. API Requirements (Backend)
| Method | Endpoint                        | Description                 |
|--------|----------------------------------|-----------------------------|
| GET    | /api/containers                 | List all containers         |
| POST   | /api/containers/:id/start       | Start a container           |
| POST   | /api/containers/:id/stop        | Stop a container            |
| POST   | /api/containers/:id/restart     | Restart a container         |
| DELETE | /api/containers/:id             | Remove a container          |
| GET    | /api/containers/:id/logs        | Get logs for a container    |
| GET    | /api/images                     | List all images             |
| DELETE | /api/images/:id                 | Remove an image             |

## 7. Constraints
- Docker Engine must be running on the same host as the app.
- App must be run with sufficient permissions to access Docker socket (typically docker.sock).
- For Windows, Docker Desktop is required and socket must be accessible.

## 8. Future Enhancements (Post-MVP)
- Authentication (basic password or OAuth)
- Support for Docker Compose files
- Container CPU/memory stats panel
- Volume and network browser
- Remote Docker host support (securely)
- Multi-user support with roles

## 9. Out of Scope (for MVP)
- Docker Swarm/Kubernetes management
- Multi-host cluster management
- Registry browser/push/pull (for now)
- Complex container run options (advanced networking, devices, etc.)

## 10. Open Questions
- What port should backend and frontend run on? (default: 3000/backend, 5173/frontend)
- Should logs auto-refresh or be manually refreshed?
- Should log file downloads be included in MVP?
