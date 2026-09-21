import { Link, useRouterState } from "@tanstack/react-router";
import { Cable, Grid2x2, Phone, Search, Wrench } from "lucide-react";
import { company } from "@/data/company";
import { SearchBox } from "@/components/lx/search-box";
import { cn } from "@/lib/utils";

const TABS = [
  { to: "/", label: "Lookup", icon: Search },
  { to: "/catalog", label: "Models", icon: Grid2x2 },
  { to: "/parts", label: "Parts", icon: Wrench },
  { to: "/system", label: "System", icon: Cable },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const home = pathname === "/";

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-3 py-2">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="grid size-8 place-items-center rounded-xs border border-led/50 bg-bg-elevated">
              <span className="font-display text-base leading-none text-led">8</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-[17px] tracking-[0.14em]">iLX</span>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-subtle sm:block">
                Field guide
              </span>
            </span>
          </Link>
          {!home ? (
            <div className="min-w-0 flex-1">
              <SearchBox size="sm" />
            </div>
          ) : (
            <div className="flex-1" />
          )}
          <a
            href={company.phoneHref}
            className="inline-flex h-11 shrink-0 items-center gap-1.5 px-1 font-mono text-xs text-muted hover:text-fg"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{company.phone}</span>
          </a>
        </div>
      </header>
      <div className="pb-20 md:pb-8">{children}</div>
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm md:hidden">
        <div className="grid grid-cols-4">
          {TABS.map((t) => {
            const active =
              t.to === "/"
                ? pathname === "/"
                : pathname === t.to || pathname.startsWith(`${t.to}/`);
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                className={cn(
                  "flex h-14 flex-col items-center justify-center gap-0.5 text-[11px]",
                  active ? "text-fg" : "text-subtle",
                )}
              >
                <Icon className="size-4" />
                {t.label}
              </Link>
            );
          })}
        </div>
      </nav>
      <footer className="hidden border-t border-border bg-bg-elevated md:block">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 text-[11px] text-subtle">
          <p>iLX · Electro-Mech plant / field lookup · Wrightsville, GA</p>
          <div className="flex gap-4">
            {TABS.map((t) => (
              <Link key={t.to} to={t.to} className="hover:text-fg">
                {t.label}
              </Link>
            ))}
            <Link to="/digits" className="hover:text-fg">
              Digit BOM
            </Link>
            <Link to="/compare" className="hover:text-fg">
              Compare
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
