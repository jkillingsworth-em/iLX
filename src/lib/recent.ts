const KEY = "ilx-recent";
const MAX = 8;
const EMPTY: string[] = [];

let cache: string[] = EMPTY;
let cacheRaw: string | null | undefined = undefined;
const listeners = new Set<() => void>();

function snapshot(): string[] {
  if (typeof window === "undefined") return EMPTY;
  const raw = localStorage.getItem(KEY);
  if (raw === cacheRaw) return cache;
  cacheRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    const next = Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
    cache = next.length ? next : EMPTY;
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function emit() {
  cacheRaw = undefined;
  cache = EMPTY;
  listeners.forEach((l) => l());
}

export function subscribeRecent(onStoreChange: () => void): () => void {
  listeners.add(onStoreChange);
  return () => {
    listeners.delete(onStoreChange);
  };
}

export function getRecentIds(): string[] {
  return snapshot();
}

export function getRecentIdsServer(): string[] {
  return EMPTY;
}

export function pushRecent(id: string): void {
  if (typeof window === "undefined") return;
  const next = [id, ...snapshot().filter((x) => x !== id)].slice(0, MAX);
  localStorage.setItem(KEY, JSON.stringify(next));
  emit();
}
