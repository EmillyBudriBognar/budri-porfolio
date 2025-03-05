"use client";

import React, { useState } from 'react';
import Emilly from "../assets/img/me-bg.svg"; 
import Me from "../assets/img/me.svg"; 
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = ({ language = "pt" }) => { // Fallback para "pt" caso language seja undefined
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const staggerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 } // Atraso crescente para cada elemento
    }),
  };

  // Textos traduzidos para cada idioma
  const translations = {
    pt: {
      greeting: "Olá, eu sou a Emilly, mas pode me chamar de",
      name: "BUDRI",
      headline: "TORNANDO O DIGITAL SIMPLES, HUMANO & INESQUECÍVEL.",
      altMobile: "Ilustração de Emilly (Personagem Budri)",
      altDesktop: "Ilustração de Emilly (Personagem Budri)",
    },
    es: {
      greeting: "Hola, soy Emilly, pero puedes llamarme",
      name: "BUDRI",
      headline: "HACIENDO LO DIGITAL SIMPLE, HUMANO & INOLVIDABLE.",
      altMobile: "Ilustración de Emilly (Personaje Budri)",
      altDesktop: "Ilustración de Emilly (Personaje Budri)",
    },
    en: {
      greeting: "Hi, I'm Emilly, but you can call me",
      name: "BUDRI",
      headline: "MAKING DIGITAL SIMPLE, HUMAN & UNFORGETTABLE.",
      altMobile: "Illustration of Emilly (Budri Character)",
      altDesktop: "Illustration of Emilly (Budri Character)",
    },
  };

  // Seleciona o texto com base no idioma
  const { greeting, name, headline, altMobile, altDesktop } = translations[language];

  return (
    <section className="flex flex-col items-center justify-start h-[93.5vh] text-center py-10 px-4 relative bg-purple-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-circle z-0"></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        custom={0} // Sem atraso para este elemento
        variants={staggerVariants}
        className="flex flex-col items-center z-10 mt-16"
      >
        <h3 className="text-gray-700 dark:text-gray-200 text-lg transition-colors duration-300">
          <span className="text-3xl animate-wave">👋</span> {greeting}{' '}
          <span className="text-purple-600 dark:text-purple-400 text-2xl font-bold transition-colors duration-300">{name}</span>
        </h3>
      </motion.div>

      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        custom={1} // Pequeno atraso para este elemento
        variants={staggerVariants}
        className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-200 my-6 transition-colors duration-300"
      >
        {headline}
      </motion.h1>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        custom={2} // Maior atraso para este elemento
        variants={staggerVariants}
        className="relative w-full h-[87%] z-20 mb-[-40px]"
      >
        <Image
          src={Me}
          alt={altMobile}
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-0 w-full md:hidden"
        />
        <Image
          src={Emilly}
          alt={altDesktop}
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-0 w-full hidden md:block"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;