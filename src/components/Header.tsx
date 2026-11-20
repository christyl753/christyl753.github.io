import Link from "next/link";
import { PROFILE } from "@/data/portfolio";

export function Header() {
  return (
    <header className="border-b border-[var(--tk-divider)] bg-[var(--tk-bg)]">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-3 text-[var(--tk-ink)] transition-opacity duration-150 hover:opacity-80"
        >
          <span className="font-mono text-base font-bold tracking-tight">
            {PROFILE.shortHandle}
          </span>
          <span className="font-mono text-xs text-[var(--tk-muted)]">
            ~/portfolio
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="flex items-center gap-5 sm:gap-7">
          <a
            href="#projets"
            className="inline-flex min-h-[44px] items-center font-mono text-xs text-[var(--tk-ink)] transition-colors duration-150 hover:text-[var(--tk-green-ink)]"
          >
            Projets
          </a>
          <a
            href="#parcours"
            className="hidden min-h-[44px] items-center font-mono text-xs text-[var(--tk-ink)] transition-colors duration-150 hover:text-[var(--tk-green-ink)] sm:inline-flex"
          >
            Parcours
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center font-mono text-xs text-[var(--tk-ink)] transition-colors duration-150 hover:text-[var(--tk-green-ink)]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
