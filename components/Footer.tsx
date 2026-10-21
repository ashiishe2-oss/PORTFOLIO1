"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 px-5 sm:px-8 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left">
          <span className="text-base font-bold tracking-wider text-white">
            ASHISH P.
          </span>
          <span className="hidden sm:inline text-[#646973]" aria-hidden="true">
            ·
          </span>
          <span className="text-sm text-[#9BA8B5] font-light">
            Built with curiosity and code.
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#BBCCD7]">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            GitHub
          </a>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            LinkedIn
          </a>
          <a
            href="tel:+916363835963"
            className="hover:text-white transition-colors duration-150 tabular-nums focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
          >
            {PROFILE_DATA.phone}
          </a>
          <span className="text-[#646973] tabular-nums">
            © {currentYear} Ashish P.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
