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
  { key: 'dawn-skills', name: 'DAWN Skill Stack', repo: 'thetondj-gif/dawn-skills', kind: 'agent', enabledByDefault: false, capabilities: ['40-governed-skills','council','tool-policy','evidence','routing'] },
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
  { id: 'founder-office', name: 'Founder Office', role: 'Portfolio prioritisation and escalation', preferredModel: 'ollama', skills: ['mission-routing','evidence','portfolio-analysis'], tools: ['local-files','github-read','world-intel-mcp'], approvals: ['external-write','spend','deployment'] },
  { id: 'product-director', name: 'Product Director', role: 'Turn ideas into specs, tests and builder prompts', preferredModel: 'ollama', skills: ['product-foundry','requirements','acceptance'], tools: ['open-codesign','local-files','github-read'], approvals: ['production-deploy'] },
  { id: 'local-builder', name: 'Local Builder', role: 'Implement and repair products locally', preferredModel: 'ollama', skills: ['coding','testing','integration'], tools: ['open-codesign','shell','git'], approvals: ['main-branch-write','public-deploy'] },
  { id: 'research-director', name: 'Research Director', role: 'Evidence and commercial intelligence', preferredModel: 'ollama', skills: ['research','provenance','signal-ranking'], tools: ['firecrawl','world-intel-mcp','local-files'], approvals: ['paid-data'] },
  { id: 'growth-director', name: 'Growth Director', role: 'GTM, acquisition experiments and content', preferredModel: 'ollama', skills: ['growth','content','sales'], tools: ['postiz','comfyui','voicebox'], approvals: ['publish','ad-spend'] },
  { id: 'knowledge-librarian', name: 'Knowledge Librarian', role: 'Ingest, relate and retrieve knowledge', preferredModel: 'ollama', skills: ['knowledge','memory','provenance'], tools: ['qdrant','graphiti','local-files'], approvals: ['canonical-delete'] },
  { id: 'operations-director', name: 'Operations Director', role: 'Jobs, workflows and health checks', preferredModel: 'ollama', skills: ['tool-policy','observability','recovery'], tools: ['n8n','shell','docker'], approvals: ['external-write','service-exposure'] },
  { id: 'qa-governor', name: 'QA Governor', role: 'Independent acceptance and evidence review', preferredModel: 'ollama', skills: ['qa','evidence','acceptance'], tools: ['tests','git-diff','health-checks'], approvals: [] }
];

export const DAWN_SKILL_EXTERNAL_DIRS = [
  '/Users/alinton/dawn-skills/skills',
  '/Users/alinton/dawn-skills/council',
  '/Users/alinton/dawn-skills/system'
];
