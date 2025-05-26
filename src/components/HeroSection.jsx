"use client";

import React from 'react';
import Emilly from "@/assets/img/me-bg.svg"; 
import Me from "@/assets/img/me.svg"; 
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = ({ language = "pt" }) => { 
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
      transition: { duration: 0.6, delay: i * 0.2 }
    }),
  };

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

  const { greeting, name, headline, altMobile, altDesktop } = translations[language];

  return (
    <section className="flex flex-col items-center justify-between min-h-[93.5vh] text-center px-4 relative bg-purple-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-circle z-0"></div>

      <div className="z-10 w-full flex flex-col items-center justify-center flex-1 py-8">
        <div className="w-full max-w-2xl">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            custom={0}
            variants={staggerVariants}
            className="flex flex-col items-center"
          >
            <h3 className="text-gray-700 mt-20 dark:text-gray-200 text-lg transition-colors duration-300">
              <span className="text-3xl font-semibold animate-wave">👋</span>{' '}
              <span className="text-xl font-semibold">{greeting}{' '}</span>
              <span className="text-purple-600 dark:text-purple-400 text-2xl font-bold transition-colors duration-300">
                {name}
              </span>
            </h3>
          </motion.div>

          <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            custom={1}
            variants={staggerVariants}
            className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-200 mt-4 mb-8 transition-colors duration-300"
          >
            {headline}
          </motion.h1>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        custom={2}
        variants={staggerVariants}
        className="relative w-full h-[50vh] md:h-[50vh] z-20 flex items-center justify-center"
      >
        <Image
          src={Me}
          alt={altMobile}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="md:hidden"
          priority
        />
        <Image
          src={Emilly}
          alt={altDesktop}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="hidden md:block"
          priority
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;