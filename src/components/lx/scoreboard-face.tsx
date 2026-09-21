import type { LxModel } from "@/data/types";
import { DigitPair, SevenSeg } from "./seven-seg";
import { cn } from "@/lib/utils";
import { faceColors, ledColors, type FaceId, type LedId } from "@/data/company";
import type { CSSProperties, ReactNode } from "react";

function Caption({ children }: { children: ReactNode }) {
  return (
    <span className="font-display text-[9px] uppercase tracking-[0.22em] text-muted sm:text-[10px]">
      {children}
    </span>
  );
}

function Cabinet({
  model,
  children,
  className,
  face = "black",
  led = "red",
}: {
  model: LxModel;
  children: ReactNode;
  className?: string;
  face?: FaceId;
  led?: LedId;
}) {
  const f = faceColors.find((x) => x.id === face) ?? faceColors[0];
  const l = ledColors.find((x) => x.id === led) ?? ledColors[0];
  const style = {
    background: f.swatch,
    color: f.caption,
    "--color-led": l.lit,
    "--color-led-dim": l.dim,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={cn(
        "relative overflow-x-auto overflow-y-hidden rounded-lg border border-border-strong p-3 shadow-panel sm:p-4",
        className,
      )}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="font-display text-sm tracking-wide text-accent">{model.id}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-subtle">
          {model.width} × {model.height}
        </span>
      </div>
      {children}
    </div>
  );
}

function InningRow({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <Caption>{i + 1}</Caption>
          <div className="flex gap-px">
            <SevenSeg value="0" lit={false} />
            <SevenSeg value="0" lit={false} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ScoreboardFace({
  model,
  face,
  led,
}: {
  model: LxModel;
  face?: FaceId;
  led?: LedId;
}) {
  const layout = model.layout;
  const theme = { face, led };

  if (layout === "linescore") {
    const innings = model.displays.some((d) => d.detail.includes("10 each"))
      ? 10
      : model.displays.some((d) => d.detail.includes("9 each"))
        ? 9
        : 7;
    return (
      <Cabinet model={model} {...theme}>
        <div className="space-y-3">
          <div className="flex items-end justify-between gap-4">
            <DigitPair value="00" caption="Guest" />
            <InningRow count={Math.min(innings, 10)} />
            <DigitPair value="00" caption="Home" />
          </div>
          <div className="flex items-end justify-center gap-6">
            <DigitPair value="0" caption="Ball" />
            <DigitPair value="0" caption="Strike" />
            <DigitPair value="0" caption="Out" />
            {model.displays.some((d) => /timer|clock/i.test(d.detail)) ? (
              <DigitPair value="00" caption="Time" />
            ) : null}
          </div>
        </div>
      </Cabinet>
    );
  }

  if (layout === "baseball-compact") {
    return (
      <Cabinet model={model} {...theme}>
        <div className="flex items-end justify-around gap-3">
          <DigitPair value="00" caption="Guest" />
          <DigitPair value="1" caption="Inning" />
          <DigitPair value="00" caption="Home" />
        </div>
        <div className="mt-4 flex justify-center gap-5">
          {["B", "S", "O"].map((c) => (
            <div key={c} className="flex flex-col items-center gap-1.5">
              <Caption>{c}</Caption>
              <div className="flex gap-1">
                <span className="size-2 rounded-full bg-led-dim" />
                <span className="size-2 rounded-full bg-led" />
              </div>
            </div>
          ))}
        </div>
      </Cabinet>
    );
  }

  return (
    <Cabinet model={model} {...theme}>
      <div className="flex flex-wrap items-end justify-center gap-5 sm:gap-8">
        {model.displays.slice(0, 6).map((d) => (
          <DigitPair
            key={d.label}
            value={d.detail.match(/\d/) ? "00" : "00"}
            caption={d.label}
          />
        ))}
      </div>
    </Cabinet>
  );
}
