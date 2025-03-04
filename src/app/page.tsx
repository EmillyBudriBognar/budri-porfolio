"use client";

import React from "react";
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
  return (
    <>
      <Head>
        <title>Budri - UX Design, Front-End e Mobile | Soluções Criativas</title>
        <meta
          name="description"
          content="Budri é um estúdio criativo especializado em UX Design, Front-End e Mobile. Transformamos ideias em interfaces intuitivas e funcionais. Vamos inovar juntos?"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Budri" />
        <meta property="og:title" content="Budri - UX Design, Front-End e Mobile | Soluções Criativas" />
        <meta property="og:description" content="Estúdio criativo especializado em UX, Front-End e Mobile." />
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
            "description": "Estúdio criativo especializado em UX, Front-End e Mobile.",
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
          <Nav />
        </header>

        {/* Main Content */}
        <main>
          <section id="hero-section" aria-label="Seção principal">
            <HeroSection />
          </section>
          <ScrollingWords />
          <section id="services-section" aria-label="Seção de serviços">
            <ServicesSection />
          </section>
          <section id="projects-section" aria-label="Seção de projetos">
            <ProjectsSection />
          </section>
          <section id="aboutme-section" aria-label="Sobre mim">
            <AboutMeSection />
          </section>
          <section id="formation-section" aria-label="Formação">
            <FormationSection />
          </section>
          <section id="contact-section" aria-label="Contato">
            <ContactSection />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
