# Service API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /services                | listServices                       | List all services |
| POST /services               | createService                      | Create service |
| GET /services/:id            | getService(id).inspect             | Inspect service |
| DELETE /services/:id         | getService(id).remove              | Remove service |
| POST /services/:id/update    | getService(id).update              | Update service |
| GET /services/:id/logs       | getService(id).logs                | Service logs |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for services:
#
# - listServices
# - createService
# - getService(id).inspect
# - getService(id).remove
# - getService(id).update
# - getService(id).logs
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
