"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";
import Portfolio from "@/components/Projects";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useTranslation } from "@/hooks/useTranslation";

interface Translation {
    title: string;
    subtitle: string;
    highlight: string;
}

interface Translations {
    [key: string]: Translation;
}

const ProjectsSection: React.FC = () => {
    const { language } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const translations: Translations = {
        pt: {
            title: "Projetos em Destaque",
            subtitle: "Uma seleção de trabalhos que unem ",
            highlight: "DESIGN & TECNOLOGIA.",
        },
        es: {
            title: "Proyectos Destacados",
            subtitle: "Una selección de trabajos que unen ",
            highlight: "DISEÑO & TECNOLOGÍA.",
        },
        en: {
            title: "Featured Projects",
            subtitle: "A selection of works that combine ",
            highlight: "DESIGN & TECHNOLOGY.",
        },
    };

    const { title, subtitle, highlight } = translations[language] || translations['pt'];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useGSAP(() => {
        const blobs = gsap.utils.toArray('.projects-blob');
        blobs.forEach((blob: any) => {
            gsap.to(blob, {
                x: "random(-60, 60)",
                y: "random(-60, 60)",
                duration: "random(6, 12)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative bg-white dark:bg-gray-950 w-full py-24 px-6 md:px-12 overflow-hidden transition-colors duration-500"
            id="projects-section"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="projects-blob absolute top-1/4 -left-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
                <div className="projects-blob absolute bottom-1/3 -right-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight"
                    >
                        {title}
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl"
                    >
                        {subtitle}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 font-bold">
                            {highlight}
                        </span>
                    </motion.p>
                </div>

                <Portfolio />
            </div>
        </section>
    );
};

export default ProjectsSection;
