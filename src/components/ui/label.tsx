import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("font-mono text-[10px] uppercase tracking-wider text-subtle", className)}
      {...props}
    />
  );
}
