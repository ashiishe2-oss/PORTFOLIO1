"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 h-16 flex items-center justify-between gap-8">
        {/* Left side brand */}
        <a
          href="#home"
          className="text-lg sm:text-xl font-bold tracking-wider text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7] transition-opacity duration-150 hover:opacity-85"
        >
          ASHISH P.
        </a>

        {/* Right-side links (Desktop) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-normal tracking-wide text-[#BBCCD7] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#BBCCD7]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#BBCCD7]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#D7E2EA] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBCCD7] transition-colors duration-150"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#0C0C0C] border-b border-white/10 px-5 sm:px-8 py-5"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-medium tracking-wide text-[#D7E2EA] hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BBCCD7]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
