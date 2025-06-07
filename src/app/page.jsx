"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Verificar o idioma do navegador quando o componente montar
    const browserLanguage = navigator.language || navigator.userLanguage;

    // Simplificando para pegar apenas os dois primeiros caracteres (ex: 'pt-BR' -> 'pt')
    const primaryLanguage = browserLanguage.split("-")[0];

    // Definir o idioma padrão com base no navegador (apenas se for um idioma suportado)
    if (primaryLanguage === "pt" || primaryLanguage === "es" || primaryLanguage === "fr") {
      setLanguage(primaryLanguage);
    } else {
      // Padrão para inglês se não for um dos idiomas suportados
      setLanguage("en");
    }
  }, []);

  const handleLanguageChange = (code) => {
    setLanguage(code);
  };

  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <header className="w-full">
        <Nav language={language} onLanguageChange={handleLanguageChange} />
      </header>

      <main className="flex-grow w-full">
        <section id="hero-section" aria-label="Main section" className="w-full">
          <HeroSection language={language} />
        </section>

        <ScrollingWords language={language} />

        <section id="services-section" aria-label="Services section" className="w-full">
          <ServicesSection language={language} />
        </section>

        <section id="projects-section" aria-label="Projects section" className="w-full">
          <ProjectsSection language={language} />
        </section>

        <section id="aboutme-section" aria-label="About me" className="w-full">
          <AboutMeSection language={language} />
        </section>

        <section id="formation-section" aria-label="Formation" className="w-full">
          <FormationSection language={language} />
        </section>

        <section id="contact-section" aria-label="Contact" className="w-full">
          <ContactSection language={language} />
        </section>
      </main>

      <Footer language={language} className="w-full" />
    </div>
  );
}
