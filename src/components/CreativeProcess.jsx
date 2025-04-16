"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const CreativeProcess = ({ 
  steps = [], 
  bgColor = 'bg-gray-50',
  darkBgColor = 'bg-gray-800',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100',
  language = 'en'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorSchemes = [
    { light: 'bg-purple-100', dark: 'dark:bg-purple-900', text: 'text-purple-800', darkText: 'dark:text-purple-100' },
    { light: 'bg-pink-100', dark: 'dark:bg-pink-900', text: 'text-pink-800', darkText: 'dark:text-pink-100' },
    { light: 'bg-blue-100', dark: 'dark:bg-blue-900', text: 'text-blue-800', darkText: 'dark:text-blue-100' },
    { light: 'bg-indigo-100', dark: 'dark:bg-indigo-900', text: 'text-indigo-800', darkText: 'dark:text-indigo-100' },
    { light: 'bg-teal-100', dark: 'dark:bg-teal-900', text: 'text-teal-800', darkText: 'dark:text-teal-100' }
  ];

  const translations = {
    pt: { sectionTitle: "Processo Criativo" },
    es: { sectionTitle: "Proceso Creativo" },
    en: { sectionTitle: "Creative Process" }
  };

  const { sectionTitle } = translations[language] || translations.en;
  const displaySteps = steps.length > 0 ? steps : [];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  const card = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={`${bgColor} dark:${darkBgColor} py-16 px-4 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={item}
          className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor} transition-colors duration-300`}
        >
          {sectionTitle}
        </motion.h2>
        
        <motion.div 
          variants={container}
          className="grid md:grid-cols-5 gap-4"
        >
          {displaySteps.map((step, index) => {
            const colorIndex = index % colorSchemes.length;
            const scheme = colorSchemes[colorIndex];

            return (
              <motion.div
                key={index}
                variants={card}
                custom={index}
                className="h-full"
              >
                <ProcessStep 
                  step={step}
                  colorScheme={scheme}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

const ProcessStep = ({ step, colorScheme }) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300 }
      }}
      className={`p-6 rounded-xl ${colorScheme.light} ${colorScheme.dark} text-center cursor-default h-full flex flex-col transition-colors duration-300 shadow-md dark:shadow-none`}
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-2xl ${colorScheme.text} ${colorScheme.darkText} transition-colors duration-300`}
      >
        {step.emoji}
      </motion.div>
      <h3 className={`font-semibold mb-2 ${colorScheme.text} ${colorScheme.darkText} transition-colors duration-300`}>
        {step.title}
      </h3>
      <div className="flex-1 flex flex-col">
        <p className={`text-sm opacity-80 ${colorScheme.text} ${colorScheme.darkText} transition-colors duration-300 flex-grow`}>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CreativeProcess;
