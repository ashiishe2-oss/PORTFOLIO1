"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ABOUT_DECORATIVE_IMAGES, PROFILE_DATA } from "@/data/portfolio";
import CharacterReveal from "@/components/CharacterReveal";

const EASE_CURVE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function About() {
  const prefersReducedMotion = useReducedMotion();
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="about"
      className="relative w-full min-h-screen scroll-mt-16 flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Four absolutely positioned decorative corner images at z-0 */}
      {ABOUT_DECORATIVE_IMAGES.map((img) => {
        const hasFailed = Boolean(failedImages[img.id]);
        return (
          <motion.div
            key={img.id}
            initial={
              prefersReducedMotion
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: img.initialX, y: img.initialY }
            }
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "50px", amount: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : img.delay,
              duration: prefersReducedMotion ? 0 : img.duration,
              ease: EASE_CURVE,
            }}
            className={`pointer-events-none select-none absolute z-0 ${img.positionClass} max-[380px]:opacity-35 sm:opacity-100`}
          >
            {!hasFailed ? (
              <img
                src={img.url}
                alt={img.alt}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFailedImages((prev) => ({ ...prev, [img.id]: true }))
                }
                className={`${img.sizeClass} object-contain`}
              />
            ) : (
              <div
                aria-label={`${img.alt} unavailable`}
                className={`${img.sizeClass} aspect-square rounded-full border border-white/10 bg-white/[0.02]`}
              />
            )}
          </motion.div>
        );
      })}

      {/* Main content at relative z-10 max-w-4xl, centered horizontally */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        {/* F. Main heading: "About me" */}
        <motion.h2
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px", amount: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.7,
            ease: EASE_CURVE,
          }}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            background: "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About me
        </motion.h2>

        {/* G. Personalized animated paragraph */}
        <CharacterReveal
          text={PROFILE_DATA.aboutParagraph}
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
          }}
        />

        {/* H. Contact Me button */}
        <motion.a
          href="#contact"
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px", amount: 0 }}
          transition={{
            delay: prefersReducedMotion ? 0 : 0.3,
            duration: prefersReducedMotion ? 0 : 0.7,
            ease: EASE_CURVE,
          }}
          className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base hover:opacity-90 active:opacity-75 transition-opacity duration-200 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0C0C0C]"
          style={{
            background:
              "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
            boxShadow:
              "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
            outline: "2px solid #E3E3E3",
            outlineOffset: "-3px",
          }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
}

export default About;
