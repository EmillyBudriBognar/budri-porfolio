"use client";

import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const GalleryCarousel = ({
  images = { en: [], pt: [], es: [] },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const translations = {
    pt: { sectionTitle: "Galeria" },
    es: { sectionTitle: "Galería" },
    en: { sectionTitle: "Gallery" }
  };

  const { sectionTitle } = translations[language] || translations['en'];
  const currentImages = images[language] || images['en'];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => setTouchStartX(e.changedTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.changedTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Impede scroll da página quando modal está aberto
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Restaura scroll da página
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 20 }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  return (
    <>
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

          {currentImages.length > 0 ? (
            <>
              <div className="relative w-full aspect-[1739/881] overflow-hidden rounded-2xl shadow-xl">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div 
                      className="relative w-full h-full group cursor-zoom-in"
                      onClick={() => openModal(currentImages[currentIndex])}
                    >
                      <Image
                        src={currentImages[currentIndex]?.src}
                        alt={currentImages[currentIndex]?.alt}
                        fill
                        className="object-contain"
                        priority={currentIndex === 0}
                        sizes="100vw"
                      />
                      {currentImages[currentIndex]?.caption && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-6"
                        >
                          <p className="text-sm md:text-base">
                            {currentImages[currentIndex].caption}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {currentImages.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-all z-10"
                      aria-label="Previous image"
                    >
                      ❮
                    </motion.button>
                    <motion.button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-all z-10"
                      aria-label="Next image"
                    >
                      ❯
                    </motion.button>
                  </>
                )}
              </div>

              <motion.div
                variants={item}
                className="flex justify-center mt-6 gap-2"
              >
                {currentImages.map((_, index) => (
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
            </>
          ) : (
            <div className="aspect-[1739/881] w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl">
              <p className="text-gray-500 dark:text-gray-400">No images available</p>
            </div>
          )}
        </div>
      </motion.section>

      {/* Modal para visualização ampliada */}
      <AnimatePresence>
        {isModalOpen && modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div 
              className="relative w-full max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={(e) => e.stopPropagation()} // Impede que o clique no modal feche
            >
              <Image
                src={modalImage.src}
                alt={modalImage.alt}
                width={1920}
                height={1080}
                className="object-contain w-full h-full max-h-[90vh]"
                priority
              />
              {modalImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-6">
                  <p className="text-lg md:text-xl">{modalImage.caption}</p>
                </div>
              )}
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCarousel;