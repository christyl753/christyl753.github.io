import Link from "next/link";
import { PROJECTS, type Project } from "@/data/portfolio";

function ProjectVisual({ type }: { type: Project["visualType"] }) {
  if (type === "arduino") {
    return (
      <div className="relative flex h-40 w-full items-center justify-center border-b border-[var(--tk-border)] px-4">
        <span className="absolute top-3 left-3 font-mono text-[10px] text-[var(--tk-muted)]">
          IN
        </span>
        <span className="absolute right-3 bottom-3 font-mono text-[10px] text-[var(--tk-muted)]">
          HID
        </span>
        <svg
          viewBox="0 0 220 90"
          className="h-24 w-full max-w-[210px] text-[#354B3E]"
          fill="none"
          aria-hidden="true"
        >
          <line x1="16" y1="45" x2="58" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <line x1="162" y1="45" x2="204" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          {[28, 39, 51, 62].map((y) => (
            <g key={y}>
              <line x1="58" y1={y} x2="72" y2={y} stroke="currentColor" strokeWidth="1.2" />
              <line x1="148" y1={y} x2="162" y2={y} stroke="currentColor" strokeWidth="1.2" />
            </g>
          ))}
          <rect
            x="72"
            y="18"
            width="76"
            height="54"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <text
            x="110"
            y="43"
            textAnchor="middle"
            className="fill-current font-mono text-[10px]"
          >
            ARDUINO
          </text>
          <text
            x="110"
            y="56"
            textAnchor="middle"
            className="fill-current font-mono text-[8px]"
            opacity="0.7"
          >
            4×4 · ARCH
          </text>
        </svg>
      </div>
    );
  }

  if (type === "alyx") {
    return (
      <div className="flex h-40 w-full flex-col justify-between border-b border-[var(--tk-border)] p-4 font-mono text-[11px] text-[#354B3E]">
        <div className="border-b border-[var(--tk-border)] pb-2 text-[10px] text-[var(--tk-muted)]">
          ~/alyx / agent.log
        </div>
        <div className="my-auto space-y-1">
          <p>[ok] ollama : gemma ready</p>
          <p>[ok] tool_calling enabled</p>
          <p>[ok] approval_guard active</p>
          <p className="text-[var(--tk-green-ink)]">&gt; _</p>
        </div>
      </div>
    );
  }

  if (type === "grid") {
    const cells = [
      "bg-[#2B543A]",
      "bg-[#CBD6CB]",
      "bg-[#D7DFD7]",
      "bg-[#2B543A]",
      "bg-[#D7DFD7]",
      "bg-[#CBD6CB]",
      "bg-[#2B543A]",
      "bg-[#D7DFD7]",
    ];
    return (
      <div className="flex h-40 w-full flex-col justify-between border-b border-[var(--tk-border)] p-4">
        <div className="grid grid-cols-4 gap-1.5">
          {cells.map((bg, idx) => (
            <div key={idx} className={`h-8 rounded-sm ${bg}`} />
          ))}
        </div>
        <div className="mt-2 h-2 w-full rounded-sm bg-[#2B543A]" />
        <p className="mt-2 font-mono text-[10px] text-[var(--tk-muted)]">
          API REST / SQL / UML
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-40 w-full flex-col justify-between border-b border-[var(--tk-border)] p-4 font-mono text-[11px] text-[#354B3E]">
      <div className="border-b border-[var(--tk-border)] pb-2 text-[10px] text-[var(--tk-muted)]">
        ~/sys / core.cpp
      </div>
      <div className="my-auto space-y-1">
        <p>[ok] memory_pool init</p>
        <p>[ok] design_patterns ok</p>
        <p>[ok] gpu_cuda learning</p>
        <p className="text-[var(--tk-green-ink)]">&gt; _</p>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projets"
      className="border-b border-[var(--tk-divider)] py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
          02 / PROJETS
        </p>
        <h2 className="tk-heading mt-2 text-2xl font-semibold text-[var(--tk-ink)] sm:text-3xl">
          L&apos;idée devient concrète.
        </h2>
        <p className="mt-1.5 text-sm text-[var(--tk-muted)]">
          Projets personnels et académiques · UQO
        </p>

        {/* Horizontal snap carousel on mobile (matches mockup 02), 2-col grid on md+ */}
        <div className="no-scrollbar mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={`/projets/${project.id}`}
              className="group flex w-[84vw] max-w-[340px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-xl border border-[var(--tk-border)] bg-[var(--tk-surface)] transition-colors duration-150 hover:border-[#B8C4B6] md:w-auto md:max-w-none"
            >
              <div>
                <ProjectVisual type={project.visualType} />
                <div className="p-5">
                  <p className="font-mono text-[10px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
                    {project.cardCategory}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--tk-ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--tk-muted)]">
                    {project.cardSummary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <span className="inline-flex min-h-[44px] items-center text-sm font-medium text-[var(--tk-ink)] transition-transform duration-150 group-hover:translate-x-0.5">
                  Découvrir le projet →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile swipe hint (matches mockup 02) */}
        <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[var(--tk-muted)] md:hidden">
          <span>Glisser pour explorer →</span>
          <span>{PROJECTS.length} projets</span>
        </div>
      </div>
    </section>
  );
}
