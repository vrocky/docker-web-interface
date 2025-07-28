
# Image API Checklist (Protocol)

> **Protocol:** For each item, specify both the planned HTTP API name (our API) and the dockerode method(s) used. HTTP API names are a baseline for coverage, not rigid for implementation.

| HTTP API Name                | dockerode Method(s)                | Notes |
|-----------------------------|------------------------------------|-------|
| GET /images                  | listImages                         | List all images |
| POST /images/create          | createImage                        | Create/pull image |
| GET /images/:id              | getImage(id).inspect               | Inspect image |
| DELETE /images/:id           | getImage(id).remove                | Remove image |
| POST /images/:id/tag         | getImage(id).tag                   | Tag image |
| POST /images/:id/push        | getImage(id).push                  | Push image |
| POST /images/:id/pull        | docker.pull                        | Pull image |
| GET /images/:id/history      | getImage(id).history               | Image history |
| GET /images/search           | searchImages                       | Search images |
| POST /images/prune           | pruneImages                        | Prune images |
| GET /images/:id/get          | getImage(id).get                   | Get image |
| POST /images/load            | loadImage                          | Load image |
| POST /images/import          | importImage                        | Import image |

> **Protocol Note:** Checklist must be audited against agents/project/dockerrode-doc.md. Mark as complete only after full verification and audit.

# ---
#
# ## Dockerode APIs Used (Audit Proof)
#
# The following dockerode methods are referenced in this checklist and used to implement the HTTP APIs for images:
#
# - listImages
# - createImage
# - getImage(id).inspect
# - getImage(id).remove
# - getImage(id).tag
# - getImage(id).push
# - docker.pull
# - getImage(id).history
# - searchImages
# - pruneImages
# - getImage(id).get
# - loadImage
# - importImage
#
# This section serves as audit proof, showing exactly which dockerode APIs are used and mapped to HTTP APIs for this feature.
