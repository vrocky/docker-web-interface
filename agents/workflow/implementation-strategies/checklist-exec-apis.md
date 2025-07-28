# Exec API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| POST /exec                   | createExec                         | Create exec |
| GET /exec/:id                | getExec(id).inspect                | Inspect exec |
| POST /exec/:id/start         | getExec(id).start                  | Start exec |
| POST /exec/:id/resize        | getExec(id).resize                 | Resize exec |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for execs:
#
# - createExec
# - getExec(id).inspect
# - getExec(id).start
# - getExec(id).resize
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
