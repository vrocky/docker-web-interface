# Project Proposal: Docker GUI Browser API (Backend Only)

## 1. Objective
Develop a lightweight, RESTful API for managing and exploring Docker containers, images, and logs on a local machine. The application will be powered by Node.js (Express) and dockerode, written in TypeScript. The MVP will focus on local/dev use only, not production. No frontend will be provided in this phase.

## 2. Scope (MVP)
- **Container Management:**
  - List all Docker containers (running, stopped, paused)
  - Show details: name, image, status, ports, uptime, commands
  - Start/stop/restart/remove containers
  - View container logs (tail last N lines, auto-refresh optional)
  - (Optional) Create/run a new container from image with basic options
- **Image Management:**
  - List all local Docker images (repo/tag, size, created time)
  - Remove/delete image
  - (Optional) Pull image from Docker Hub
- **Log Viewing:**
  - View and filter logs for individual containers
  - Tail live logs (refresh every 2 seconds)
  - (Optional) Download logs as text file
- **Security:**
  - Accessible only on localhost (127.0.0.1)
  - No authentication for MVP
  - No external network exposure

## 3. Non-Functional Requirements
- **Performance:** Fast load and actions (<1s for up to 50 containers/images)
- **Portability:** Runs on any machine with Node.js and Docker
- **Simplicity:** Minimal dependencies; easy install/run (npm install && npm start)
- **Extensibility:** Codebase structured for easy addition of new endpoints

## 4. System Architecture
- **Backend:** Node.js Express server using dockerode for Docker API access. REST endpoints only.
- **No frontend:** No UI will be provided in this phase. The API is designed for use by future UIs or external tools.
- **No database:** All info from live Docker engine.

## 5. API Endpoints (Backend)
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

## 6. Constraints
- Docker Engine must be running on the same host as the app
- App must have permissions to access Docker socket (docker.sock)
- On Windows, Docker Desktop is required and socket must be accessible

## 7. Out of Scope (for MVP)
- Frontend UI (web or otherwise)
- Docker Swarm/Kubernetes management
- Multi-host/cluster management
- Registry browser/push/pull
- Complex container run options

## 8. Open Questions
- What port should backend run on? (default: 3000)
- Should logs auto-refresh or be manually refreshed?
- Should log file downloads be included in MVP?

---

This proposal is based on the requirements in `README.md` and is ready for review and refinement. Only the backend API will be implemented for now; frontend is out of scope for this phase.
