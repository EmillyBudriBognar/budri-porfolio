"use client";

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight, RotateCcw, ZoomIn, X } from 'lucide-react';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const translations = {
    pt: { sectionTitle: "Galeria" },
    es: { sectionTitle: "Galería" },
    en: { sectionTitle: "Gallery" }
  };

  const { sectionTitle } = translations[language] || translations['en'];
  const currentImages = images[language] || images['en'];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const goToSlide = index => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const openModal = image => {
    setModalImage(image);
    setIsModalOpen(true);
    setScale(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      // Adicionar listener de teclado para fechar com "Esc"
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') closeModal();
      };
      window.addEventListener('keydown', handleKeyDown);

      // Listener para zoom com scroll
      const handleWheel = (event) => {
        if (scale > 1 || event.deltaY !== 0) {
          event.preventDefault();
          const newScale = event.deltaY < 0 ? scale + 0.1 : scale - 0.1;
          setScale(Math.max(1, Math.min(3, newScale))); // Limita o zoom de 1 a 3
        }
      };
      window.addEventListener('wheel', handleWheel);

      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, [isModalOpen, scale]);

  const handleRotate = e => {
    e.stopPropagation();
    setRotation(prev => prev + 90);
  };

  const handleDrag = (e, info) => {
    if (scale > 1) {
      setPosition(pos => ({
        x: pos.x + info.delta.x,
        y: pos.y + info.delta.y
      }));
    }
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
    enter: direction => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 150, damping: 20 }
    },
    exit: direction => ({
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
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                    {...swipeHandlers}
                  >
                    <div
                      className="relative w-full h-full group cursor-zoom-in"
                      onClick={() => openModal(currentImages[currentIndex])}
                    >
                      <Image
                        src={currentImages[currentIndex]?.src}
                        alt={currentImages[currentIndex]?.alt || ''}
                        fill
                        className="object-contain"
                        priority={currentIndex === 0}
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                      {currentImages[currentIndex]?.caption && (
                        <motion.div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-4 md:p-6">
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
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 text-black" />
                    </motion.button>
                    <motion.button
                      onClick={nextSlide}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 text-black" />
                    </motion.button>
                  </>
                )}
              </div>

              <motion.div variants={item} className="flex justify-center mt-6 gap-2">
                {currentImages.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1 }}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${currentIndex === index ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </motion.div>
            </>
          ) : (
            <div className="aspect-[16/9] w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl">
              <p className="text-gray-500 dark:text-gray-400">No images available</p>
            </div>
          )}
        </div>
      </motion.section>

      <AnimatePresence>
        {isModalOpen && modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 touch-none"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            <motion.div
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                className="w-full h-full"
                drag={scale > 1}
                dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                onDrag={handleDrag}
                style={{ x: position.x, y: position.y, scale, rotate: rotation }}
              >
                <Image
                  src={modalImage.src}
                  alt={modalImage.alt || ''}
                  width={1920}
                  height={1080}
                  className="object-contain w-full h-full max-h-[90vh] touch-none"
                  priority
                />
              </motion.div>

              <div className="absolute top-4 right-4 flex gap-3 z-10">
                <button onClick={handleRotate} className="bg-white/80 p-2 rounded-full">
                  <RotateCcw className="w-5 h-5 text-black" />
                </button>
                <button onClick={() => setScale(scale === 1 ? 2 : 1)} className="bg-white/80 p-2 rounded-full">
                  <ZoomIn className="w-5 h-5 text-black" />
                </button>
                <button onClick={closeModal} className="bg-white/80 p-2 rounded-full">
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryCarousel;
