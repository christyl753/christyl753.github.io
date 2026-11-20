import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS, PROFILE } from "@/data/portfolio";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Projet introuvable" };

  return {
    title: `${project.title} — ${PROFILE.fullName}`,
    description: project.cardSummary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const index = PROJECTS.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen overflow-x-clip bg-[var(--tk-bg)] text-[var(--tk-ink)]">
      {/* Top Bar */}
      <header className="border-b border-[var(--tk-divider)] bg-[var(--tk-bg)]">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projets"
            className="inline-flex min-h-[44px] items-center font-mono text-xs text-[var(--tk-ink)] transition-colors duration-150 hover:text-[var(--tk-green-ink)]"
          >
            ← Portfolio
          </Link>
          <span className="tk-tabular font-mono text-xs text-[var(--tk-muted)]">
            {project.slugPath}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Dark Project Hero */}
        <section className="rounded-2xl bg-[var(--tk-dark)] p-6 text-white sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="tk-tabular font-mono text-[11px] tracking-widest uppercase text-[var(--tk-dark-muted)]">
                {project.categoryLabel}
              </p>
              <h1
                className="tk-heading mt-4 font-semibold text-white"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.35rem)",
                  lineHeight: 1.06,
                }}
              >
                {project.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--tk-dark-muted)] sm:text-base">
                {project.subtitle}
              </p>

              <p className="mt-5 font-mono text-[11px] tracking-wider uppercase text-[#8A988E]">
                {project.stackLine}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#workflow"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[var(--tk-mint)] px-5 py-2.5 text-sm font-medium text-[var(--tk-dark)] transition-colors duration-150 hover:bg-[var(--tk-mint-hover)]"
                >
                  Voir le fonctionnement ↓
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/15 px-4 py-2.5 font-mono text-xs text-[#C8D3CB] transition-colors duration-150 hover:border-[var(--tk-mint)] hover:text-[var(--tk-mint)]"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Dark Inner Code Panel */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-[#9CE0A8]/15 bg-[var(--tk-dark-elevated)] p-5 font-mono text-xs">
                <div className="border-b border-[#9CE0A8]/15 pb-3 text-[10px] tracking-wider uppercase text-[#7E9485]">
                  {project.codeHeader}
                </div>
                <pre className="mt-4 overflow-x-auto leading-relaxed text-[var(--tk-mint)]">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* 01 / COMPRENDRE LE PROJET */}
        <section className="border-b border-[var(--tk-divider)] py-10 sm:py-14">
          <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
            01 / COMPRENDRE LE PROJET
          </p>
          <h2 className="tk-heading mt-2 text-2xl font-semibold text-[var(--tk-ink)] sm:text-3xl">
            L&apos;idée, simplement.
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-sm leading-relaxed text-[var(--tk-muted)] sm:text-base">
                {project.ideaParagraph}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[var(--tk-muted)]">
                {project.pillars.map((pillar) => (
                  <span key={pillar}>{pillar}</span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-[var(--tk-border)] bg-[var(--tk-surface)] p-5 lg:col-span-5">
              <p className="font-mono text-[10px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
                LE DÉFI
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--tk-ink)]">
                {project.challenge}
              </p>
            </div>
          </div>
        </section>

        {/* 02 / WORKFLOW DE FONCTIONNEMENT */}
        <section
          id="workflow"
          className="border-b border-[var(--tk-divider)] py-10 sm:py-14"
        >
          <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
            02 / WORKFLOW DE FONCTIONNEMENT
          </p>
          <h2 className="tk-heading mt-2 text-2xl font-semibold text-[var(--tk-ink)] sm:text-3xl">
            {project.workflowTitle}
          </h2>
          <p className="mt-1.5 text-sm text-[var(--tk-muted)]">
            Le chemin suivi pendant l&apos;exécution.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-5">
            {project.workflowSteps.map((step, idx) => {
              const isLast = idx === project.workflowSteps.length - 1;
              return (
                <div
                  key={step.num}
                  className={`flex flex-col justify-between rounded-xl p-4 sm:p-5 ${
                    isLast
                      ? "col-span-2 bg-[var(--tk-dark)] text-white lg:col-span-1"
                      : "border border-[var(--tk-border)] bg-[var(--tk-surface)] text-[var(--tk-ink)]"
                  }`}
                >
                  <div>
                    <p
                      className={`tk-tabular font-mono text-[11px] ${
                        isLast
                          ? "text-[var(--tk-mint)]"
                          : "text-[var(--tk-green-ink)]"
                      }`}
                    >
                      {step.num}
                    </p>
                    <h3 className="mt-2 text-base font-semibold">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 text-xs leading-relaxed ${
                        isLast
                          ? "text-[var(--tk-dark-muted)]"
                          : "text-[var(--tk-muted)]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 font-mono text-xs text-[var(--tk-muted)]">
            {project.workflowFootnote}
          </p>
        </section>

        {/* 03 / CHOIX TECHNIQUES */}
        <section className="py-10 sm:py-14">
          <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
            03 / CHOIX TECHNIQUES
          </p>
          <h2 className="tk-heading mt-2 text-2xl font-semibold text-[var(--tk-ink)] sm:text-3xl">
            Les choix qui comptent.
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.choices.map((choice) => (
              <div
                key={choice.title}
                className="rounded-xl border border-[var(--tk-border)] bg-[var(--tk-surface)] p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-[var(--tk-ink)]">
                  {choice.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--tk-muted)]">
                  {choice.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Banner */}
        <section className="pb-6">
          <Link
            href={`/projets/${nextProject.id}`}
            className="group block rounded-2xl bg-[var(--tk-dark)] p-6 text-white transition-opacity duration-150 hover:opacity-95 sm:p-8"
          >
            <p className="tk-tabular font-mono text-[11px] tracking-wider uppercase text-[var(--tk-dark-muted)]">
              PROJET SUIVANT / {nextProject.number}
            </p>
            <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              {nextProject.title}{" "}
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </p>
          </Link>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center font-mono text-xs text-[var(--tk-muted)] transition-colors duration-150 hover:text-[var(--tk-ink)]"
            >
              ← Retour au portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
