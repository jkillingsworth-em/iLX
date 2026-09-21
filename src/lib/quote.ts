import { useSyncExternalStore } from "react";
import type { FaceId, LedId } from "@/data/company";

export type QuoteLine = {
  modelId: string;
  face: FaceId;
  led: LedId;
};

const KEY = "em-quote-v1";
const EMPTY: QuoteLine[] = [];
const listeners = new Set<() => void>();

let snapshotRaw: string | null = null;
let snapshot: QuoteLine[] = EMPTY;

function emit() {
  listeners.forEach((l) => l());
}

function parse(raw: string | null): QuoteLine[] {
  if (!raw) return EMPTY;
  try {
    const parsed = JSON.parse(raw) as QuoteLine[];
    return Array.isArray(parsed) && parsed.length ? parsed : EMPTY;
  } catch {
    return EMPTY;
  }
}

function getSnapshot(): QuoteLine[] {
  if (typeof window === "undefined") return EMPTY;
  const raw = window.localStorage.getItem(KEY);
  if (raw === snapshotRaw) return snapshot;
  snapshotRaw = raw;
  snapshot = parse(raw);
  return snapshot;
}

function getServerSnapshot(): QuoteLine[] {
  return EMPTY;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
  };
}

function write(lines: QuoteLine[]) {
  const raw = lines.length ? JSON.stringify(lines) : null;
  if (raw) window.localStorage.setItem(KEY, raw);
  else window.localStorage.removeItem(KEY);
  snapshotRaw = raw;
  snapshot = lines.length ? lines : EMPTY;
  emit();
}

export function addToQuote(line: QuoteLine) {
  const next = getSnapshot().filter((l) => l.modelId !== line.modelId);
  next.push(line);
  write(next);
}

export function removeFromQuote(modelId: string) {
  write(getSnapshot().filter((l) => l.modelId !== modelId));
}

export function clearQuote() {
  write([]);
}

export function useQuote(): QuoteLine[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export type QuoteRequest = {
  name: string;
  org: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  sport: string;
  message: string;
  models: QuoteLine[];
  at: string;
};

const REQ_KEY = "em-quote-requests";

export function saveRequest(req: QuoteRequest) {
  const prev = (() => {
    try {
      return JSON.parse(window.localStorage.getItem(REQ_KEY) || "[]") as QuoteRequest[];
    } catch {
      return [];
    }
  })();
  prev.unshift(req);
  window.localStorage.setItem(REQ_KEY, JSON.stringify(prev.slice(0, 20)));
  clearQuote();
}
