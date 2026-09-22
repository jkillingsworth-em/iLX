import type { LxModel } from "@/data/types";
import { hasEtn, outdoorLeds } from "@/lib/field";
import { BoardPhoto } from "@/components/lx/board-photo";
import { BoardComposite } from "@/components/lx/board-composite";

export function VariantGallery({ model }: { model: LxModel }) {
  const outdoor = outdoorLeds(model);
  const etn = hasEtn(model);

  if (!outdoor) {
    return (
      <div className="grid grid-cols-2 gap-2">
        <BoardPhoto
          modelId={model.id}
          tone="catalog"
          className="aspect-[16/8] rounded-md border border-border"
          label="Catalog"
        />
        {etn ? (
          <BoardComposite
            modelId={model.id}
            leds="red"
            etn
            className="aspect-[16/8] rounded-md border border-border"
            label="ETN"
          />
        ) : null}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <BoardPhoto
          modelId={model.id}
          tone="red"
          className="aspect-[16/8] rounded-md border border-border"
          label="Red"
        />
        <BoardComposite
          modelId={model.id}
          leds="amber"
          className="aspect-[16/8] rounded-md border border-border"
          label="Amber"
        />
      </div>
      {etn ? (
        <div className="grid grid-cols-2 gap-2">
          <BoardComposite
            modelId={model.id}
            leds="red"
            etn
            className="aspect-[16/8] rounded-md border border-border"
            label="ETN Red"
          />
          <BoardComposite
            modelId={model.id}
            leds="amber"
            etn
            className="aspect-[16/8] rounded-md border border-border"
            label="ETN Amber"
          />
        </div>
      ) : null}
    </div>
  );
}
