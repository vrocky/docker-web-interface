# Network API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /networks                | listNetworks                       | List all networks |
| POST /networks               | createNetwork                      | Create network |
| GET /networks/:id            | getNetwork(id).inspect             | Inspect network |
| DELETE /networks/:id         | getNetwork(id).remove              | Remove network |
| POST /networks/:id/connect   | getNetwork(id).connect             | Connect to network |
| POST /networks/:id/disconnect| getNetwork(id).disconnect          | Disconnect from network |
| POST /networks/prune         | pruneNetworks                      | Prune networks |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for networks:
#
# - listNetworks
# - createNetwork
# - getNetwork(id).inspect
# - getNetwork(id).remove
# - getNetwork(id).connect
# - getNetwork(id).disconnect
# - pruneNetworks
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
