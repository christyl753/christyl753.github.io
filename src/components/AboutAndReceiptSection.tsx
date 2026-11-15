"use client";

import { useState } from "react";
import {
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Keyboard,
  Layers,
  ReceiptText,
  ShoppingBag,
  Terminal,
} from "lucide-react";
import { COMPETENCIES, PROFILE, PROJECTS } from "@/data/portfolio";

interface AboutAndReceiptSectionProps {
  simpleMode: boolean;
  onToggleSimpleMode: () => void;
}

const BARCODE_WIDTHS = [
  2, 1, 3, 1, 2, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 1, 2, 2, 3, 1, 2, 1, 1, 2, 3, 1,
  2, 1, 2, 1,
];

const BADGE_STYLES: Record<string, string> = {
  PY: "bg-[#111111] text-white",
  LNX: "bg-[#7C3AED] text-white",
  SQL: "bg-[#E11D48] text-white",
  "C++": "bg-[#D97706] text-white",
};

const PROJECT_DELIVERABLES: Record<string, string> = {
  alyx: "Python · .NET 8",
  "pilote-linux": "Arch · Arduino",
  "sql-systemes": "SQL · UML · REST",
  "cpp-ingenierie": "C / C++ · Java",
};

function CompetencyIcon({
  icon,
  className = "h-4 w-4 text-[var(--pf-accent)]",
}: {
  icon: "cpu" | "terminal" | "database" | "code";
  className?: string;
}) {
  switch (icon) {
    case "cpu":
      return <Cpu className={className} aria-hidden="true" />;
    case "terminal":
      return <Terminal className={className} aria-hidden="true" />;
    case "database":
      return <Database className={className} aria-hidden="true" />;
    case "code":
      return <Code2 className={className} aria-hidden="true" />;
  }
}

function ProjectSmallIcon({ icon }: { icon: "bot" | "keyboard" | "database" | "cpu" }) {
  const cls = "h-3.5 w-3.5 text-[var(--pf-accent)] shrink-0";
  switch (icon) {
    case "bot":
      return <Bot className={cls} aria-hidden="true" />;
    case "keyboard":
      return <Keyboard className={cls} aria-hidden="true" />;
    case "database":
      return <Database className={cls} aria-hidden="true" />;
    case "cpu":
      return <Cpu className={cls} aria-hidden="true" />;
  }
}

export function AboutAndReceiptSection({
  simpleMode,
  onToggleSimpleMode,
}: AboutAndReceiptSectionProps) {
  const [selectedSku, setSelectedSku] = useState<string | null>(null);

  return (
    <section
      id="apropos"
      className="border-b border-[var(--pf-border)] bg-[var(--pf-subtle)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 border-b border-[var(--pf-border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="pf-tabular font-mono text-xs font-semibold tracking-widest uppercase text-[var(--pf-accent)]">
              01 / À PROPOS & COMPÉTENCES
            </p>
            <h2 className="pf-heading mt-2 font-serif text-3xl font-semibold text-[var(--pf-ink)] sm:text-4xl">
              Profil technique & Facture Atelier
            </h2>
          </div>

          <button
            type="button"
            onClick={onToggleSimpleMode}
            aria-pressed={simpleMode}
            className="inline-flex min-h-[44px] items-center gap-2 self-start border border-[var(--pf-ink)] bg-[var(--pf-surface)] px-4 py-2 font-mono text-xs font-medium tracking-wider uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-accent)] hover:text-[var(--pf-accent)] sm:self-auto"
          >
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{simpleMode ? "Activer Mode Atelier" : "Mode Simple"}</span>
          </button>
        </div>

        {/* 2-Column Layout: Left Narrative + 4 Skill Blocks | Right Facture */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-6">
            <div className="border border-[var(--pf-border)] bg-[var(--pf-surface)] p-6">
              <div className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-wider uppercase text-[var(--pf-muted)]">
                <ShoppingBag className="h-3.5 w-3.5 text-[var(--pf-accent)]" aria-hidden="true" />
                <span>NOTE D&apos;ATELIER · BIOGRAPHIE</span>
              </div>
              <p className="text-base leading-relaxed text-[var(--pf-ink)]">
                {PROFILE.aboutBio}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--pf-border)] pt-4 font-mono text-xs text-[var(--pf-muted)]">
                <span>UQO · Gatineau</span>
                <span aria-hidden="true">·</span>
                <span>Exécutif Conseil des étudiants en génie</span>
                <span aria-hidden="true">·</span>
                <span>Jeux de Génie 2026</span>
                <span aria-hidden="true">·</span>
                <span>Basket</span>
              </div>
            </div>

            {/* 4 Structured Discipline / Skill Blocks */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {COMPETENCIES.map((comp) => (
                <article
                  key={comp.id}
                  className="flex flex-col justify-between border border-[var(--pf-border)] bg-[var(--pf-surface)] p-5 transition-colors duration-150 hover:border-[var(--pf-ink)]"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 border border-[var(--pf-ink)] bg-[var(--pf-canvas)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--pf-ink)]">
                        <CompetencyIcon icon={comp.icon} />
                        {comp.monogram}
                      </span>
                      <span className="pf-tabular font-mono text-[11px] text-[var(--pf-muted)]">
                        {comp.sku}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[var(--pf-ink)]">
                      {comp.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--pf-muted)]">
                      {comp.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[var(--pf-border)] pt-3 font-mono text-[11px]">
                    <span className="text-[var(--pf-muted)]">{comp.category}</span>
                    <span className="font-semibold text-[var(--pf-accent)]">
                      {comp.metric}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Facture / Ticket de Caisse #FAC-2026 (Image 3 Structure) */}
          <div className="lg:col-span-6">
            {simpleMode ? (
              <div className="border border-[var(--pf-ink)] bg-[var(--pf-surface)] p-6">
                <div className="mb-4 flex items-center justify-between border-b border-[var(--pf-border)] pb-3">
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                    SPÉCIFICATIONS TECHNIQUES (MODE SIMPLE)
                  </span>
                  <span className="pf-tabular font-mono text-xs text-[var(--pf-muted)]">
                    #FAC-2026
                  </span>
                </div>
                <div className="divide-y divide-[var(--pf-border)]">
                  {COMPETENCIES.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-3 font-mono text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[var(--pf-ink)]">
                          {item.monogram}
                        </span>{" "}
                        <span className="text-[var(--pf-muted)]">· {item.title}</span>
                      </div>
                      <span className="pf-tabular text-[var(--pf-accent)]">
                        {item.metric}
                      </span>
                    </div>
                  ))}
                  {PROJECTS.map((prj) => (
                    <div
                      key={prj.id}
                      className="flex items-center justify-between py-3 font-mono text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[var(--pf-ink)]">
                          {prj.code}
                        </span>{" "}
                        <span className="text-[var(--pf-muted)]">· {prj.title}</span>
                      </div>
                      <span className="pf-tabular text-[var(--pf-ink)]">{prj.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border border-[var(--pf-border)] bg-[var(--pf-surface)] p-5 sm:p-7">
                {/* Top Invoice Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-dashed border-[var(--pf-border)] pb-4">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-accent)]">
                      <ReceiptText className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>FACTURE / TICKET DE CAISSE #FAC-2026</span>
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] tracking-wider uppercase text-[var(--pf-muted)]">
                      ATELIER {PROFILE.fullName.toUpperCase()} · PROFIL :{" "}
                      {PROFILE.fullName.toUpperCase()}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 border border-[var(--pf-accent)] bg-[var(--pf-surface)] px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wider uppercase text-[var(--pf-accent)]">
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                    <span>CERTIFIÉ</span>
                  </span>
                </div>

                {/* 3-Column Table Header */}
                <div className="grid grid-cols-12 items-center gap-2 pt-4 pb-2 font-mono text-[10px] tracking-wider uppercase text-[var(--pf-muted)]">
                  <div className="col-span-3 sm:col-span-2">LOGO</div>
                  <div className="col-span-6 sm:col-span-7">
                    DÉSIGNATION (COMPÉTENCE / PROJET)
                  </div>
                  <div className="col-span-3 text-right">VALEUR / SLA</div>
                </div>

                {/* 4 Competency Rows */}
                <div className="divide-y divide-[var(--pf-ink)]/70 border-b border-[var(--pf-ink)]/70">
                  {COMPETENCIES.map((comp) => {
                    const isSelected = selectedSku === comp.sku;
                    return (
                      <button
                        key={comp.id}
                        type="button"
                        onClick={() =>
                          setSelectedSku(isSelected ? null : comp.sku)
                        }
                        className={`grid min-h-[48px] w-full grid-cols-12 items-center gap-2 py-3 px-1 text-left transition-colors duration-150 ${
                          isSelected
                            ? "bg-[var(--pf-subtle)]"
                            : "hover:bg-[var(--pf-canvas)]"
                        }`}
                      >
                        <div className="col-span-3 sm:col-span-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2 py-1 font-mono text-[10px] font-bold tracking-wider uppercase ${
                              BADGE_STYLES[comp.monogram] ??
                              "bg-[var(--pf-ink)] text-white"
                            }`}
                          >
                            <CompetencyIcon
                              icon={comp.icon}
                              className="h-3 w-3 text-white"
                            />
                            <span>{comp.monogram}</span>
                          </span>
                        </div>

                        <div className="col-span-6 sm:col-span-7">
                          <span className="block text-sm font-medium text-[var(--pf-ink)]">
                            {comp.title}
                          </span>
                          {isSelected && (
                            <span className="mt-1 block text-xs text-[var(--pf-muted)]">
                              {comp.description}
                            </span>
                          )}
                        </div>

                        <div className="col-span-3 text-right">
                          <span className="pf-tabular font-mono text-xs text-[var(--pf-accent)]">
                            {comp.metric}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Sub-header: Livrables & Projets Facturés */}
                <p className="pt-5 pb-2 font-mono text-[10px] tracking-wider uppercase text-[var(--pf-muted)]">
                  LIVRABLES & PROJETS FACTURÉS :
                </p>

                <div className="divide-y divide-[var(--pf-ink)]/70 border-b border-[var(--pf-ink)]/70">
                  {PROJECTS.map((prj, idx) => (
                    <div
                      key={prj.id}
                      className="grid min-h-[44px] grid-cols-12 items-center gap-2 py-2.5 px-1"
                    >
                      <div className="col-span-3 flex items-center gap-1.5 sm:col-span-2">
                        <ProjectSmallIcon icon={prj.icon} />
                        <span className="pf-tabular font-mono text-xs font-semibold text-[var(--pf-accent)]">
                          TC-0{idx + 1}
                        </span>
                      </div>

                      <div className="col-span-6 text-xs text-[var(--pf-ink)] sm:col-span-7 sm:text-sm">
                        <span className="font-medium">{prj.title}</span>
                      </div>

                      <div className="col-span-3 text-right font-mono text-xs font-medium text-[var(--pf-ink)]">
                        {PROJECT_DELIVERABLES[prj.id] ?? prj.year}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Totals + CSS Barcode */}
                <div className="mt-6 flex flex-col justify-between gap-5 pt-2 sm:flex-row sm:items-end">
                  <div>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-[var(--pf-muted)]">
                      TVA TALENT 0% · DISPONIBILITÉ IMMÉDIATE
                    </p>
                    <p className="pf-tabular mt-1 font-mono text-xs font-bold tracking-wider uppercase text-[var(--pf-ink)]">
                      TOTAL : 4 COMPÉTENCES + 4 PROJETS
                    </p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end">
                    <div
                      aria-hidden="true"
                      className="flex h-9 items-stretch gap-[2px]"
                    >
                      {BARCODE_WIDTHS.map((w, idx) => (
                        <span
                          key={idx}
                          className="bg-[var(--pf-ink)]"
                          style={{ width: `${w * 1.5}px` }}
                        />
                      ))}
                    </div>
                    <p className="pf-tabular mt-1 font-mono text-[9px] tracking-[0.18em] uppercase text-[var(--pf-muted)]">
                      *FAC-006-TIANTSE*
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
