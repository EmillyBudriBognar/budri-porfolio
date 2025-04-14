"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScrollingWords from "@/components/ScrollingWords";
import ServicesSection from "@/components/ServicesSection";
import AboutMeSection from "@/components/AboutMeSection";
import FormationSection from "@/components/FormationSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (code) => {
    setLanguage(code);
  };

  return (
    <div className="min-h-screen">
      <header>
        <Nav language={language} onLanguageChange={handleLanguageChange} />
      </header>

      <main>
        <section id="hero-section" aria-label="Main section">
          <HeroSection language={language} />
        </section>
        <ScrollingWords language={language} />
        <section id="services-section" aria-label="Services section">
          <ServicesSection language={language} />
        </section>
        <section id="projects-section" aria-label="Projects section">
          <ProjectsSection language={language} />
        </section>
        <section id="aboutme-section" aria-label="About me">
          <AboutMeSection language={language} />
        </section>
        <section id="formation-section" aria-label="Formation">
          <FormationSection language={language} />
        </section>
        <section id="contact-section" aria-label="Contact">
          <ContactSection language={language} />
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}