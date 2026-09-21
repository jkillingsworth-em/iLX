import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { models } from "@/data/models";
import { sportLabels, environmentLabels } from "@/data/glossary";
import { BoardPhoto } from "@/components/lx/board-photo";
import { Input } from "@/components/ui/input";
import { Page } from "@/components/site/page";
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
    <Page>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">Models</p>
      <h1 className="mt-1 font-display text-3xl tracking-tight">{list.length} boards</h1>

      <div className="mt-4 space-y-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Model, size, ETN, 563-20-…"
          aria-label="Filter models"
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
                  "h-10 shrink-0 rounded-sm px-3 text-sm",
                  active ? "bg-accent text-accent-fg" : "border border-border bg-surface text-muted",
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
                "h-9 rounded-sm px-3 text-xs",
                env === id ? "bg-surface-2 text-fg" : "text-subtle",
              )}
            >
              {id === "all" ? "Any yard" : environmentLabels[id] ?? id}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-4 divide-y divide-border rounded-md border border-border">
        {list.map((m) => (
          <li key={m.id}>
            <Link
              to="/catalog/$modelId"
              params={{ modelId: m.id }}
              className="flex items-center gap-3 px-2 py-2 hover:bg-surface"
            >
              <BoardPhoto modelId={m.id} className="size-16 shrink-0 rounded-sm" />
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg tracking-wide">{m.id}</p>
                <p className="truncate font-mono text-[11px] text-subtle">
                  {m.width} × {m.height}
                  {m.weightLb ? ` · ${m.weightLb} lb` : ""}
                  {m.currentA ? ` · ${m.currentA} A` : ""} · {m.console}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  );
}
