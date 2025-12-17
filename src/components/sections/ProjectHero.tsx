"use client";

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';

interface ProjectHeroProps {
    title?: string;
    subtitle?: string;
    image: string;
    darkImage?: string;
    gradientFrom?: string;
    gradientTo?: string;
    darkGradientFrom?: string;
    darkGradientTo?: string;
    colorText?: string;
    darkColorText?: string;
    language?: string;
    imagePosition?: 'center' | 'bottom';
}

interface Translation {
    defaultTitle: string;
    defaultSubtitle: string;
}

interface Translations {
    [key: string]: Translation;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
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
    language = 'en',
    imagePosition = 'center' // 'center' ou 'bottom'
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
        amount: 0.3
    });

    const translations: Translations = {
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

    const { defaultTitle, defaultSubtitle } = translations[language] || translations['en'];
    const displayTitle = title || defaultTitle;
    const displaySubtitle = subtitle || defaultSubtitle;

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const textItem: Variants = {
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

    const imageItem: Variants = {
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

    const isCenter = imagePosition === 'center';
    const isBottom = imagePosition === 'bottom';

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={container}
            className={`relative bg-gradient-to-r ${gradientFrom} ${gradientTo} ${darkGradientFrom} ${darkGradientTo} mt-[70px] pt-14 md:pt-20 ${isBottom ? 'pb-0 md:pb-24' : 'pb-12 md:pb-24'
                } px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[350px]`}
        >
            <div className={`max-w-6xl mx-auto h-full flex flex-col md:flex-row ${isBottom ? 'md:items-end' : isCenter ? 'items-center md:justify-center' : 'md:items-center'
                }`}>
                {/* Text */}
                <motion.div className={`w-full md:w-1/2 space-y-4 md:space-y-6`}>
                    <motion.h1
                        variants={textItem}
                        className={`text-4xl sm:text-5xl md:text-6xl font-bold ${colorText} ${darkColorText}`}
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

                {/* Image */}
                <motion.div
                    className={`w-full md:w-1/2 ${isBottom ? 'md:absolute md:bottom-0 md:right-0 md:pr-8 lg:pr-0' : 'mt-8 md:mt-0'} ${isCenter ? 'flex justify-center' : ''
                        }`}
                    variants={imageItem}
                >
                    <div className={`relative w-full aspect-video max-w-[600px] ${isBottom ? 'md:ml-auto md:mx-0' : 'mx-auto'}`}>
                        <div className="block dark:hidden w-full h-full">
                            <Image
                                src={image}
                                alt={displayTitle}
                                fill
                                className={`object-contain ${isBottom ? 'object-bottom' : ''}`}
                                priority
                            />
                        </div>
                        {darkImage && (
                            <div className="hidden dark:block w-full h-full">
                                <Image
                                    src={darkImage}
                                    alt={displayTitle}
                                    fill
                                    className={`object-contain ${isBottom ? 'object-bottom' : ''}`}
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
