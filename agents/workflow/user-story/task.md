# User Story Tasks: Inversify DI Integration (No Decorators)

## Goal
Refactor the backend to use Inversify for dependency injection, separating Express from backend implementation, and define all interfaces explicitly (no decorators).

---

## Tasks

- [ ] Install and configure Inversify and reflect-metadata (without decorators)
- [ ] Create interfaces for all service layers (e.g., IContainerService, IImageService)
- [ ] Implement service classes for Docker container and image operations
- [ ] Set up Inversify container and bindings using only code (no decorators)
- [ ] Refactor controllers to depend on interfaces, not concrete implementations
- [ ] Refactor Express routes to use injected services via Inversify
- [ ] Ensure Express app setup is fully separated from backend logic
- [ ] Update entrypoint to wire up DI and start the server
- [ ] Add/Update tests to verify DI and service separation
- [ ] Update documentation to reflect new architecture

---

## Notes
- No decorators should be used anywhere in the codebase
- All interfaces must be defined in `src/interfaces/`
- All DI bindings must be explicit and in code (not via decorators)
- Express should only handle HTTP, not business logic
- Docker logic should be fully encapsulated in services

---

_Last updated: 2025-07-28_
