import { createFileRoute, Link } from "@tanstack/react-router";
import { SystemMap } from "@/components/lx/system-map";
import { sources } from "@/data/glossary";
import { sitePhotos } from "@/data/photos";
import { Page, Kicker } from "@/components/site/page";
import { LxMark, SheetSection } from "@/components/sheet/sheet";

export const Route = createFileRoute("/system")({ component: SystemPage });

const STEPS = [
  "Keypad event becomes a data word on the CX driver.",
  "Word leaves a 1/4-inch stereo jack — cable or 2.4 / 900 MHz RF.",
  "LX drivers daisy-chain in the cabinet and strobe the matching segments.",
];

function SystemPage() {
  return (
    <Page className="space-y-10">
      <header className="grid items-end gap-4 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6">
        <div className="flex flex-col gap-1.5">
          <LxMark />
          <Kicker>Architecture</Kicker>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-4xl tracking-tight">How an LX scoreboard works</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Intelligence lives in the console. The cabinet is a decoder and a lamp. Data walks a
            one-way path — keyed event, CX board, stereo jack, cable or ScoreLink, LX driver chain,
            ribbon, LED mask.
          </p>
        </div>
      </header>

      <div className="grid border-b border-border border-t-2 border-t-fg md:grid-cols-[minmax(0,1fr)_300px]">
        <div className="flex items-center justify-center bg-bg-elevated p-6">
          <img
            src={sitePhotos.consoles}
            alt="Electro-Mech MP and MM control consoles"
            className="max-h-52 w-auto max-w-full object-contain"
          />
        </div>
        <ol className="flex flex-col">
          {STEPS.map((t, i) => (
            <li
              key={t}
              className="grid grid-cols-[28px_minmax(0,1fr)] gap-2 border-b border-border py-3.5 md:pl-5"
            >
              <span className="pt-0.5 font-mono text-[11px] text-led">0{i + 1}</span>
              <p className="text-sm leading-snug">{t}</p>
            </li>
          ))}
          <li className="pt-2.5 font-mono text-[10px] uppercase tracking-[0.05em] text-subtle md:pl-5">
            Operator station — MP (left family) and MM consoles
          </li>
        </ol>
      </div>

      <SystemMap />

      <SheetSection label="Source notes">
        <ul>
          {sources.map((s) => (
            <li
              key={s.title}
              className="grid gap-1 border-b border-border px-4 py-3 sm:grid-cols-[260px_minmax(0,1fr)] sm:items-baseline sm:gap-4"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-display text-[17px] font-medium tracking-[0.025em] hover:text-accent"
              >
                {s.title} ↗
              </a>
              <p className="text-sm leading-snug text-muted">{s.note}</p>
            </li>
          ))}
        </ul>
        <p className="px-4 py-3 text-sm text-muted">
          Open a{" "}
          <Link to="/catalog" className="underline decoration-border underline-offset-4 hover:text-fg">
            catalog model
          </Link>{" "}
          to see the parts that model ships.
        </p>
      </SheetSection>
    </Page>
  );
}
