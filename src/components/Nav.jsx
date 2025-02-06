"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Ícones do Lucide React
import Image from "next/image";
import Logo from "../assets/img/logo/black-and-purple.svg";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const Links = [
    { name: "INÍCIO", link: "hero-section" },
    { name: "SERVIÇOS", link: "services-section" },
    { name: "PROJETOS", link: "projects-section" },
    { name: "SOBRE", link: "aboutme-section" },
    { name: "FORMAÇÃO", link: "formation-section" },
    { name: "CONTATO", link: "contact-section" },
  ];

  const [open, setOpen] = useState(false);

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

  // Função para rolar suavemente até a seção
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Fecha o menu ao clicar em um link
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Blur de fundo quando o menu estiver aberto */}
      {open && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity" />}

      <div className="relative flex items-center justify-between py-4 md:px-10 px-7 bg-purple-50 z-50">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("hero-section")}
          className="flex items-center cursor-pointer text-gray-800 flex-shrink-0"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          <Image src={Logo} alt="Budri Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="font-bold text-2xl ml-3 min-w-max">Budri</span>
        </div>

        {/* Menu para telas grandes */}
        <ul className="hidden md:flex md:gap-8">
          {Links.map((link) => (
            <li key={link.name} className="text-lg">
              <a
                href={`#${link.link}`}
                className="text-gray-800 hover:text-gray-400 transition duration-300"
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

        {/* Ícone do menu mobile */}
        <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer md:hidden z-50">
          {open ? <X size={30} className="text-gray-800" /> : <Menu size={30} className="text-gray-800" />}
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {open && (
            <motion.ul
              id="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full flex flex-col items-center py-6 bg-purple-50 z-50"
            >
              {Links.map((link) => (
                <li key={link.name} className="text-xl my-2">
                  <motion.a
                    href={`#${link.link}`}
                    className="text-gray-800 hover:text-gray-400 duration-500"
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

              {/* Toggles dentro do menu em telas pequenas */}
              <div className="flex flex-row items-center gap-4 pt-4 pb-4">
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Toggles no canto direito em telas grandes */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
