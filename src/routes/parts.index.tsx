import { createFileRoute, Link } from "@tanstack/react-router";
import { parts, partCategories } from "@/data/parts";
import { sitePhotos } from "@/data/photos";
import { Page, Kicker } from "@/components/site/page";

export const Route = createFileRoute("/parts/")({
  component: PartsPage,
});

function PartsPage() {
  return (
    <Page>
      <Kicker>Hardware</Kicker>
      <h1 className="mt-1 font-display text-4xl tracking-tight">Controllers, drivers, and options</h1>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Consoles, LX drivers, ScoreLink, ETN, horns, and the T-Cart. Terms follow the plant
        glossary — CX, stereo, ETN16.
      </p>

      <div className="mt-8 overflow-hidden rounded-lg border border-border bg-bg-elevated p-6">
        <img
          src={sitePhotos.consoles}
          alt="Electro-Mech MP and MM control consoles"
          className="mx-auto max-h-56 w-auto object-contain"
        />
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-subtle">
          MP (37-key) and MM (15-key) consoles
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {partCategories.map((cat) => {
          const group = parts.filter((p) => p.category === cat.id);
          return (
            <section key={cat.id}>
              <h2 className="font-display text-xl tracking-[0.14em] text-muted uppercase">
                {cat.label}
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {group.map((p) => (
                  <Link
                    key={p.id}
                    to="/parts/$partId"
                    params={{ partId: p.id }}
                    className="rounded-lg border border-border bg-bg-elevated p-4 hover:border-accent"
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt=""
                        className="mb-3 h-28 w-full object-contain"
                      />
                    ) : null}
                    <h3 className="font-display text-lg tracking-wide">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted">{p.short}</p>
                    <p className="mt-2 text-xs text-subtle">{p.role}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Page>
  );
}
