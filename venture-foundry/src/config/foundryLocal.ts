export type LocalTool = {
  key: string;
  name: string;
  repo?: string;
  endpoint?: string;
  kind: 'model' | 'builder' | 'execution' | 'knowledge' | 'creative' | 'distribution' | 'agent' | 'intelligence';
  enabledByDefault: boolean;
  capabilities: string[];
};

export const LOCAL_TOOLS: LocalTool[] = [
  { key: 'ollama', name: 'Ollama', endpoint: 'http://127.0.0.1:11434', kind: 'model', enabledByDefault: true, capabilities: ['chat','classification','extraction','embeddings'] },
  { key: 'omniroute', name: 'OmniRoute', repo: 'thetondj-gif/OmniRoute', endpoint: 'http://127.0.0.1:8008', kind: 'model', enabledByDefault: false, capabilities: ['provider-routing','fallbacks','free-model-routing'] },
  { key: 'hermes', name: 'Hermes Agent', repo: 'thetondj-gif/hermes-agent', kind: 'agent', enabledByDefault: false, capabilities: ['local-agent','tool-use','session-runtime'] },
  { key: 'skill-pack', name: 'Reusable Skill Pack', repo: 'thetondj-gif/dawn-skills', kind: 'agent', enabledByDefault: false, capabilities: ['specialist-skills','product','research','content','sales','automation'] },
  { key: 'agency-agents', name: 'Agency Agents', repo: 'thetondj-gif/agency-agents', kind: 'agent', enabledByDefault: false, capabilities: ['specialist-agents','department-agents'] },
  { key: 'skills', name: 'Skills Registry', repo: 'thetondj-gif/skills', kind: 'agent', enabledByDefault: false, capabilities: ['reusable-skills'] },
  { key: 'n8n', name: 'n8n', repo: 'thetondj-gif/n8n', endpoint: 'http://127.0.0.1:5678', kind: 'execution', enabledByDefault: false, capabilities: ['workflows','webhooks','integrations','schedules'] },
  { key: 'firecrawl', name: 'Firecrawl', repo: 'thetondj-gif/firecrawl', endpoint: 'http://127.0.0.1:3002', kind: 'knowledge', enabledByDefault: false, capabilities: ['crawl','scrape','web-ingestion'] },
  { key: 'graphiti', name: 'Graphiti', repo: 'thetondj-gif/graphiti', kind: 'knowledge', enabledByDefault: false, capabilities: ['temporal-graph','entity-memory','relationships'] },
  { key: 'qdrant', name: 'Qdrant', endpoint: 'http://127.0.0.1:6333', kind: 'knowledge', enabledByDefault: false, capabilities: ['vector-search','semantic-retrieval'] },
  { key: 'comfyui', name: 'ComfyUI', repo: 'thetondj-gif/ComfyUI', endpoint: 'http://127.0.0.1:8188', kind: 'creative', enabledByDefault: false, capabilities: ['image-generation','workflow-graphs'] },
  { key: 'voicebox', name: 'Voicebox', repo: 'thetondj-gif/voicebox', kind: 'creative', enabledByDefault: false, capabilities: ['tts','voice-generation'] },
  { key: 'postiz', name: 'Postiz', repo: 'thetondj-gif/postiz-app', kind: 'distribution', enabledByDefault: false, capabilities: ['social-scheduling','publishing'] },
  { key: 'world-intel-mcp', name: 'World Intel MCP', repo: 'thetondj-gif/world-intel-mcp', kind: 'intelligence', enabledByDefault: false, capabilities: ['mcp','public-intelligence'] },
  { key: 'open-codesign', name: 'Open CoDesign', repo: 'thetondj-gif/open-codesign', kind: 'builder', enabledByDefault: true, capabilities: ['frontend-generation','design-reference','workspace-build'] },
  { key: 'webstudio', name: 'Webstudio', repo: 'thetondj-gif/webstudio', kind: 'builder', enabledByDefault: false, capabilities: ['visual-web-building'] },
  { key: 'open-webui', name: 'Open WebUI', repo: 'thetondj-gif/open-webui', kind: 'model', enabledByDefault: false, capabilities: ['local-model-ui','tools'] }
];

export const LOCAL_AGENTS = [
  { id: 'product-architect', name: 'Product Architect', role: 'Turn raw ideas into buildable product specs and builder prompts', preferredModel: 'ollama', skills: ['product-design','requirements','stack-selection'], tools: ['open-codesign','local-files','github-read'] },
  { id: 'rapid-builder', name: 'Rapid Builder', role: 'Generate and iterate working applications quickly', preferredModel: 'ollama', skills: ['coding','prototyping','integration'], tools: ['open-codesign','shell','git'] },
  { id: 'backend-engineer', name: 'Backend Engineer', role: 'Build APIs, persistence, jobs and integrations', preferredModel: 'ollama', skills: ['api-design','database','testing'], tools: ['shell','git','n8n'] },
  { id: 'researcher', name: 'Researcher', role: 'Gather product, market and technical context', preferredModel: 'ollama', skills: ['research','competitive-analysis','data-gathering'], tools: ['firecrawl','world-intel-mcp','local-files'] },
  { id: 'growth-strategist', name: 'Growth Strategist', role: 'Create positioning, launch tests, content and acquisition ideas', preferredModel: 'ollama', skills: ['growth','content','sales'], tools: ['postiz','comfyui','voicebox'] },
  { id: 'knowledge-engineer', name: 'Knowledge Engineer', role: 'Ingest, relate and retrieve project knowledge', preferredModel: 'ollama', skills: ['knowledge','retrieval','entity-linking'], tools: ['qdrant','graphiti','local-files'] },
  { id: 'automation-engineer', name: 'Automation Engineer', role: 'Create workflows, local jobs and integrations', preferredModel: 'ollama', skills: ['automation','scripting','integration'], tools: ['n8n','shell','docker'] },
  { id: 'qa-test-engineer', name: 'QA / Test Engineer', role: 'Run acceptance, regression and smoke tests on generated apps', preferredModel: 'ollama', skills: ['qa','testing','debugging'], tools: ['tests','git-diff','health-checks'] }
];

export const REUSABLE_SKILL_DIRS = [
  '/Users/alinton/dawn-skills/skills'
];
