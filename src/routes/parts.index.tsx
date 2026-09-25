import { createFileRoute, Link } from "@tanstack/react-router";
import { parts, partCategories } from "@/data/parts";
import { sitePhotos } from "@/data/photos";
import { Page, Kicker } from "@/components/site/page";
import { SheetSection } from "@/components/sheet/sheet";

export const Route = createFileRoute("/parts/")({
  component: PartsPage,
});

function PartsPage() {
  return (
    <Page className="space-y-8">
      <header className="flex flex-col gap-2">
        <Kicker>Hardware</Kicker>
        <h1 className="font-display text-4xl tracking-tight">Controllers, drivers, and options</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Consoles, LX drivers, ScoreLink, ETN, horns, and the T-Cart. Terms follow the plant
          glossary — CX, stereo, ETN16.
        </p>
      </header>

      <div className="border-b border-border border-t-2 border-t-fg bg-bg-elevated p-6">
        <img
          src={sitePhotos.consoles}
          alt="Electro-Mech MP and MM control consoles"
          className="mx-auto max-h-56 w-auto object-contain"
        />
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.05em] text-subtle">
          MP (37-key) and MM (15-key) consoles
        </p>
      </div>

      <div className="space-y-8">
        {partCategories.map((cat) => {
          const group = parts.filter((p) => p.category === cat.id);
          if (!group.length) return null;
          return (
            <SheetSection key={cat.id} label={cat.label} hint={`${group.length} item${group.length === 1 ? "" : "s"}`}>
              {group.map((p) => (
                <Link
                  key={p.id}
                  to="/parts/$partId"
                  params={{ partId: p.id }}
                  className="group grid grid-cols-[72px_minmax(0,1fr)_16px] items-center gap-4 border-b border-border py-2 pl-2 pr-4 transition-colors duration-150 hover:bg-surface sm:grid-cols-[96px_minmax(0,1fr)_16px]"
                >
                  <span className="grid h-14 place-items-center overflow-hidden bg-bg-elevated">
                    {p.image ? (
                      <img src={p.image} alt="" className="max-h-full max-w-full object-contain" />
                    ) : (
                      <span className="font-mono text-[9px] uppercase tracking-[0.05em] text-subtle">
                        No photo
                      </span>
                    )}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-display text-[17px] font-medium tracking-[0.025em]">
                      {p.name}
                    </span>
                    <span className="text-sm leading-snug text-muted">{p.short}</span>
                  </span>
                  <span className="text-right font-mono text-xs text-subtle group-hover:text-fg">→</span>
                </Link>
              ))}
            </SheetSection>
          );
        })}
      </div>
    </Page>
  );
}
