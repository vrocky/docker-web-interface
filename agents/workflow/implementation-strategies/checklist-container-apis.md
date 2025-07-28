#
# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for containers:
#
# - listContainers
# - createContainer
# - getContainer(id).inspect
# - getContainer(id).start
# - getContainer(id).stop
# - getContainer(id).restart
# - getContainer(id).pause
# - getContainer(id).unpause
# - getContainer(id).remove
# - getContainer(id).update
# - getContainer(id).rename
# - getContainer(id).attach
# - getContainer(id).wait
# - getContainer(id).kill
# - getContainer(id).commit
# - getContainer(id).export
# - getContainer(id).stats
# - getContainer(id).logs
# - getContainer(id).top
# - getContainer(id).resize
# - getContainer(id).exec
# - getContainer(id).changes
# - getContainer(id).getArchive
# - getContainer(id).putArchive
# - pruneContainers
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.

# Container API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /containers              | listContainers                     | List all containers |
| POST /containers             | createContainer                    | Create a new container |
| GET /containers/:id          | getContainer(id).inspect           | Inspect container |
| POST /containers/:id/start   | getContainer(id).start             | Start container |
| POST /containers/:id/stop    | getContainer(id).stop              | Stop container |
| POST /containers/:id/restart | getContainer(id).restart           | Restart container |
| POST /containers/:id/pause   | getContainer(id).pause             | Pause container |
| POST /containers/:id/unpause | getContainer(id).unpause           | Unpause container |
| DELETE /containers/:id       | getContainer(id).remove            | Remove container |
| POST /containers/:id/update  | getContainer(id).update            | Update container |
| POST /containers/:id/rename  | getContainer(id).rename            | Rename container |
| POST /containers/:id/attach  | getContainer(id).attach            | Attach to container |
| POST /containers/:id/wait    | getContainer(id).wait              | Wait for container |
| POST /containers/:id/kill    | getContainer(id).kill              | Kill container |
| POST /containers/:id/commit  | getContainer(id).commit            | Commit container |
| GET /containers/:id/export   | getContainer(id).export            | Export container |
| GET /containers/:id/stats    | getContainer(id).stats             | Container stats |
| GET /containers/:id/logs     | getContainer(id).logs              | Container logs |
| GET /containers/:id/top      | getContainer(id).top               | Top processes |
| POST /containers/:id/resize  | getContainer(id).resize            | Resize TTY |
| POST /containers/:id/exec    | getContainer(id).exec              | Exec in container |
| GET /containers/:id/changes  | getContainer(id).changes           | FS changes |
| GET /containers/:id/archive  | getContainer(id).getArchive        | Get archive |
| PUT /containers/:id/archive  | getContainer(id).putArchive        | Put archive |
| POST /containers/prune       | pruneContainers                    | Prune containers |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.
