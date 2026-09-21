import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { modelsUsingPart } from "@/lib/field";
import { bomByModel } from "@/data/bom";
import { Input } from "@/components/ui/input";
import { Page } from "@/components/site/page";
import { sportLabels } from "@/data/glossary";

type Search = { q?: string };

export const Route = createFileRoute("/digits")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    q: typeof raw.q === "string" ? raw.q : undefined,
  }),
  component: DigitsPage,
});

function DigitsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(search.q ?? "");
  const hits = useMemo(() => modelsUsingPart(q), [q]);
  const partCount = Object.values(bomByModel).reduce((n, rows) => n + rows.length, 0);

  return (
    <Page>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">BOM</p>
      <h1 className="mt-1 font-display text-3xl tracking-tight">Digit part search</h1>
      <p className="mt-2 max-w-xl text-sm text-muted">
        {partCount ? `${partCount} lines from Drive DIGITS PER MODEL Parts sheet.` : "BOM table loading from Drive Parts sheet."}{" "}
        Type 563-20-1010, 18-IN, or amber.
      </p>
      <Input
        className="mt-4"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          navigate({ search: { q: e.target.value || undefined } });
        }}
        placeholder="563-20-1010"
        aria-label="Search digit part numbers"
      />
      <ul className="mt-4 divide-y divide-border rounded-md border border-border">
        {q.trim().length < 3 ? (
          <li className="px-3 py-3 text-sm text-muted">Enter at least 3 characters.</li>
        ) : hits.length === 0 ? (
          <li className="px-3 py-3 text-sm text-muted">No models use that part.</li>
        ) : (
          hits.map((h) => (
            <li key={`${h.model.id}-${h.item}-${h.qty}`}>
              <Link
                to="/catalog/$modelId"
                params={{ modelId: h.model.id }}
                search={{ tab: "electrical" }}
                className="flex items-center justify-between gap-3 px-3 py-3 hover:bg-surface"
              >
                <span>
                  <span className="font-display text-lg tracking-wide">{h.model.id}</span>
                  <span className="mt-0.5 block text-xs text-subtle">
                    {sportLabels[h.model.sport]} · {h.item}
                  </span>
                </span>
                <span className="font-mono text-sm tabular-nums">{h.qty}×</span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </Page>
  );
}
