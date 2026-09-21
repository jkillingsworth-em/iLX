import { useEffect, useState } from "react";
import { composeBoard, type LedTone } from "@/lib/board-render";
import { BoardPhoto } from "@/components/lx/board-photo";
import { cn } from "@/lib/utils";

export function BoardComposite({
  modelId,
  leds,
  etn,
  label,
  className,
}: {
  modelId: string;
  leds: LedTone;
  etn?: boolean;
  label?: string;
  className?: string;
}) {
  const [url, setUrl] = useState<string | null>(null);
  const [fail, setFail] = useState(false);

  useEffect(() => {
    let dead = false;
    setUrl(null);
    setFail(false);
    composeBoard({ modelId, leds, etn })
      .then((next) => {
        if (!dead) setUrl(next);
      })
      .catch(() => {
        if (!dead) setFail(true);
      });
    return () => {
      dead = true;
    };
  }, [modelId, leds, etn]);

  if (fail) {
    return (
      <BoardPhoto
        modelId={modelId}
        tone={leds === "amber" ? "amber" : "catalog"}
        pending={etn}
        className={className}
        label={etn ? `${label ?? "ETN"} · layer missing` : (label ?? leds)}
      />
    );
  }

  return (
    <figure className={cn("relative grid place-items-center overflow-hidden bg-black", className)}>
      {url ? (
        <img src={url} alt={`${modelId} ${etn ? "ETN " : ""}${leds}`} className="max-h-full max-w-full object-contain" />
      ) : (
        <div className="grid min-h-24 place-items-center font-mono text-[11px] uppercase tracking-wider text-subtle">
          Building {etn ? "ETN " : ""}
          {leds}…
        </div>
      )}
      {label ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-bg/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
