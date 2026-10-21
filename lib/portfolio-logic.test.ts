import test from "node:test";
import assert from "node:assert/strict";
import {
  calculateCharacterBounds,
  segmentTextWithCharIndices,
  summarizeGitHubRepositories,
} from "./portfolio-logic.ts";
import {
  PROFILE_DATA,
  ABOUT_DECORATIVE_IMAGES,
  FEATURED_PROJECTS,
  CERTIFICATIONS,
  GITHUB_FALLBACK_REPOS,
  GITHUB_USERNAME,
} from "../data/portfolio.ts";

test("calculateCharacterBounds computes exact start and end ranges per spec", () => {
  const first = calculateCharacterBounds(0, 100);
  assert.equal(first.charProgress, 0);
  assert.equal(first.start, 0);
  assert.ok(Math.abs(first.end - 0.05) < 1e-9);

  const mid = calculateCharacterBounds(50, 100);
  assert.equal(mid.charProgress, 0.5);
  assert.ok(Math.abs(mid.start - 0.4) < 1e-9);
  assert.ok(Math.abs(mid.end - 0.55) < 1e-9);

  const last = calculateCharacterBounds(99, 100);
  assert.equal(last.charProgress, 0.99);
  assert.ok(Math.abs(last.start - 0.89) < 1e-9);
  assert.equal(last.end, 1);
});

test("segmentTextWithCharIndices preserves exact character count and order", () => {
  const text = PROFILE_DATA.aboutParagraph;
  const { segments, totalChars } = segmentTextWithCharIndices(text);

  assert.equal(totalChars, text.length);

  const reconstructed = segments
    .flatMap((seg) => seg.chars.map((c) => c.char))
    .join("");
  assert.equal(reconstructed, text);

  // Verify global indices are strictly sequential from 0 to totalChars - 1
  const allIndices = segments.flatMap((seg) => seg.chars.map((c) => c.globalIndex));
  assert.equal(allIndices.length, text.length);
  allIndices.forEach((idx, expected) => {
    assert.equal(idx, expected);
  });
});

test("About Me decorative images match the 4 exact Figma URLs and animations", () => {
  assert.equal(ABOUT_DECORATIVE_IMAGES.length, 4);
  assert.equal(
    ABOUT_DECORATIVE_IMAGES[0].url,
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
  );
  assert.equal(
    ABOUT_DECORATIVE_IMAGES[1].url,
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
  );
  assert.equal(
    ABOUT_DECORATIVE_IMAGES[2].url,
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
  );
  assert.equal(
    ABOUT_DECORATIVE_IMAGES[3].url,
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
  );
});

test("Featured projects lead with Micro-RAG and preserve accurate statuses", () => {
  assert.equal(FEATURED_PROJECTS[0].id, "micro-rag");
  assert.equal(FEATURED_PROJECTS[0].featuredLead, true);
  assert.equal(
    FEATURED_PROJECTS[0].githubUrl,
    "https://github.com/ashiishe2-oss/-BASIC-RAG-SYSTEM"
  );
  assert.equal(FEATURED_PROJECTS[0].liveDemoUrl, undefined);
  assert.equal(CERTIFICATIONS.length, 4);
});

test("summarizeGitHubRepositories aggregates stars, languages, and prioritizes RAG repo", () => {
  const summary = summarizeGitHubRepositories(
    GITHUB_USERNAME,
    PROFILE_DATA.github,
    GITHUB_FALLBACK_REPOS,
    5,
    true
  );

  assert.equal(summary.username, "ashiishe2-oss");
  assert.equal(summary.publicReposCount, 5);
  assert.equal(summary.repositories[0].name, "-BASIC-RAG-SYSTEM");
  assert.equal(summary.topLanguages[0].language, "Python");
});
