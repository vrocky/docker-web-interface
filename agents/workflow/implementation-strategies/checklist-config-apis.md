# Config API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /configs                 | listConfigs                        | List all configs |
| POST /configs                | createConfig                       | Create config |
| GET /configs/:id             | getConfig(id).inspect              | Inspect config |
| DELETE /configs/:id          | getConfig(id).remove               | Remove config |
| POST /configs/:id/update     | getConfig(id).update               | Update config |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for configs:
#
# - listConfigs
# - createConfig
# - getConfig(id).inspect
# - getConfig(id).remove
# - getConfig(id).update
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
