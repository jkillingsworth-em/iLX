import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { layers, systemNodes, systemNodesById } from "@/data/system";
import { partsById } from "@/data/parts";
import { cn } from "@/lib/utils";

export function SystemMap({ highlightParts = [] }: { highlightParts?: string[] }) {
  const [active, setActive] = useState("console");
  const node = systemNodesById[active] ?? systemNodes[0];
  const related = useMemo(
    () => node.parts.map((id) => partsById[id]).filter(Boolean),
    [node],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="space-y-5">
        {layers.map((layer) => {
          const nodes = systemNodes.filter((n) => n.layer === layer.id);
          return (
            <section key={layer.id}>
              <div className="mb-2 flex items-baseline justify-between">
                <h3 className="font-display text-sm tracking-[0.16em] text-muted uppercase">
                  {layer.label}
                </h3>
                <span className="text-xs text-subtle">{layer.hint}</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {nodes.map((n) => {
                  const lit = n.id === active;
                  const tagged = n.parts.some((p) => highlightParts.includes(p));
                  return (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setActive(n.id)}
                      className={cn(
                        "rounded-md border p-3 text-left transition-colors duration-150",
                        lit
                          ? "border-accent bg-surface"
                          : "border-border bg-bg-elevated hover:border-border-strong",
                      )}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-display text-base tracking-wide">{n.title}</span>
                        {tagged ? (
                          <span className="font-mono text-[10px] uppercase tracking-wider text-led">
                            on this board
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm text-muted">{n.summary}</p>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <aside className="h-fit rounded-lg border border-border bg-surface p-5 lg:sticky lg:top-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Signal stage</p>
        <h3 className="mt-1 font-display text-2xl tracking-wide">{node.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{node.detail}</p>
        {related.length ? (
          <ul className="mt-4 space-y-2">
            {related.map((p) => (
              <li key={p.id}>
                <Link
                  to="/parts/$partId"
                  params={{ partId: p.id }}
                  className="block rounded-sm border border-border bg-bg-elevated px-3 py-2 text-sm hover:border-accent"
                >
                  <span className="text-fg">{p.name}</span>
                  <span className="mt-0.5 block text-xs text-subtle">{p.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        {node.next.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {node.next.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className="rounded-sm border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-muted hover:text-fg"
              >
                Next: {systemNodesById[id]?.title}
              </button>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-xs text-subtle">End of the chain — the crowd sees the face.</p>
        )}
      </aside>
    </div>
  );
}
