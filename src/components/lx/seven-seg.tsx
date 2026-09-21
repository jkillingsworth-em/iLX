import { cn } from "@/lib/utils";

const MAP: Record<string, boolean[]> = {
  "0": [true, true, true, true, true, true, false],
  "1": [false, true, true, false, false, false, false],
  "2": [true, true, false, true, true, false, true],
  "3": [true, true, true, true, false, false, true],
  "4": [false, true, true, false, false, true, true],
  "5": [true, false, true, true, false, true, true],
  "6": [true, false, true, true, true, true, true],
  "7": [true, true, true, false, false, false, false],
  "8": [true, true, true, true, true, true, true],
  "9": [true, true, true, true, false, true, true],
  "-": [false, false, false, false, false, false, true],
  " ": [false, false, false, false, false, false, false],
};

export function SevenSeg({
  value = "8",
  lit = true,
  className,
}: {
  value?: string;
  lit?: boolean;
  className?: string;
}) {
  const segs = MAP[value] ?? MAP["8"];
  return (
    <span className={cn("seg", className)} aria-hidden>
      {segs.map((on, i) => (
        <i key={i} className={on && lit ? "lit" : undefined} />
      ))}
    </span>
  );
}

export function DigitPair({
  value,
  caption,
}: {
  value: string;
  caption?: string;
}) {
  const chars = value.replace(/[^0-9 ]/g, "").padStart(2, " ").slice(-2).split("");
  return (
    <div className="flex flex-col items-center gap-1">
      {caption ? (
        <span className="font-display text-[10px] uppercase tracking-[0.18em] text-muted">
          {caption}
        </span>
      ) : null}
      <div className="flex items-end gap-1">
        {chars.map((c, i) => (
          <SevenSeg key={i} value={c === " " ? "0" : c} lit={c !== " "} />
        ))}
      </div>
    </div>
  );
}
