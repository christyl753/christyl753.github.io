"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BookMarked, GitFork, Star } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  updated_at: string;
}

interface LanguageStat {
  name: string;
  count: number;
  percent: number;
}

const GITHUB_USERNAME = "christyl753";

export function GitHubStatsSection() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [totalStars, setTotalStars] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadGitHubStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error("GitHub API unavailable");
        }

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        if (cancelled) return;

        const ownRepos = reposData.filter((r) => !r.fork);
        const stars = ownRepos.reduce(
          (sum, r) => sum + (r.stargazers_count || 0),
          0
        );

        const langCounts: Record<string, number> = {};
        for (const repo of ownRepos) {
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        }

        const totalWithLang = Object.values(langCounts).reduce(
          (sum, c) => sum + c,
          0
        );

        const sortedLangs: LanguageStat[] = Object.entries(langCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            count,
            percent:
              totalWithLang > 0 ? Math.round((count / totalWithLang) * 100) : 0,
          }));

        setUser(userData);
        setRepos(ownRepos.slice(0, 4));
        setLanguages(sortedLangs);
        setTotalStars(stars);
        setError(false);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadGitHubStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="github"
      className="border-b border-[var(--tk-divider)] py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="tk-tabular font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
              03 / ACTIVITÉ GITHUB
            </p>
            <h2 className="tk-heading mt-2 text-2xl font-semibold text-[var(--tk-ink)] sm:text-3xl">
              Code public & dépôts.
            </h2>
          </div>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 font-mono text-xs text-[var(--tk-green-ink)] transition-opacity duration-150 hover:opacity-80"
          >
            <span>github.com/{GITHUB_USERNAME}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Summary Metrics (Dark Trace × Kernel cards) */}
        <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
          <div className="rounded-xl bg-[var(--tk-dark)] p-4 text-white sm:p-5">
            <p className="font-mono text-[10px] tracking-wider uppercase text-[var(--tk-dark-muted)]">
              DÉPÔTS PUBLICS
            </p>
            <p className="tk-tabular mt-2 font-mono text-2xl font-semibold text-[var(--tk-mint)] sm:text-3xl">
              {loading ? "—" : error ? "4+" : user?.public_repos ?? 0}
            </p>
          </div>

          <div className="rounded-xl bg-[var(--tk-dark)] p-4 text-white sm:p-5">
            <p className="font-mono text-[10px] tracking-wider uppercase text-[var(--tk-dark-muted)]">
              ÉTOILES
            </p>
            <p className="tk-tabular mt-2 font-mono text-2xl font-semibold text-[var(--tk-mint)] sm:text-3xl">
              {loading ? "—" : error ? "—" : totalStars}
            </p>
          </div>

          <div className="rounded-xl bg-[var(--tk-dark)] p-4 text-white sm:p-5">
            <p className="font-mono text-[10px] tracking-wider uppercase text-[var(--tk-dark-muted)]">
              ABONNÉS
            </p>
            <p className="tk-tabular mt-2 font-mono text-2xl font-semibold text-[var(--tk-mint)] sm:text-3xl">
              {loading ? "—" : error ? "—" : user?.followers ?? 0}
            </p>
          </div>
        </div>

        {/* Languages & Recent Repos */}
        {!loading && !error && (languages.length > 0 || repos.length > 0) && (
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* Top Languages */}
            {languages.length > 0 && (
              <div className="rounded-xl border border-[var(--tk-border)] bg-[var(--tk-surface)] p-5 lg:col-span-5">
                <p className="font-mono text-[10px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
                  LANGAGES DÉTECTÉS
                </p>
                <div className="mt-4 space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className="font-medium text-[var(--tk-ink)]">
                          {lang.name}
                        </span>
                        <span className="tk-tabular text-[var(--tk-muted)]">
                          {lang.percent}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#DCE1D8]">
                        <div
                          className="h-full bg-[#2B543A]"
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recent Repositories */}
            {repos.length > 0 && (
              <div className="rounded-xl border border-[var(--tk-border)] bg-[var(--tk-surface)] p-5 lg:col-span-7">
                <p className="font-mono text-[10px] font-medium tracking-wider uppercase text-[var(--tk-green-ink)]">
                  DÉPÔTS RÉCENTS
                </p>
                <div className="mt-3 divide-y divide-[var(--tk-border)]">
                  {repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-[44px] items-center justify-between gap-3 py-3 transition-colors duration-150 hover:text-[var(--tk-green-ink)]"
                    >
                      <div className="min-w-0">
                        <p className="flex items-center gap-2 font-mono text-xs font-semibold text-[var(--tk-ink)] group-hover:text-[var(--tk-green-ink)]">
                          <BookMarked
                            className="h-3.5 w-3.5 shrink-0 text-[var(--tk-green-ink)]"
                            aria-hidden="true"
                          />
                          <span className="truncate">{repo.name}</span>
                        </p>
                        {repo.description && (
                          <p className="mt-0.5 truncate text-xs text-[var(--tk-muted)]">
                            {repo.description}
                          </p>
                        )}
                      </div>

                      <div className="tk-tabular flex shrink-0 items-center gap-3 font-mono text-[11px] text-[var(--tk-muted)]">
                        {repo.language && <span>{repo.language}</span>}
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3 w-3" aria-hidden="true" />
                          {repo.stargazers_count}
                        </span>
                        <span className="hidden items-center gap-1 sm:inline-flex">
                          <GitFork className="h-3 w-3" aria-hidden="true" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {error && (
          <p className="mt-4 font-mono text-xs text-[var(--tk-muted)]">
            Statistiques en direct temporairement indisponibles — consultez
            directement{" "}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[var(--tk-ink)]"
            >
              github.com/{GITHUB_USERNAME}
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
