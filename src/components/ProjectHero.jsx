"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const ProjectHero = ({ 
  title, 
  subtitle, 
  image, 
  darkImage,
  gradientFrom = 'from-purple-400', 
  gradientTo = 'to-pink-500',
  darkGradientFrom = 'dark:from-purple-600',
  darkGradientTo = 'dark:to-pink-700',
  colorText = 'text-gray-900',
  darkColorText = 'dark:text-gray-100',
  language = 'en' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3
  });

  const translations = {
    pt: {
      defaultTitle: "Meus Projetos",
      defaultSubtitle: "Explore meus trabalhos e projetos recentes"
    },
    es: {
      defaultTitle: "Mis Proyectos",
      defaultSubtitle: "Explora mis trabajos y proyectos recientes"
    },
    en: {
      defaultTitle: "My Projects",
      defaultSubtitle: "Explore my recent works and projects"
    }
  };

  const { defaultTitle, defaultSubtitle } = translations[language];
  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const textItem = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageItem = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      rotate: -5
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.4
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} ${darkGradientFrom} ${darkGradientTo} mt-[70px] md:py-32 px-4 pt-[calc(70px+1rem)] overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <motion.div className="md:w-1/2 space-y-6">
          <motion.h1 
            variants={textItem}
            className={`text-4xl md:text-6xl font-bold ${colorText} ${darkColorText}`}
          >
            {displayTitle}
          </motion.h1>
          <motion.p 
            variants={textItem}
            className={`text-xl md:text-2xl font-light opacity-90 ${colorText} ${darkColorText}`}
          >
            {displaySubtitle}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center pb-10 md:pb-0"
          variants={imageItem}
        >
          <div className="relative w-full aspect-video">
            <div className="block dark:hidden">
              <Image 
                src={image}
                alt={displayTitle}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {darkImage && (
              <div className="hidden dark:block">
                <Image 
                  src={darkImage}
                  alt={displayTitle}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectHero;