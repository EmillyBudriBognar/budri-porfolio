"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

interface LessonItem {
    title: string;
    description: string;
}

interface LessonsLearnedProps {
    lessons?: LessonItem[];
    bgColor?: string;
    darkBgColor?: string;
    textColor?: string;
    darkTextColor?: string;
    language?: string;
}

interface Translation {
    sectionTitle: string;
}

interface Translations {
    [key: string]: Translation;
}

const LessonsLearned: React.FC<LessonsLearnedProps> = ({
    lessons = [],
    bgColor = 'bg-gray-50',
    darkBgColor = 'bg-gray-800',
    textColor = 'text-gray-800',
    darkTextColor = 'text-gray-100',
    language = 'en'
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const translations: Translations = {
        pt: {
            sectionTitle: "O que Aprendi"
        },
        es: {
            sectionTitle: "Lo que Aprendí"
        },
        en: {
            sectionTitle: "Lessons Learned"
        }
    };

    const { sectionTitle } = translations[language] || translations['en'];

    // Animation variants
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.15,
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
                damping: 15
            }
        }
    };

    const lessonCard: Variants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 10
            }
        }
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={container}
            className={`${bgColor} dark:${darkBgColor} py-16 px-4`}
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    variants={item}
                    className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}
                >
                    {sectionTitle}
                </motion.h2>

                <motion.ul
                    variants={container}
                    className="space-y-6"
                >
                    {lessons.map((lesson, index) => (
                        <motion.li
                            key={index}
                            variants={lessonCard}
                            whileHover={{
                                x: 5,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className={`p-6 rounded-xl bg-white dark:bg-gray-700 shadow-md hover:shadow-lg ${textColor} dark:${darkTextColor} cursor-default`}
                        >
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="font-semibold mb-2"
                            >
                                {lesson.title}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.9 }}
                                transition={{ delay: 0.2 }}
                                className=""
                            >
                                {lesson.description}
                            </motion.p>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.section>
    );
};

export default LessonsLearned;
