# Plugin API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /plugins                 | listPlugins                        | List all plugins |
| POST /plugins                | createPlugin                       | Create plugin |
| GET /plugins/:id             | getPlugin(id).inspect              | Inspect plugin |
| DELETE /plugins/:id          | getPlugin(id).remove               | Remove plugin |
| POST /plugins/:id/enable     | getPlugin(id).enable               | Enable plugin |
| POST /plugins/:id/disable    | getPlugin(id).disable              | Disable plugin |
| POST /plugins/:id/update     | getPlugin(id).update               | Update plugin |
| POST /plugins/:id/push       | getPlugin(id).push                 | Push plugin |
| POST /plugins/:id/configure  | getPlugin(id).configure            | Configure plugin |
| POST /plugins/:id/pull       | getPlugin(id).pull                 | Pull plugin |
| GET /plugins/:id/privileges  | getPlugin(id).privileges           | Plugin privileges |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for plugins:
#
# - listPlugins
# - createPlugin
# - getPlugin(id).inspect
# - getPlugin(id).remove
# - getPlugin(id).enable
# - getPlugin(id).disable
# - getPlugin(id).update
# - getPlugin(id).push
# - getPlugin(id).configure
# - getPlugin(id).pull
# - getPlugin(id).privileges
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
