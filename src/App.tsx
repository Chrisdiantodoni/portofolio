"use client";

import { useEffect } from "react";
import { ThemeProvider } from "./components/theme-provider";

import { Toaster } from "./components/ui/sonner";
import { AnimatePresence } from "framer-motion";
import "./index.css";
import { LanguageProvider } from "./context/language-context";
import { AboutSection } from "./components/about-section";
import { HeroSection } from "./components/hero-section";
import { SkillsCarousel } from "./components/skills-section";
import { ProjectsSection } from "./components/project-section";
import { ExperienceSection } from "./components/experience-section";
import { ContactSection } from "./components/contact-section";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  // Add smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const element = document.getElementById(id || "");
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <LanguageProvider>
        <AnimatePresence>
          <div className="min-h-screen bg-background ">
            <Header />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsCarousel />
              <ProjectsSection />
              <ExperienceSection />
              <ContactSection />
            </main>
            <Footer />
            <Toaster />
          </div>
        </AnimatePresence>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
