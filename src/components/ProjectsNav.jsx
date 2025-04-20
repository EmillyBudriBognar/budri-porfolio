"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import LogoLight from "../assets/img/logo/black-and-purple.svg";
import LogoDark from "../assets/img/logo/white-and-purple.svg";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsNav = ({ language, onLanguageChange, onBackToMain }) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Objeto de tradução
  const translations = {
    pt: {
      back: "Voltar ao site",
      projects: "PROJETOS",
    },
    es: {
      back: "Volver al sitio",
      projects: "PROYECTOS",
    },
    en: {
      back: "Back to site",
      projects: "PROJECTS",
    },
  };

  // Efeito para verificar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para scroll suave até o project-hero
  const scrollToProjects = () => {
    const projectHero = document.getElementById("project-hero");
    if (projectHero) {
      projectHero.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-purple-50/90 dark:bg-gray-900/90 backdrop-blur-sm" : "bg-purple-50 dark:bg-gray-900"
      }`}
    >
      <div className="relative flex items-center justify-between py-4 md:px-10 px-7 text-gray-800 dark:text-white z-50">
        {/* Botão de voltar */}
        <button
          onClick={onBackToMain}
          className="flex items-center group cursor-pointer flex-shrink-0"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          <ChevronLeft 
            size={24} 
            className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" 
          />
          <span className="font-medium text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
            {translations[language].back}
          </span>
        </button>

        {/* Logo central - agora clicável */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 hidden md:block cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="flex items-center group">
            <Image 
              src={LogoLight} 
              alt="Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto dark:hidden group-hover:scale-110 transition-transform duration-300" 
            />
            <Image 
              src={LogoDark} 
              alt="Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto hidden dark:block group-hover:scale-110 transition-transform duration-300" 
            />
            <span className="font-bold text-xl ml-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {translations[language].projects}
            </span>
          </div>
        </div>

        {/* Controles à direita */}
        <div className="flex items-center gap-4">
          <ThemeToggle language={language} />
          <LanguageSelector language={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </nav>
  );
};

export default ProjectsNav;