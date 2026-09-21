import { useEffect, useState } from "react";
import { SevenSeg } from "@/components/lx/seven-seg";

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display text-[9px] uppercase tracking-[0.28em] text-muted sm:text-[11px]">
      {children}
    </span>
  );
}

function Digits({ value, large }: { value: string; large?: boolean }) {
  return (
    <div className={large ? "seg-scale-lg" : "seg-scale-md"}>
      {value.split("").map((c, i) => (
        <SevenSeg key={i} value={c} lit />
      ))}
    </div>
  );
}

function Bullets({ n, max }: { n: number; max: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`size-2.5 rounded-full sm:size-3 ${i < n ? "bg-led shadow-[0_0_8px_color-mix(in_oklab,var(--color-led)_55%,transparent)]" : "bg-led-dim"}`}
        />
      ))}
    </div>
  );
}

type Game = {
  guest: number;
  home: number;
  inning: number;
  balls: number;
  strikes: number;
  outs: number;
};

const START: Game = { guest: 3, home: 5, inning: 7, balls: 2, strikes: 1, outs: 1 };

export function HeroBoard() {
  const [game, setGame] = useState<Game>(START);

  useEffect(() => {
    const id = window.setInterval(() => {
      setGame((g) => {
        if (g.balls < 3) return { ...g, balls: g.balls + 1 };
        if (g.strikes < 2) return { ...g, balls: 0, strikes: g.strikes + 1 };
        if (g.outs < 2) return { ...g, balls: 0, strikes: 0, outs: g.outs + 1 };
        const home = g.home >= 9 ? 4 : g.home + 1;
        const inning = g.inning >= 9 ? 1 : g.inning + 1;
        return { guest: g.guest === 8 ? 2 : g.guest, home, inning, balls: 0, strikes: 0, outs: 0 };
      });
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  const pad = (n: number, w = 2) => String(n).padStart(w, "0");

  return (
    <div className="rounded-lg border border-border-strong bg-bg-elevated p-4 shadow-panel sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-display text-sm tracking-[0.2em] text-accent sm:text-base">
          ELECTRO-MECH
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
          LX1750 · 26 × 9 ft
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3 sm:gap-8">
        <div className="flex flex-col items-center gap-1.5">
          <Caption>Guest</Caption>
          <Digits value={pad(game.guest)} large />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Caption>Inning</Caption>
          <Digits value={String(game.inning)} />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <Caption>Home</Caption>
          <Digits value={pad(game.home)} large />
        </div>
      </div>

      <div className="mt-6 flex items-end justify-center gap-6 sm:gap-10">
        <div className="flex flex-col items-center gap-2">
          <Caption>Ball</Caption>
          <Bullets n={game.balls} max={3} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Caption>Strike</Caption>
          <Bullets n={game.strikes} max={2} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Caption>Out</Caption>
          <Bullets n={game.outs} max={2} />
        </div>
      </div>
    </div>
  );
}
