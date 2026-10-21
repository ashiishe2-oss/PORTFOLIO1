"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Subtle ambient radial glow matching the About Me button palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[680px] h-[320px] sm:h-[420px] rounded-full opacity-15 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, #B600A8 0%, #7621B0 45%, #18011F 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Location & Academic Kicker */}
        <FadeIn delay={0.05} y={20}>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8E9BA8] font-medium mb-4">
            {PROFILE_DATA.location} · B.Tech AIML ({PROFILE_DATA.education.duration})
          </p>
        </FadeIn>

        {/* Main Oversized Heading */}
        <FadeIn delay={0.1} y={35}>
          <h1
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{
              fontSize: "clamp(3.25rem, 13vw, 165px)",
              background: "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {PROFILE_DATA.brandTitle.replace(/\.$/, "")}
          </h1>
        </FadeIn>

        {/* Supporting Headline */}
        <FadeIn delay={0.2} y={25}>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-2xl font-semibold uppercase tracking-[0.2em] text-[#BBCCD7]">
            {PROFILE_DATA.heroHeadline}
          </p>
        </FadeIn>

        {/* Introduction Paragraph */}
        <FadeIn delay={0.3} y={25}>
          <p
            className="mt-6 sm:mt-8 text-[#D7E2EA] font-normal leading-relaxed max-w-[600px] text-center"
            style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
          >
            {PROFILE_DATA.heroIntro}
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn
          delay={0.4}
          y={20}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-6"
        >
          <a
            href="#projects"
            className="contact-cta-button px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base hover:opacity-90 active:opacity-75 transition-opacity duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            EXPLORE PROJECTS
          </a>

          <a
            href="#contact"
            className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-[#D7E2EA] hover:text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base border border-white/25 hover:border-white/50 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            CONTACT ME
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
