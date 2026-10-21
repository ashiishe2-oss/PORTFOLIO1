import { NextResponse } from "next/server";
import {
  GITHUB_USERNAME,
  GITHUB_FALLBACK_REPOS,
  PROFILE_DATA,
} from "@/data/portfolio";
import {
  summarizeGitHubRepositories,
  type GitHubRepoSummary,
} from "@/lib/portfolio-logic";

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "Ashish-Portfolio-App",
        },
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
        {
          headers: {
            Accept: "application/vnd.github+json",
            "User-Agent": "Ashish-Portfolio-App",
          },
          next: { revalidate: 3600 },
        }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      const fallback = summarizeGitHubRepositories(
        GITHUB_USERNAME,
        PROFILE_DATA.github,
        GITHUB_FALLBACK_REPOS,
        GITHUB_FALLBACK_REPOS.length,
        false
      );
      return NextResponse.json(fallback);
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const mappedRepos: GitHubRepoSummary[] = Array.isArray(reposData)
      ? reposData
          .filter((r: Record<string, unknown>) => !r.fork)
          .map((r: Record<string, unknown>) => ({
            id: (r.id as number | string) ?? String(r.name),
            name: String(r.name || "repository"),
            description:
              typeof r.description === "string" && r.description.trim().length > 0
                ? r.description
                : r.name === "-BASIC-RAG-SYSTEM"
                  ? "Micro-RAG: Lightweight retrieval-augmented generation system in Python exploring PDF text extraction, overlapping chunking, Gemini embeddings, and NumPy cosine similarity search."
                  : "Public repository by Ashish P. exploring Python and software development.",
            htmlUrl: String(r.html_url || PROFILE_DATA.github),
            language: String(r.language || "Python"),
            stargazersCount: Number(r.stargazers_count) || 0,
            forksCount: Number(r.forks_count) || 0,
            updatedAt: String(r.updated_at || new Date().toISOString()),
            topics: Array.isArray(r.topics) ? (r.topics as string[]) : [],
          }))
      : [];

    const effectiveRepos =
      mappedRepos.length > 0 ? mappedRepos : GITHUB_FALLBACK_REPOS;

    const summary = summarizeGitHubRepositories(
      GITHUB_USERNAME,
      PROFILE_DATA.github,
      effectiveRepos,
      typeof userData?.public_repos === "number"
        ? userData.public_repos
        : effectiveRepos.length,
      true
    );

    return NextResponse.json(summary);
  } catch {
    const fallback = summarizeGitHubRepositories(
      GITHUB_USERNAME,
      PROFILE_DATA.github,
      GITHUB_FALLBACK_REPOS,
      GITHUB_FALLBACK_REPOS.length,
      false
    );
    return NextResponse.json(fallback);
  }
}
