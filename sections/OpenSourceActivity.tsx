"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  GitBranch,
  Star,
  Code2,
  ArrowUpRight,
  FolderGit2,
  RefreshCw,
} from "lucide-react";
import {
  GITHUB_USERNAME,
  GITHUB_FALLBACK_REPOS,
  OPEN_SOURCE_PILLARS,
  PROFILE_DATA,
} from "@/data/portfolio";
import {
  summarizeGitHubRepositories,
  type GitHubActivitySummary,
} from "@/lib/portfolio-logic";
import FadeIn from "@/components/FadeIn";

const HOVER_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const INITIAL_SUMMARY: GitHubActivitySummary = summarizeGitHubRepositories(
  GITHUB_USERNAME,
  PROFILE_DATA.github,
  GITHUB_FALLBACK_REPOS,
  GITHUB_FALLBACK_REPOS.length,
  false
);

function formatUpdatedDate(isoDate: string): string {
  try {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "Recently updated";
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recently updated";
  }
}

export function OpenSourceActivity() {
  const prefersReducedMotion = useReducedMotion();
  const [activity, setActivity] = useState<GitHubActivitySummary>(INITIAL_SUMMARY);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadGitHubData = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/github");
      if (response.ok) {
        const data: GitHubActivitySummary = await response.json();
        if (data && Array.isArray(data.repositories)) {
          setActivity(data);
        }
      }
    } catch {
      // Keep deterministic fallback data on network error
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadGitHubData();
  }, [loadGitHubData]);

  return (
    <section
      id="open-source"
      className="relative w-full scroll-mt-16 px-5 sm:px-8 md:px-10 py-24 sm:py-28 bg-[#0C0C0C] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <FadeIn>
            <h2
              className="section-heading-gradient font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2.5rem, 8vw, 96px)" }}
            >
              Open Source Activity
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <p
              className="mt-5 text-[#D7E2EA]/90 font-normal leading-relaxed max-w-2xl text-center text-balance"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
            >
              Public GitHub repositories, code statistics, and ongoing engineering contributions from{" "}
              <span className="text-white font-medium">@{GITHUB_USERNAME}</span>.
            </p>
          </FadeIn>
        </div>

        {/* Top Overview Panel: Profile Stats + Language Breakdown */}
        <FadeIn
          delay={0.12}
          className="bg-[#111214]/90 border border-white/15 p-6 sm:p-8 md:p-10 mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-white/10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#16131D] border border-[#7621B0]/50 flex items-center justify-center shrink-0">
                <Github className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#9BA8B5]">
                  <span>GitHub REST API Integration</span>
                  <span aria-hidden="true">·</span>
                  <span>
                    {isLoading
                      ? "Syncing repository metrics..."
                      : activity.isLive
                        ? "Live GitHub Profile Data"
                        : "Verified Repository Snapshot"}
                  </span>
                </div>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  github.com/{activity.username}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={loadGitHubData}
                disabled={isLoading}
                aria-label="Refresh GitHub statistics"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widest font-medium text-[#BBCCD7] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 transition-colors duration-200 whitespace-nowrap shrink-0 disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBCCD7]"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`}
                />
                <span>Refresh Stats</span>
              </button>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium text-white contact-cta-button hover:opacity-90 active:opacity-75 transition-opacity duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Open GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4-Column Quantitative Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-7 border-b border-white/10">
            <div className="bg-[#0C0C0C] border border-white/10 p-4 sm:p-5">
              <span className="text-xs uppercase tracking-widest text-[#8E9BA8] block">
                Public Repositories
              </span>
              <span className="mt-2 text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums block">
                {activity.publicReposCount}
              </span>
              <span className="mt-1 text-xs text-[#9BA8B5] block">
                Active codebase &amp; experiments
              </span>
            </div>

            <div className="bg-[#0C0C0C] border border-white/10 p-4 sm:p-5">
              <span className="text-xs uppercase tracking-widest text-[#8E9BA8] block">
                Primary Language
              </span>
              <span className="mt-2 text-2xl sm:text-3xl font-bold text-white block">
                {activity.topLanguages[0]?.language || "Python"}
              </span>
              <span className="mt-1 text-xs text-[#9BA8B5] block">
                Core AI, RAG &amp; backend scripts
              </span>
            </div>

            <div className="bg-[#0C0C0C] border border-white/10 p-4 sm:p-5">
              <span className="text-xs uppercase tracking-widest text-[#8E9BA8] block">
                Leading Repository
              </span>
              <span className="mt-2 text-lg sm:text-xl font-bold text-white truncate block">
                -BASIC-RAG-SYSTEM
              </span>
              <span className="mt-1 text-xs text-[#9BA8B5] block">
                Custom Python Micro-RAG
              </span>
            </div>

            <div className="bg-[#0C0C0C] border border-white/10 p-4 sm:p-5">
              <span className="text-xs uppercase tracking-widest text-[#8E9BA8] block">
                Repository Stars &amp; Forks
              </span>
              <span className="mt-2 text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums block">
                {activity.totalStars} Stars · {activity.totalForks} Forks
              </span>
              <span className="mt-1 text-xs text-[#9BA8B5] block">
                Across public repositories
              </span>
            </div>
          </div>

          {/* Language Distribution & Contribution Focus */}
          <div className="pt-7 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {OPEN_SOURCE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-[#0C0C0C] border border-white/[0.08] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#BBCCD7] font-mono tabular-nums mb-2">
                    <span className="uppercase tracking-wider text-[#8E9BA8]">
                      Contribution Focus
                    </span>
                    <span>{pillar.metric}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Repository Visual Cards Grid */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xs sm:text-sm uppercase tracking-widest text-[#8E9BA8] font-semibold">
            Public Repositories &amp; Code Contributions
          </h3>
          <span className="text-xs text-[#646973] font-mono tabular-nums">
            Showing {activity.repositories.length} repositories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activity.repositories.map((repo, index) => (
            <FadeIn
              key={repo.id}
              delay={Math.min(index * 0.07, 0.25)}
              y={20}
              className="flex"
            >
              <motion.article
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.018,
                        y: -4,
                        transition: { duration: 0.2, ease: HOVER_EASE },
                      }
                }
                className="w-full bg-[#111214]/90 border border-white/10 p-6 flex flex-col justify-between transition-[border-color,box-shadow,background-color] duration-200 hover:bg-[#141519] hover:border-white/30 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),0_0_28px_-6px_rgba(118,33,176,0.22)] will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#8E9BA8] mb-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[#BBCCD7]">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#8E9BA8]" />
                      <span>{repo.language || "Python"}</span>
                    </span>
                    <span className="font-mono tabular-nums">
                      {formatUpdatedDate(repo.updatedAt)}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-tight break-words">
                    {repo.name}
                  </h4>

                  <p className="mt-3 text-xs sm:text-sm text-[#D7E2EA]/85 font-light leading-relaxed">
                    {repo.description}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#9BA8B5]">
                      {repo.topics.map((topic, i) => (
                        <React.Fragment key={topic}>
                          <span>#{topic}</span>
                          {i < repo.topics.length - 1 && (
                            <span className="text-[#646973]" aria-hidden="true">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-[#9BA8B5] font-mono tabular-nums">
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#BBCCD7]" />
                      <span>{repo.stargazersCount}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitBranch className="w-3.5 h-3.5 text-[#BBCCD7]" />
                      <span>{repo.forksCount}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-[#BBCCD7]" />
                      <span>Source</span>
                    </span>
                  </div>

                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-white hover:text-[#BBCCD7] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBCCD7]"
                  >
                    <span>Inspect Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenSourceActivity;
