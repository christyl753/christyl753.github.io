import { PROFILE, TIMELINE } from "@/data/portfolio";

export function TimelineSection() {
  return (
    <section
      id="parcours"
      className="border-b border-[var(--tk-divider)] py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
          04 / PARCOURS & IMPLICATION
        </p>
        <h2 className="tk-heading mt-2 text-2xl font-semibold text-[var(--tk-ink)] sm:text-3xl">
          Formation & terrain.
        </h2>

        {/* Bio summary card */}
        <div className="mt-6 rounded-xl border border-[var(--tk-border)] bg-[var(--tk-surface)] p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-[var(--tk-ink)] sm:text-base">
            {PROFILE.aboutBio}
          </p>
        </div>

        {/* Chronological Timeline Cards */}
        <div className="mt-4 space-y-3">
          {TIMELINE.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 gap-2 rounded-xl border border-[var(--tk-border)] bg-[var(--tk-surface)] p-5 md:grid-cols-12 md:items-start md:gap-6"
            >
              <div className="md:col-span-3">
                <p className="tk-tabular font-mono text-xs font-medium text-[var(--tk-ink)]">
                  {item.period}
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-wider uppercase text-[var(--tk-green-ink)]">
                  {item.tag}
                </p>
              </div>

              <div className="md:col-span-4">
                <h3 className="text-sm font-semibold text-[var(--tk-ink)] sm:text-base">
                  {item.role}
                </h3>
                <p className="mt-0.5 font-mono text-[11px] text-[var(--tk-muted)]">
                  {item.organization} · {item.location}
                </p>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-[var(--tk-muted)]">
                  {item.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
