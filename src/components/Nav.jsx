"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import Image from "next/image";
import LogoLight from "../assets/img/logo/black-and-purple.svg";
import LogoDark from "../assets/img/logo/white-and-purple.svg";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { motion, AnimatePresence } from "framer-motion";

const Nav = ({ language, onLanguageChange }) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeroSection, setIsHeroSection] = useState(true); // Estado para verificar se está na hero-section

  // Objeto de tradução
  const translations = {
    pt: {
      home: "INÍCIO",
      services: "SERVIÇOS",
      projects: "PROJETOS",
      about: "SOBRE",
      formation: "FORMAÇÃO",
      contact: "CONTATO",
    },
    es: {
      home: "INICIO",
      services: "SERVICIOS",
      projects: "PROYECTOS",
      about: "SOBRE",
      formation: "FORMACIÓN",
      contact: "CONTACTO",
    },
    en: {
      home: "HOME",
      services: "SERVICES",
      projects: "PROJECTS",
      about: "ABOUT",
      formation: "EDUCATION",
      contact: "CONTACT",
    },
  };

  // Links com base no idioma selecionado
  const Links = [
    { name: translations[language].home, link: "hero-section" },
    { name: translations[language].services, link: "services-section" },
    { name: translations[language].projects, link: "projects-section" },
    { name: translations[language].about, link: "aboutme-section" },
    { name: translations[language].formation, link: "formation-section" },
    { name: translations[language].contact, link: "contact-section" },
  ];

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (open && !document.getElementById("mobile-menu")?.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  // Efeito de rolagem para mostrar/esconder o Nav e verificar se está na hero-section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById("hero-section");

      if (heroSection) {
        const heroSectionHeight = heroSection.offsetHeight;
        setIsHeroSection(currentScrollY < heroSectionHeight);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); 
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${!isHeroSection ? "shadow-lg" : ""}`} 
      style={{
        boxShadow: !isHeroSection
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none",
      }}
    >
      {open && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" />}

      <div className="relative flex items-center justify-between py-4 md:px-10 px-7 transition-colors bg-purple-50 dark:bg-gray-900 text-gray-800 dark:text-white z-50 transition-colors duration-300">
        <div
          onClick={() => scrollToSection("hero-section")}
          className="flex items-center cursor-pointer flex-shrink-0"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          <Image src={LogoLight} alt="Budri Logo" width={40} height={40} className="h-10 w-auto dark:hidden" />
          <Image src={LogoDark} alt="Budri Logo" width={40} height={40} className="h-10 w-auto hidden dark:block" />
          <span className="font-bold text-2xl ml-3 min-w-max">Budri</span>
        </div>

        <ul className="hidden md:flex md:gap-8">
          {Links.map((link) => (
            <li key={link.name} className="text-lg">
              <a
                href={`#${link.link}`}
                className="hover:text-gray-400 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.link);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer md:hidden z-50">
          {open ? <X size={30} /> : <Menu size={30} />}
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              id="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full flex flex-col items-center py-6 bg-purple-50 dark:bg-gray-900 text-gray-800 dark:text-white z-50"
            >
              {Links.map((link) => (
                <li key={link.name} className="text-xl my-2">
                  <motion.a
                    href={`#${link.link}`}
                    className="hover:text-gray-400 duration-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.link);
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
              <div className="flex flex-row items-center gap-4 pt-4 pb-4">
                <ThemeToggle language={language} />
                <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
              </div>
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle language={language} />
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;