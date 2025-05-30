"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const GalleryCarousel = ({
  mediaItems = {}, // Changed default to empty object
  bgColor = 'bg-gray-50',
  darkBgColor = 'dark:bg-gray-800',
  textColor = 'text-gray-800',
  darkTextColor = 'dark:text-gray-100',
  language = 'en',
  autoPlayVideos = true,
  videoMuted = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const videoRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    setIsInView(inView);
    handleVideoPlayback();
  }, [inView, currentIndex]);

  const handleVideoPlayback = () => {
    if (!autoPlayVideos || !mediaItems[language] || !mediaItems[language][currentIndex]) return;
    
    const currentMedia = mediaItems[language][currentIndex];
    if (currentMedia?.type !== 'video') return;

    const videoRef = videoRefs.current[currentIndex];
    if (!videoRef) return;
    
    try {
      if (isInView) {
        videoRef.play().catch(error => console.log('Autoplay prevented:', error));
      } else {
        videoRef.pause();
        videoRef.currentTime = 0;
      }
    } catch (error) {
      console.error('Error controlling video:', error);
    }
  };

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
  
  // Robust media items handling
  const currentMedia = ((mediaItems[language] || mediaItems['en'] || []))
    .filter(item => item && (item.type === 'image' || item.type === 'video'))
    .map(item => ({
      ...item,
      type: item.type || 'image' // Default to image if type is missing
    }));

  // Media ratio (width / height)
  const mediaRatio = 16 / 9; // Common video aspect ratio

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === currentMedia.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentMedia.length - 1 : prevIndex - 1
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
        {currentMedia.length > 0 ? (
          <>
            <div 
              className="relative w-full overflow-hidden rounded-2xl shadow-xl"
              style={{
                paddingBottom: `${(1 / mediaRatio) * 100}%`,
                minHeight: '300px'
              }}
            >
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
                  <div className="relative w-full h-full flex items-center justify-center">
                    {currentMedia[currentIndex]?.type === 'image' ? (
                      <Image
                        src={currentMedia[currentIndex]?.src}
                        alt={currentMedia[currentIndex]?.alt || ''}
                        width={1739}
                        height={881}
                        className="object-contain"
                        priority={currentIndex === 0}
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    ) : (
                      <video 
                        ref={el => videoRefs.current[currentIndex] = el}
                        className="object-contain w-full h-full"
                        controls={!autoPlayVideos}
                        playsInline
                        muted={videoMuted}
                        loop
                        autoPlay={autoPlayVideos}
                      >
                        <source src={currentMedia[currentIndex]?.url} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    )}
                    {currentMedia[currentIndex]?.caption && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white p-6"
                      >
                        <p className="text-sm md:text-base">{currentMedia[currentIndex].caption}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {currentMedia.length > 1 && (
                <>
                  <motion.button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-all z-10"
                    aria-label="Previous media"
                    style={{ transformOrigin: 'center' }}
                  >
                    <span className="block">❮</span>
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-600 transition-all z-10"
                    aria-label="Next media"
                    style={{ transformOrigin: 'center' }}
                  >
                    <span className="block">❯</span>
                  </motion.button>
                </>
              )}
            </div>

            {currentMedia.length > 1 && (
              <motion.div 
                variants={item}
                className="flex justify-center mt-6 gap-2"
              >
                {currentMedia.map((_, index) => (
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
            )}
          </>
        ) : (
          <div className="h-[400px] md:h-[500px] flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl">
            <p className="text-gray-500 dark:text-gray-400">No media available</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default GalleryCarousel;