import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { layers, systemNodes, systemNodesById } from "@/data/system";
import { partsById } from "@/data/parts";
import { DetailPanel, sheetRowClass, SheetRowBody } from "@/components/sheet/sheet";
import { cn } from "@/lib/utils";

export function SystemMap({ highlightParts = [] }: { highlightParts?: string[] }) {
  const [active, setActive] = useState("console");
  const node = systemNodesById[active] ?? systemNodes[0];
  const related = useMemo(
    () => node.parts.map((id) => partsById[id]).filter(Boolean),
    [node],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="flex flex-col border-t-2 border-fg">
        {layers.map((layer) => {
          const nodes = systemNodes.filter((n) => n.layer === layer.id);
          return (
            <section
              key={layer.id}
              className="grid border-b border-border-strong sm:grid-cols-[140px_minmax(0,1fr)]"
            >
              <div className="flex flex-col gap-1 py-3 sm:pr-3">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-fg">
                  {layer.label}
                </h3>
                <span className="text-xs leading-snug text-subtle">{layer.hint}</span>
              </div>
              <div className="flex flex-col border-border sm:border-l">
                {nodes.map((n) => {
                  const lit = n.id === active;
                  const tagged = n.parts.some((p) => highlightParts.includes(p));
                  return (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setActive(n.id)}
                      aria-pressed={lit}
                      className={cn(sheetRowClass(lit), "last:border-b-0")}
                    >
                      <SheetRowBody
                        title={n.title}
                        summary={n.summary}
                        meta={tagged ? <span className="text-led">On this board</span> : undefined}
                        active={lit}
                      />
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <DetailPanel
        kicker="Signal stage"
        title={node.title}
        className="h-fit lg:sticky lg:top-20"
        actions={
          node.next.length ? (
            node.next.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className="rounded-xs bg-accent px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.05em] text-accent-fg transition-opacity duration-150 hover:opacity-90"
              >
                Next: {systemNodesById[id]?.title} →
              </button>
            ))
          ) : (
            <p className="text-xs text-subtle">End of the chain — the crowd sees the face.</p>
          )
        }
      >
        <p className="border-b border-border py-3 text-sm leading-[1.65]">{node.detail}</p>
        {related.length ? (
          <ul className="flex flex-col">
            {related.map((p) => (
              <li key={p.id}>
                <Link
                  to="/parts/$partId"
                  params={{ partId: p.id }}
                  className="group grid grid-cols-[minmax(0,1fr)_16px] gap-2 border-b border-border py-2.5 transition-colors duration-150 hover:bg-surface"
                >
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm">{p.name}</span>
                    <span className="font-mono text-[11px] text-subtle">{p.short}</span>
                  </span>
                  <span className="text-subtle group-hover:text-fg">→</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </DetailPanel>
    </div>
  );
}
