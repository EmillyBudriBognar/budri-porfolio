"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { useInView } from "react-intersection-observer";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
    FaReact
} from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiFigma,
    SiExpo,
    SiShopify,
    SiNextdotjs
} from "react-icons/si";

import { useTranslation } from "@/hooks/useTranslation";

interface Item {
    nome: string;
    ano: string;
    link?: string;
    icone?: React.ReactNode;
}

interface Translation {
    title: string;
    description: string;
    academicTitle: string;
    technologiesTitle: string;
    certificationsTitle: string;
    seeMore: string;
    seeLess: string;
    formacoesAcademicas: Item[];
    tecnologias: Item[];
    certificacoes: Item[];
}

interface Translations {
    [key: string]: Translation;
}

const FormationSection: React.FC = () => {
    const { language } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const translations: Translations = {
        pt: {
            title: "Educação & Habilidades",
            description: "Minha base técnica e as ferramentas que utilizo para dar vida às ideias.",
            academicTitle: "Formação Acadêmica",
            technologiesTitle: "Stack Tecnológica",
            certificationsTitle: "Certificações em Destaque",
            seeMore: "VER MAIS CERTIFICADOS",
            seeLess: "RECOLHER",
            formacoesAcademicas: [
                { nome: "Tecnólogo em Desenvolvimento Multiplataforma - FATEC", ano: "2027" },
                { nome: "Técnico em Informática para Internet - ETEC", ano: "2024" },
                { nome: "Criação de Sites e Plataformas Digitais - SENAI", ano: "2022" }
            ],
            tecnologias: [
                { nome: "Next.js", ano: "", icone: <SiNextdotjs /> },
                { nome: "React", ano: "", icone: <FaReact /> },
                { nome: "TypeScript", ano: "", icone: <SiTypescript /> },
                { nome: "Tailwind", ano: "", icone: <SiTailwindcss /> },
                { nome: "React Native", ano: "", icone: <FaReact /> },
                { nome: "Expo", ano: "", icone: <SiExpo /> },
                { nome: "Shopify", ano: "", icone: <SiShopify /> },
                { nome: "Figma", ano: "", icone: <SiFigma /> }
            ],
            certificacoes: [
                { nome: "Google UX Design Professional", ano: "2024", link: "https://www.coursera.org/verify/professional-cert/NF9AFJHZW6DZ" },
                { nome: "Meta Front-End Developer", ano: "2024", link: "https://www.credly.com/badges/cf00d608-63f1-49fd-8100-29decfc0dc46/" },
                { nome: "Advanced React - Meta", ano: "2024", link: "https://www.coursera.org/verify/IW6A6M8ZTLPM" },
                { nome: "UI Dynamics - Google", ano: "2024", link: "https://coursera.org/verify/XQBNSZ83VLYG" },
                { nome: "Hi-Fi Design & Prototyping - Google", ano: "2024", link: "https://coursera.org/verify/JKDHW34UCZHZ" },
                { nome: "UX Research & Testing - Google", ano: "2024", link: "https://www.coursera.org/verify/KQRD5UTP7B9E" }
            ]
        },
        en: {
            title: "Education & Skills",
            description: "My technical foundation and the tools I use to bring ideas to life.",
            academicTitle: "Academic Path",
            technologiesTitle: "Tech Stack",
            certificationsTitle: "Featured Certifications",
            seeMore: "SEE ALL CERTIFICATES",
            seeLess: "SHOW LESS",
            formacoesAcademicas: [
                { nome: "Multiplatform Software Development - FATEC", ano: "2027" },
                { nome: "Internet Computing Technician - ETEC", ano: "2024" },
                { nome: "Digital Platforms Creation - SENAI", ano: "2022" }
            ],
            tecnologias: [
                { nome: "Next.js", ano: "", icone: <SiNextdotjs /> },
                { nome: "React", ano: "", icone: <FaReact /> },
                { nome: "TypeScript", ano: "", icone: <SiTypescript /> },
                { nome: "Tailwind", ano: "", icone: <SiTailwindcss /> },
                { nome: "React Native", ano: "", icone: <FaReact /> },
                { nome: "Expo", ano: "", icone: <SiExpo /> },
                { nome: "Shopify", ano: "", icone: <SiShopify /> },
                { nome: "Figma", ano: "", icone: <SiFigma /> }
            ],
            certificacoes: [
                { nome: "Google UX Design Professional", ano: "2024", link: "https://www.coursera.org/verify/professional-cert/NF9AFJHZW6DZ" },
                { nome: "Meta Front-End Developer", ano: "2024", link: "https://www.credly.com/badges/cf00d608-63f1-49fd-8100-29decfc0dc46/" },
                { nome: "Advanced React - Meta", ano: "2024", link: "https://www.coursera.org/verify/IW6A6M8ZTLPM" },
                { nome: "UI Dynamics - Google", ano: "2024", link: "https://coursera.org/verify/XQBNSZ83VLYG" },
                { nome: "Hi-Fi Design & Prototyping - Google", ano: "2024", link: "https://coursera.org/verify/JKDHW34UCZHZ" },
                { nome: "UX Research & Testing - Google", ano: "2024", link: "https://www.coursera.org/verify/KQRD5UTP7B9E" }
            ]
        },
        es: {
            title: "Educación & Habilidades",
            description: "Mi base técnica y las herramientas que utilizo para dar vida a las ideas.",
            academicTitle: "Trayectoria Académica",
            technologiesTitle: "Stack Tecnológico",
            certificationsTitle: "Certificaciones Destacadas",
            seeMore: "VER MÁS CERTIFICADOS",
            seeLess: "VER MENOS",
            formacoesAcademicas: [
                { nome: "Desarrollo Multiplataforma - FATEC", ano: "2027" },
                { nome: "Técnico en Informática - ETEC", ano: "2024" },
                { nome: "Creación de Plataformas Digitales - SENAI", ano: "2022" }
            ],
            tecnologias: [
                { nome: "Next.js", ano: "", icone: <SiNextdotjs /> },
                { nome: "React", ano: "", icone: <FaReact /> },
                { nome: "TypeScript", ano: "", icone: <SiTypescript /> },
                { nome: "Tailwind", ano: "", icone: <SiTailwindcss /> },
                { nome: "React Native", ano: "", icone: <FaReact /> },
                { nome: "Expo", ano: "", icone: <SiExpo /> },
                { nome: "Shopify", ano: "", icone: <SiShopify /> },
                { nome: "Figma", ano: "", icone: <SiFigma /> }
            ],
            certificacoes: [
                { nome: "Google UX Design Professional", ano: "2024", link: "https://www.coursera.org/verify/professional-cert/NF9AFJHZW6DZ" },
                { nome: "Meta Front-End Developer", ano: "2024", link: "https://www.credly.com/badges/cf00d608-63f1-49fd-8100-29decfc0dc46/" },
                { nome: "Advanced React - Meta", ano: "2024", link: "https://www.coursera.org/verify/IW6A6M8ZTLPM" },
                { nome: "UI Dynamics - Google", ano: "2024", link: "https://coursera.org/verify/XQBNSZ83VLYG" },
                { nome: "Hi-Fi Design & Prototyping - Google", ano: "2024", link: "https://coursera.org/verify/JKDHW34UCZHZ" },
                { nome: "UX Research & Testing - Google", ano: "2024", link: "https://www.coursera.org/verify/KQRD5UTP7B9E" }
            ]
        }
    };

    const { title, description, academicTitle, technologiesTitle, certificationsTitle, seeMore, seeLess, formacoesAcademicas, tecnologias, certificacoes } = translations[language] || translations['pt'];

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useGSAP(() => {
        const blobs = gsap.utils.toArray('.formation-blob');
        blobs.forEach((blob: any) => {
            gsap.to(blob, {
                x: "random(-50, 50)",
                y: "random(-50, 50)",
                duration: "random(6, 10)",
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
            id="formation-section"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="formation-blob absolute top-1/3 -left-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
                <div className="formation-blob absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={sectionInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Academic Path */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-4">
                            <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
                            {academicTitle}
                        </h3>
                        <div className="space-y-4">
                            {formacoesAcademicas.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-purple-50/50 dark:bg-purple-900/10 p-6 rounded-3xl border border-purple-100 dark:border-purple-900/20 flex justify-between items-center group hover:border-purple-500 transition-colors"
                                >
                                    <span className="font-bold text-gray-800 dark:text-gray-200 uppercase tracking-tight text-sm md:text-base">{item.nome}</span>
                                    <span className="text-[10px] font-black bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-200 px-3 py-1 rounded-full">{item.ano}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-4">
                            <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
                            {technologiesTitle}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {tecnologias.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.2 + index * 0.05 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-purple-50 dark:border-purple-900/20 flex flex-col items-center justify-center gap-3 text-center transition-all"
                                >
                                    <span className="text-3xl text-purple-600 dark:text-purple-400">{item.icone}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">{item.nome}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mt-20">
                    <h3 className="text-2xl font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-4 mb-12">
                        <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
                        {certificationsTitle}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                            {certificacoes.slice(0, expanded ? certificacoes.length : 6).map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md p-6 rounded-[2rem] border border-purple-100 dark:border-purple-900/10 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 flex flex-col justify-between group"
                                >
                                    <span className="font-bold uppercase tracking-tight text-sm leading-tight mb-4 group-hover:text-white">{item.nome}</span>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black opacity-60 group-hover:opacity-100">{item.ano}</span>
                                        <span className="text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">VER CREDENCIAL →</span>
                                    </div>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 text-center">
                        <Button
                            onClick={() => setExpanded(!expanded)}
                            className="rounded-full px-12 py-4 font-black uppercase tracking-widest border-2"
                        >
                            {expanded ? seeLess : seeMore}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormationSection;
