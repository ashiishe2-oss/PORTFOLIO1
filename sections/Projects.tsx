"use client";

import React from "react";
import { FEATURED_PROJECTS } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full scroll-mt-16 px-5 sm:px-8 md:px-10 py-24 sm:py-28 bg-[#0C0C0C] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <FadeIn>
            <h2
              className="section-heading-gradient font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2.5rem, 8vw, 96px)" }}
            >
              Selected Projects
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <p
              className="mt-5 text-[#D7E2EA]/90 font-normal leading-relaxed max-w-2xl text-center"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
            >
              Projects I&apos;ve explored while learning software development, AI systems, and interactive web technologies.
            </p>
          </FadeIn>
        </div>

        {/* Responsive Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
