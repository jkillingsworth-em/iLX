import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { models } from "@/data/models";
import { sportLabels, environmentLabels } from "@/data/glossary";
import { BoardPhoto } from "@/components/lx/board-photo";
import { Input } from "@/components/ui/input";
import { Page, Kicker } from "@/components/site/page";
import { SheetSection } from "@/components/sheet/sheet";
import { searchModels } from "@/lib/field";
import { cn } from "@/lib/utils";
import type { SportId } from "@/data/types";

type Search = { sport?: string; q?: string; env?: string };

export const Route = createFileRoute("/catalog/")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    sport: typeof raw.sport === "string" ? raw.sport : undefined,
    q: typeof raw.q === "string" ? raw.q : undefined,
    env: typeof raw.env === "string" ? raw.env : undefined,
  }),
  component: CatalogPage,
});

const SPORT_FILTERS: Array<SportId | "all"> = [
  "all",
  "baseball",
  "basketball",
  "football",
  "soccer",
  "hockey",
  "multisport",
  "accessory",
];

function CatalogPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(search.q ?? "");
  const sport = (search.sport as SportId | "all") || "all";
  const env = search.env || "all";

  const list = useMemo(() => {
    const base = query.trim() ? searchModels(query) : models;
    return base.filter((m) => {
      const sportOk = sport === "all" || m.sport === sport || m.alsoSports.includes(sport);
      const envOk = env === "all" || m.environment === env;
      return sportOk && envOk;
    });
  }, [query, sport, env]);

  return (
    <Page className="space-y-6">
      <header className="flex flex-col gap-1">
        <Kicker>Models</Kicker>
        <h1 className="font-display text-3xl tracking-tight">
          {sport === "all" ? "All boards" : sportLabels[sport]}
        </h1>
      </header>

      <div className="space-y-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Model, size, ETN, 563-20-…"
          aria-label="Filter models"
          className="border-border-strong"
        />
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {SPORT_FILTERS.map((id) => {
            const active = sport === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() =>
                  navigate({ search: { ...search, sport: id === "all" ? undefined : id } })
                }
                className={cn(
                  "h-10 shrink-0 rounded-xs border px-3 text-sm transition-colors duration-150",
                  active
                    ? "border-accent bg-accent text-accent-fg"
                    : "border-border text-muted hover:border-border-strong hover:text-fg",
                )}
              >
                {id === "all" ? "All" : sportLabels[id]}
              </button>
            );
          })}
        </div>
        <div className="flex gap-1.5">
          {(["all", "outdoor", "indoor", "portable"] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => navigate({ search: { ...search, env: id === "all" ? undefined : id } })}
              className={cn(
                "h-9 rounded-xs px-3 text-xs transition-colors duration-150",
                env === id ? "bg-surface-2 text-fg" : "text-subtle hover:text-fg",
              )}
            >
              {id === "all" ? "Any yard" : environmentLabels[id] ?? id}
            </button>
          ))}
        </div>
      </div>

      <SheetSection
        label={sport === "all" ? "All" : sportLabels[sport]}
        hint={`${list.length} board${list.length === 1 ? "" : "s"}`}
      >
        <ul>
          {list.map((m) => (
            <li key={m.id}>
              <Link
                to="/catalog/$modelId"
                params={{ modelId: m.id }}
                className="group grid grid-cols-[72px_minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 border-b border-border py-2 pl-2 pr-4 transition-colors duration-150 hover:bg-surface sm:grid-cols-[96px_110px_minmax(0,1fr)_auto]"
              >
                <BoardPhoto modelId={m.id} className="row-span-2 h-14 sm:row-span-1" />
                <span className="font-display text-lg font-medium tracking-[0.025em]">{m.id}</span>
                <span className="order-3 col-start-2 col-span-2 flex min-w-0 flex-col gap-0.5 sm:order-none sm:col-start-auto sm:col-span-1">
                  <span className="line-clamp-2 text-sm leading-snug text-muted">{m.blurb}</span>
                  <span className="font-mono text-[11px] text-subtle">
                    {m.width} × {m.height}
                    {m.weightLb ? ` · ${m.weightLb} lb` : ""}
                    {m.currentA ? ` · ${m.currentA} A` : ""} · {environmentLabels[m.environment]}
                  </span>
                </span>
                <span className="justify-self-end rounded-xs border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
                  {m.console}
                </span>
              </Link>
            </li>
          ))}
          {list.length === 0 ? (
            <li className="border-b border-border px-4 py-3 text-sm text-subtle">
              No boards match those filters.
            </li>
          ) : null}
        </ul>
      </SheetSection>
    </Page>
  );
}
