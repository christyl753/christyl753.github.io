"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Cpu,
  Database,
  Keyboard,
  ShoppingBag,
  X,
} from "lucide-react";
import { PROJECTS, type Project } from "@/data/portfolio";

function ProjectIcon({ icon }: { icon: Project["icon"] }) {
  switch (icon) {
    case "bot":
      return <Bot className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />;
    case "keyboard":
      return (
        <Keyboard className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />
      );
    case "database":
      return (
        <Database className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />
      );
    case "cpu":
      return <Cpu className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />;
  }
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  return (
    <section
      id="projets"
      className="border-b border-[var(--pf-border)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-3 border-b border-[var(--pf-border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="pf-tabular font-mono text-xs font-semibold tracking-widest uppercase text-[var(--pf-accent)]">
              02 / PROJETS SÉLECTIONNÉS
            </p>
            <h2 className="pf-heading mt-2 font-serif text-3xl font-semibold text-[var(--pf-ink)] sm:text-4xl">
              Études de cas & Réalisations
            </h2>
          </div>
          <p className="pf-tabular font-mono text-xs text-[var(--pf-muted)]">
            CATALOGUE 2024–2026 · 04 RÉFÉRENCES
          </p>
        </div>

        {/* 2-Column Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between border border-[var(--pf-border)] bg-[var(--pf-surface)] p-6 transition-colors duration-150 hover:border-[var(--pf-ink)]"
            >
              <div>
                {/* Top Metadata Bar */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--pf-border)] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 border border-[var(--pf-ink)] bg-[var(--pf-canvas)] px-2.5 py-1 font-mono text-xs font-bold text-[var(--pf-ink)]">
                      <ProjectIcon icon={project.icon} />
                      {project.monogram}
                    </span>
                    <span className="pf-tabular font-mono text-xs font-semibold text-[var(--pf-ink)]">
                      {project.code}
                    </span>
                  </div>

                  <span className="pf-tabular font-mono text-xs text-[var(--pf-muted)]">
                    {project.category} · {project.year}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="pf-heading font-serif text-2xl font-semibold text-[var(--pf-ink)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--pf-muted)]">
                  {project.summary}
                </p>

                {/* Outcome */}
                <div className="mt-4 border-l-2 border-[var(--pf-accent)] bg-[var(--pf-canvas)] px-3 py-2.5">
                  <p className="font-mono text-[10px] font-semibold tracking-wider uppercase text-[var(--pf-accent)]">
                    RÉSULTAT CLÉ
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--pf-ink)]">
                    {project.outcome}
                  </p>
                </div>
              </div>

              {/* Footer: Stack + Inspect CTA */}
              <div className="mt-6 flex flex-col gap-4 border-t border-[var(--pf-border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-mono text-[11px] text-[var(--pf-muted)]">
                  {project.stack.join(" · ")}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 border border-[var(--pf-ink)] bg-[var(--pf-surface)] px-4 py-2 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-accent)] hover:bg-[var(--pf-accent)] hover:text-[var(--pf-accent-text)]"
                >
                  <ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Inspecter</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[var(--pf-ink)] bg-[var(--pf-surface)] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[var(--pf-border)] pb-4">
              <div>
                <p className="pf-tabular font-mono text-xs font-semibold tracking-widest uppercase text-[var(--pf-accent)]">
                  {activeProject.code} · {activeProject.sku} · {activeProject.year}
                </p>
                <h3
                  id="project-modal-title"
                  className="pf-heading mt-1 font-serif text-2xl font-semibold text-[var(--pf-ink)] sm:text-3xl"
                >
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Fermer l'aperçu du projet"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--pf-border)] bg-[var(--pf-canvas)] text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-ink)]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              <div>
                <h4 className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-muted)]">
                  CONTEXTE & OBJECTIF
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--pf-ink)]">
                  {activeProject.summary}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-muted)]">
                  POINTS TECHNIQUES & ARCHITECTURE
                </h4>
                <ul className="mt-2 space-y-2 border border-[var(--pf-border)] bg-[var(--pf-canvas)] p-4">
                  {activeProject.architecture.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--pf-ink)]"
                    >
                      <span className="pf-tabular font-mono text-xs font-bold text-[var(--pf-accent)]">
                        0{idx + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-muted)]">
                  TECHNOLOGIES
                </h4>
                <p className="mt-2 font-mono text-xs text-[var(--pf-ink)]">
                  {activeProject.stack.join(" · ")}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-[var(--pf-border)] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={activeProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-[var(--pf-ink)] bg-[var(--pf-ink)] px-5 py-2.5 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-surface)] transition-colors duration-150 hover:border-[var(--pf-accent)] hover:bg-[var(--pf-accent)]"
              >
                <span>Voir sur GitHub</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="inline-flex min-h-[44px] items-center justify-center border border-[var(--pf-border)] bg-[var(--pf-surface)] px-5 py-2.5 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-ink)]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
