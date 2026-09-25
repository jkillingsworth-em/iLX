import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Spec-sheet primitives (design option 1d): text is organised like a mechanical cut
 * sheet — ruled sections with a mono label column, hairline rows, LED-dot active state.
 */

export function SheetSection({
  label,
  hint,
  rule = "fg",
  children,
  className,
}: {
  label: ReactNode;
  hint?: ReactNode;
  rule?: "fg" | "led" | "none";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "grid sm:grid-cols-[140px_minmax(0,1fr)]",
        rule === "fg" && "border-t-2 border-fg",
        rule === "led" && "border-t-2 border-led",
        className,
      )}
    >
      <div className="flex flex-col gap-1 py-3 sm:pr-3">
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-fg">
          {label}
        </h2>
        {hint ? <span className="text-xs leading-snug text-subtle">{hint}</span> : null}
      </div>
      <div className="min-w-0 border-border sm:border-l">{children}</div>
    </section>
  );
}

/** Class string for a ruled, hoverable row. Put it on a Link/button/div. */
export function sheetRowClass(active = false, extra?: string) {
  return cn(
    "group grid w-full items-baseline gap-x-4 gap-y-1 border-b border-border px-4 py-3 text-left transition-colors duration-150",
    "grid-cols-[minmax(0,1fr)_16px] sm:grid-cols-[150px_minmax(0,1fr)_16px]",
    "hover:bg-surface",
    active && "bg-surface",
    extra,
  );
}

export function SheetRowBody({
  title,
  summary,
  meta,
  active = false,
  arrow = false,
}: {
  title: ReactNode;
  summary?: ReactNode;
  meta?: ReactNode;
  active?: boolean;
  arrow?: boolean;
}) {
  return (
    <>
      <span className="font-display text-[17px] font-medium tracking-[0.025em]">{title}</span>
      <span className="order-3 col-span-2 text-sm leading-snug text-muted sm:order-none sm:col-span-1">
        {summary}
        {meta ? (
          <span className="mt-0.5 block font-mono text-[11px] text-subtle">{meta}</span>
        ) : null}
      </span>
      <span
        aria-hidden
        className={cn(
          "order-2 text-right font-mono text-xs sm:order-none",
          arrow
            ? "text-subtle group-hover:text-fg"
            : cn("text-led transition-opacity duration-150", active ? "opacity-100" : "opacity-0 group-hover:opacity-60"),
        )}
      >
        {arrow ? "→" : "●"}
      </span>
    </>
  );
}

export function SpecRow({
  label,
  value,
  mono = false,
}: {
  label: ReactNode;
  value: ReactNode;
  mono?: boolean;
}) {
  return (
    <div className="grid gap-1 border-b border-border px-4 py-2.5 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-baseline sm:gap-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.05em] text-subtle">{label}</dt>
      <dd className={cn("text-sm", mono && "font-mono")}>{value}</dd>
    </div>
  );
}

export function DetailPanel({
  kicker,
  title,
  children,
  actions,
  className,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <aside className={cn("flex flex-col border-t-2 border-led", className)}>
      <div className="flex flex-col gap-1 border-b border-border py-3">
        {kicker ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{kicker}</p>
        ) : null}
        <h3 className="font-display text-[28px] font-semibold tracking-[0.01em]">{title}</h3>
      </div>
      {children}
      {actions ? <div className="flex flex-wrap gap-2 pt-3">{actions}</div> : null}
    </aside>
  );
}

/** Big red condensed "LX" wordmark used in page headers. */
export function LxMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-[64px] font-bold leading-[0.8] tracking-tight text-led",
        className,
      )}
    >
      LX
    </span>
  );
}
