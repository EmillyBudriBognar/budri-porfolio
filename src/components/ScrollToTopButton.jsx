"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <a
        href="#hero-sectio" // Isso vai rolar até a seção com id="hero-section"
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
        aria-label="Voltar ao início"
      >
        <motion.div
          animate={{ y: [0, -5, 0, -5, 0] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <ArrowUp size={24} />
        </motion.div>
      </a>
    )
  );
};

export default ScrollToTopButton;
