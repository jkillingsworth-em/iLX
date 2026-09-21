import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { modelsById } from "@/data/models";
import { partsById } from "@/data/parts";
import { bomByModel, assembliesByModel } from "@/data/bom";
import { sportLabels, environmentLabels } from "@/data/glossary";
import { SALES_SOURCE, SALES_YEAR, salesLines } from "@/data/sales";
import {
  CUTSHEET_FOLDER,
  DIGITS_BREAKDOWN,
  MANUALS_INDEX,
  SPEC_SHEETS_INDEX,
  cutsheetSearchUrl,
  digitsSheetUrl,
} from "@/data/docs";
import { VariantGallery } from "@/components/lx/variant-gallery";
import { Badge } from "@/components/ui/badge";
import { Page } from "@/components/site/page";
import { hasEtn, outdoorLeds } from "@/lib/field";
import { pushRecent } from "@/lib/recent";
import { cn } from "@/lib/utils";

const TABS = ["mechanical", "electrical", "sales", "docs"] as const;
type Tab = (typeof TABS)[number];

type Search = { tab?: string };

export const Route = createFileRoute("/catalog/$modelId")({
  validateSearch: (raw: Record<string, unknown>): Search => ({
    tab: typeof raw.tab === "string" ? raw.tab : undefined,
  }),
  component: ModelPage,
});

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
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const model = modelsById[modelId];
  if (!model) throw notFound();

  const tab: Tab = TABS.includes(search.tab as Tab) ? (search.tab as Tab) : "mechanical";
  const bom = bomByModel[model.id] ?? [];
  const assemblies = assembliesByModel[model.id] ?? [];
  const usedParts = model.components.map((id) => partsById[id]).filter(Boolean);
  const ranks = salesLines(model.id, model.environment);
  const etn = hasEtn(model);

  useEffect(() => {
    pushRecent(model.id);
  }, [model.id]);

  const related = Object.values(modelsById)
    .filter((m) => m.sport === model.sport && m.id !== model.id)
    .slice(0, 8);

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
            <Badge>{model.console} console</Badge>
            {etn ? <Badge tone="muted">ETN optional</Badge> : null}
            {outdoorLeds(model) ? <Badge tone="led">Red / Amber</Badge> : null}
          </div>
        </div>
        <p className="mt-1 text-sm text-muted">
          {sportLabels[model.sport]}
          {model.alsoSports.length ? ` · ${model.alsoSports.join(", ")}` : ""}
        </p>
      </div>

      <VariantGallery model={model} />

      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Fact label="Cabinet" value={`${model.width} × ${model.height}`} />
        <Fact label="Weight" value={model.weightLb ? `${model.weightLb} lb` : "Cut sheet"} />
        <Fact label="Current" value={model.currentA ? `${model.currentA} A` : model.voltage} />
        <Fact label="Voltage" value={model.voltage} />
        <Fact label="Posts" value={model.posts ? `${model.posts} · max ${model.postMaxDiaIn}"` : "Cut sheet"} />
        <Fact label="Digits" value={model.digitHeights.map((n) => `${n}"`).join(" / ") || "—"} />
      </dl>

      <div className="flex gap-1 overflow-x-auto border-b border-border">
        {TABS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => navigate({ search: { tab: id === "mechanical" ? undefined : id } })}
            className={cn(
              "h-11 shrink-0 px-3 font-mono text-[11px] uppercase tracking-wider",
              tab === id ? "border-b-2 border-accent text-fg" : "text-subtle",
            )}
          >
            {id}
          </button>
        ))}
      </div>

      {tab === "mechanical" ? (
        <section className="space-y-4">
          <p className="text-sm text-muted">{model.blurb}</p>
          <dl className="grid gap-2 sm:grid-cols-2">
            <Fact label="Environment" value={environmentLabels[model.environment]} />
            <Fact label="Layout" value={model.layout} />
            <Fact label="Cabinet" value="All-aluminum, matte black typical" />
            <Fact label="Mounting" value={model.posts ? `${model.posts} posts` : "See cut sheet / clamps"} />
          </dl>
          {assemblies.length ? (
            <div>
              <h2 className="font-display text-lg tracking-wide">Mask assemblies</h2>
              <p className="mt-1 text-xs text-subtle">Drive DIGITS PER MODEL — Assemblies sheet.</p>
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
          <div className="flex flex-col gap-2">
            <a
              href={cutsheetSearchUrl(model.id)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-between rounded-md border border-border bg-surface px-3 text-sm"
            >
              Mechanical cut sheet
              <ExternalLink className="size-3.5 text-subtle" />
            </a>
            {etn ? (
              <a
                href={cutsheetSearchUrl(model.id, true)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-between rounded-md border border-border bg-surface px-3 text-sm"
              >
                ETN cut sheet
                <ExternalLink className="size-3.5 text-subtle" />
              </a>
            ) : null}
            <a
              href={CUTSHEET_FOLDER}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-subtle hover:text-fg"
            >
              All cut sheets folder
            </a>
          </div>
        </section>
      ) : null}

      {tab === "electrical" ? (
        <section className="space-y-5">
          <dl className="grid gap-2 sm:grid-cols-2">
            <Fact label="Service" value={model.voltage} />
            <Fact label="Draw" value={model.currentA ? `${model.currentA} A` : "See spec sheet"} />
            <Fact label="Console" value={`${model.console} · CX driver`} />
            <Fact label="Data" value="1/4 in stereo or ScoreLink" />
          </dl>
          {bom.length ? (
            <div>
              <h2 className="font-display text-lg tracking-wide">Digit BOM</h2>
              <p className="mt-1 text-xs text-subtle">Drive DIGITS PER MODEL — Parts sheet. Red outdoor P/Ns shown.</p>
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
                          <Link to="/digits" search={{ q: line.part }} className="font-mono text-xs hover:underline">
                            {line.part || "—"}
                          </Link>
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
          ) : (
            <p className="text-sm text-muted">
              No Parts-sheet BOM for this model yet.{" "}
              <a href={digitsSheetUrl(model.id)} className="underline" target="_blank" rel="noreferrer">
                Open Drive DIGITS
              </a>
            </p>
          )}
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
        </section>
      ) : null}

      {tab === "sales" ? (
        <section className="space-y-4">
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
          ) : (
            <div className="rounded-md border border-dashed border-border bg-surface px-3 py-4">
              <p className="font-display text-lg tracking-wide">Sales ranks pending Sage 100</p>
              <p className="mt-1 text-sm text-muted">
                {SALES_YEAR} standings load from plant export — not the website. Drop the Sage file
                and this card becomes “#4 best seller overall last year” / “#1 outdoor Amber”. Source:{" "}
                {SALES_SOURCE}.
              </p>
            </div>
          )}
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
          <div className="flex flex-wrap gap-2">
            <Link
              to="/compare"
              search={{ a: model.id }}
              className="inline-flex h-11 items-center rounded-md border border-border bg-surface px-4 text-sm"
            >
              Compare
            </Link>
            {related.slice(0, 4).map((m) => (
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
        </section>
      ) : null}

      {tab === "docs" ? (
        <section className="space-y-2">
          {[
            { href: cutsheetSearchUrl(model.id), label: "Mechanical cut sheet" },
            ...(etn ? [{ href: cutsheetSearchUrl(model.id, true), label: "ETN cut sheet" }] : []),
            { href: digitsSheetUrl(model.id), label: `${model.id} DIGITS workbook` },
            { href: DIGITS_BREAKDOWN, label: "DIGITS PER MODEL BREAKDOWN" },
            { href: MANUALS_INDEX, label: "Owner’s manuals" },
            { href: SPEC_SHEETS_INDEX, label: "Color spec sheets" },
            { href: CUTSHEET_FOLDER, label: "Cut sheet folder" },
            { href: model.productUrl, label: "Public product page" },
          ].map((d) => (
            <a
              key={d.label}
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 items-center justify-between rounded-md border border-border bg-surface px-3 text-sm"
            >
              {d.label}
              <ExternalLink className="size-3.5 text-subtle" />
            </a>
          ))}
        </section>
      ) : null}
    </Page>
  );
}
