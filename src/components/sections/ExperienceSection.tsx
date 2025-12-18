"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from "react-icons/fi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useTranslation } from "@/hooks/useTranslation";

interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    tasks: string[];
}

interface Brand {
    name: string;
    logo: string;
    description: string;
    tech: string[];
    link: string;
}

interface Translation {
    title: string;
    subtitle: string;
    experienceTitle: string;
    experiences: Experience[];
    brandsTitle: string;
    brands: Brand[];
    viewProject: string;
}

interface Translations {
    [key: string]: Translation;
}

const ExperienceSection: React.FC = () => {
    const { language } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const blobs = gsap.utils.toArray('.exp-blob');
        blobs.forEach((blob: any) => {
            gsap.to(blob, {
                x: "random(-40, 40)",
                y: "random(-40, 40)",
                duration: "random(5, 8)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }, { scope: containerRef });

    const translations: Translations = {
        pt: {
            title: "Trajetória Profissional",
            subtitle: "Minha evolução e as marcas que confiam no meu trabalho.",
            experienceTitle: "Experiência",
            experiences: [
                {
                    company: "Shakers Agência e Consultoria",
                    role: "Estagiária de Desenvolvimento Front-end",
                    period: "Agosto 2025 – Atualmente",
                    description: "Estagiária de Desenvolvimento Front-end Shopify, com foco em criar temas personalizados e responsivos para e-commerce. Trabalho com Liquid, SCSS e TypeScript para desenvolver interfaces que oferecem aumento na conversão, navegação intuitiva e de alta qualidade para o cliente final. Em projetos headless, aplico React com TypeScript, Tailwind, Hydrogen e Weaverse, onde também desenvolvo schemas personalizáveis, garantindo flexibilidade e escalabilidade nas soluções.",
                    tasks: [
                        "Desenvolvimento de temas Shopify (Liquid/SCSS).",
                        "Implementação de e-commerce headless com Hydrogen e React.",
                        "Criação de schemas dinâmicos via Weaverse.",
                        "Otimização de performance e conversão (CRO)."
                    ]
                },
                {
                    company: "Budri Digital",
                    role: "Freelance Designer & Developer",
                    period: "Junho 2025 – Agosto 2025",
                    description: "Desenvolvimento de soluções digitais personalizadas, identidades visuais e aplicações web para diversos clientes, focando em excelência técnica e design centrado no usuário.",
                    tasks: [
                        "Design de identidades visuais e UI/UX.",
                        "Desenvolvimento de aplicações web responsivas.",
                        "Consultoria técnica para pequenos negócios.",
                        "Gestão autônoma de projetos e entregas."
                    ]
                }
            ],
            brandsTitle: "Marcas que confiam",
            brands: [
                {
                    name: "Darkness Nation Store",
                    logo: "/images/jobs/darkness-nation-store.jpg",
                    description: "Atuação estratégica na arquitetura de seções altamente customizáveis, assegurando escalabilidade e performance utilizando Shopify (Hydrogen) e React.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.darkness.com.br/"
                },
                {
                    name: "Capicilin Store",
                    logo: "/images/jobs/capicilin-store.jpg",
                    description: "Otimização da PDP e implementação de novas funcionalidades com integração de apps como Judge.me e uso de metaobjetos.",
                    tech: ["Shopify", "Liquid", "SCSS", "Judge.me"],
                    link: "https://www.capicilin.com.br/"
                },
                {
                    name: "Baianão Store",
                    logo: "/images/jobs/baianao-store.jpg",
                    description: "Desenvolvimento da lógica estratégica de preços com desconto via Pix na vitrine e PDP, reforçando a transparência e conversão.",
                    tech: ["Shopify", "TypeScript", "SCSS", "Liquid"],
                    link: "https://www.baianao.com.br/"
                },
                {
                    name: "Iron Studios Store",
                    logo: "/images/jobs/iron-studios-store.jpg",
                    description: "Implementação de sistema de zoom intuitivo (pinch gestures) para PDP em desktop e mobile, otimizando a visualização de detalhes.",
                    tech: ["Shopify", "JavaScript", "Liquid", "SCSS"],
                    link: "https://www.ironstudios.com.br/"
                },
                {
                    name: "BOSS Music Store",
                    logo: "/images/jobs/boss-store.jpg",
                    description: "Desenvolvimento e aprimoramento do e-commerce headless, focando em novas funcionalidades e otimizações de performance.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.boss.info/br/"
                },
                {
                    name: "Roland Store",
                    logo: "/images/jobs/roland-store.jpg",
                    description: "Aprimoramento contínuo do e-commerce headless com foco em melhorias visuais e experiência personalizada para músicos.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.roland.com/br/"
                }
            ],
            viewProject: "Acessar Loja"
        },
        en: {
            title: "Professional Path",
            subtitle: "My evolution and the brands that trust my work.",
            experienceTitle: "Experience",
            experiences: [
                {
                    company: "Shakers Agência e Consultoria",
                    role: "Front-end Development Intern",
                    period: "August 2025 – Present",
                    description: "Shopify Front-end Development Intern, focusing on creating custom and responsive templates for e-commerce. Working with Liquid, SCSS, and TypeScript to develop interfaces that offer increased conversion and intuitive navigation. In headless projects, I apply React with TypeScript, Tailwind, Hydrogen, and Weaverse.",
                    tasks: [
                        "Shopify theme development (Liquid/SCSS).",
                        "Headless e-commerce implementation with Hydrogen.",
                        "Dynamic schemas creation via Weaverse.",
                        "Performance and conversion optimization (CRO)."
                    ]
                },
                {
                    company: "Budri Digital",
                    role: "Freelance Designer & Developer",
                    period: "June 2025 – August 2025",
                    description: "Development of personalized digital solutions, visual identities, and web applications for various clients, focusing on technical excellence and user-centered design.",
                    tasks: [
                        "Visual identity and UI/UX design.",
                        "Responsive web application development.",
                        "Technical consultancy for small businesses.",
                        "Autonomous project management."
                    ]
                }
            ],
            brandsTitle: "Trusted Brands",
            brands: [
                {
                    name: "Darkness Nation Store",
                    logo: "/images/jobs/darkness-nation-store.jpg",
                    description: "Strategic architecture of highly customizable sections, ensuring scalability and performance using Shopify (Hydrogen) and React.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.darkness.com.br/"
                },
                {
                    name: "Capicilin Store",
                    logo: "/images/jobs/capicilin-store.jpg",
                    description: "PDP optimization and implementation of new features with Judge.me integration and metaobjects usage.",
                    tech: ["Shopify", "Liquid", "SCSS", "Judge.me"],
                    link: "https://www.capicilin.com.br/"
                },
                {
                    name: "Baianão Store",
                    logo: "/images/jobs/baianao-store.jpg",
                    description: "Development of strategic Pix discount logic in catalog and PDP, reinforcing transparency and conversion.",
                    tech: ["Shopify", "TypeScript", "SCSS", "Liquid"],
                    link: "https://www.baianao.com.br/"
                },
                {
                    name: "Iron Studios Store",
                    logo: "/images/jobs/iron-studios-store.jpg",
                    description: "Intuitive zoom system implementation (pinch gestures) for PDP on desktop and mobile models.",
                    tech: ["Shopify", "JavaScript", "Liquid", "SCSS"],
                    link: "https://www.ironstudios.com.br/"
                },
                {
                    name: "BOSS Music Store",
                    logo: "/images/jobs/boss-store.jpg",
                    description: "Headless e-commerce development and enhancement, focusing on new features and performance optimizations.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.boss.info/br/"
                },
                {
                    name: "Roland Store",
                    logo: "/images/jobs/roland-store.jpg",
                    description: "Continuous improvement of headless e-commerce focusing on visual enhancements and custom experiences.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.roland.com/br/"
                }
            ],
            viewProject: "Visit Store"
        },
        es: {
            title: "Trayectoria Profesional",
            subtitle: "Mi evolución y las marcas que confían en mi trabajo.",
            experienceTitle: "Experiencia",
            experiences: [
                {
                    company: "Shakers Agência e Consultoria",
                    role: "Practicante de Desarrollo Front-end",
                    period: "Agosto 2025 – Presente",
                    description: "Practicante de Desarrollo Front-end Shopify, enfocada en crear temas personalizados y responsivos para e-commerce. Trabajo con Liquid, SCSS e TypeScript para desarrollar interfaces que ofrecen aumento en la conversión y navegación intuitiva. En proyectos headless, aplico React con TypeScript, Tailwind, Hydrogen e Weaverse.",
                    tasks: [
                        "Desarrollo de temas Shopify (Liquid/SCSS).",
                        "Implementación de e-commerce headless con Hydrogen.",
                        "Creación de schemas dinámicos vía Weaverse.",
                        "Optimización de performance y conversión (CRO)."
                    ]
                },
                {
                    company: "Budri Digital",
                    role: "Freelance Designer & Developer",
                    period: "Junio 2025 – Agosto 2025",
                    description: "Desarrollo de soluciones digitales personalizadas, identidades visuales y aplicaciones web para diversos clientes.",
                    tasks: [
                        "Diseño de identidades visuales y UI/UX.",
                        "Desarrollo de aplicaciones web responsivas.",
                        "Consultoría técnica para pequeñas empresas.",
                        "Gestión autónoma de proyectos."
                    ]
                }
            ],
            brandsTitle: "Marcas que confían",
            brands: [
                {
                    name: "Darkness Nation Store",
                    logo: "/images/jobs/darkness-nation-store.jpg",
                    description: "Arquitectura estratégica de secciones altamente personalizables, asegurando escalabilidad y rendimiento con Shopify (Hydrogen) y React.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.darkness.com.br/"
                },
                {
                    name: "Capicilin Store",
                    logo: "/images/jobs/capicilin-store.jpg",
                    description: "Optimización de PDP e implementación de nuevas funcionalidades con integración de Judge.me y uso de metaobjetos.",
                    tech: ["Shopify", "Liquid", "SCSS", "Judge.me"],
                    link: "https://www.capicilin.com.br/"
                },
                {
                    name: "Baianão Store",
                    logo: "/images/jobs/baianao-store.jpg",
                    description: "Desarrollo de lógica estratégica de precios con descuento vía Pix, reforzando la transparencia y conversión.",
                    tech: ["Shopify", "TypeScript", "SCSS", "Liquid"],
                    link: "https://www.baianao.com.br/"
                },
                {
                    name: "Iron Studios Store",
                    logo: "/images/jobs/iron-studios-store.jpg",
                    description: "Implementación de sistema de zoom intuitivo para PDP en desktop y móvil (pinch gestures).",
                    tech: ["Shopify", "JavaScript", "Liquid", "SCSS"],
                    link: "https://www.ironstudios.com.br/"
                },
                {
                    name: "BOSS Music Store",
                    logo: "/images/jobs/boss-store.jpg",
                    description: "Mejora y desarrollo de e-commerce headless, enfocado en nuevas funcionalidades y optimización.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.boss.info/br/"
                },
                {
                    name: "Roland Store",
                    logo: "/images/jobs/roland-store.jpg",
                    description: "Mejora continua de e-commerce headless con enfoque en experiencia personalizada para músicos.",
                    tech: ["Hydrogen", "React", "Weaverse", "Tailwind"],
                    link: "https://www.roland.com/br/"
                }
            ],
            viewProject: "Visitar Tienda"
        }
    };

    const { title, subtitle, experienceTitle, experiences, brandsTitle, brands, viewProject } = translations[language] || translations['pt'];

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative bg-purple-50 dark:bg-gray-950 w-full py-24 px-6 md:px-12 overflow-hidden transition-colors duration-500"
            id="experience-section"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="exp-blob absolute top-1/4 -right-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
                <div className="exp-blob absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="space-y-12">
                    <h3 className="text-2xl font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-4">
                        <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
                        {experienceTitle}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/50 dark:bg-gray-900/40 backdrop-blur-sm p-8 rounded-[2.5rem] border border-purple-100 dark:border-purple-900/20 hover:border-purple-400 transition-colors flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">{exp.role}</h4>
                                        <p className="text-purple-600 dark:text-purple-400 font-black text-sm uppercase">{exp.company}</p>
                                    </div>
                                    <span className="text-[10px] font-black bg-purple-100/50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">{exp.description}</p>
                                <div className="space-y-2 mt-auto">
                                    {exp.tasks.map((task, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400">
                                            <FiCheckCircle className="text-purple-500 mt-0.5 flex-shrink-0" />
                                            <span>{task}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-16">
                        <div className="flex items-center justify-between mb-12">
                            <h3 className="text-2xl font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest flex items-center gap-4">
                                <span className="w-12 h-1 bg-purple-600 rounded-full"></span>
                                {brandsTitle}
                            </h3>
                            <div className="flex gap-4">
                                <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-purple-200 dark:border-purple-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                                    <FiChevronLeft />
                                </button>
                                <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-purple-200 dark:border-purple-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                                    <FiChevronRight />
                                </button>
                            </div>
                        </div>

                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory"
                        >
                            {brands.map((brand, index) => (
                                <motion.div
                                    key={index}
                                    className="flex-none w-[320px] snap-start"
                                >
                                    <div className="bg-white dark:bg-gray-900 h-full rounded-[2.5rem] overflow-hidden border border-purple-50 dark:border-purple-900/20 hover:shadow-2xl transition-all group flex flex-col">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h4 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2">{brand.name}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">{brand.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {brand.tech.map((t, i) => (
                                                    <span key={i} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={brand.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-auto flex items-center gap-2 text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                                            >
                                                {viewProject} <FiChevronRight />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
