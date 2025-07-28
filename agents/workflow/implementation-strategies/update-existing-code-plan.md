# Implementation Plan: Updating Existing Code for Full Docker API Coverage

## Objective
Detail the step-by-step approach for refactoring and extending the current backend to support the full Docker Remote API, as described in the proposal and strategy documents.

## Steps

### 1. Directory & Module Audit
- Review all existing modules in `src/` (core, services, controllers, routes, interfaces)
- Identify redundant, obsolete, or superseded files for removal
- Ensure codebase cleanliness per workflow protocol

### 2. Interface Expansion
- Expand TypeScript interfaces in `src/interfaces/` to cover all Docker entities and operations (Container, Image, Volume, Network, Plugin, Service, Task, Node, Secret, Config, Exec)
- Ensure all service and controller layers depend on interfaces, not concrete implementations

### 3. Service Layer Refactor
- Refactor existing service classes to encapsulate all dockerode logic for each entity
- Add new service classes for entities not yet covered
- Implement promise and callback support as needed

### 4. Controller & Route Refactor
- Refactor controllers to expose REST endpoints for all Docker operations
- Modularize routes to support new endpoints and DI wiring
- Ensure streaming endpoints (logs, attach, build, pull, push) are properly handled

### 5. DI Container Update
- Update `src/inversify.config.ts` to bind new services and interfaces
- Ensure DI setup supports modularity and testability

### 6. Error Handling & Middleware
- Centralize error handling for all endpoints
- Add authentication middleware for registry operations

### 7. Documentation & Spec
- Update OpenAPI spec and Markdown docs to reflect new endpoints
- Document all design choices and edge cases in strategy/context files

### 8. Testing
- Expand unit, integration, and E2E tests to cover new endpoints and features
- Ensure tests use real backend (no mocks for E2E)

### 9. Workflow & Archival
- Track all changes and micro-tasks in workflow checklists
- Archive obsolete files and completed workflow docs per protocol

## Notes
- All changes will be made incrementally, with frequent commits and documentation updates
- Refactoring will prioritize maintainability, auditability, and protocol compliance
- See [Full Docker API Proposal](../proposal/requirement/full-docker-api-proposal.md) and [Strategy](../proposal/strategy/full-docker-api-strategy.md) for reference

---

*Status: Draft – to be updated as refactoring progresses.*
