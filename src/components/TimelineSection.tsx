import { ShoppingBag } from "lucide-react";
import { TIMELINE } from "@/data/portfolio";

export function TimelineSection() {
  return (
    <section
      id="parcours"
      className="border-b border-[var(--pf-border)] bg-[var(--pf-subtle)] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-3 border-b border-[var(--pf-border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="pf-tabular font-mono text-xs font-semibold tracking-widest uppercase text-[var(--pf-accent)]">
              03 / PARCOURS & EXPÉRIENCE
            </p>
            <h2 className="pf-heading mt-2 font-serif text-3xl font-semibold text-[var(--pf-ink)] sm:text-4xl">
              Formation, Leadership & Compétitions
            </h2>
          </div>
          <p className="pf-tabular font-mono text-xs text-[var(--pf-muted)]">
            CHRONOLOGIE · GATINEAU / QUÉBEC
          </p>
        </div>

        {/* Chronological Table / List */}
        <div className="border border-[var(--pf-border)] bg-[var(--pf-surface)] divide-y divide-[var(--pf-border)]">
          {TIMELINE.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 gap-4 p-5 sm:p-6 md:grid-cols-12 md:items-start md:gap-6"
            >
              {/* Tabular Date + Tag */}
              <div className="md:col-span-3">
                <p className="pf-tabular font-mono text-xs font-bold tracking-wider text-[var(--pf-ink)]">
                  {item.period}
                </p>
                <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase text-[var(--pf-accent)]">
                  <ShoppingBag className="h-3 w-3" aria-hidden="true" />
                  {item.tag}
                </p>
              </div>

              {/* Role & Organization */}
              <div className="md:col-span-4">
                <h3 className="font-serif text-xl font-semibold text-[var(--pf-ink)]">
                  {item.role}
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--pf-muted)]">
                  {item.organization} · {item.location}
                </p>
              </div>

              {/* Impact */}
              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-[var(--pf-ink)]">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
