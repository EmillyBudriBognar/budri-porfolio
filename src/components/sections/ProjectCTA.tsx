"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from 'next/link';

interface ProjectCTAProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    onClick?: () => void;
    gradientFrom?: string;
    gradientTo?: string;
    darkGradientFrom?: string;
    darkGradientTo?: string;
    colorText?: string;
    darkColorText?: string;
    language?: string;
}

interface Translation {
    title: string;
    subtitle: string;
    buttonText: string;
}

interface Translations {
    [key: string]: Translation;
}

const ProjectCTA: React.FC<ProjectCTAProps> = ({
    title,
    subtitle,
    buttonText,
    onClick,
    gradientFrom = 'from-purple-400',
    gradientTo = 'to-pink-500',
    darkGradientFrom = 'from-purple-600',
    darkGradientTo = 'to-pink-700',
    colorText = 'text-gray-900',
    darkColorText = 'dark:text-gray-100',
    language = 'en'
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        once: true,
        amount: 0.2,
    });

    const translations: Translations = {
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

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className={`
        relative py-20 px-4 
        bg-gradient-to-r ${gradientFrom} ${gradientTo}
        dark:bg-none
        dark:from-transparent dark:to-transparent
        transition-colors duration-500
      `}
        >
            {/* Gradiente escuro sobreposto */}
            <div className="absolute inset-0 hidden dark:block z-0">
                <div className={`w-full h-full bg-gradient-to-r ${darkGradientFrom} ${darkGradientTo}`} />
            </div>

            <div className={`relative max-w-4xl mx-auto text-center z-10`}>
                <motion.h2
                    variants={item}
                    className={`text-3xl md:text-4xl font-bold mb-4 ${colorText} ${darkColorText}`}
                >
                    {title || localizedTitle}
                </motion.h2>

                <motion.p
                    variants={item}
                    className={`text-xl mb-8 opacity-90 ${colorText} ${darkColorText}`}
                >
                    {subtitle || localizedSubtitle}
                </motion.p>

                <motion.div variants={item}>
                    <Link href="/#contact-section" passHref legacyBehavior>
                        <motion.a
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="inline-block bg-white text-purple-600 dark:text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl"
                        >
                            {buttonText || localizedButton}
                        </motion.a>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectCTA;
