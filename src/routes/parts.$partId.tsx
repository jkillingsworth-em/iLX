import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { partsById } from "@/data/parts";
import { models } from "@/data/models";
import { Badge } from "@/components/ui/badge";
import { Page } from "@/components/site/page";

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
    <Page className="space-y-8">
      <div>
        <Link to="/parts" className="text-xs text-muted hover:text-fg">
          Hardware
        </Link>
        <p className="mt-3">
          <Badge>{part.category}</Badge>
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">{part.name}</h1>
        <p className="mt-2 max-w-2xl text-base text-muted">{part.role}</p>
      </div>

      {part.image ? (
        <div className="overflow-hidden rounded-lg border border-border bg-bg-elevated p-6">
          <img
            src={part.image}
            alt={part.name}
            className="mx-auto max-h-72 w-auto object-contain"
          />
        </div>
      ) : null}

      <section className="rounded-lg border border-border bg-bg-elevated p-5">
        <h2 className="font-display text-xl tracking-wide">How it works</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{part.how}</p>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide">Specs</h2>
        <dl className="mt-3 grid gap-2 sm:grid-cols-2">
          {part.specs.map((s) => (
            <div key={s.label} className="rounded-md border border-border px-4 py-3">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-subtle">{s.label}</dt>
              <dd className="mt-1 text-sm">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="font-display text-xl tracking-wide">Talks to</h2>
        <p className="mt-1 text-sm text-muted">{part.usedOn}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {neighbors.map((n) => (
            <Link
              key={n.id}
              to="/parts/$partId"
              params={{ partId: n.id }}
              className="rounded-sm border border-border px-3 py-2 text-sm hover:border-accent"
            >
              {n.name}
            </Link>
          ))}
        </div>
      </section>

      {sampleModels.length ? (
        <section>
          <h2 className="font-display text-xl tracking-wide">On these models</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {sampleModels.map((m) => (
              <Link
                key={m.id}
                to="/catalog/$modelId"
                params={{ modelId: m.id }}
                className="rounded-sm border border-border px-3 py-2 font-display tracking-wide hover:border-accent"
              >
                {m.id}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </Page>
  );
}
