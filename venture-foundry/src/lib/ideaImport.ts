export type VentureIdeaImport = {
  id: string;
  name: string;
  category?: string;
  target_buyer?: string;
  summary: string;
  business_model?: string;
  status?: string;
  priority?: string;
  source?: string;
  tags?: string | string[];
  builder_target?: string;
  local_first?: boolean;
  estimated_mvp_days?: number;
  notes?: string;
};

const STORAGE_KEY = 'venture_foundry_ventures';

export function normaliseIdeaImport(input: { ideas?: VentureIdeaImport[] } | VentureIdeaImport[]): VentureIdeaImport[] {
  const ideas = Array.isArray(input) ? input : input?.ideas;
  if (!Array.isArray(ideas)) throw new Error('Import must be an array or { ideas: [] }');
  return ideas.filter(i => i && i.id && i.name && i.summary);
}

export function importIdeasToLocalStorage(input: { ideas?: VentureIdeaImport[] } | VentureIdeaImport[]) {
  const ideas = normaliseIdeaImport(input);
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const bySlug = new Map(existing.map((v: any) => [v.slug, v]));

  for (const idea of ideas) {
    const current: any = bySlug.get(idea.id) || {};
    const tags = Array.isArray(idea.tags) ? idea.tags : (idea.tags || '').split(';').filter(Boolean);
    bySlug.set(idea.id, {
      ...current,
      id: current.id || Date.now() + Math.floor(Math.random() * 100000),
      name: idea.name,
      slug: idea.id,
      stage: idea.status || current.stage || 'IDEA',
      source_type: idea.source || 'import',
      description: idea.summary,
      problem: current.problem || idea.summary,
      target_buyer: idea.target_buyer || current.target_buyer || '',
      willingness_to_pay: idea.business_model || current.willingness_to_pay || 'TBD',
      status_notes: [idea.priority, idea.builder_target, idea.local_first ? 'LOCAL_FIRST' : ''].filter(Boolean).join(' · '),
      score: current.score || 50,
      pain_severity: current.pain_severity || 7,
      tam: current.tam || 'TBD',
      sam: current.sam || 'TBD',
      moat: current.moat || 'Workflow + data + local-first execution',
      difficulty: current.difficulty || 'Medium',
      risk: current.risk || 'Medium',
      mrr: current.mrr || 0,
      monthly_cost: current.monthly_cost || 0,
      tags,
      notes: idea.notes || current.notes || '',
      created_at: current.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  }

  const merged = Array.from(bySlug.values());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  return { imported: ideas.length, total: merged.length };
}
