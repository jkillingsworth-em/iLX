import { models } from "@/data/models";
import { assembliesByModel, bomByModel } from "@/data/bom";
import { etnItemLines } from "@/data/etn";
import type { LxModel } from "@/data/types";

export function hasEtn(m: LxModel): boolean {
  return /etn|electronic team/i.test([...m.features, ...m.options, m.blurb].join(" "));
}

export function outdoorLeds(m: LxModel): boolean {
  return m.environment !== "indoor";
}

export function normalize(q: string): string {
  return q.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function haystack(m: LxModel): string {
  const bom = (bomByModel[m.id] ?? []).map((b) => `${b.part} ${b.item}`).join(" ");
  const asm = (assembliesByModel[m.id] ?? []).map((a) => `${a.item} ${a.use}`).join(" ");
  const etn = etnItemLines(m.id, m.environment === "indoor")
    .map((line) => `${line.code} ${line.label}`)
    .join(" ");
  return [
    m.id,
    m.blurb,
    m.sport,
    m.environment,
    m.console,
    m.width,
    m.height,
    m.layout,
    ...m.alsoSports,
    ...m.displays.map((d) => `${d.label} ${d.detail}`),
    ...m.features,
    ...m.options,
    m.digitKit?.map((d) => `${d.part} ${d.item} ${d.use}`).join(" ") ?? "",
    bom,
    asm,
    etn,
  ]
    .join(" ")
    .toLowerCase();
}

export function searchModels(query: string): LxModel[] {
  const q = query.trim();
  if (!q) return [];
  const compact = normalize(q);
  const lower = q.toLowerCase();
  const scored = models
    .map((m) => {
      const idn = normalize(m.id);
      let score = 0;
      if (idn === compact || idn === `lx${compact}`) score = 100;
      else if (idn.startsWith(compact) || idn.startsWith(`lx${compact}`)) score = 80;
      else if (idn.includes(compact) || compact.includes(idn.replace("lx", ""))) score = 60;
      else if (haystack(m).includes(lower)) score = 30;
      else if (compact.length >= 4 && haystack(m).replace(/[^a-z0-9]/g, "").includes(compact)) score = 20;
      return { m, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.m.id.localeCompare(b.m.id));
  return scored.slice(0, 40).map((x) => x.m);
}

export function modelsUsingPart(part: string): { model: LxModel; qty: number; item: string }[] {
  const needle = part.trim().toLowerCase();
  if (needle.length < 3) return [];
  const hits: { model: LxModel; qty: number; item: string }[] = [];
  for (const m of models) {
    for (const line of bomByModel[m.id] ?? []) {
      const blob = `${line.part} ${line.item}`.toLowerCase();
      if (blob.includes(needle) || normalize(line.part).includes(normalize(needle))) {
        hits.push({ model: m, qty: line.qty, item: line.item });
      }
    }
    for (const k of m.digitKit ?? []) {
      if (`${k.part} ${k.item}`.toLowerCase().includes(needle)) {
        hits.push({ model: m, qty: k.qty, item: k.item });
      }
    }
    for (const line of etnItemLines(m.id, m.environment === "indoor")) {
      const blob = `${line.code} ${line.label}`.toLowerCase();
      const compact = blob.replace(/[^a-z0-9]/g, "");
      if (blob.includes(needle) || compact.includes(normalize(needle))) {
        hits.push({ model: m, qty: line.qty, item: `${line.code} · ${line.label}` });
      }
    }
  }
  const seen = new Set<string>();
  return hits.filter((h) => {
    const key = `${h.model.id}:${h.item}:${h.qty}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
