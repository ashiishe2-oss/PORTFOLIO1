export interface CharacterBounds {
  charProgress: number;
  start: number;
  end: number;
}

/**
 * Calculates scroll progress thresholds [start, end] for an individual character
 * in the About Me scroll-driven character reveal paragraph.
 *
 * Per specification:
 * - Normalize character progress using index / totalChars.
 * - Calculate start = Math.max(0, charProgress - 0.1).
 * - Calculate end = Math.min(1, charProgress + 0.05).
 */
export function calculateCharacterBounds(index: number, totalChars: number): CharacterBounds {
  if (totalChars <= 0) {
    return { charProgress: 0, start: 0, end: 0.05 };
  }
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  return { charProgress, start, end };
}

export interface WordSegment {
  word: string;
  isSpace: boolean;
  startIndex: number;
  chars: { char: string; globalIndex: number }[];
}

/**
 * Splits a text paragraph into word and whitespace segments while tracking each
 * character's exact global index across the entire string.
 * This prevents word-wrapping issues while allowing character-by-character animation.
 */
export function segmentTextWithCharIndices(text: string): {
  segments: WordSegment[];
  totalChars: number;
} {
  const rawTokens = text.split(/(\s+)/);
  const segments: WordSegment[] = [];
  let currentIndex = 0;

  for (const token of rawTokens) {
    if (!token) continue;
    const isSpace = /^\s+$/.test(token);
    const chars = Array.from(token).map((char, offset) => ({
      char,
      globalIndex: currentIndex + offset,
    }));

    segments.push({
      word: token,
      isSpace,
      startIndex: currentIndex,
      chars,
    });

    currentIndex += chars.length;
  }

  return {
    segments,
    totalChars: currentIndex,
  };
}

export interface GitHubRepoSummary {
  id: number | string;
  name: string;
  description: string;
  htmlUrl: string;
  language: string;
  stargazersCount: number;
  forksCount: number;
  updatedAt: string;
  topics: string[];
}

export interface GitHubActivitySummary {
  username: string;
  profileUrl: string;
  publicReposCount: number;
  totalStars: number;
  totalForks: number;
  topLanguages: { language: string; count: number; percentage: number }[];
  repositories: GitHubRepoSummary[];
  isLive: boolean;
}

/**
 * Computes aggregated GitHub statistics and language distribution from a list
 * of repositories.
 */
export function summarizeGitHubRepositories(
  username: string,
  profileUrl: string,
  rawRepos: GitHubRepoSummary[],
  publicReposCount?: number,
  isLive = true
): GitHubActivitySummary {
  const validRepos = Array.isArray(rawRepos) ? rawRepos : [];

  let totalStars = 0;
  let totalForks = 0;
  const langCounts: Record<string, number> = {};

  for (const repo of validRepos) {
    totalStars += Number(repo.stargazersCount) || 0;
    totalForks += Number(repo.forksCount) || 0;
    const lang = (repo.language || "Python").trim();
    langCounts[lang] = (langCounts[lang] || 0) + 1;
  }

  const totalLangRepos = Object.values(langCounts).reduce((a, b) => a + b, 0) || 1;
  const topLanguages = Object.entries(langCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / totalLangRepos) * 100),
    }));

  // Prioritize -BASIC-RAG-SYSTEM first if present, then sort by most recently updated
  const sortedRepos = [...validRepos].sort((a, b) => {
    const aIsRag = a.name.toLowerCase().includes("rag");
    const bIsRag = b.name.toLowerCase().includes("rag");
    if (aIsRag && !bIsRag) return -1;
    if (!aIsRag && bIsRag) return 1;
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  return {
    username,
    profileUrl,
    publicReposCount:
      typeof publicReposCount === "number" && publicReposCount >= validRepos.length
        ? publicReposCount
        : validRepos.length,
    totalStars,
    totalForks,
    topLanguages,
    repositories: sortedRepos.slice(0, 6),
    isLive,
  };
}

