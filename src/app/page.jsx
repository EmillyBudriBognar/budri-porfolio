"use client";

import React, { useState } from "react"; // Adicione useState
import "@/app/globals.css";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScrollingWords from "@/components/ScrollingWords";
import ServicesSection from "@/components/ServicesSection";
import AboutMeSection from "@/components/AboutMeSection";
import FormationSection from "@/components/FormationSection";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";

export default function Home() {
  // Estado para gerenciar o idioma (iniciando em inglês)
  const [language, setLanguage] = useState("en");

  // Função para atualizar o idioma
  const handleLanguageChange = (code) => {
    setLanguage(code);
  };

  return (
    <>
      <Head>
        <title>Budri - UX Design, Front-End e Mobile | Creative Solutions</title>
        <meta
          name="description"
          content="Budri is a creative studio specializing in UX Design, Front-End, and Mobile. We transform ideas into intuitive and functional interfaces. Let's innovate together?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Budri" />
        <meta property="og:title" content="Budri - UX Design, Front-End e Mobile | Creative Solutions" />
        <meta property="og:description" content="Creative studio specializing in UX, Front-End, and Mobile." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.budri.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Budri",
            "url": "https://www.budri.com.br",
            "description": "Creative studio specializing in UX, Front-End, and Mobile.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-99998-6102",
              "contactType": "customer service",
              "email": "emillybudribognar@gmail.com",
              "availableLanguage": ["Portuguese", "English", "Spanish"],
              "areaServed": "BR",
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "contactPage": "https://www.budri.com.br/"
            }
          })}
        </script>
      </Head>

      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        {/* Navbar */}
        <header>
          <Nav language={language} onLanguageChange={handleLanguageChange} />
        </header>

        {/* Main Content */}
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

        {/* Footer */}
        <Footer language={language} />
      </div>
    </>
  );
}