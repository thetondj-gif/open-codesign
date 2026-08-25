# Venture Foundry local-first architecture

Venture Foundry is standalone by default. DAWN is a later peer integration, never a boot dependency.

## Canonical boundaries
- Product/portfolio state belongs to Venture Foundry persistence.
- LocalStorage is the zero-setup fallback; PostgreSQL is the preferred durable local target.
- Ollama/OmniRoute provide local model execution.
- Hermes/AoE may execute local agent jobs through adapters.
- DAWN may later exchange missions, evidence and intelligence through an adapter; DAWN does not own Foundry state.
- Qdrant and Graphiti are derived indexes, not canonical truth.

## Existing local/open-source repos to wire
- thetondj-gif/OmniRoute — local/free model routing
- thetondj-gif/hermes-agent — local agent runtime
- thetondj-gif/dawn-skills — governed skill source; mount read-only
- thetondj-gif/agency-agents — specialist agent definitions
- thetondj-gif/skills — reusable capabilities
- thetondj-gif/n8n — workflow integrations
- thetondj-gif/firecrawl — web ingestion
- thetondj-gif/graphiti — temporal/relationship graph
- thetondj-gif/ComfyUI — image generation
- thetondj-gif/voicebox — voice generation
- thetondj-gif/postiz-app — distribution
- thetondj-gif/world-intel-mcp — intelligence/MCP
- thetondj-gif/open-codesign — builder host
- thetondj-gif/webstudio — optional visual builder
- thetondj-gif/open-webui — optional local operator UI

## DAWN compatibility
DAWN Genesis currently states PostgreSQL is canonical DAWN truth, Qdrant is a rebuildable semantic index, Graphiti is optional derived context, Hermes is execution/session memory, and local-first/zero-bloat is a non-negotiable. Foundry mirrors those boundaries without depending on DAWN.

The dawn-skills repo exposes 40 active governed skill directories. Hermes should consume them read-only through:

```yaml
skills:
  external_dirs:
    - /Users/alinton/dawn-skills/skills
    - /Users/alinton/dawn-skills/council
    - /Users/alinton/dawn-skills/system
```

Do not grant local agents write permission to the canonical skill repository.

## Local agents
Initial departments: Founder Office, Product Director, Local Builder, Research Director, Growth Director, Knowledge Librarian, Operations Director and QA Governor. Each has explicit tools and approval boundaries.

## Build rule
Idea → specification → builder prompt → local build → acceptance → deploy/test → commercial evidence → scale/iterate/kill. DAWN integration is optional after the product works independently.
