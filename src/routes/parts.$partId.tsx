import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { partsById } from "@/data/parts";
import { models } from "@/data/models";
import { BoardPhoto } from "@/components/lx/board-photo";
import { Page } from "@/components/site/page";
import { SheetSection, SpecRow } from "@/components/sheet/sheet";

export const Route = createFileRoute("/parts/$partId")({
  component: PartPage,
});

function PartPage() {
  const { partId } = Route.useParams();
  const part = partsById[partId];
  if (!part) throw notFound();

  const neighbors = part.connects.map((id) => partsById[id]).filter(Boolean);
  const sampleModels = models.filter((m) => m.components.includes(part.id)).slice(0, 12);

  return (
    <Page className="space-y-10">
      <header className="flex flex-col gap-2">
        <Link to="/parts" className="self-start text-xs text-muted hover:text-fg">
          ← Hardware
        </Link>
        <span className="mt-2 self-start rounded-xs border border-border px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">
          {part.category}
        </span>
        <h1 className="font-display text-4xl tracking-tight">{part.name}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted">{part.role}</p>
      </header>

      <div className="grid border-b border-border border-t-2 border-t-fg lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex min-h-[200px] items-center justify-center bg-bg-elevated p-6">
          {part.image ? (
            <img
              src={part.image}
              alt={part.name}
              className="max-h-72 w-auto max-w-full object-contain"
            />
          ) : (
            <span className="font-mono text-[11px] uppercase tracking-[0.05em] text-subtle">
              No plant photo
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 py-3 lg:pl-5 lg:pb-4">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
            How it works
          </h2>
          <p className="text-sm leading-[1.65]">{part.how}</p>
        </div>
      </div>

      <SheetSection label="Specs">
        <dl>
          {part.specs.map((s) => (
            <SpecRow key={s.label} label={s.label} value={s.value} />
          ))}
        </dl>
      </SheetSection>

      <SheetSection label="Talks to">
        <p className="border-b border-border px-4 py-3 text-sm text-muted">{part.usedOn}</p>
        {neighbors.map((n) => (
          <Link
            key={n.id}
            to="/parts/$partId"
            params={{ partId: n.id }}
            className="group grid grid-cols-[minmax(0,1fr)_16px] gap-4 border-b border-border px-4 py-3 text-sm transition-colors duration-150 hover:bg-surface"
          >
            {n.name}
            <span className="text-subtle group-hover:text-fg">→</span>
          </Link>
        ))}
      </SheetSection>

      {sampleModels.length ? (
        <SheetSection label="On these models" hint="First twelve">
          {sampleModels.map((m) => (
            <Link
              key={m.id}
              to="/catalog/$modelId"
              params={{ modelId: m.id }}
              className="group grid grid-cols-[72px_minmax(0,1fr)_16px] items-center gap-4 border-b border-border py-2 pl-2 pr-4 transition-colors duration-150 hover:bg-surface"
            >
              <BoardPhoto modelId={m.id} className="h-10" />
              <span className="font-display text-lg font-medium tracking-[0.025em]">{m.id}</span>
              <span className="text-right text-subtle group-hover:text-fg">→</span>
            </Link>
          ))}
        </SheetSection>
      ) : null}
    </Page>
  );
}
