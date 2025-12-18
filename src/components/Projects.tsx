"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useTranslation } from "@/hooks/useTranslation";

interface ProjectDetail {
    label: string;
    value: string;
}

interface Project {
    section: string;
    title: string;
    description: string;
    category: string[];
    image: string;
    mobileImage: string;
    link: string;
    ctaText: string;
    year: string;
    details: ProjectDetail[];
}

interface Translation {
    sections: string[];
    projects: Project[];
}

interface Translations {
    [key: string]: Translation;
}

const ProjectItem: React.FC<{ project: Project; isActive: boolean }> = ({ project, isActive }) => {
    const imageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isActive && imageRef.current) {
            gsap.fromTo(imageRef.current,
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
            );
        }
    }, [isActive]);

    return (
        <motion.div
            className={`relative w-full max-w-5xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-purple-100 dark:border-purple-900/30 ${isActive ? "opacity-100" : "opacity-0 absolute"}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden relative group" ref={imageRef}>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent flex flex-col justify-end p-8">
                        <div className="flex flex-wrap gap-2">
                            {project.category.map((cat, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/20 uppercase tracking-widest"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-[55%] p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 text-xs font-black rounded-full uppercase tracking-tighter">
                                {project.section}
                            </span>
                            <span className="text-gray-400 dark:text-gray-500 font-medium text-sm">
                                {project.year}
                            </span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight leading-none">
                            {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {project.details.map((detail, i) => (
                                <div key={i} className="bg-purple-50/50 dark:bg-purple-900/10 p-4 rounded-2xl border border-purple-100/50 dark:border-purple-900/20">
                                    <span className="block text-[10px] text-purple-400 dark:text-purple-500 font-bold uppercase tracking-widest mb-1">
                                        {detail.label}
                                    </span>
                                    <span className="block text-sm font-bold text-gray-800 dark:text-gray-200 truncate">
                                        {detail.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white font-black uppercase tracking-widest hover:shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all duration-300 active:scale-95"
                    >
                        {project.ctaText}
                        <FiExternalLink className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Portfolio: React.FC = () => {
    const { language } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const translations: Translations = {
        pt: {
            sections: ["Aplicações Mobile", "Email Marketing", "Website", "Identidade Visual", "Pesquisa & Estratégia"],
            projects: [
                {
                    section: "Aplicações Mobile",
                    title: "WorkingBrain - Plataforma Educacional",
                    description: "Aplicativo educacional com gamificação e relatórios de desempenho, desenvolvido com React Native e Expo. Projeto acadêmico e pessoal focado na inclusão digital.",
                    category: ["Mobile App", "UI Design", "UX Design", "Educação"],
                    image: "/images/project-workingbrain-mobile/capa-desktop.svg",
                    mobileImage: "/images/project-workingbrain-mobile/slide1.svg",
                    link: "/projects/workingbrain-mobile",
                    ctaText: "Ver Projeto",
                    year: "2024",
                    details: [
                        { label: "Tipo", value: "TCC – Mobile" },
                        { label: "Stack", value: "React Native, Expo" },
                        { label: "Ano", value: "2024" },
                        { label: "Resultado", value: "+85 usuários" }
                    ]
                },
                {
                    section: "Email Marketing",
                    title: "Meu Aumigo - Email Marketing",
                    description: "E-mail HTML responsivo com animações CSS e foco em conversão. Desenvolvido como projeto pessoal para simular uma campanha real.",
                    category: ["Email Marketing", "Motion Design", "Copywriting"],
                    image: "/images/project-meuaumigo/capa-desktop-pt.svg",
                    mobileImage: "/images/project-meuaumigo/capa-mobile-pt.svg",
                    link: "/projects/meu-aumigo",
                    ctaText: "Ver Campanha",
                    year: "2025",
                    details: [
                        { label: "Tipo", value: "Projeto Pessoal" },
                        { label: "Formato", value: "HTML Responsivo" },
                        { label: "Ano", value: "2025" },
                        { label: "Conversão", value: "+60% média" }
                    ]
                },
                {
                    section: "Website",
                    title: "Portfólio LKS Data",
                    description: "Projeto completo para a LKS Data com foco em soluções visuais e digitais. Incluiu o desenvolvimento de website institucional responsivo, identidade visual moderna, criação de logo, design de e-mails HTML e otimização para SEO.",
                    category: ["Web App", "UX Design", "UI Design", "SEO"],
                    image: "/images/project-lks/capa-desktop-pt.png",
                    mobileImage: "/images/project-lks/capa-desktop-pt.png",
                    link: "/projects/lks-data",
                    ctaText: "Ver Projeto",
                    year: "2025",
                    details: [
                        { label: "Cliente", value: "LKS Data" },
                        { label: "Ano", value: "2025" },
                        { label: "Tipo", value: "Institucional" },
                        { label: "Pacote", value: "Web, Email, Branding" }
                    ]
                },
                {
                    section: "Identidade Visual",
                    title: "WorkingBrain Brand",
                    description: "Criação de identidade visual e mascote gamificado para aplicação multiplataforma. Projeto com direção criativa completa.",
                    category: ["Branding", "Design", "Ilustração"],
                    image: "/images/project-workingbrain/capa-desktop-pt.png",
                    mobileImage: "/images/project-workingbrain/slide1-pt.png",
                    link: "/projects/visual-identity-workingbrain",
                    ctaText: "Ver Detalhes",
                    year: "2024",
                    details: [
                        { label: "Tipo", value: "Identidade Visual" },
                        { label: "Ano", value: "2024" },
                        { label: "Ferramentas", value: "Figma" },
                        { label: "Aprovação", value: "100%" }
                    ]
                },
                {
                    section: "Pesquisa & Estratégia",
                    title: "UX Research - WorkingBrain",
                    description: "Pesquisa com estudantes e professores sobre educação digital. Inclui personas, mapa de empatia e jornada do usuário.",
                    category: ["UX Research", "Usability Testing"],
                    image: "/images/project-ux-research-workingbrain/capa-desktop.svg",
                    mobileImage: "/images/project-ux-research-workingbrain/slide1.svg",
                    link: "/projects/ux-research-workingbrain",
                    ctaText: "Ver Metodologia",
                    year: "2024",
                    details: [
                        { label: "Tipo", value: "UX Research" },
                        { label: "Ano", value: "2024" },
                        { label: "Participantes", value: "Público Alvo" },
                        { label: "Processos", value: "Design Thinking" }
                    ]
                }
            ]
        },
        en: {
            sections: ["Mobile Apps", "Email Marketing", "Website", "Visual Identity", "Research & Strategy"],
            projects: [
                {
                    section: "Mobile Apps",
                    title: "WorkingBrain - Educational Platform",
                    description: "Educational app with gamification and performance reports. Academic and personal project focused on digital inclusion.",
                    category: ["Mobile App", "UI Design", "UX Design", "Education"],
                    image: "/images/project-workingbrain-mobile/capa-desktop.svg",
                    mobileImage: "/images/project-workingbrain-mobile/slide1.svg",
                    link: "/projects/workingbrain-mobile",
                    ctaText: "View Project",
                    year: "2024",
                    details: [
                        { label: "Type", value: "Capstone Project" },
                        { label: "Stack", value: "React Native, Expo" },
                        { label: "Year", value: "2024" },
                        { label: "Result", value: "+85 users" }
                    ]
                },
                {
                    section: "Email Marketing",
                    title: "Meu Aumigo - Email Marketing",
                    description: "Responsive HTML email with CSS animations focused on conversion. Developed as a personal project to simulate a real campaign.",
                    category: ["Email Marketing", "Motion Design", "Copywriting"],
                    image: "/images/project-meuaumigo/capa-desktop-en.svg",
                    mobileImage: "/images/project-meuaumigo/capa-mobile-en.svg",
                    link: "/projects/meu-aumigo",
                    ctaText: "View Campaign",
                    year: "2025",
                    details: [
                        { label: "Type", value: "Personal Project" },
                        { label: "Format", value: "HTML Responsive" },
                        { label: "Year", value: "2025" },
                        { label: "Conversion", value: "+60% avg" }
                    ]
                },
                {
                    section: "Website",
                    title: "LKS Data Portfolio",
                    description: "A full project for LKS Data focused on digital and visual solutions. Delivered a responsive institutional website, modern visual identity, logo design, HTML email templates, and SEO optimization.",
                    category: ["Web App", "UX Design", "UI Design", "SEO"],
                    image: "/images/project-lks/capa-desktop-en.png",
                    mobileImage: "/images/project-lks/capa-desktop-en.png",
                    link: "/projects/lks-data",
                    ctaText: "View Project",
                    year: "2025",
                    details: [
                        { label: "Client", value: "LKS Data" },
                        { label: "Year", value: "2025" },
                        { label: "Type", value: "Institutional" },
                        { label: "Package", value: "Web, Email, Branding" }
                    ]
                },
                {
                    section: "Visual Identity",
                    title: "WorkingBrain Visual Identity",
                    description: "Visual identity creation and gamified mascot for a multi-platform application. Full creative direction.",
                    category: ["Branding", "Design", "Illustration"],
                    image: "/images/project-workingbrain/capa-desktop-en.png",
                    mobileImage: "/images/project-workingbrain/slide1-en.png",
                    link: "/projects/visual-identity-workingbrain",
                    ctaText: "View Details",
                    year: "2024",
                    details: [
                        { label: "Type", value: "Visual Identity" },
                        { label: "Year", value: "2024" },
                        { label: "Tools", value: "Figma" },
                        { label: "Grade", value: "100%" }
                    ]
                },
                {
                    section: "Research & Strategy",
                    title: "UX Research - WorkingBrain",
                    description: "Research with students and teachers on digital education. Includes personas, empathy map, and user journey.",
                    category: ["UX Research", "Usability Testing"],
                    image: "/images/project-ux-research-workingbrain/capa-desktop.svg",
                    mobileImage: "/images/project-ux-research-workingbrain/slide1.svg",
                    link: "/projects/ux-research-workingbrain",
                    ctaText: "View Methodology",
                    year: "2024",
                    details: [
                        { label: "Type", value: "UX Research" },
                        { label: "Year", value: "2024" },
                        { label: "Participants", value: "Target Audience" },
                        { label: "Process", value: "Design Thinking" }
                    ]
                }
            ]
        },
        es: {
            sections: ["Apps Móviles", "Email Marketing", "Sitio Web", "Identidad Visual", "Investigación"],
            projects: [
                {
                    section: "Aplicaciones Móviles",
                    title: "WorkingBrain - Plataforma Educativa",
                    description: "App educativa con gamificación e informes de desempeño. Proyecto académico y personal enfocado en inclusión digital.",
                    category: ["Móvil", "UI Design", "UX Design", "Educación"],
                    image: "/images/project-workingbrain-mobile/capa-desktop.svg",
                    mobileImage: "/images/project-workingbrain-mobile/slide1.svg",
                    link: "/projects/workingbrain-mobile",
                    ctaText: "Ver Proyecto",
                    year: "2024",
                    details: [
                        { label: "Tipo", value: "Proyecto Final" },
                        { label: "Stack", value: "React Native, Expo" },
                        { label: "Año", value: "2024" },
                        { label: "Resultado", value: "+85 usuarios" }
                    ]
                },
                {
                    section: "Email Marketing",
                    title: "Meu Aumigo - Email Marketing",
                    description: "Correo HTML responsivo con animaciones CSS enfocado en conversión. Desarrollado como proyecto personal para simular una campaña real.",
                    category: ["Email Marketing", "Motion Design", "Copywriting"],
                    image: "/images/project-meuaumigo/capa-desktop-es.svg",
                    mobileImage: "/images/project-meuaumigo/capa-mobile-es.svg",
                    link: "/projects/meu-aumigo",
                    ctaText: "Ver Campaña",
                    year: "2025",
                    details: [
                        { label: "Tipo", value: "Proyecto Personal" },
                        { label: "Formato", value: "HTML Responsivo" },
                        { label: "Año", value: "2025" },
                        { label: "Conversión", value: "+60% prom" }
                    ]
                },
                {
                    section: "Sitio Web",
                    title: "Portafolio LKS Data",
                    description: "Proyecto integral para LKS Data enfocado en soluciones digitales y visuales. Incluyó el desarrollo de un sitio institucional, identidad visual, logo, e-mails HTML e optimización SEO.",
                    category: ["Web App", "UX Design", "UI Design", "SEO"],
                    image: "/images/project-lks/capa-desktop-es.png",
                    mobileImage: "/images/project-lks/capa-desktop-es.png",
                    link: "/projects/lks-data",
                    ctaText: "Ver Proyecto",
                    year: "2025",
                    details: [
                        { label: "Cliente", value: "LKS Data" },
                        { label: "Año", value: "2025" },
                        { label: "Tipo", value: "Institucional" },
                        { label: "Paquete", value: "Web, Email, Branding" }
                    ]
                },
                {
                    section: "Identidad Visual",
                    title: "Marca WorkingBrain",
                    description: "Creación de identidad visual y mascota gamificada para app multiplataforma. Dirección creativa completa.",
                    category: ["Branding", "Diseño", "Ilustración"],
                    image: "/images/project-workingbrain/capa-desktop-es.png",
                    mobileImage: "/images/project-workingbrain/slide1-es.png",
                    link: "/projects/visual-identity-workingbrain",
                    ctaText: "Ver Detalles",
                    year: "2024",
                    details: [
                        { label: "Tipo", value: "Identidad Visual" },
                        { label: "Año", value: "2024" },
                        { label: "Herramientas", value: "Figma" },
                        { label: "Aprobación", value: "100%" }
                    ]
                },
                {
                    section: "Investigación",
                    title: "UX Research - WorkingBrain",
                    description: "Investigación con estudiantes y docentes sobre educación digital. Incluye personas, mapa de empatía y recorrido del usuario.",
                    category: ["UX Research", "Pruebas Usabilidad"],
                    image: "/images/project-ux-research-workingbrain/capa-desktop.svg",
                    mobileImage: "/images/project-ux-research-workingbrain/slide1.svg",
                    link: "/projects/ux-research-workingbrain",
                    ctaText: "Ver Metodología",
                    year: "2024",
                    details: [
                        { label: "Tipo", value: "UX Research" },
                        { label: "Año", value: "2024" },
                        { label: "Participantes", value: "Público Alvo" },
                        { label: "Proceso", value: "Design Thinking" }
                    ]
                }
            ]
        }
    };

    const { projects } = translations[language] || translations['pt'];

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <div ref={containerRef} className="relative w-full py-12">
            {/* Display Projects */}
            <div className="relative min-h-[600px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {projects.map((project, index) => (
                        index === currentIndex && (
                            <ProjectItem key={index} project={project} isActive={true} />
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-6 mt-16">
                <button
                    onClick={handlePrev}
                    className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 active:scale-90"
                >
                    <FiChevronLeft size={30} />
                </button>

                <div className="flex gap-2">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex ? "w-12 bg-purple-600" : "w-2 bg-purple-200 dark:bg-purple-900"}`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 active:scale-90"
                >
                    <FiChevronRight size={30} />
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
