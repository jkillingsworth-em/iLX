import { createFileRoute, Link } from "@tanstack/react-router";
import { SystemMap } from "@/components/lx/system-map";
import { sources } from "@/data/glossary";
import { sitePhotos } from "@/data/photos";
import { ExternalLink } from "lucide-react";
import { Page, Kicker } from "@/components/site/page";

export const Route = createFileRoute("/system")({ component: SystemPage });

function SystemPage() {
  return (
    <Page className="space-y-10">
      <header>
        <Kicker>Architecture</Kicker>
        <h1 className="mt-1 font-display text-4xl tracking-tight">How an LX scoreboard works</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Intelligence lives in the console. The cabinet is a decoder and a lamp. Data walks a
          one-way path — keyed event, CX board, stereo jack, cable or ScoreLink, LX driver chain,
          ribbon, LED mask.
        </p>
      </header>

      <div className="overflow-hidden rounded-lg border border-border bg-bg-elevated p-6">
        <img
          src={sitePhotos.consoles}
          alt="Electro-Mech MP and MM control consoles"
          className="mx-auto max-h-52 w-auto object-contain"
        />
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-subtle">
          Operator station — MP (left family) and MM consoles
        </p>
      </div>

      <ol className="grid gap-2 sm:grid-cols-3">
        {[
          "Keypad event becomes a data word on the CX driver.",
          "Word leaves a 1/4-inch stereo jack — cable or 2.4 / 900 MHz RF.",
          "LX drivers daisy-chain in the cabinet and strobe the matching segments.",
        ].map((t, i) => (
          <li key={t} className="rounded-md border border-border bg-bg-elevated p-4">
            <span className="font-mono text-[11px] text-subtle">0{i + 1}</span>
            <p className="mt-2 text-sm text-fg">{t}</p>
          </li>
        ))}
      </ol>

      <SystemMap />

      <section>
        <h2 className="font-display text-2xl tracking-wide">Source notes</h2>
        <ul className="mt-3 space-y-2">
          {sources.map((s) => (
            <li key={s.title} className="rounded-md border border-border bg-bg-elevated px-4 py-3">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-display tracking-wide hover:text-accent"
              >
                {s.title} <ExternalLink className="size-3.5" />
              </a>
              <p className="mt-1 text-sm text-muted">{s.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Open a{" "}
          <Link to="/catalog" className="underline decoration-border underline-offset-4 hover:text-fg">
            catalog model
          </Link>{" "}
          to see the parts that model ships.
        </p>
      </section>
    </Page>
  );
}
