# Node API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /nodes                   | listNodes                          | List all nodes |
| GET /nodes/:id               | getNode(id).inspect                | Inspect node |
| DELETE /nodes/:id            | getNode(id).remove                 | Remove node |
| POST /nodes/:id/update       | getNode(id).update                 | Update node |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for nodes:
#
# - listNodes
# - getNode(id).inspect
# - getNode(id).remove
# - getNode(id).update
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
