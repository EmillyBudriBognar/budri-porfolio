"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const GalleryCarousel = ({
  images = [],
  bgColor = 'bg-gray-50',
  darkBgColor = 'dark:bg-gray-800',
  textColor = 'text-gray-800',
  darkTextColor = 'dark:text-gray-100',
  language = 'en'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const translations = {
    pt: {
      sectionTitle: "Galeria"
    },
    es: {
      sectionTitle: "Galería"
    },
    en: {
      sectionTitle: "Gallery"
    }
  };

  const { sectionTitle } = translations[language] || translations['en'];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      nextSlide();
    } else if (distance < -swipeThreshold) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
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

        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full h-full group">
                <Image
                  src={images[currentIndex]?.src}
                  alt={images[currentIndex]?.alt || `Project screenshot ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                {images[currentIndex]?.caption && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-6"
                  >
                    <p className="text-sm md:text-base">{images[currentIndex].caption}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-all z-10"
            aria-label="Previous image"
            style={{ transformOrigin: 'center' }}
          >
            <span className="block">❮</span>
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-all z-10"
            aria-label="Next image"
            style={{ transformOrigin: 'center' }}
          >
            <span className="block">❯</span>
          </motion.button>
        </div>

        <motion.div 
          variants={item}
          className="flex justify-center mt-6 gap-2"
        >
          {images.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GalleryCarousel;
