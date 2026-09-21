import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "neutral",
  ...props
}: React.ComponentProps<"span"> & { tone?: "neutral" | "led" | "muted" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide",
        tone === "neutral" && "border border-border bg-surface text-muted",
        tone === "led" && "bg-led/15 text-led",
        tone === "muted" && "bg-surface-2 text-subtle",
        className,
      )}
      {...props}
    />
  );
}
