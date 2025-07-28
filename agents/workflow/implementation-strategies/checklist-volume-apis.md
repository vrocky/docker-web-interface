# Volume API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /volumes                 | listVolumes                        | List all volumes |
| POST /volumes                | createVolume                       | Create volume |
| GET /volumes/:id             | getVolume(id).inspect              | Inspect volume |
| DELETE /volumes/:id          | getVolume(id).remove               | Remove volume |
| POST /volumes/prune          | pruneVolumes                       | Prune volumes |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for volumes:
#
# - listVolumes
# - createVolume
# - getVolume(id).inspect
# - getVolume(id).remove
# - pruneVolumes
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
