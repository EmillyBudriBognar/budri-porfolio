"use client";

import React, { useState, useEffect } from "react";
import "@/app/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ScrollingWords from "@/components/ui/ScrollingWords";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FormationSection from "@/components/sections/FormationSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
export default function Home() {
    // Language is managed globally by Layout provider, but we might need it for some hydration checks if any
    return (
        <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
            <header className="w-full">
                <Nav />
            </header>

            <main className="flex-grow w-full">
                <section id="hero-section" aria-label="Main section" className="w-full">
                    <HeroSection />
                </section>

                <ScrollingWords />

                <section id="services-section" aria-label="Services section" className="w-full">
                    <ServicesSection />
                </section>

                <section id="projects-section" aria-label="Projects section" className="w-full">
                    <ProjectsSection />
                </section>

                <section id="aboutme-section" aria-label="About me" className="w-full">
                    <AboutMeSection />
                </section>

                <section id="experience-section" aria-label="Experience" className="w-full">
                    <ExperienceSection />
                </section>

                <section id="formation-section" aria-label="Formation" className="w-full">
                    <FormationSection />
                </section>

                <section id="contact-section" aria-label="Contact" className="w-full">
                    <ContactSection />
                </section>
            </main>

            <Footer className="w-full" />
        </div>
    );
}
