"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  Send,
  ShoppingBag,
} from "lucide-react";
import { PROFILE } from "@/data/portfolio";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactAndFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = "Veuillez saisir votre nom (au moins 2 caractères).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      nextErrors.email = "Veuillez saisir une adresse courriel valide.";
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message =
        "Veuillez rédiger un message d'au moins 10 caractères.";
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

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
      <section
        id="contact"
        className="border-b border-[var(--pf-border)] bg-[var(--pf-subtle)] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 flex flex-col gap-3 border-b border-[var(--pf-border)] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="pf-tabular font-mono text-xs font-semibold tracking-widest uppercase text-[var(--pf-accent)]">
                04 / CONTACT & DISPONIBILITÉ
              </p>
              <h2 className="pf-heading mt-2 font-serif text-3xl font-semibold text-[var(--pf-ink)] sm:text-4xl">
                Discutons d&apos;un stage ou d&apos;un projet
              </h2>
            </div>
            <p className="font-mono text-xs font-semibold text-[var(--pf-ink)]">
              RÉPONSE SOUS 24–48 H
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Direct Info */}
            <div className="space-y-6 lg:col-span-5">
              <div className="border border-[var(--pf-border)] bg-[var(--pf-surface)] p-6">
                <p className="font-mono text-[11px] tracking-wider uppercase text-[var(--pf-muted)]">
                  COORDONNÉES DIRECTES
                </p>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start justify-between gap-3 border-b border-[var(--pf-border)] pb-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase text-[var(--pf-muted)]">
                        COURRIEL
                      </p>
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="mt-1 inline-flex min-h-[44px] items-center gap-2 font-mono text-sm font-semibold text-[var(--pf-ink)] transition-colors duration-150 hover:text-[var(--pf-accent)]"
                      >
                        <Mail className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />
                        {PROFILE.email}
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copier l'adresse courriel"
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--pf-border)] bg-[var(--pf-canvas)] text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-ink)]"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  <div className="border-b border-[var(--pf-border)] pb-4">
                    <p className="font-mono text-[10px] uppercase text-[var(--pf-muted)]">
                      LANGUES
                    </p>
                    <p className="mt-2 font-mono text-sm text-[var(--pf-ink)]">
                      {PROFILE.languages}
                    </p>
                  </div>

                  <div className="border-b border-[var(--pf-border)] pb-4">
                    <p className="font-mono text-[10px] uppercase text-[var(--pf-muted)]">
                      LOCALISATION
                    </p>
                    <p className="mt-2 flex items-center gap-2 font-mono text-sm text-[var(--pf-ink)]">
                      <MapPin className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />
                      {PROFILE.location} · Université du Québec en Outaouais
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase text-[var(--pf-muted)]">
                      RÉSEAUX & CODE
                    </p>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] flex-1 items-center justify-between border border-[var(--pf-border)] bg-[var(--pf-canvas)] px-4 font-mono text-xs font-semibold uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-ink)]"
                      >
                        <span>LinkedIn</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a
                        href={PROFILE.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] flex-1 items-center justify-between border border-[var(--pf-border)] bg-[var(--pf-canvas)] px-4 font-mono text-xs font-semibold uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:border-[var(--pf-ink)]"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Accessible Contact Form */}
            <div className="lg:col-span-7">
              <div className="border border-[var(--pf-ink)] bg-[var(--pf-surface)] p-6 sm:p-8">
                {submitted ? (
                  <div
                    role="status"
                    className="space-y-4 border border-[var(--pf-accent)] bg-[var(--pf-canvas)] p-6"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase text-[var(--pf-accent)]">
                      <Check className="h-4 w-4" aria-hidden="true" />
                      <span>MESSAGE ENREGISTRÉ</span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[var(--pf-ink)]">
                      Merci pour votre message.
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--pf-muted)]">
                      Votre demande a bien été prise en compte. Pour un échange
                      direct, vous pouvez également écrire à{" "}
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="font-mono font-semibold text-[var(--pf-ink)] underline"
                      >
                        {PROFILE.email}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex min-h-[44px] items-center justify-center border border-[var(--pf-ink)] bg-[var(--pf-surface)] px-5 py-2 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-ink)] transition-colors duration-150 hover:bg-[var(--pf-ink)] hover:text-[var(--pf-surface)]"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-ink)]"
                      >
                        Nom complet
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "error-name" : undefined}
                        placeholder="Votre nom ou organisation"
                        className="mt-2 min-h-[44px] w-full border border-[var(--pf-border)] bg-[var(--pf-canvas)] px-3.5 py-2.5 text-sm text-[var(--pf-ink)] placeholder:text-[var(--pf-muted)] focus:border-[var(--pf-ink)]"
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          role="alert"
                          className="mt-1.5 font-mono text-xs text-[var(--pf-accent)]"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-ink)]"
                      >
                        Courriel
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "error-email" : undefined}
                        placeholder="nom@entreprise.ca"
                        className="mt-2 min-h-[44px] w-full border border-[var(--pf-border)] bg-[var(--pf-canvas)] px-3.5 py-2.5 text-sm text-[var(--pf-ink)] placeholder:text-[var(--pf-muted)] focus:border-[var(--pf-ink)]"
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          role="alert"
                          className="mt-1.5 font-mono text-xs text-[var(--pf-accent)]"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-ink)]"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message)
                            setErrors({ ...errors, message: undefined });
                        }}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={
                          errors.message ? "error-message" : undefined
                        }
                        placeholder="Décrivez votre offre de stage, projet ou question..."
                        className="mt-2 min-h-[120px] w-full border border-[var(--pf-border)] bg-[var(--pf-canvas)] px-3.5 py-2.5 text-sm text-[var(--pf-ink)] placeholder:text-[var(--pf-muted)] focus:border-[var(--pf-ink)]"
                      />
                      {errors.message && (
                        <p
                          id="error-message"
                          role="alert"
                          className="mt-1.5 font-mono text-xs text-[var(--pf-accent)]"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 border border-[var(--pf-accent)] bg-[var(--pf-accent)] px-6 py-3 font-mono text-xs font-semibold tracking-wider uppercase text-[var(--pf-accent-text)] transition-colors duration-150 hover:border-[var(--pf-ink)] hover:bg-[var(--pf-ink)] sm:w-auto"
                    >
                      <Send className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Envoyer le message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Swiss Footer */}
      <footer className="bg-[var(--pf-canvas)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[var(--pf-ink)]">
            <ShoppingBag className="h-4 w-4 text-[var(--pf-accent)]" aria-hidden="true" />
            <span className="font-semibold uppercase">{PROFILE.fullName}</span>
            <span className="text-[var(--pf-muted)]" aria-hidden="true">
              ·
            </span>
            <span className="pf-tabular text-[var(--pf-muted)]">
              © 2026 · Gatineau, QC
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs uppercase">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center text-[var(--pf-muted)] transition-colors duration-150 hover:text-[var(--pf-ink)]"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center text-[var(--pf-muted)] transition-colors duration-150 hover:text-[var(--pf-ink)]"
            >
              GitHub
            </a>
            <a
              href="#accueil"
              className="inline-flex min-h-[44px] items-center font-semibold text-[var(--pf-ink)] transition-colors duration-150 hover:text-[var(--pf-accent)]"
            >
              Haut ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
