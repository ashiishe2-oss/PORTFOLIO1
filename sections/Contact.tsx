"use client";

import React from "react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-16 px-5 sm:px-8 md:px-10 py-28 sm:py-36 bg-[#0C0C0C] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Subtle background glow echoing the Contact button gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] sm:w-[640px] h-[260px] rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <h2
            className="section-heading-gradient font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(2.75rem, 9vw, 110px)" }}
          >
            Let&apos;s build something.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={24}>
          <p
            className="mt-6 sm:mt-8 text-[#D7E2EA] font-normal leading-relaxed max-w-[580px] text-center"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          >
            I&apos;m interested in building useful software, exploring AI engineering, and connecting with people who enjoy turning ideas into real projects.
          </p>
        </FadeIn>

        {/* Pill-shaped Primary CTA reusing original Contact Me button styling */}
        <FadeIn delay={0.2} y={20} className="mt-10 sm:mt-12">
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="inline-flex items-center gap-3 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base hover:opacity-90 active:opacity-75 transition-opacity duration-200 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0C0C0C]"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow:
                "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid #E3E3E3",
              outlineOffset: "-3px",
            }}
          >
            <Mail className="w-4 h-4" />
            <span>GET IN TOUCH</span>
          </a>
        </FadeIn>

        {/* Direct Links: Email, GitHub, LinkedIn, Phone */}
        <FadeIn
          delay={0.3}
          y={20}
          className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-[#BBCCD7]"
        >
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            <Mail className="w-4 h-4 text-[#8E9BA8]" />
            <span>{PROFILE_DATA.email}</span>
          </a>

          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            <Github className="w-4 h-4 text-[#8E9BA8]" />
            <span>github.com/ashiishe2-oss</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            <Linkedin className="w-4 h-4 text-[#8E9BA8]" />
            <span>linkedin.com/in/ashish-p-11bba8384</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="tel:+916363835963"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-150 tabular-nums focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            <Phone className="w-4 h-4 text-[#8E9BA8]" />
            <span>{PROFILE_DATA.phone}</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

export default Contact;
