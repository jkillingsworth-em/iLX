import { fieldPhotos } from "@/data/photos";
import { BoardPhoto } from "@/components/lx/board-photo";
import { cn } from "@/lib/utils";
import type { SportId } from "@/data/types";

export function FieldPhoto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden bg-black", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

/** Field install when we have one; otherwise the official catalog PNG for that model. */
export function SportVisual({
  sport,
  modelId,
  alt,
  className,
}: {
  sport: SportId | string;
  modelId: string;
  alt?: string;
  className?: string;
}) {
  const src = fieldPhotos[sport as SportId];
  if (src) {
    return <FieldPhoto src={src} alt={alt ?? `${sport} scoreboard`} className={className} />;
  }
  return <BoardPhoto modelId={modelId} alt={alt} className={className} />;
}
