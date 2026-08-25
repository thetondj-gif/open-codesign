export interface LocalExecutionJob {
  jobName: string;
  payload: Record<string, unknown>;
}

export class HermesAgentAdapter {
  key = 'hermes_local';
  name = 'Hermes Local Agent Runtime';
  optional = true;

  async dispatchJob(job: LocalExecutionJob) {
    return { jobId: `hermes-${Date.now()}`, status: 'LOCAL_ADAPTER_READY', job };
  }
}

export class ExternalOrchestratorAdapter {
  key = 'external_orchestrator';
  name = 'Generic External Orchestrator';
  optional = true;

  async dispatchJob(job: LocalExecutionJob) {
    return { jobId: `external-${Date.now()}`, status: 'OPTIONAL_PEER_READY', job };
  }
}

export class OmniRouteModelAdapter {
  key = 'omniroute_local';
  name = 'OmniRoute Local Gateway';
  isLocal = true;

  async generateText(input: { userPrompt: string }) {
    return { text: `[OmniRoute local] ${input.userPrompt.slice(0, 120)}...` };
  }
}

export const DEFAULT_LOCAL_ENDPOINTS = {
  ollama: 'http://127.0.0.1:11434',
  omniroute: 'http://127.0.0.1:8008',
  qdrant: 'http://127.0.0.1:6333',
  n8n: 'http://127.0.0.1:5678',
  comfyui: 'http://127.0.0.1:8188',
  firecrawl: 'http://127.0.0.1:3002'
} as const;

export const OPTIONAL_PEERS = {
  hermes: true,
  aoe: true,
  externalOrchestrator: true
} as const;
