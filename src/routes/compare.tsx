import { createFileRoute } from "@tanstack/react-router";
import { models, modelsById } from "@/data/models";
import { sportLabels } from "@/data/glossary";
import { Page, Kicker } from "@/components/site/page";
import { BoardPhoto } from "@/components/lx/board-photo";

type Search = { a?: string; b?: string; c?: string };

export const Route = createFileRoute("/compare")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    a: typeof raw.a === "string" ? raw.a : undefined,
    b: typeof raw.b === "string" ? raw.b : undefined,
    c: typeof raw.c === "string" ? raw.c : undefined,
  }),
  component: ComparePage,
});

function ComparePage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const ids = [search.a, search.b, search.c];
  const selected = ids.map((id) => (id ? modelsById[id] : undefined));

  function setSlot(slot: "a" | "b" | "c", value: string) {
    navigate({ search: { ...search, [slot]: value || undefined } });
  }

  const rows: { label: string; pick: (id: NonNullable<(typeof selected)[0]>) => string }[] = [
    { label: "Sport", pick: (m) => sportLabels[m.sport] },
    { label: "Environment", pick: (m) => m.environment },
    { label: "Cabinet", pick: (m) => `${m.width} × ${m.height}` },
    { label: "Weight", pick: (m) => (m.weightLb ? `${m.weightLb} lb` : "—") },
    { label: "Electrical", pick: (m) => (m.currentA ? `${m.voltage}, ${m.currentA} A` : m.voltage) },
    { label: "Console", pick: (m) => m.console },
    { label: "Digit heights", pick: (m) => m.digitHeights.map((n) => `${n}"`).join(" / ") },
    { label: "Layout", pick: (m) => m.layout },
    { label: "Displays", pick: (m) => m.displays.map((d) => d.detail).join(" · ") },
  ];

  return (
    <Page>
      <Kicker>Compare</Kicker>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Set two or three boards</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Side-by-side cabinet, electrical, console, and display lists — when a park is choosing
        between a compact rec board and a full linescore.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {(["a", "b", "c"] as const).map((slot, i) => (
          <label key={slot} className="block">
            <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
              Model {i + 1}
            </span>
            <select
              className="mt-1 h-11 w-full rounded-md border border-border bg-surface px-2 text-sm text-fg"
              value={ids[i] ?? ""}
              onChange={(e) => setSlot(slot, e.target.value)}
            >
              <option value="">Select…</option>
              {models.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.id} — {sportLabels[m.sport]}
                </option>
              ))}
            </select>
            {selected[i] ? (
              <BoardPhoto
                modelId={selected[i]!.id}
                className="mt-2 aspect-[16/9] w-full rounded-md border border-border p-2"
              />
            ) : null}
          </label>
        ))}
      </div>

      {selected.some(Boolean) ? (
        <div className="mt-6 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-surface">
              <tr>
                <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-subtle">
                  Spec
                </th>
                {selected.map((m, i) => (
                  <th key={i} className="px-3 py-2 font-display text-lg tracking-wide">
                    {m?.id ?? "—"}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-border align-top">
                  <th className="px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-subtle">
                    {row.label}
                  </th>
                  {selected.map((m, i) => (
                    <td key={i} className="px-3 py-2 text-muted">
                      {m ? row.pick(m) : "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-8 text-sm text-muted">Pick at least one model to fill the table.</p>
      )}
    </Page>
  );
}
