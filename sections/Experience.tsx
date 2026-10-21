"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CERTIFICATIONS, PROFILE_DATA } from "@/data/portfolio";
import FadeIn from "@/components/FadeIn";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full scroll-mt-16 px-5 sm:px-8 md:px-10 py-24 sm:py-28 bg-[#0C0C0C] border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <FadeIn>
            <h2
              className="section-heading-gradient font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2.5rem, 8vw, 96px)" }}
            >
              Experience &amp; Education
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* A. Cognifyz IT Solutions Pvt. Ltd. */}
          <FadeIn
            delay={0.05}
            className="bg-[#111214]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-widest text-[#9BA8B5] pb-4 mb-5 border-b border-white/10">
                <span>Internship Experience</span>
                <span className="font-mono tabular-nums text-[#BBCCD7]">
                  2026 · One Month
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Software Development Intern
              </h3>
              <p className="mt-1 text-base sm:text-lg text-[#BBCCD7] font-medium">
                Cognifyz IT Solutions Pvt. Ltd.
              </p>

              <p className="mt-5 text-sm sm:text-base text-[#D7E2EA]/90 font-light leading-relaxed">
                Completed a one-month software development internship and worked through the assigned tasks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between text-xs text-[#8E9BA8]">
              <span>Status: Completed assigned internship tasks</span>
              <span>Selection confirmed via offer letter</span>
            </div>
          </FadeIn>

          {/* B. Education — Dayananda Sagar University */}
          <FadeIn
            delay={0.12}
            className="bg-[#111214]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-widest text-[#9BA8B5] pb-4 mb-5 border-b border-white/10">
                <span>Undergraduate Education</span>
                <span className="font-mono tabular-nums text-[#BBCCD7]">
                  {PROFILE_DATA.education.duration} · {PROFILE_DATA.education.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PROFILE_DATA.education.degree}
              </h3>
              <p className="mt-1 text-base sm:text-lg text-[#BBCCD7] font-medium">
                {PROFILE_DATA.education.institution}
              </p>

              <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-baseline gap-3">
                <span className="text-xs uppercase tracking-widest text-[#9BA8B5] font-semibold">
                  Academic Achievement:
                </span>
                <span className="text-base sm:text-lg font-bold text-white tabular-nums">
                  Year 1 CGPA of {PROFILE_DATA.education.cgpa}
                </span>
              </div>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-widest text-[#8E9BA8] font-semibold mb-2.5">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs sm:text-sm text-[#D7E2EA]/85 font-light">
                  {PROFILE_DATA.education.coursework.map((course, idx) => (
                    <React.Fragment key={course}>
                      <span>{course}</span>
                      {idx < PROFILE_DATA.education.coursework.length - 1 && (
                        <span className="text-[#646973]" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* C. Certifications */}
        <FadeIn
          delay={0.2}
          className="mt-8 bg-[#111214]/90 border border-white/10 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#8E9BA8] font-medium">
                Completed Coursework &amp; Credentials
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight">
                Certifications
              </h3>
            </div>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-[#BBCCD7] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
            >
              <span>View Posts on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#0C0C0C] border border-white/10 p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8E9BA8]">
                    {cert.issuer}
                  </p>
                  <h4 className="mt-2 text-base sm:text-lg font-bold text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <p className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-[#BBCCD7] font-light">
                  {cert.status}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Experience;
