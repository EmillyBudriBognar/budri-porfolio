"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';

import ProjectHero from "@/components/sections/ProjectHero";
import ProjectOverview from "@/components/sections/ProjectOverview";
import CreativeProcess from "@/components/sections/CreativeProcess";
import ResultsImpact from "@/components/sections/ResultsImpact";
import GalleryCarousel from "@/components/ui/GalleryCarousel";
import ToolsUsed from "@/components/sections/ToolsUsed";
import LessonsLearned from "@/components/sections/LessonsLearned";
import ProjectCTA from "@/components/sections/ProjectCTA";
import ProjectsNav from "@/components/ui/ProjectsNav";

import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/types";

interface Translation {
    title: string;
    subtitle: string;
    overview: {
        objective: string;
        challenge: string;
        solution: string;
    };
    process: { emoji: string; title: string; description: string }[];
    results: {
        metrics: { value: string; description: string; icon: string }[];
        feedback: string;
    };
    tools: { name: string; icon: string; color: string }[];
    lessons: { title: string; description: string }[];
}

interface Translations {
    [key: string]: Translation;
}

function ProjectContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { language, setLanguage } = useTranslation();

    useEffect(() => {
        const urlLanguage = searchParams.get('lang');

        if (urlLanguage && ["pt", "es", "en"].includes(urlLanguage)) {
            setLanguage(urlLanguage as Language);
        }
    }, [searchParams, setLanguage]);

    const translations: Translations = {
        pt: {
            title: "LKS Data - Transformando Dados em Experiências Visuais Memoráveis",
            subtitle: "Desenvolvimento de identidade visual premium e portfólio digital para especialista em ciência de dados (Projeto aprovado pelo cliente)",
            overview: {
                objective: "Posicionar um talentoso profissional de dados no mercado através de um portfólio digital sofisticado, combinando design impactante com funcionalidades estratégicas para captação de oportunidades profissionais.",
                challenge: "Transpor a barreira técnica de um especialista em dados para o universo visual, criando uma presença digital que comunique sua expertise de forma clara e atraente.",
                solution: "Solução completa incluindo: sistema de identidade visual corporativa, e-mail marketing HTML interativo com respostas diretas, website otimizado para conversão, estratégia de SEO avançada e suporte multilíngue (PT/EN) para ampliação de oportunidades internacionais."
            },
            process: [
                { emoji: "🎨", title: "Design de Marca Premium", description: "Criação de identidade visual única com diretrizes de aplicação claras para todos os pontos de contato." },
                { emoji: "💻", title: "Desenvolvimento Web Sob Medida", description: "Construção de website performático com arquitetura de informação otimizada para conversão." },
                { emoji: "📧", title: "Solução Completa de E-mail Marketing", description: "Desenvolvimento de templates responsivos com interatividade avançada para melhor engajamento." },
                { emoji: "📈", title: "Otimização para Mecanismos de Busca", description: "Implementação de técnicas avançadas de SEO para maximizar visibilidade orgânica." },
                { emoji: "🌎", title: "Preparação para Mercado Global", description: "Estrutura multilíngue e adaptação cultural para ampliar oportunidades internacionais." }
            ],
            results: {
                metrics: [
                    { value: "Agilidade na Entrega", description: "Projeto concluído em aproximadamente 1,5 semana", icon: "⏱️" },
                    { value: "Eficiência Comprovada", description: "Resultados expressivos e investimento valioso", icon: "📈" },
                    { value: "Diferencial Competitivo", description: "Posicionamento único no mercado como especialista completo", icon: "🏆" }
                ],
                feedback: "Tive a satisfação de contar com os serviços da Budri em um pacote completo e acessível, que envolveu a criação do meu portfólio, desenvolvimento da identidade visual da marca, estratégias de posicionamento e um e-mail marketing totalmente personalizado, responsivo e interativo. O trabalho foi conduzido com excelência, atenção aos detalhes e total comprometimento com a entrega de valor. Estou plenamente satisfecho com os resultados e recomendo a Budri com total confiança."
            },
            tools: [
                { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
                { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
                { name: "JavaScript", icon: "📘", color: "bg-yellow-100 dark:bg-yellow-900" },
                { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
                { name: "EmailJS", icon: "📧", color: "bg-red-100 dark:bg-red-900" },
                { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
                { name: "HTML5", icon: "🖥️", color: "bg-orange-100 dark:bg-orange-900" }
            ],
            lessons: [
                {
                    title: "Design Estratégico",
                    description: "Aprendi que cada elemento visual deve comunicar valor profissional - não é sobre estética isolada, mas sobre traduzir expertise em linguagem visual."
                },
                {
                    title: "Performance como Diferencial",
                    description: "Otimizações técnicas no front-end impactam diretamente a percepção de qualidade do profissional representado."
                },
                {
                    title: "Sistemas Escaláveis",
                    description: "Desenvolvi uma estrutura que permite ao cliente atualizar conteúdo facilmente sem comprometer o design."
                },
                {
                    title: "Interatividade que Converte",
                    description: "Elementos interativos bem implementados aumentam significativamente o engajamento e conversões."
                },
                {
                    title: "SEO como Aliado",
                    description: "Técnicas avançadas de indexação podem posicionar um portfólio acima de grandes empresas em buscas específicas."
                },
                {
                    title: "Impacto Mensurável",
                    description: "O projeto gerou oportunidades concretas para o cliente, validando o investimento em design profissional."
                },
                {
                    title: "Tecnologia e Humanização",
                    description: "Encontrei o equilíbrio perfeito entre demonstração técnica e conexão humana na apresentação profissional."
                }
            ]
        },
        es: {
            title: "LKS Data - Transformando Datos en Experiencias Visuales Memorables",
            subtitle: "Desarrollo de identidad visual premium y portafolio digital para especialista en ciencia de datos (Proyecto aprobado por el cliente)",
            overview: {
                objective: "Posicionar a un talentoso profesional de datos en el mercado a través de un portafolio digital sofisticado, combinando diseño impactante con funcionalidades estratégicas para la captación de oportunidades profesionales.",
                challenge: "Superar la barrera técnica de un especialista en datos para el universo visual, creando una presencia digital que comunique su expertise de forma clara y atractiva.",
                solution: "Solución completa incluyendo: sistema de identidad visual corporativa, email marketing HTML interactivo con respuestas directas, website optimizado para conversión, estrategia de SEO avanzada y soporte multilingüe (ES/EN) para ampliación de oportunidades internacionales."
            },
            process: [
                { emoji: "🎨", title: "Diseño de Marca Premium", description: "Creación de identidad visual única con guías de aplicación claras para todos los puntos de contacto." },
                { emoji: "💻", title: "Desarrollo Web a Medida", description: "Construcción de website performático con arquitectura de información optimizada para conversión." },
                { emoji: "📧", title: "Solución Completa de Email Marketing", description: "Desarrollo de templates responsivos con interactividad avanzada para mejor engagement." },
                { emoji: "📈", title: "Optimización para Motores de Búsqueda", description: "Implementación de técnicas avanzadas de SEO para maximizar visibilidad orgánica." },
                { emoji: "🌎", title: "Preparación para Mercado Global", description: "Estructura multilingüe y adaptación cultural para ampliar oportunidades internacionales." }
            ],
            results: {
                metrics: [
                    { value: "Agilidad en la Entrega", description: "Proyecto concluido en aproximadamente 1,5 semanas", icon: "⏱️" },
                    { value: "Eficiencia Comprobada", description: "Resultados expresivos e inversión valiosa", icon: "📈" },
                    { value: "Diferenciación Competitiva", description: "Posicionamiento único en el mercado como especialista completo", icon: "🏆" }
                ],
                feedback: "Tuve la satisfacción de contar con los servicios de Budri en un paquete completo y accesible, que involucró la creación de mi portafolio, desarrollo de la identidad visual de la marca, estrategias de posicionamiento y un email marketing totalmente personalizado, responsivo e interactivo. El trabajo fue conducido con excelencia, atención a los detalles y total compromiso con la entrega de valor. Estoy plenamente satisfecho con los resultados y recomiendo a Budri con total confianza."
            },
            tools: [
                { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
                { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
                { name: "JavaScript", icon: "📘", color: "bg-yellow-100 dark:bg-yellow-900" },
                { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
                { name: "EmailJS", icon: "📧", color: "bg-red-100 dark:bg-red-900" },
                { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
                { name: "HTML5", icon: "🖥️", color: "bg-orange-100 dark:bg-orange-900" }
            ],
            lessons: [
                {
                    title: "Diseño Estratégico",
                    description: "Aprendí que cada elemento visual debe comunicar valor profesional - no es sobre estética aislada, sino sobre traducir expertise en lenguaje visual."
                },
                {
                    title: "Performance como Diferenciador",
                    description: "Optimizaciones técnicas en el front-end impactan directamente la percepción de calidad del profesional representado."
                },
                {
                    title: "Sistemas Escalables",
                    description: "Desarrollé una estructura que permite al cliente actualizar contenido fácilmente sin comprometer el diseño."
                },
                {
                    title: "Interactividad que Convierte",
                    description: "Elementos interactivos bien implementados aumentan significativamente el engagement y conversiones."
                },
                {
                    title: "SEO como Aliado",
                    description: "Técnicas avanzadas de indexación pueden posicionar un portafolio sobre grandes empresas en búsquedas específicas."
                },
                {
                    title: "Impacto Medible",
                    description: "El proyecto generó oportunidades concretas para el cliente, validando la inversión en diseño profesional."
                },
                {
                    title: "Tecnología y Humanización",
                    description: "Encontré el equilibrio perfecto entre demostración técnica y conexión humana en la presentación profesional."
                }
            ]
        },
        en: {
            title: "LKS Data - Transforming Data into Memorable Visual Experiences",
            subtitle: "Premium visual identity development and digital portfolio for data science specialist (Client-approved project)",
            overview: {
                objective: "Position a talented data professional in the market through a sophisticated digital portfolio, combining striking design with strategic functionalities for professional opportunity generation.",
                challenge: "Bridge the technical barrier of a data specialist into the visual realm, creating a digital presence that clearly and attractively communicates their expertise.",
                solution: "Complete solution including: corporate visual identity system, interactive HTML email marketing with direct replies, conversion-optimized website, advanced SEO strategy, and multilingual support (EN/PT) for international opportunity expansion."
            },
            process: [
                { emoji: "🎨", title: "Premium Brand Design", description: "Creation of unique visual identity with clear application guidelines for all touchpoints." },
                { emoji: "💻", title: "Custom Web Development", description: "Building of high-performance website with information architecture optimized for conversion." },
                { emoji: "📧", title: "Complete Email Marketing Solution", description: "Development of responsive templates with advanced interactivity for better engagement." },
                { emoji: "📈", title: "Search Engine Optimization", description: "Implementation of advanced SEO techniques to maximize organic visibility." },
                { emoji: "🌎", title: "Global Market Preparation", description: "Multilingual structure and cultural adaptation to expand international opportunities." }
            ],
            results: {
                metrics: [
                    { value: "Agile Delivery", description: "Project completed in approximately 1.5 weeks", icon: "⏱️" },
                    { value: "Proven Efficiency", description: "Expressive results and valuable investment", icon: "📈" },
                    { value: "Competitive Edge", description: "Unique market positioning as a complete specialist", icon: "🏆" }
                ],
                feedback: "I had the pleasure of counting on Budri's services for a complete and accessible package, which involved the creation of my portfolio, development of the brand's visual identity, positioning strategies, and a fully customized, responsive, and interactive email marketing. The work was conducted with excellence, attention to detail, and total commitment to delivering value. I am fully satisfied with the results and recommend Budri with complete confidence."
            },
            tools: [
                { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
                { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
                { name: "JavaScript", icon: "📘", color: "bg-yellow-100 dark:bg-yellow-900" },
                { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
                { name: "EmailJS", icon: "📧", color: "bg-red-100 dark:bg-red-900" },
                { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
                { name: "HTML5", icon: "🖥️", color: "bg-orange-100 dark:bg-orange-900" }
            ],
            lessons: [
                {
                    title: "Strategic Design",
                    description: "Learned that every visual element must communicate professional value - it's not about isolated aesthetics but translating expertise into visual language."
                },
                {
                    title: "Performance as Differentiator",
                    description: "Front-end technical optimizations directly impact the perceived quality of the represented professional."
                },
                {
                    title: "Scalable Systems",
                    description: "Developed a structure that allows the client to easily update content without compromising design."
                },
                {
                    title: "Converting Interactivity",
                    description: "Well-implemented interactive elements significantly increase engagement and conversions."
                },
                {
                    title: "SEO as Ally",
                    description: "Advanced indexing techniques can position a portfolio above large companies in specific searches."
                },
                {
                    title: "Measurable Impact",
                    description: "The project generated concrete opportunities for the client, validating the investment in professional design."
                },
                {
                    title: "Technology and Humanization",
                    description: "Found the perfect balance between technical demonstration and human connection in professional presentation."
                }
            ]
        }
    };

    const t = translations[language] || translations["pt"];

    const handleBackToMain = () => {
        router.push("/");
    };

    // handleLanguageChange removed as it is handled via context

    const mediaItems: any = {
        pt: [
            {
                type: 'image',
                src: "/images/project-lks/slide1-pt.png",
                alt: "Capa do projeto LKS Data",
                caption: "Introdução ao projeto LKS Data – soluções inteligentes em análise de dados"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide2-pt.png",
                alt: "Vídeo demonstrativo",
                caption: "Conheça nossa solução em um vídeo introdutório dinâmico"
            },
            {
                type: 'video',
                url: "/videos/video-lks.mp4",
                alt: "Demonstração do site LKS Data",
                caption: "Tour completo pela plataforma – dados de forma clara e acessível"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide4-pt.png",
                alt: "Email HTML",
                caption: "Campanha de e-mail: design moderno, responsivo e interativo"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide5.png",
                alt: "Email HTML",
                caption: "Layout adaptável a qualquer dispositivo, com alta usabilidade"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide6.png",
                alt: "Logo",
                caption: "Identidade visual do LKS Data – inovação e tecnologia em destaque"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide7-pt.png",
                alt: "Significado da Logo",
                caption: "Conceito da logo: conexão, precisão e evolução constante"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide8-pt.png",
                alt: "Cores e Tipografia",
                caption: "Paleta e tipografia alinhadas à clareza e profissionalismo"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide9-pt.png",
                alt: "Cores e Tipografia",
                caption: "Escolhas visuais pensadas para legibilidade e impacto"
            }
        ],
        en: [
            {
                type: 'image',
                src: "/images/project-lks/slide1-en.png",
                alt: "LKS Data Project Cover",
                caption: "Introduction to the LKS Data Project – Smart data analysis solutions"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide2-en.png",
                alt: "Demo Video",
                caption: "Get to know our solution through this dynamic introduction video"
            },
            {
                type: 'video',
                url: "/videos/video-lks.mp4",
                alt: "LKS Data Website Demo",
                caption: "Full platform tour – Clear and accessible data visualization"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide4-en.png",
                alt: "HTML Email",
                caption: "Email campaign – Modern, responsive, and interactive design"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide5.png",
                alt: "HTML Email",
                caption: "Adaptive layout for any device, offering a seamless experience"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide6.png",
                alt: "Logo",
                caption: "LKS Data visual identity – Highlighting innovation and technology"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide7-en.png",
                alt: "Logo Meaning",
                caption: "Logo concept: connection, precision, and constant evolution"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide8-en.png",
                alt: "Colors and Typography",
                caption: "Palette and typography aligned with clarity and professionalism"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide9-en.png",
                alt: "Colors and Typography",
                caption: "Visual elements designed for readability and impact"
            }
        ],
        es: [
            {
                type: 'image',
                src: "/images/project-lks/slide1-es.png",
                alt: "Portada del proyecto LKS Data",
                caption: "Introducción al proyecto LKS Data – Soluciones inteligentes en análisis de datos"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide2-es.png",
                alt: "Video Demostrativo",
                caption: "Conoce nuestra solución a través de este video introductorio dinámico"
            },
            {
                type: 'video',
                url: "/videos/video-lks.mp4",
                alt: "Demostración del sitio LKS Data",
                caption: "Recorrido completo por la plataforma – Visualización de datos clara y accesible"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide4-es.png",
                alt: "Email HTML",
                caption: "Campaña de email – Diseño moderno, interactivo y adaptable"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide5.png",
                alt: "Email HTML",
                caption: "Diseño adaptable a cualquier dispositivo, con gran usabilidad"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide6.png",
                alt: "Logo",
                caption: "Identidad visual de LKS Data – Innovación y tecnología en primer plano"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide7-es.png",
                alt: "Significado del Logo",
                caption: "Concepto del logo: conexión, precisión y evolución constante"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide8-es.png",
                alt: "Colores y Tipografía",
                caption: "Paleta y tipografía enfocadas en claridad y profesionalismo"
            },
            {
                type: 'image',
                src: "/images/project-lks/slide9-es.png",
                alt: "Colores y Tipografía",
                caption: "Elementos visuales diseñados para legibilidad e impacto"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <header id="project-header">
                <ProjectsNav
                    onBackToMain={handleBackToMain}
                />
            </header>

            <main id="project-main">
                <section id="project-hero">
                    <ProjectHero
                        title={t.title}
                        subtitle={t.subtitle}
                        image="/images/project-lks/capa.png"
                        darkImage="/images/project-lks/capa.png"
                        imagePosition="center"
                        language={language}
                    />
                </section>

                <section id="project-overview">
                    <ProjectOverview
                        objective={t.overview.objective}
                        challenge={t.overview.challenge}
                        solution={t.overview.solution}
                        language={language}
                    />
                </section>

                <section id="creative-process">
                    <CreativeProcess steps={t.process} language={language} />
                </section>

                <section id="results-impact">
                    <ResultsImpact
                        metrics={t.results.metrics}
                        feedback={t.results.feedback}
                        language={language}
                    />
                </section>

                <section id="project-gallery">
                    <GalleryCarousel
                        language={language}
                        mediaItems={mediaItems}
                    />
                </section>

                <section id="tools-used">
                    <ToolsUsed tools={t.tools} language={language} />
                </section>

                <section id="lessons-learned">
                    <LessonsLearned language={language} lessons={t.lessons} />
                </section>

                <section id="project-cta">
                    <ProjectCTA language={language} />
                </section>
            </main>
        </div>
    );
}

export default function ProjectPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ProjectContent />
        </Suspense>
    );
}
