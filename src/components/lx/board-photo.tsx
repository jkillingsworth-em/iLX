import { boardImageSrc } from "@/data/board-images";
import { cn } from "@/lib/utils";

export function BoardPhoto({
  modelId,
  alt,
  className,
  imgClassName,
  tone = "catalog",
  pending,
  label,
}: {
  modelId: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  tone?: "catalog" | "red" | "amber";
  pending?: boolean;
  label?: string;
}) {
  const src = boardImageSrc(modelId);
  return (
    <figure className={cn("relative grid place-items-center overflow-hidden bg-black", className)}>
      {src ? (
        <img
          src={src}
          alt={alt ?? `${modelId} scoreboard`}
          className={cn(
            "max-h-full max-w-full object-contain",
            tone === "amber" && "board-amber",
            pending && "opacity-40",
            imgClassName,
          )}
        />
      ) : (
        <div className="grid min-h-24 place-items-center font-mono text-xs text-subtle">{modelId}</div>
      )}
      {pending ? (
        <div className="absolute inset-0 grid place-items-center bg-bg/55 px-3 text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-fg">
            {label ?? "Plant photo pending"}
          </p>
        </div>
      ) : null}
      {label && !pending ? (
        <figcaption className="absolute inset-x-0 bottom-0 bg-bg/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
          {label}
        </figcaption>
      ) : null}
    </figure>
  );
}
