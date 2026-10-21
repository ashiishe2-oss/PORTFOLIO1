"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Layers, Activity, Cpu, Sparkles, Code2 } from "lucide-react";
import { type FeaturedProject, MICRO_RAG_PIPELINE_STEPS } from "@/data/portfolio";
import FadeIn from "./FadeIn";

const HOVER_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ProjectArchitectureVisual({
  visualType,
}: {
  visualType: FeaturedProject["visualType"];
}) {
  if (visualType === "rag-pipeline") {
    return (
      <div
        className="w-full bg-[#111215] border border-white/10 p-5 sm:p-6 md:p-7"
        aria-label="Illustrative diagram of the Micro-RAG pipeline"
      >
        <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-white/[0.07]">
          <span className="text-xs uppercase tracking-widest text-[#8E9BA8] font-medium">
            Local Architecture Flow · Custom Python Modules (No LangChain)
          </span>
          <span className="text-xs text-[#BBCCD7] font-light">
            Illustrative Pipeline Diagram
          </span>
        </div>

        {/* 7-step pipeline flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5 items-stretch">
          {MICRO_RAG_PIPELINE_STEPS.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <div className="flex-1 h-full flex flex-col justify-between bg-[#0C0C0C] border border-white/10 px-3.5 py-3 transition-colors duration-200 hover:border-[#7621B0]/60">
                <span className="text-[11px] font-mono text-[#8E9BA8] tabular-nums">
                  0{index + 1}
                </span>
                <span className="mt-1.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#D7E2EA] leading-snug">
                  {step}
                </span>
              </div>
              {index < MICRO_RAG_PIPELINE_STEPS.length - 1 && (
                <ArrowRight
                  className="hidden lg:block w-3.5 h-3.5 text-[#646973] shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Module breakdown row */}
        <div className="mt-5 pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#9BA8B5]">
          <div>
            <span className="text-[#D7E2EA] font-medium">Ingestion & Chunking:</span>{" "}
            Extracts PDF pages via <code className="text-[#BBCCD7]">pypdf</code> and segments overlapping windows.
          </div>
          <div>
            <span className="text-[#D7E2EA] font-medium">Vector Retrieval:</span>{" "}
            Computes embeddings with Gemini API and ranks passages via <code className="text-[#BBCCD7]">NumPy</code> cosine similarity.
          </div>
          <div>
            <span className="text-[#D7E2EA] font-medium">Grounded Output:</span>{" "}
            Synthesizes context-grounded answers with source page references in a local web UI.
          </div>
        </div>
      </div>
    );
  }

  const visualMeta: Record<
    Exclude<FeaturedProject["visualType"], "rag-pipeline">,
    {
      label: string;
      architectureSummary: string;
      nodes: { step: string; detail: string }[];
      icon: React.ReactNode;
    }
  > = {
    "pwa-workout": {
      label: "Mobile-First PWA Architecture",
      architectureSummary: "Client UI State · Timer & Rep Engine · Tailwind Build Pipeline",
      icon: <Layers className="w-4 h-4 text-[#BBCCD7]" />,
      nodes: [
        { step: "WORKOUT SESSION UI", detail: "Rep counter & active set tracking" },
        { step: "REST TIMER & CHECK-IN", detail: "Interval pacing & session logs" },
        { step: "PROGRESS ANALYTICS", detail: "Volume & consistency overview" },
      ],
    },
    "health-risk": {
      label: "SIH Concept & Prototype Overview",
      architectureSummary: "36-Facility Dataset (11 Karnataka Districts) · Experimental Strain Index",
      icon: <Activity className="w-4 h-4 text-[#BBCCD7]" />,
      nodes: [
        { step: "CAPACITY & RESOURCE DATA", detail: "36 facilities across 11 districts" },
        { step: "RANDOM FOREST STRAIN MODEL", detail: "Experimental strain risk index" },
        { step: "ROLE-BASED DASHBOARDS", detail: "Public, hospital & authority views" },
      ],
    },
    "aiis-infra": {
      label: "Techflix 24-Hour Hackathon Prototype",
      architectureSummary: "Flask Backend · Supabase Auth & Policies · Random Forest Pipeline",
      icon: <Cpu className="w-4 h-4 text-[#BBCCD7]" />,
      nodes: [
        { step: "SUPABASE + ACCESS POLICIES", detail: "Auth & facility capacity store" },
        { step: "FLASK + PYTHON PIPELINE", detail: "Experimental strain model training" },
        { step: "MULTI-ROLE WEB VIEWS", detail: "Public, hospital & state dashboards" },
      ],
    },
    "cosmic-scroll": {
      label: "Interactive Scrollytelling Pipeline",
      architectureSummary: "Three.js WebGL Scene · Particle Systems · Web Audio Synthesis",
      icon: <Sparkles className="w-4 h-4 text-[#BBCCD7]" />,
      nodes: [
        { step: "SCROLL TIMELINE INPUT", detail: "Normalized viewport progress" },
        { step: "THREE.JS + WEBGL SCENE", detail: "3D camera & particle choreography" },
        { step: "WEB AUDIO INTERACTION", detail: "Dynamic audio cues & narrative sync" },
      ],
    },
    "dsa-python": {
      label: "Algorithmic Practice & CS Fundamentals",
      architectureSummary: "~20–30 LeetCode Problems · ~50% DSA Course Completed",
      icon: <Code2 className="w-4 h-4 text-[#BBCCD7]" />,
      nodes: [
        { step: "ARRAYS & RANGE OPS", detail: "Two-pointer, prefix sums & slicing" },
        { step: "SEARCHING & SORTING", detail: "Binary search variants & orderings" },
        { step: "PYTHON STDLIB", detail: "Collections, complexity & debugging" },
      ],
    },
  };

  const current = visualMeta[visualType];

  return (
    <div
      className="w-full bg-[#111215] border border-white/10 p-4 sm:p-5"
      aria-label={`Illustrative architecture overview for ${current.label}`}
    >
      <div className="flex items-center justify-between gap-2 pb-3 mb-3.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9BA8B5] font-medium">
          {current.icon}
          <span>{current.label}</span>
        </div>
        <span className="text-[11px] text-[#646973]">System Overview</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {current.nodes.map((node, idx) => (
          <div
            key={node.step}
            className="bg-[#0C0C0C] border border-white/[0.08] p-3 flex flex-col justify-between"
          >
            <span className="text-[10px] font-mono text-[#646973] tabular-nums">
              0{idx + 1} · {node.step}
            </span>
            <span className="mt-1 text-xs text-[#D7E2EA] font-normal leading-snug">
              {node.detail}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-[#8E9BA8] tracking-wide">
        {current.architectureSummary}
      </p>
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const isLead = Boolean(project.featuredLead);
  const prefersReducedMotion = useReducedMotion();

  return (
    <FadeIn
      as="article"
      delay={Math.min(index * 0.08, 0.25)}
      className={isLead ? "lg:col-span-2 flex" : "flex"}
    >
      <motion.div
        whileHover={
          prefersReducedMotion
            ? undefined
            : {
                scale: isLead ? 1.01 : 1.018,
                y: -4,
                transition: { duration: 0.2, ease: HOVER_EASE },
              }
        }
        className={`group relative w-full bg-[#111214]/90 border ${
          isLead
            ? "border-white/20 p-6 sm:p-8 md:p-10"
            : "border-white/10 p-6 sm:p-7 flex flex-col justify-between"
        } transition-[border-color,box-shadow,background-color] duration-200 hover:bg-[#141519] hover:border-white/30 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),0_0_28px_-6px_rgba(118,33,176,0.22)] will-change-transform`}
      >
      <div>
        {/* Subtle top metadata line (no pill enclosures) */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#9BA8B5] mb-3">
          <span className="uppercase tracking-widest font-medium text-[#BBCCD7]">
            {project.subtitle}
          </span>
          <span className="text-[#8E9BA8]">{project.statusNote}</span>
        </div>

        {/* Project Title */}
        <h3
          className={`${
            isLead
              ? "text-2xl sm:text-3xl md:text-4xl"
              : "text-xl sm:text-2xl"
          } font-bold tracking-tight text-white leading-snug`}
        >
          {project.title}
        </h3>

        {/* Optional SIH achievement status callout */}
        {project.achievementBanner && (
          <div className="mt-4 px-4 py-3 bg-[#16131D] border border-[#7621B0]/40 text-xs sm:text-sm text-[#D7E2EA]">
            <span className="font-semibold text-white">SIH Status: </span>
            {project.achievementBanner}
          </div>
        )}

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-[#D7E2EA]/90 font-light leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Architecture / System Visual */}
        <div className="mt-6">
          <ProjectArchitectureVisual visualType={project.visualType} />
        </div>

        {/* Implemented Capabilities / Work Highlights */}
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-widest text-[#8E9BA8] font-semibold mb-3">
            {isLead
              ? "Implemented Local Application Capabilities"
              : "Key Implementation & Learning Highlights"}
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-[#D7E2EA]/85 font-light">
            {project.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 leading-relaxed">
                <span className="text-[#BBCCD7] select-none mt-0.5" aria-hidden="true">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Optional Engineering Honesty Note */}
        {project.engineeringNote && (
          <p className="mt-5 pt-4 border-t border-white/[0.07] text-xs sm:text-sm text-[#9BA8B5] font-light leading-relaxed">
            {project.engineeringNote}
          </p>
        )}
      </div>

      {/* Bottom Bar: Technologies (unboxed text with · separators) + Real Links */}
      <div className="mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#BBCCD7]">
          {project.technologies.map((tech, idx) => (
            <React.Fragment key={tech}>
              <span className="font-normal">{tech}</span>
              {idx < project.technologies.length - 1 && (
                <span className="text-[#646973]" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Action Links (Only shown when real URLs exist) */}
        {(project.githubUrl || project.liveDemoUrl) && (
          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBCCD7]"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium text-white contact-cta-button hover:opacity-90 active:opacity-75 transition-opacity duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
      </motion.div>
    </FadeIn>
  );
}

export default ProjectCard;
