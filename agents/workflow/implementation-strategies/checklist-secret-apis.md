# Secret API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /secrets                 | listSecrets                        | List all secrets |
| POST /secrets                | createSecret                       | Create secret |
| GET /secrets/:id             | getSecret(id).inspect              | Inspect secret |
| DELETE /secrets/:id          | getSecret(id).remove               | Remove secret |
| POST /secrets/:id/update     | getSecret(id).update               | Update secret |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for secrets:
#
# - listSecrets
# - createSecret
# - getSecret(id).inspect
# - getSecret(id).remove
# - getSecret(id).update
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
