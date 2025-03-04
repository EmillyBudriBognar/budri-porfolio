"use client";

import React from 'react';
import Emilly from "../assets/img/me-bg.svg"; 
import Me from "../assets/img/me.svg"; 
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
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
          <span className="text-3xl animate-wave">👋</span> Olá, eu sou a Emilly, mas pode me chamar de{' '}
          <span className="text-purple-600 dark:text-purple-400 text-2xl font-bold transition-colors duration-300">BUDRI</span>
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
        TORNANDO O DIGITAL SIMPLES, HUMANO & INESQUECÍVEL.
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
          alt="Ilustração de Emilly (Personagem Budri), exibindo uma imagem em dispositivos móveis"
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-0 w-full md:hidden"
        />
        <Image
          src={Emilly}
          alt="Ilustração de Emilly (Personagem Budri), exibindo uma imagem em telas maiores"
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-0 w-full hidden md:block"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
