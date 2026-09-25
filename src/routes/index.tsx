import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useSyncExternalStore } from "react";
import { SearchBox } from "@/components/lx/search-box";
import { models, modelsById } from "@/data/models";
import { getRecentIds, getRecentIdsServer, subscribeRecent } from "@/lib/recent";
import { sportLabels, numberingNotes } from "@/data/glossary";
import { company } from "@/data/company";
import { Page } from "@/components/site/page";

const SPORTS = ["baseball", "basketball", "football", "soccer", "hockey", "multisport", "accessory"] as const;

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const recent = useSyncExternalStore(subscribeRecent, getRecentIds, getRecentIdsServer);
  const recentModels = useMemo(
    () => recent.map((id) => modelsById[id]).filter(Boolean),
    [recent],
  );

  return (
    <Page className="space-y-8">
      <header>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-subtle">
          Plant + field
        </p>
        <h1 className="mt-1 font-display text-4xl tracking-tight">Find an LX model</h1>
        <p className="mt-2 max-w-xl text-sm text-muted">
          {models.length} cabinets. Type a model, a digit part, or a size. Mechanical, electrical,
          sales, and Drive docs on one page.
        </p>
      </header>

      <SearchBox autoFocus size="lg" />

      {recentModels.length ? (
        <section>
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-subtle">Recent</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {recentModels.map((m) => (
              <Link
                key={m.id}
                to="/catalog/$modelId"
                params={{ modelId: m.id }}
                className="rounded-sm border border-border bg-surface px-3 py-2 font-display tracking-wide"
              >
                {m.id}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-wider text-subtle">By sport</h2>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {SPORTS.map((id) => (
            <Link
              key={id}
              to="/catalog"
              search={{ sport: id }}
              className="rounded-md border border-border bg-bg-elevated px-3 py-3 text-sm hover:border-accent"
            >
              {sportLabels[id]}
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-2 sm:grid-cols-3">
        <Link to="/digits" className="rounded-md border border-border bg-surface p-4 hover:border-accent">
          <p className="font-display text-lg tracking-wide">Digit BOM</p>
          <p className="mt-1 text-sm text-muted">Models by item code.</p>
        </Link>
        <Link to="/compare" className="rounded-md border border-border bg-surface p-4 hover:border-accent">
          <p className="font-display text-lg tracking-wide">Compare</p>
          <p className="mt-1 text-sm text-muted">Two or three boards side by side.</p>
        </Link>
        <Link to="/system" className="rounded-md border border-border bg-surface p-4 hover:border-accent">
          <p className="font-display text-lg tracking-wide">How it works</p>
          <p className="mt-1 text-sm text-muted">Console → data path → LX driver → digits.</p>
        </Link>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide">Numbering</h2>
        <ul className="mt-3 space-y-3">
          {numberingNotes.map((n) => (
            <li key={n.title}>
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">{n.title}</p>
              <p className="mt-1 text-sm text-muted">{n.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <p className="font-mono text-xs text-subtle">
        Plant {company.phone} · {company.city}, {company.state}
      </p>
    </Page>
  );
}
