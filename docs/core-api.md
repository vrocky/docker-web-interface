# Core API Documentation

This document describes the internal Core API layer for the Docker GUI Browser backend. The Core API provides a unified, type-safe interface for all Docker operations, used by the service and controller layers.

## Overview
- The Core API is implemented in the `src/core/` directory.
- It exposes two main interfaces:
  - `ICoreContainerApi` (for container operations)
  - `ICoreImageApi` (for image operations)
- The god object `AppCore` provides a single Docker instance and aggregates all core APIs.

## Interfaces

### ICoreContainerApi
- `listContainers(): Promise<any[]>` — List all containers
- `startContainer(id: string): Promise<void>` — Start a container
- `stopContainer(id: string): Promise<void>` — Stop a container
- `restartContainer(id: string): Promise<void>` — Restart a container
- `removeContainer(id: string): Promise<void>` — Remove a container
- `getContainerLogs(id: string, tail?: number): Promise<string>` — Get logs for a container

### ICoreImageApi
- `listImages(): Promise<any[]>` — List all images
- `removeImage(id: string): Promise<void>` — Remove an image

### AppCore
- `docker: Docker` — The single Docker instance
- `containers: ICoreContainerApi` — Container API
- `images: ICoreImageApi` — Image API

## Usage
- The service layer depends on the Core API interfaces, not directly on Dockerode.
- All Docker operations are routed through the god object (`AppCore`) for consistency and testability.
- The Core API can be easily mocked for unit testing.

## Example
```typescript
import { AppCore } from '../src/core/AppCore';

const core = new AppCore();
const containers = await core.containers.listContainers();
const images = await core.images.listImages();
```

## References
- See [src/core/](../src/core/) for implementation
- See [tests/core/](../tests/core/) for unit tests

_Last updated: 2025-07-28_
