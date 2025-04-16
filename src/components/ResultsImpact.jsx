"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ResultsImpact = ({ 
  metrics = [], 
  feedback,
  beforeAfterImages,
  bgColor = 'bg-gray-50',
  darkBgColor = 'dark:bg-gray-900',
  textColor = 'text-gray-800',
  darkTextColor = 'dark:text-gray-100',
  language = 'en'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Translation object
  const translations = {
    pt: {
      sectionTitle: "Resultados & Impacto",
      metricsTitle: "Métricas",
      feedbackTitle: "Feedback",
      beforeTitle: "Antes",
      afterTitle: "Depois"
    },
    es: {
      sectionTitle: "Resultados & Impacto",
      metricsTitle: "Métricas",
      feedbackTitle: "Comentarios",
      beforeTitle: "Antes",
      afterTitle: "Después"
    },
    en: {
      sectionTitle: "Results & Impact",
      metricsTitle: "Metrics",
      feedbackTitle: "Feedback",
      beforeTitle: "Before",
      afterTitle: "After"
    }
  };

  const { 
    sectionTitle, 
    metricsTitle, 
    feedbackTitle, 
    beforeTitle, 
    afterTitle
  } = translations[language];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
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

  const card = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const imageComparison = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={`${bgColor} ${darkBgColor} py-16 px-4`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={item}
          className={`text-3xl font-bold mb-12 text-center ${textColor} ${darkTextColor}`}
        >
          {sectionTitle}
        </motion.h2>
        
        {metrics.length > 0 && (
          <>
            <motion.h3 
              variants={item}
              className={`text-xl font-semibold mb-6 text-center ${textColor} ${darkTextColor}`}
            >
              {metricsTitle}
            </motion.h3>
            <motion.div 
              variants={container}
              className="flex flex-wrap justify-center gap-8 mb-16"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={card}
                  custom={index}
                  className="w-full sm:w-auto md:w-1/3 lg:w-1/4 min-w-[250px] max-w-[300px]"
                >
                  <MetricCard 
                    value={metric.value}
                    description={metric.description}
                    icon={metric.icon}
                    textColor={textColor}
                    darkTextColor={darkTextColor}
                  />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
        
        {feedback && (
          <>
            <motion.h3 
              variants={item}
              className={`text-xl font-semibold mb-6 text-center ${textColor} ${darkTextColor}`}
            >
              {feedbackTitle}
            </motion.h3>
            <motion.div 
              variants={item}
              className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 mb-16 max-w-3xl mx-auto"
            >
              <blockquote className={`text-xl italic text-center ${textColor} ${darkTextColor}`}>
                "{feedback}"
              </blockquote>
            </motion.div>
          </>
        )}
        
        {beforeAfterImages && (
          <>
            <motion.h3 
              variants={item}
              className={`text-xl font-semibold mb-6 text-center ${textColor} ${darkTextColor}`}
            >
              {beforeTitle} & {afterTitle}
            </motion.h3>
            <motion.div 
              variants={container}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              <motion.div variants={imageComparison}>
                <h4 className={`text-lg font-medium mb-4 text-center ${textColor} ${darkTextColor}`}>
                  {beforeTitle}
                </h4>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl shadow-md w-full aspect-video overflow-hidden"
                >
                  <Image 
                    src={beforeAfterImages.before} 
                    alt={beforeTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={imageComparison}>
                <h4 className={`text-lg font-medium mb-4 text-center ${textColor} ${darkTextColor}`}>
                  {afterTitle}
                </h4>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl shadow-md w-full aspect-video overflow-hidden"
                >
                  <Image 
                    src={beforeAfterImages.after} 
                    alt={afterTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </motion.section>
  );
};

const MetricCard = ({ value, description, icon, textColor, darkTextColor }) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center h-full"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 500,
          damping: 15
        }}
        className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400"
      >
        {value}
      </motion.div>
      <p className={`text-sm opacity-80 ${textColor} ${darkTextColor}`}>{description}</p>
      <div className="text-2xl mt-4">{icon}</div>
    </motion.div>
  );
};

export default ResultsImpact;