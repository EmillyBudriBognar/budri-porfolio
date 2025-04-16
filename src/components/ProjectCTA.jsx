"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectCTA = ({
  title,
  subtitle,
  buttonText,
  onClick,
  gradientFrom = 'from-purple-400',
  gradientTo = 'to-pink-500',
  darkGradientFrom = 'from-purple-600',
  darkGradientTo = 'to-pink-700',
  language = 'en'
}) => {
  const translations = {
    pt: {
      title: "Curtiu esse projeto?",
      subtitle: "Vamos conversar sobre como posso ajudar sua marca também.",
      buttonText: "ENTRE EM CONTATO"
    },
    es: {
      title: "¿Te gustó este proyecto?",
      subtitle: "Hablemos sobre cómo puedo ayudar a tu marca también.",
      buttonText: "CONTÁCTAME"
    },
    en: {
      title: "Did you like this project?",
      subtitle: "Let's talk about how I can help your brand too.",
      buttonText: "GET IN TOUCH"
    }
  };

  const {
    title: localizedTitle,
    subtitle: localizedSubtitle,
    buttonText: localizedButton
  } = translations[language] || translations['en'];

  return (
    <section className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} dark:${darkGradientFrom} dark:${darkGradientTo} py-20 px-4`}>
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title || localizedTitle}
        </h2>
        <p className="text-xl mb-8 opacity-90">
          {subtitle || localizedSubtitle}
        </p>
        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 dark:text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
        >
          {buttonText || localizedButton}
        </motion.button>
      </div>
    </section>
  );
};

export default ProjectCTA;
