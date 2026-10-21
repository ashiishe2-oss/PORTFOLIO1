import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import MoreProjects from "@/sections/MoreProjects";
import OpenSourceActivity from "@/sections/OpenSourceActivity";
import Skills from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Achievements from "@/sections/Achievements";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <MoreProjects />
        <OpenSourceActivity />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
