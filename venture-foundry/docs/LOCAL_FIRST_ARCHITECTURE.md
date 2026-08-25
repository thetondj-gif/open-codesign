# Venture Foundry — independent local-first app generator

Venture Foundry is a standalone application-generation system. It does not depend on DAWN and does not inherit DAWN governance or execution constraints.

## Core objective
Idea → structured spec → stack selection → builder prompt/code generation → local build → tests → export/deploy → iterate.

The default bias is speed, low cost and replaceable components.

## Canonical boundaries
- Venture Foundry owns its own projects, specs, builds, templates, experiments and generated artifacts.
- LocalStorage/SQLite can provide zero-setup persistence; PostgreSQL is the preferred durable local target.
- Ollama/OmniRoute provide local model execution and optional free-provider routing.
- Hermes/AoE/local coding agents are optional execution workers, not controllers.
- Qdrant/Graphiti are optional derived knowledge indexes.
- Any future external orchestration system connects only through generic APIs/webhooks/MCP and is never a boot dependency.

## Existing local/open-source repos to wire
- thetondj-gif/OmniRoute — local/free model routing
- thetondj-gif/hermes-agent — local agent runtime
- thetondj-gif/dawn-skills/skills — reusable specialist skills only; do not import council/system governance layers
- thetondj-gif/agency-agents — specialist agent definitions
- thetondj-gif/skills — reusable capabilities
- thetondj-gif/n8n — workflow integrations
- thetondj-gif/firecrawl — web ingestion
- thetondj-gif/graphiti — temporal/relationship graph
- thetondj-gif/ComfyUI — image generation
- thetondj-gif/voicebox — voice generation
- thetondj-gif/postiz-app — distribution
- thetondj-gif/world-intel-mcp — intelligence/MCP
- thetondj-gif/open-codesign — local builder host
- thetondj-gif/webstudio — optional visual builder
- thetondj-gif/open-webui — optional local operator UI

## Skill reuse rule
Skills may be harvested from existing repos as reusable capabilities. Their original DAWN governance wrappers, approval matrices, council routing, mission gates and evidence requirements are not inherited by Venture Foundry.

Preferred external skill directory:

```yaml
skills:
  external_dirs:
    - /Users/alinton/dawn-skills/skills
```

The directory can remain read-only simply to protect source files; this is repository hygiene, not runtime governance.

## Local agents
Initial agents are practical specialists: Product Architect, Rapid Builder, Backend Engineer, Researcher, Growth Strategist, Knowledge Engineer, Automation Engineer and QA/Test Engineer.

Agents can use configured tools directly. Tool access is controlled by local configuration and operating-system permissions, not DAWN policies.

## Future connectivity
Keep one generic `ExternalOrchestratorAdapter` / REST / webhook / MCP interface. DAWN can be attached to that later without changing Foundry core logic.

No DAWN-specific adapter, schema, mission model, council, approval gate or evidence gate belongs in the core app generator.
