import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchModels } from "@/lib/field";
import { sportLabels } from "@/data/glossary";
import { cn } from "@/lib/utils";

export function SearchBox({
  autoFocus,
  size = "lg",
}: {
  autoFocus?: boolean;
  size?: "lg" | "sm";
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const box = useRef<HTMLDivElement>(null);
  const hits = useMemo(() => (q.trim().length >= 1 ? searchModels(q) : []), [q]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!box.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={box} className="relative w-full">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
      <Input
        value={q}
        autoFocus={autoFocus}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && hits[0]) {
            nav({ to: "/catalog/$modelId", params: { modelId: hits[0].id } });
            setOpen(false);
          }
        }}
        placeholder="LX1750, 1750, 563-20-1010, 24 in, ETN…"
        aria-label="Search models and digit parts"
        className={cn("pl-10", size === "lg" && "h-12 text-base")}
      />
      {open && q.trim() && (
        <ul className="absolute z-30 mt-1 max-h-80 w-full overflow-auto rounded-md border border-border bg-bg-elevated shadow-panel">
          {/563|\d{3}-\d{2}/.test(q) ? (
            <li>
              <Link
                to="/digits"
                search={{ q }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 border-b border-border px-3 py-3 text-sm hover:bg-surface"
              >
                <span>Digit BOM search</span>
                <span className="font-mono text-[11px] text-subtle">{q}</span>
              </Link>
            </li>
          ) : null}
          {hits.length === 0 && !/563|\d{3}-\d{2}/.test(q) ? (
            <li className="px-3 py-3 text-sm text-muted">No model or part match.</li>
          ) : (
            hits.slice(0, 12).map((m) => (
              <li key={m.id}>
                <Link
                  to="/catalog/$modelId"
                  params={{ modelId: m.id }}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 px-3 py-3 text-sm hover:bg-surface"
                >
                  <span className="font-display text-base tracking-wide">{m.id}</span>
                  <span className="truncate font-mono text-[11px] text-subtle">
                    {sportLabels[m.sport]} · {m.width} × {m.height}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
