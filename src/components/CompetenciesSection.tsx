import { COMPETENCIES } from "@/data/portfolio";

export function CompetenciesSection() {
  return (
    <section
      id="competences"
      className="border-b border-[var(--tk-divider)] py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
          01 / COMPÉTENCES
        </p>
        <h2 className="tk-heading mt-2 text-2xl font-semibold text-[var(--tk-ink)] sm:text-3xl">
          Au plus près de la machine.
        </h2>
        <p className="mt-1.5 text-sm text-[var(--tk-muted)]">
          De l&apos;embarqué et Linux jusqu&apos;à l&apos;IA locale et aux notions GPU.
        </p>

        {/* 4 Dark Competency Cards (2x2 mobile, 4 cols desktop) */}
        <div className="mt-7 grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-4">
          {COMPETENCIES.map((comp) => (
            <article
              key={comp.id}
              className="flex min-h-[156px] flex-col justify-between rounded-xl bg-[var(--tk-dark)] p-4 text-white sm:p-5"
            >
              <div>
                <p className="font-mono text-lg font-medium text-[var(--tk-mint)] sm:text-xl">
                  {comp.symbol}
                </p>
                <h3 className="mt-3 text-sm font-medium text-white sm:text-base">
                  {comp.title}
                </h3>
              </div>

              <p className="mt-5 font-mono text-[11px] leading-relaxed text-[var(--tk-dark-muted)]">
                {comp.keywords}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-4 font-mono text-[11px] text-[var(--tk-muted)]">
          hardware → kernel → ai
        </p>
      </div>
    </section>
  );
}
