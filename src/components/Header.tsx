"use client";

import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "À propos", href: "#apropos" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--pf-border)] bg-[var(--pf-canvas)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Mark */}
        <a
          href="#accueil"
          className="flex min-h-[44px] items-center gap-3 text-[var(--pf-ink)] transition-colors duration-150 hover:text-[var(--pf-accent)]"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--pf-ink)] bg-[var(--pf-surface)]">
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-mono text-xs font-semibold tracking-wider uppercase">
              {PROFILE.fullName}
            </span>
            <span className="pf-tabular mt-1 font-mono text-[10px] tracking-widest text-[var(--pf-muted)]">
              {PROFILE.brandCode} · UQO
            </span>
          </span>
        </a>

        {/* Zone 2: Center Navigation (Desktop) */}
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center px-1 font-mono text-xs font-medium tracking-wider uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:text-[var(--pf-accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA (Desktop) & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-[44px] items-center gap-2 border border-[var(--pf-accent)] bg-[var(--pf-accent)] px-4 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-accent-text)] transition-colors duration-150 hover:bg-[var(--pf-ink)] hover:border-[var(--pf-ink)] md:inline-flex"
          >
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Stage 2026</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--pf-border)] bg-[var(--pf-surface)] text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-ink)] md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="border-t border-[var(--pf-border)] bg-[var(--pf-surface)] md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col divide-y divide-[var(--pf-border)] px-4 py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center justify-between py-2 font-mono text-xs font-medium tracking-wider uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:text-[var(--pf-accent)]"
              >
                <span>{link.label}</span>
                <span className="text-[var(--pf-muted)]" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
            <div className="py-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 border border-[var(--pf-accent)] bg-[var(--pf-accent)] px-4 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-accent-text)]"
              >
                <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Disponibilité Stage 2026</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
