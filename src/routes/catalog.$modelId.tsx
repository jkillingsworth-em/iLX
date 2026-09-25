import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { modelsById } from "@/data/models";
import { partsById } from "@/data/parts";
import { bomByModel, assembliesByModel } from "@/data/bom";
import { sportLabels, environmentLabels } from "@/data/glossary";
import { salesLines } from "@/data/sales";
import { SPECS } from "@/data/specs";
import { MECH } from "@/data/mech";
import { manualFor } from "@/data/manuals";
import { ETN_BY_MODEL } from "@/data/etn";
import { VariantGallery } from "@/components/lx/variant-gallery";
import { DocViewer } from "@/components/lx/cutsheet-viewer";
import { Badge } from "@/components/ui/badge";
import { Page } from "@/components/site/page";
import { hasEtn, outdoorLeds } from "@/lib/field";
import { pushRecent } from "@/lib/recent";

export const Route = createFileRoute("/catalog/$modelId")({
  component: ModelPage,
});

function prettySize(size: string): string {
  const match = size.replace(/\s+/g, "").match(/^(\d+)[x×](\d+)$/i);
  return match ? `${match[1]} × ${match[2]}` : size;
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-md border border-border bg-bg-elevated px-3 py-2">
      <dt className="font-mono text-[10px] uppercase tracking-wider text-subtle">{label}</dt>
      <dd className="mt-0.5 truncate font-display text-lg tracking-wide">{value}</dd>
    </div>
  );
}

function ModelPage() {
  const { modelId } = Route.useParams();
  const model = modelsById[modelId];
  if (!model) throw notFound();

  const bom = bomByModel[model.id] ?? [];
  const assemblies = assembliesByModel[model.id] ?? [];
  const usedParts = model.components.map((id) => partsById[id]).filter(Boolean);
  const ranks = salesLines(model.id, model.environment);
  const etn = hasEtn(model);
  const spec = SPECS[model.id];
  const specEtn = SPECS[`${model.id}-ETN`];
  const mech = MECH[model.id];
  const mechEtn = MECH[`${model.id}-ETN`];
  const manual = manualFor(model.id);
  const etnFit = ETN_BY_MODEL[model.id];

  useEffect(() => {
    pushRecent(model.id);
  }, [model.id]);

  const related = Object.values(modelsById)
    .filter((m) => m.sport === model.sport && m.id !== model.id)
    .slice(0, 6);

  const facts = [
    { label: "Cabinet", value: `${model.width} × ${model.height}` },
    model.weightLb ? { label: "Weight", value: `${model.weightLb} lb` } : null,
    model.currentA ? { label: "Current", value: `${model.currentA} A` } : null,
    { label: "Voltage", value: model.voltage },
    model.posts
      ? {
          label: "Posts",
          value: model.postMaxDiaIn ? `${model.posts} · max ${model.postMaxDiaIn}"` : `${model.posts}`,
        }
      : null,
    model.digitHeights.length
      ? { label: "Digits", value: model.digitHeights.map((n) => `${n}"`).join(" / ") }
      : null,
    { label: "Console", value: model.console },
  ].filter((f): f is { label: string; value: string } => Boolean(f));

  const pdfs = [
    spec ? { label: `${model.id} spec sheet`, href: spec.href } : null,
    specEtn ? { label: `${model.id} ETN spec sheet`, href: specEtn.href } : null,
    mech ? { label: `${model.id} mechanical sheet`, href: mech.href } : null,
    mechEtn ? { label: `${model.id} ETN mechanical sheet`, href: mechEtn.href } : null,
    manual ? { label: `${model.id} owner’s manual`, href: manual.href } : null,
  ].filter((d): d is { label: string; href: string } => Boolean(d));

  return (
    <Page className="space-y-5">
      <div>
        <Link to="/catalog" search={{ sport: model.sport }} className="text-xs text-muted hover:text-fg">
          Models
        </Link>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <h1 className="font-display text-5xl tracking-tight">{model.id}</h1>
          <div className="flex flex-wrap gap-1.5">
            <Badge>{environmentLabels[model.environment]}</Badge>
            <Badge>{sportLabels[model.sport]}</Badge>
            <Badge>{model.console} console</Badge>
            {etn ? <Badge tone="muted">ETN</Badge> : null}
            {outdoorLeds(model) ? <Badge tone="led">Red / Amber</Badge> : null}
          </div>
        </div>
        {model.blurb ? <p className="mt-2 max-w-3xl text-sm text-muted">{model.blurb}</p> : null}
      </div>

      <VariantGallery model={model} />

      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {facts.map((f) => (
          <Fact key={f.label} label={f.label} value={f.value} />
        ))}
      </dl>

      {model.displays.length ? (
        <div>
          <h2 className="font-display text-lg tracking-wide">Face</h2>
          <ul className="mt-2 divide-y divide-border rounded-md border border-border">
            {model.displays.map((d) => (
              <li key={d.label} className="flex justify-between gap-3 px-3 py-2 text-sm">
                <span className="text-muted">{d.label}</span>
                <span className="text-right">{d.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {assemblies.length ? (
        <div>
          <h2 className="font-display text-lg tracking-wide">Mask assemblies</h2>
          <div className="mt-2 overflow-x-auto rounded-md border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface font-mono text-[10px] uppercase tracking-wider text-subtle">
                <tr>
                  <th className="px-3 py-2">Qty</th>
                  <th className="px-3 py-2">Item</th>
                  <th className="px-3 py-2">Use</th>
                </tr>
              </thead>
              <tbody>
                {assemblies.map((line, i) => (
                  <tr key={`${line.item}-${i}`} className="border-t border-border">
                    <td className="px-3 py-2 font-mono tabular-nums">{line.qty}</td>
                    <td className="px-3 py-2">{line.item}</td>
                    <td className="px-3 py-2 text-muted">{line.use || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {bom.length ? (
        <div>
          <h2 className="font-display text-lg tracking-wide">Digit BOM</h2>
          <div className="mt-2 overflow-x-auto rounded-md border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface font-mono text-[10px] uppercase tracking-wider text-subtle">
                <tr>
                  <th className="px-3 py-2">Qty</th>
                  <th className="px-3 py-2">Item</th>
                  <th className="px-3 py-2">Part</th>
                </tr>
              </thead>
              <tbody>
                {bom.map((line, i) => (
                  <tr key={`${line.part}-${i}`} className="border-t border-border">
                    <td className="px-3 py-2 font-mono tabular-nums">{line.qty}</td>
                    <td className="px-3 py-2">{line.item}</td>
                    <td className="px-3 py-2">
                      {line.part ? (
                        <Link to="/digits" search={{ q: line.part }} className="font-mono text-xs hover:underline">
                          {line.part}
                        </Link>
                      ) : (
                        "—"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : model.digitKit?.length ? (
        <div>
          <h2 className="font-display text-lg tracking-wide">Digit kit</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {model.digitKit.map((k) => (
              <li key={k.part}>
                {k.qty}× {k.item} · <span className="font-mono text-xs">{k.part}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {etnFit ? (
        <div>
          <h2 className="font-display text-lg tracking-wide">ETN BOM</h2>
          <ul className="mt-2 divide-y divide-border rounded-md border border-border">
            <li className="flex justify-between gap-3 px-3 py-2 text-sm">
              <span className="text-muted">Panel size</span>
              <span>{prettySize(etnFit.panel)}</span>
            </li>
            <li className="flex justify-between gap-3 px-3 py-2 text-sm">
              <span className="text-muted">Full ETN size</span>
              <span>{prettySize(etnFit.fullSize)}</span>
            </li>
            <li className="flex justify-between gap-3 px-3 py-2 text-sm">
              <span className="text-muted">Full ETN qty</span>
              <span className="font-mono tabular-nums">{etnFit.fullQty}</span>
            </li>
            {etnFit.halfSize && etnFit.halfQty ? (
              <>
                <li className="flex justify-between gap-3 px-3 py-2 text-sm">
                  <span className="text-muted">Half ETN size</span>
                  <span>{prettySize(etnFit.halfSize)}</span>
                </li>
                <li className="flex justify-between gap-3 px-3 py-2 text-sm">
                  <span className="text-muted">Half ETN qty</span>
                  <span className="font-mono tabular-nums">{etnFit.halfQty}</span>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      ) : null}

      {model.options.length ? (
        <div>
          <h2 className="font-display text-lg tracking-wide">Factory options</h2>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {model.options.map((o) => (
              <li key={o}>
                <Badge tone="muted">{o}</Badge>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {usedParts.length ? (
        <div>
          <h2 className="font-display text-lg tracking-wide">In the package</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {usedParts.map((p) => (
              <Link
                key={p.id}
                to="/parts/$partId"
                params={{ partId: p.id }}
                className="rounded-sm border border-border px-2 py-1.5 text-xs hover:border-accent"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {ranks.length ? (
        <ul className="space-y-2">
          {ranks.map((line) => (
            <li
              key={line}
              className="rounded-md border border-led/30 bg-led/10 px-3 py-3 font-display text-lg tracking-wide"
            >
              This board is {line}.
            </li>
          ))}
        </ul>
      ) : null}

      {pdfs.length ? (
        <section className="space-y-4">
          <h2 className="font-display text-lg tracking-wide">Documents</h2>
          {pdfs.map((doc) => (
            <DocViewer key={doc.href} label={doc.label} previewHref={doc.href} openHref={doc.href} />
          ))}
          {model.productUrl ? (
            <a
              href={model.productUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-between rounded-md border border-border bg-surface px-3 text-sm"
            >
              Electro-Mech product page
              <ExternalLink className="size-3.5 text-subtle" />
            </a>
          ) : null}
        </section>
      ) : null}

      {related.length ? (
        <div className="flex flex-wrap gap-2">
          {related.map((m) => (
            <Link
              key={m.id}
              to="/catalog/$modelId"
              params={{ modelId: m.id }}
              className="inline-flex h-11 items-center rounded-md border border-border px-3 font-display tracking-wide"
            >
              {m.id}
            </Link>
          ))}
        </div>
      ) : null}
    </Page>
  );
}
