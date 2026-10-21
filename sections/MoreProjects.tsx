"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MORE_PROJECTS } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

const HOVER_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function MoreProjects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="more-projects"
      aria-labelledby="more-projects-heading"
      className="relative w-full px-5 sm:px-8 md:px-10 py-16 sm:py-20 bg-[#0C0C0C]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <h2
              id="more-projects-heading"
              className="section-heading-gradient font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 48px)" }}
            >
              More Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9BA8B5] font-light">
            Early Python foundations & command-line practice projects
          </p>
        </FadeIn>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MORE_PROJECTS.map((item, idx) => (
            <FadeIn
              key={item.id}
              delay={idx * 0.06}
              y={20}
              className="flex"
            >
              <motion.div
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.02,
                        y: -3,
                        transition: { duration: 0.2, ease: HOVER_EASE },
                      }
                }
                className="w-full bg-[#111214]/80 border border-white/10 p-5 flex flex-col justify-between transition-[border-color,box-shadow,background-color] duration-200 hover:bg-[#141519] hover:border-white/25 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.85),0_0_20px_-6px_rgba(118,33,176,0.18)] will-change-transform"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-[#8E9BA8] font-medium">
                    {item.category} · Python
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MoreProjects;
