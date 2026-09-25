import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useSyncExternalStore } from "react";
import { SearchBox } from "@/components/lx/search-box";
import { BoardPhoto } from "@/components/lx/board-photo";
import { models, modelsById } from "@/data/models";
import { getRecentIds, getRecentIdsServer, subscribeRecent } from "@/lib/recent";
import { sportLabels, numberingNotes } from "@/data/glossary";
import { company } from "@/data/company";
import { Page, Kicker } from "@/components/site/page";
import { SheetSection, SheetRowBody, SpecRow, sheetRowClass } from "@/components/sheet/sheet";

const SPORTS = ["baseball", "basketball", "football", "soccer", "hockey", "multisport", "accessory"] as const;

const SPORT_D: Record<string, string> = {
  "1": "Baseball / softball",
  "2": "Basketball",
  "3": "Football",
  "6": "Soccer / wrestling / multi",
  "7": "Hockey / lacrosse",
  "8": "Hockey / lacrosse",
};
const DENS: Record<string, string> = {
  "0": "Panels / clocks",
  "1": "Add-on / basic",
  "2": "Add-on / basic",
  "3": "Essential game info",
  "4": "Essential + extras",
  "5": "Adds fouls, timeouts, stats",
  "6": "Adds fouls, timeouts, stats",
  "7": "Full linescore",
};
const SIZE: Record<string, string> = { "3": "Small", "5": "Medium", "7": "Large" };
const LAST: Record<string, string> = { "0": "Standard face", "5": "Often reversible captions" };

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const recent = useSyncExternalStore(subscribeRecent, getRecentIds, getRecentIdsServer);
  const recentModels = useMemo(
    () => recent.map((id) => modelsById[id]).filter(Boolean),
    [recent],
  );
  const [q, setQ] = useState("");

  const c = [0, 1, 2, 3].map((i) => q[i]);
  const decode = [
    ["First digit — sport", c[0] ? (SPORT_D[c[0]] ?? "Not a catalog family") : "—"],
    ["Second digit — feature density", c[1] ? (DENS[c[1]] ?? "Higher-density board") : "—"],
    ["Third digit — size", c[2] ? (SIZE[c[2]] ? `${SIZE[c[2]]} · confirm on cut sheet` : "See cut sheet") : "—"],
    ["Fourth digit", c[3] ? (LAST[c[3]] ?? "Variant") : "—"],
  ] as const;

  const matches = useMemo(
    () => (q ? models.filter((m) => m.id.replace(/^LX/i, "").startsWith(q)).slice(0, 12) : []),
    [q],
  );

  return (
    <Page className="space-y-8">
      <header className="flex flex-col gap-1.5">
        <Kicker>{models.length} cabinets</Kicker>
        <h1 className="font-display text-4xl tracking-tight">Find an LX model</h1>
      </header>

      <div className="grid border-b border-border border-t-2 border-t-fg lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="flex flex-col justify-center gap-5 bg-black px-4 py-6 sm:px-6 sm:py-7">
          <div className="flex items-end gap-3.5">
            <span className="font-display text-[56px] font-bold leading-[0.8] text-led sm:text-[72px]">
              LX
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value.replace(/\D/g, "").slice(0, 4))}
              inputMode="numeric"
              maxLength={4}
              autoFocus
              aria-label="LX model number, four digits"
              placeholder="Type 4 digits — 1750"
              className="h-14 w-full max-w-[360px] rounded-xs border border-border-strong bg-surface px-3 font-mono text-2xl text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-[61px] sm:text-[32px]"
            />
          </div>
        </div>
        <dl className="flex flex-col border-border lg:border-l">
          {decode.map(([title, value], i) => (
            <div
              key={title}
              className="grid grid-cols-[24px_minmax(0,1fr)] gap-2.5 border-b border-border px-4 py-2.5 last:border-b-0 lg:last:border-b"
            >
              <span
                className={`font-display text-[22px] font-semibold leading-none ${c[i] ? "text-led" : "text-border-strong"}`}
              >
                {c[i] ?? "·"}
              </span>
              <span className="flex flex-col gap-0.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.05em] text-subtle">{title}</dt>
                <dd className="text-sm">{value}</dd>
              </span>
            </div>
          ))}
        </dl>
      </div>

      <SheetSection
        label="Matches"
        hint={q ? `${matches.length} model${matches.length === 1 ? "" : "s"}` : "Type to match"}
      >
        {matches.length ? (
          matches.map((m) => (
            <Link
              key={m.id}
              to="/catalog/$modelId"
              params={{ modelId: m.id }}
              className="group grid grid-cols-[72px_minmax(0,1fr)] items-center gap-x-4 gap-y-1 border-b border-border py-2 pl-2 pr-4 transition-colors duration-150 hover:bg-surface sm:grid-cols-[96px_90px_minmax(0,1fr)]"
            >
              <BoardPhoto modelId={m.id} className="row-span-2 h-[52px] sm:row-span-1" />
              <span className="font-display text-lg font-medium tracking-[0.025em]">{m.id}</span>
              <span className="col-start-2 text-sm text-muted sm:col-start-auto">{m.blurb}</span>
            </Link>
          ))
        ) : (
          <p className="border-b border-border px-4 py-3 text-sm text-subtle">
            {q ? `No LX${q}… model in the catalog.` : "Type the four digits after LX to see matching boards."}
          </p>
        )}
      </SheetSection>

      <SheetSection label="Search" hint="Model, digit part, or size">
        <div className="border-b border-border p-3">
          <SearchBox size="lg" />
        </div>
      </SheetSection>

      {recentModels.length ? (
        <SheetSection label="Recent" hint="Models you opened">
          {recentModels.map((m) => (
            <Link
              key={m.id}
              to="/catalog/$modelId"
              params={{ modelId: m.id }}
              className={sheetRowClass()}
            >
              <SheetRowBody
                title={m.id}
                summary={m.blurb}
                meta={`${m.width} × ${m.height} · ${m.console}`}
                arrow
              />
            </Link>
          ))}
        </SheetSection>
      ) : null}

      <SheetSection label="By sport" hint="Browse the catalog">
        {SPORTS.map((id) => {
          const first = models.find((m) => m.sport === id);
          const count = models.filter((m) => m.sport === id).length;
          return (
            <Link
              key={id}
              to="/catalog"
              search={{ sport: id }}
              className="group grid grid-cols-[72px_minmax(0,1fr)_16px] items-center gap-4 border-b border-border py-2 pl-2 pr-4 transition-colors duration-150 hover:bg-surface sm:grid-cols-[96px_minmax(0,1fr)_16px]"
            >
              {first ? (
                <BoardPhoto modelId={first.id} className="h-[52px]" />
              ) : (
                <span className="h-[52px] bg-black" />
              )}
              <span className="flex flex-col gap-0.5">
                <span className="font-display text-[17px] font-medium tracking-[0.025em]">
                  {sportLabels[id]}
                </span>
                <span className="font-mono text-[11px] text-subtle">{count} models</span>
              </span>
              <span className="text-right font-mono text-xs text-subtle group-hover:text-fg">→</span>
            </Link>
          );
        })}
      </SheetSection>

      <SheetSection label="Tools" hint="Beyond model lookup">
        <Link to="/digits" className={sheetRowClass()}>
          <SheetRowBody title="Digit BOM" summary="Models by item code." arrow />
        </Link>
        <Link to="/compare" className={sheetRowClass()}>
          <SheetRowBody title="Compare" summary="Two or three boards side by side." arrow />
        </Link>
        <Link to="/system" className={sheetRowClass()}>
          <SheetRowBody
            title="How it works"
            summary="Console → data path → LX driver → digits."
            arrow
          />
        </Link>
      </SheetSection>

      <SheetSection label="Numbering" hint="Reading an LX model number">
        <dl>
          {numberingNotes.map((n) => (
            <SpecRow key={n.title} label={n.title} value={<span className="text-muted">{n.body}</span>} />
          ))}
        </dl>
      </SheetSection>

      <p className="font-mono text-xs text-subtle">
        Plant {company.phone} · {company.city}, {company.state}
      </p>
    </Page>
  );
}
