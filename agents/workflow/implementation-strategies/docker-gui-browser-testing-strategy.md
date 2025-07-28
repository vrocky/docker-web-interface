# Testing Strategy: Docker GUI Browser API Core Layer

## Overview
This strategy defines how to test the core layer (`core/`) of the Docker GUI Browser API, following the workflow protocol for separation of concerns, auditability, and best practices. **All tests described here are strictly for the core layer only. No tests are written for service, controller, or route layers.**

## Principles
- **No Side Effects in Real Tests:** Only test non-destructive, read-only features (e.g., `listContainers`, `listImages`) against a real Docker engine.
- **Mock for Side Effects:** All features that cause side effects (e.g., `startContainer`, `stopContainer`, `removeContainer`, `removeImage`) must be tested using mocks or stubs, never against a real Docker engine.
- **Isolation:** Core logic is tested in isolation from Express and service layers.
- **Repeatability:** Tests must be repeatable and not depend on the external state of Docker containers/images.
- **Auditability:** All test cases and their rationale are documented for review and audit.

## Test Types
- **Integration Tests (Read-Only):**
  - Test `listContainers` and `listImages` against a real Docker engine (if available).
  - These tests are safe, as they do not modify system state.
- **Unit Tests (Mocked Side Effects):**
  - Test all mutating methods (`startContainer`, `stopContainer`, `restartContainer`, `removeContainer`, `getContainerLogs`, `removeImage`) using mocks for the Docker API.
  - Ensure correct method calls and error handling, but do not actually affect Docker.

## Implementation Steps
1. **Set up test framework (Jest) for the core layer.**
2. **Write integration tests for read-only methods.**
3. **Write unit tests for side-effect methods using mocks.**
4. **Document all test cases and rationale.**
5. **Review and update tests as core logic evolves.**

## Workflow Protocol Alignment
- All tests are tracked as micro-tasks in the user story task checklist.
- No destructive or side-effecting tests are run against real Docker resources.
- All test code and documentation are kept in `tests/core/` and `agents/workflow/implementation-strategies/` for audit and review.
- This strategy ensures a clean, auditable, and safe testing process, as required by the workflow protocol.

_Last updated: 2025-07-28_
