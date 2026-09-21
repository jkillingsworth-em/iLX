import { Link } from "@tanstack/react-router";
import type { LxModel } from "@/data/types";
import { sportLabels, environmentLabels } from "@/data/glossary";
import { Badge } from "@/components/ui/badge";
import { BoardPhoto } from "@/components/lx/board-photo";
import { cn } from "@/lib/utils";

export function ModelCard({ model, compact }: { model: LxModel; compact?: boolean }) {
  return (
    <Link
      to="/catalog/$modelId"
      params={{ modelId: model.id }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-border bg-bg-elevated transition-colors duration-150 hover:border-accent",
      )}
    >
      <BoardPhoto
        modelId={model.id}
        className={cn("aspect-[16/9] w-full p-3", compact && "p-2")}
      />
      <div className={cn("flex flex-1 flex-col p-4", compact && "p-3")}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl tracking-wide text-fg">{model.id}</h3>
          <Badge>{environmentLabels[model.environment]}</Badge>
        </div>
        <p className="mt-1 font-mono text-xs text-muted">
          {model.width} × {model.height}
          {model.weightLb ? ` · ${model.weightLb} lb` : ""}
          {model.currentA ? ` · ${model.currentA} A` : ""}
        </p>
        <p className="mt-2 line-clamp-3 text-sm text-muted">{model.blurb}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge tone="muted">{sportLabels[model.sport]}</Badge>
          <Badge tone="muted">{model.console} console</Badge>
          {model.digitHeights[0] ? (
            <Badge tone="muted">{model.digitHeights[0]} in digits</Badge>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
