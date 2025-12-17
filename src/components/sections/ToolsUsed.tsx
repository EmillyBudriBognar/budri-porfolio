"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from 'framer-motion';

interface ToolItem {
    name: string;
    icon: string | React.ReactNode;
    color?: string;
    darkColor?: string;
    textColor?: string;
    darkTextColor?: string;
}

interface ResourceCardProps extends ToolItem {
    label: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
    name,
    icon,
    color = 'bg-gray-100',
    darkColor = 'bg-gray-800',
    textColor = 'text-gray-800',
    darkTextColor = 'text-gray-100',
    label = "Resource"
}) => {
    return (
        <motion.div
            whileHover={{
                y: -5,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`${color} dark:${darkColor} p-6 rounded-xl flex flex-col items-center justify-center w-24 h-24 shadow-md hover:shadow-lg cursor-default`}
            aria-label={`${label}: ${name}`}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    delay: 0.1
                }}
                className={`text-3xl mb-2 ${textColor} dark:${darkTextColor}`}
            >
                {icon}
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-sm font-medium text-center ${textColor} dark:${darkTextColor}`}
            >
                {name}
            </motion.p>
        </motion.div>
    );
};

interface ResourcesBehindProjectProps {
    tools?: ToolItem[];
    bgColor?: string;
    darkBgColor?: string;
    textColor?: string;
    darkTextColor?: string;
    language?: string;
}

interface Translation {
    sectionTitle: string;
    resourceLabel: string;
}

interface Translations {
    [key: string]: Translation;
}

const ResourcesBehindProject: React.FC<ResourcesBehindProjectProps> = ({
    tools = [],
    bgColor = 'bg-white',
    darkBgColor = 'bg-gray-900',
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
            sectionTitle: "Recursos por trás do projeto",
            resourceLabel: "Recurso"
        },
        es: {
            sectionTitle: "Recursos detrás del proyecto",
            resourceLabel: "Recurso"
        },
        en: {
            sectionTitle: "Resources behind the project",
            resourceLabel: "Resource"
        }
    };

    const { sectionTitle, resourceLabel } = translations[language] || translations['en'];

    // Animation variants
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
            }
        }
    };

    const item: Variants = {
        hidden: { y: 20, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
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
            className={`${bgColor} dark:${darkBgColor} py-16 px-4`}
        >
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ type: "spring", stiffness: 100 }}
                    className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}
                >
                    {sectionTitle}
                </motion.h2>

                <motion.div
                    variants={container}
                    className="flex flex-wrap justify-center gap-6"
                >
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            custom={index}
                        >
                            <ResourceCard
                                name={tool.name}
                                icon={tool.icon}
                                color={tool.color}
                                darkColor={tool.darkColor}
                                textColor={textColor}
                                darkTextColor={darkTextColor}
                                label={resourceLabel}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ResourcesBehindProject;
