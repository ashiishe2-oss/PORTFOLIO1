"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full scroll-mt-16 px-5 sm:px-8 md:px-10 py-24 sm:py-28 bg-[#0C0C0C] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <FadeIn>
            <h2
              className="section-heading-gradient font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2.5rem, 8vw, 96px)" }}
            >
              Tools &amp; Technologies
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <p
              className="mt-5 text-[#D7E2EA]/90 font-normal leading-relaxed max-w-2xl text-center text-balance"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
            >
              Tools I&apos;ve used in my projects and fundamentals I&apos;m continuing to develop.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <FadeIn
              key={category.id}
              delay={idx * 0.08}
              y={24}
              className={`bg-[#111214]/90 border border-white/10 p-6 sm:p-7 flex flex-col justify-between ${
                idx === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="pb-4 mb-5 border-b border-white/10">
                  <p className="text-xs uppercase tracking-widest text-[#8E9BA8] font-medium">
                    {category.note}
                  </p>
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col">
                      <span className="text-sm sm:text-base font-semibold text-[#D7E2EA]">
                        {skill.name}
                      </span>
                      <span className="text-xs sm:text-sm text-[#9BA8B5] font-light leading-relaxed">
                        {skill.context}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Honest development workflow note */}
        <FadeIn
          delay={0.25}
          y={20}
          className="mt-10 p-5 sm:p-6 bg-[#111214]/60 border border-white/10 text-xs sm:text-sm text-[#9BA8B5] font-light leading-relaxed text-center max-w-3xl mx-auto"
        >
          <span className="text-[#D7E2EA] font-medium">Workflow Note:</span> Python is my primary programming language where I write and debug programs independently. React, JavaScript, and web technologies are currently at the basics or project-assisted level—I use AI-assisted development tools to accelerate implementation while testing, debugging, and refining the resulting code.
        </FadeIn>
      </div>
    </section>
  );
}

export default Skills;
