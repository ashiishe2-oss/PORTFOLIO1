"use client";

import React from "react";
import { ACHIEVEMENTS_LIST } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full px-5 sm:px-8 md:px-10 py-24 sm:py-28 bg-[#0C0C0C] border-t border-white/[0.06]"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <FadeIn>
            <h2
              className="section-heading-gradient font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2.5rem, 8vw, 92px)" }}
            >
              Achievements &amp; Activities
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-6">
          {ACHIEVEMENTS_LIST.map((item, idx) => (
            <FadeIn
              key={item.id}
              delay={idx * 0.08}
              y={24}
              className="bg-[#111214]/90 border border-white/10 p-6 sm:p-8 transition-colors duration-200 hover:border-white/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-medium">
                  {item.context}
                </span>
              </div>

              <ul className="space-y-2.5 text-sm sm:text-base text-[#D7E2EA]/90 font-light">
                {item.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 leading-relaxed">
                    <span className="text-[#BBCCD7] select-none mt-0.5" aria-hidden="true">
                      —
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
