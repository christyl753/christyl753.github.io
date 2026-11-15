import Image from "next/image";
import { ArrowDownRight, MapPin, ShoppingBag, Terminal } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

interface HeroSectionProps {
  simpleMode: boolean;
}

export function HeroSection({ simpleMode }: HeroSectionProps) {
  return (
    <section
      id="accueil"
      className="border-b border-[var(--pf-border)] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Editorial Headline & CTAs */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2 font-mono text-xs tracking-wider uppercase text-[var(--pf-muted)]">
                <span className="inline-flex items-center gap-1.5 text-[var(--pf-accent)] font-semibold">
                  <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                  ÉDITION 2026
                </span>
                <span aria-hidden="true">·</span>
                <span>{PROFILE.role}</span>
              </div>

              <h1
                className="pf-heading font-serif font-semibold text-[var(--pf-ink)]"
                style={{
                  fontSize: "clamp(1.85rem, 4vw, 3.5rem)",
                  lineHeight: 1.06,
                }}
              >
                {PROFILE.heroHeadline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--pf-muted)] sm:text-lg">
                {PROFILE.heroValueProp}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-[var(--pf-border)] py-3 font-mono text-xs text-[var(--pf-ink)]">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[var(--pf-accent)]" aria-hidden="true" />
                  {PROFILE.location}
                </span>
                <span className="text-[var(--pf-muted)]" aria-hidden="true">
                  /
                </span>
                <span>UQO · Génie informatique</span>
                <span className="text-[var(--pf-muted)]" aria-hidden="true">
                  /
                </span>
                <span className="font-semibold text-[var(--pf-accent)]">
                  {PROFILE.availability}
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projets"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-[var(--pf-ink)] bg-[var(--pf-ink)] px-6 py-3 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-surface)] transition-colors duration-150 hover:border-[var(--pf-accent)] hover:bg-[var(--pf-accent)]"
              >
                <span>Voir les projets</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-[var(--pf-border)] bg-[var(--pf-surface)] px-6 py-3 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-ink)]"
              >
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Concept Store Spec Card / Studio Pass */}
          <div className="lg:col-span-5">
            <div className="relative flex h-full flex-col justify-between overflow-hidden border border-[var(--pf-ink)] bg-[var(--pf-surface)] p-5 sm:p-6">
              {/* Subtle ambient scanline only in Immersive Mode */}
              {!simpleMode && (
                <div
                  aria-hidden="true"
                  className="pf-ambient-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-[rgba(225,29,72,0.06)] to-transparent"
                />
              )}

              {/* Card Top Bar */}
              <div className="flex items-center justify-between border-b border-[var(--pf-border)] pb-3 font-mono text-[11px] tracking-wider uppercase">
                <span className="flex items-center gap-2 font-semibold text-[var(--pf-ink)]">
                  <ShoppingBag className="h-3.5 w-3.5 text-[var(--pf-accent)]" aria-hidden="true" />
                  FICHE ATELIER · #006
                </span>
                <span className="pf-tabular border border-[var(--pf-accent)] px-2 py-0.5 text-[10px] font-semibold text-[var(--pf-accent)]">
                  STAGE 2026
                </span>
              </div>

              {/* Center Portrait, Monogram & Specs */}
              <div className="my-5 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden border border-[var(--pf-ink)] bg-[var(--pf-subtle)] sm:h-28 sm:w-28">
                    <Image
                      src="/images/christ-tiantse.jpg"
                      alt="Portrait de Tiantse Christ"
                      fill
                      priority
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] tracking-widest uppercase text-[var(--pf-muted)]">
                      TITULAIRE
                    </p>
                    <p className="mt-1 font-serif text-2xl font-semibold tracking-tight text-[var(--pf-ink)] sm:text-3xl">
                      {PROFILE.fullName}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-[var(--pf-muted)]">
                      Génie informatique · UQO
                    </p>
                  </div>
                </div>

                {/* Spec Grid */}
                <dl className="grid grid-cols-2 border border-[var(--pf-border)] bg-[var(--pf-canvas)]">
                  <div className="border-b border-r border-[var(--pf-border)] p-3">
                    <dt className="font-mono text-[10px] tracking-wider uppercase text-[var(--pf-muted)]">
                      SPÉCIALITÉ
                    </dt>
                    <dd className="mt-1 font-mono text-xs font-semibold text-[var(--pf-ink)]">
                      Embarqué & IA
                    </dd>
                  </div>
                  <div className="border-b border-[var(--pf-border)] p-3">
                    <dt className="font-mono text-[10px] tracking-wider uppercase text-[var(--pf-muted)]">
                      INSTITUTION
                    </dt>
                    <dd className="mt-1 font-mono text-xs font-semibold text-[var(--pf-ink)]">
                      UQO · Gatineau
                    </dd>
                  </div>
                  <div className="border-r border-[var(--pf-border)] p-3">
                    <dt className="font-mono text-[10px] tracking-wider uppercase text-[var(--pf-muted)]">
                      IMPLICATION
                    </dt>
                    <dd className="mt-1 font-mono text-xs font-semibold text-[var(--pf-ink)]">
                      Exécutif CEG
                    </dd>
                  </div>
                  <div className="p-3">
                    <dt className="font-mono text-[10px] tracking-wider uppercase text-[var(--pf-muted)]">
                      COMPÉTITION
                    </dt>
                    <dd className="pf-tabular mt-1 font-mono text-xs font-semibold text-[var(--pf-ink)]">
                      Jeux de Génie 2026
                    </dd>
                  </div>
                </dl>

                {/* Tech Monogram Strip */}
                <div className="flex flex-wrap items-center gap-2">
                  {["C++", "SQL", "PY", "LNX"].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1 border border-[var(--pf-border)] bg-[var(--pf-surface)] px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--pf-ink)]"
                    >
                      <Terminal className="h-3 w-3 text-[var(--pf-accent)]" aria-hidden="true" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t border-[var(--pf-border)] pt-3 font-mono text-[11px] text-[var(--pf-muted)]">
                <span className="pf-tabular">LAT 45.4765° N · LON 75.7013° W</span>
                <span className="font-semibold text-[var(--pf-ink)]">FR / EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
