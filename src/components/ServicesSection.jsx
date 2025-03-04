import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import LogoBlack from "../assets/img/logo/black-and-purple.svg"; 
import LogoWhite from "../assets/img/logo/white-and-purple.svg"; 
import Image from "next/image";
import Services from "@/components/Services";

const ServicesSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detecta quando a seção entra na tela
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorre apenas uma vez
    threshold: 0.2, // Ativa quando 20% do elemento está visível
  });

  useEffect(() => {
    const theme = document.documentElement.classList.contains("dark");
    setIsDarkMode(theme);

    const handleThemeChange = () => {
      const newTheme = document.documentElement.classList.contains("dark");
      setIsDarkMode(newTheme);
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleThemeChange);
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleThemeChange);
    };
  }, []);

  return (
    <section 
      ref={ref} 
      className="bg-purple-50 dark:bg-gray-900 w-full text-gray-800 dark:text-gray-100 py-16 px-6 md:px-12 transition-colors duration-300"
    >
      <div className="mx-auto text-center">
        {/* Logo e Título */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex justify-center items-center">
            <Image
              src={LogoBlack}
              alt="Logo Budri"
              width={40}
              height={40}
              className="w-40 dark:hidden" 
            />
            <Image
              src={LogoWhite}
              alt="Logo Budri"
              width={40}
              height={40}
              className="w-40 hidden dark:block" 
            />
          </div>

          <h2 className="text-xl mt-8 font-semibold">
            A Budri não apenas cria designs, aqui nós criamos{" "}
            <br className="mb-8" />
            <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-5xl font-bold leading-relaxed dark:bg-gradient-to-r dark:from-purple-500 dark:to-blue-500">
              EXPERIÊNCIAS
            </span>
          </h2>
        </motion.div>

        {/* Linha decorativa com delay */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="w-16 h-1 bg-gray-600 dark:bg-gray-200 mx-auto my-6 mb-10 transition-colors duration-300"
        ></motion.div>

        {/* Subtítulo com delay maior */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-xl mb-4"
        >
          Serviços oferecidos que{" "}
          <span className="text-purple-700 dark:text-purple-400 font-bold">ALAVANCARÃO </span>
          os seus negócios.
        </motion.p>

        {/* Cards de serviços */}
          <Services />
      </div>
    </section>
  );
};

export default ServicesSection;
