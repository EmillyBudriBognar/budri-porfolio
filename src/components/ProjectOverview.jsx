"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProjectOverview = ({ 
  objective, 
  challenge, 
  solution,
  backgroundColor = 'bg-white',
  darkBackgroundColor = 'bg-gray-900',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100',
  language = 'en'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const translations = {
    pt: {
      sectionTitle: "Sobre o Projeto",
      objectiveTitle: "Objetivo",
      challengeTitle: "Desafio",
      solutionTitle: "Solução",
    },
    es: {
      sectionTitle: "Sobre el Proyecto",
      objectiveTitle: "Objetivo",
      challengeTitle: "Desafío",
      solutionTitle: "Solución",
    },
    en: {
      sectionTitle: "About the Project",
      objectiveTitle: "Objective",
      challengeTitle: "Challenge",
      solutionTitle: "Solution",
    }
  };

  const { 
    sectionTitle,
    objectiveTitle,
    challengeTitle,
    solutionTitle
  } = translations[language];

  const displayObjective = objective || "Define the main project objectives";
  const displayChallenge = challenge || "Describe the challenges faced";
  const displaySolution = solution || "Present the implemented solution";

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5, // 👈 atraso geral
        staggerChildren: 0.25,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardItem = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3, // 👈 atraso progressivo por card
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    })
  };

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={`${backgroundColor} dark:${darkBackgroundColor} py-16 px-4`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          variants={item}
          className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}
        >
          {sectionTitle}
        </motion.h2>
        
        <motion.div 
          variants={container}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={cardItem} custom={0}>
            <OverviewCard 
              emoji="🎯"
              title={objectiveTitle}
              content={displayObjective}
              textColor={textColor}
              darkTextColor={darkTextColor}
            />
          </motion.div>
          
          <motion.div variants={cardItem} custom={1}>
            <OverviewCard 
              emoji="🧩"
              title={challengeTitle}
              content={displayChallenge}
              textColor={textColor}
              darkTextColor={darkTextColor}
            />
          </motion.div>
          
          <motion.div variants={cardItem} custom={2}>
            <OverviewCard 
              emoji="💡"
              title={solutionTitle}
              content={displaySolution}
              textColor={textColor}
              darkTextColor={darkTextColor}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const OverviewCard = ({ emoji, title, content, textColor, darkTextColor }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all ${textColor} dark:${darkTextColor} bg-white dark:bg-gray-800`}
    >
      <motion.span 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-4xl mb-4 block" 
        aria-hidden="true"
      >
        {emoji}
      </motion.span>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="opacity-90">{content}</p>
    </motion.div>
  );
};

export default ProjectOverview;
