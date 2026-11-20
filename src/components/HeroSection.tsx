"use client";

import Image from "next/image";
import { PROFILE } from "@/data/portfolio";

const PORTRAIT_SRC = "/images/christ-tiantse.jpg";

export function HeroSection() {
  return (
    <section id="accueil" className="pt-6 pb-10 sm:pt-8 sm:pb-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[var(--tk-dark)] p-6 text-white sm:p-10 lg:p-12">
          {/* Top row on mobile: left identity + right portrait; on desktop: full 2-col split */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            {/* Left Content */}
            <div className="md:col-span-7">
              <div className="flex items-start justify-between gap-4 md:block">
                <div>
                  <p className="font-mono text-[11px] tracking-widest uppercase text-[var(--tk-dark-muted)]">
                    {"// TRACE × KERNEL"}
                  </p>

                  <p className="mt-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {PROFILE.fullName}
                  </p>
                  <p className="mt-1 text-sm text-[var(--tk-dark-muted)]">
                    {PROFILE.role}
                  </p>
                </div>

                {/* Mobile Portrait (matches mockup 02 top-right placement) */}
                <div className="shrink-0 md:hidden">
                  <div
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    className="relative h-28 w-24 select-none overflow-hidden rounded-xl bg-[#1D2620]"
                  >
                    <Image
                      src={PORTRAIT_SRC}
                      alt="Portrait de Christ Tiantse"
                      fill
                      priority
                      draggable={false}
                      sizes="96px"
                      className="pointer-events-none select-none object-cover object-top"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 z-10 select-none"
                    />
                  </div>
                  <p className="mt-1.5 text-center font-mono text-[10px] text-[var(--tk-dark-muted)]">
                    Gatineau, QC
                  </p>
                </div>
              </div>

              <h1
                className="tk-heading mt-6 font-semibold text-white md:mt-8"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  lineHeight: 1.04,
                }}
              >
                {PROFILE.heroHeadline}
              </h1>

              <p className="mt-5 font-mono text-xs text-[var(--tk-dark-muted)]">
                {PROFILE.heroStack}
              </p>

              <div className="mt-7">
                <a
                  href="#projets"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[var(--tk-mint)] px-5 py-2.5 text-sm font-medium text-[var(--tk-dark)] transition-colors duration-150 hover:bg-[var(--tk-mint-hover)]"
                >
                  Explorer mes projets →
                </a>
              </div>
            </div>

            {/* Desktop Portrait (matches mockup 01 right column) */}
            <div className="hidden md:col-span-5 md:flex md:flex-col md:items-end">
              <div className="w-full max-w-[270px]">
                <div
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-xl bg-[#1D2620]"
                >
                  <Image
                    src="/images/christ-tiantse.jpg"
                    alt="Portrait de Christ Tiantse"
                    fill
                    priority
                    draggable={false}
                    sizes="270px"
                    className="pointer-events-none select-none object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 select-none"
                  />
                </div>
                <p className="mt-2.5 font-mono text-[11px] text-[var(--tk-dark-muted)]">
                  {PROFILE.location} · {PROFILE.availability}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
