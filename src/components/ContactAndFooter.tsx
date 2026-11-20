"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

export function ContactAndFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silencieux si le presse-papiers est restreint
    }
  };

  return (
    <>
      <section id="contact" className="py-10 sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[var(--tk-dark)] p-6 text-white sm:p-10 lg:p-12">
            <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-mint)]">
              05 / CONTACT
            </p>
            <h2 className="tk-heading mt-3 text-2xl font-semibold text-white sm:text-4xl">
              Parlons de la suite.
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex min-h-[44px] items-center font-mono text-lg text-[var(--tk-mint)] transition-opacity duration-150 hover:opacity-80 sm:text-2xl"
              >
                {PROFILE.email} →
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copier l'adresse courriel"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[var(--tk-dark-muted)] transition-colors duration-150 hover:border-[var(--tk-mint)] hover:text-[var(--tk-mint)]"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-[var(--tk-mint)]" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-[var(--tk-dark-muted)]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-[#C8D3CB] transition-colors duration-150 hover:text-[var(--tk-mint)]"
              >
                GitHub
              </a>
              <span aria-hidden="true">/</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-[#C8D3CB] transition-colors duration-150 hover:text-[var(--tk-mint)]"
              >
                LinkedIn
              </a>
            </div>

            <p className="mt-2 font-mono text-[11px] text-[#75837A]">
              {PROFILE.location} · {PROFILE.languages}
            </p>
          </div>
        </div>
      </section>

      <footer className="pb-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 font-mono text-[11px] text-[var(--tk-muted)] sm:px-6 lg:px-8">
          <span>{PROFILE.fullName} / Portfolio</span>
          <a
            href="#accueil"
            className="inline-flex min-h-[44px] items-center transition-colors duration-150 hover:text-[var(--tk-ink)]"
          >
            Haut ↑
          </a>
        </div>
      </footer>
    </>
  );
}
