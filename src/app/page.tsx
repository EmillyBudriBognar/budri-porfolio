"use client";

import React, { useState } from "react";
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
        <title>Budri - Estúdio Criativo</title>
        <meta
          name="description"
          content="A Budri é uma marca especializada em criar soluções digitais que combinam pesquisa sobre a experiência do usuário, design, identidade visual, desenvolvimento mobile e front-end. Focada em oferecer experiências intuitivas e envolventes, a marca transforma ideias em interfaces que unem funcionalidade e estética, sempre alinhadas às necessidades reais de quem interage."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        {/* Navbar */}
        <header>
          <Nav />
        </header>

        {/* Main Content */}
        <main>
          <div id="hero-section">
            <HeroSection/>
          </div>
            <ScrollingWords/>
          <div id="services-section">
            <ServicesSection/>
          </div>
          <div id="projects-section">
            <ProjectsSection/>
          </div>
          <div id="aboutme-section">
            <AboutMeSection/>
          </div>
          <div id="formation-section">
            <FormationSection />
          </div>
          <div id="contact-section">
            <ContactSection/>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
