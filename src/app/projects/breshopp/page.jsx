"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Components
import ProjectHero from "@/components/ProjectHero";
import ProjectOverview from "@/components/ProjectOverview";
import CreativeProcess from "@/components/CreativeProcess";
import ResultsImpact from "@/components/ResultsImpact";
import GalleryCarousel from "@/components/GalleryCarousel";
import ToolsUsed from "@/components/ToolsUsed";
import LessonsLearned from "@/components/LessonsLearned";
import ProjectCTA from "@/components/ProjectCTA";
import ProjectsNav from "@/components/ProjectsNav";

export default function ProjectPage({ searchParams }) {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  useEffect(() => {
    // Verificar se há um parâmetro de idioma na URL
    const urlLanguage = searchParams?.lang;
    
    if (urlLanguage && ["pt", "es", "en"].includes(urlLanguage)) {
      setCurrentLanguage(urlLanguage);
      return;
    }

    // Verificar o idioma do navegador
    const browserLanguage = navigator.language || navigator.userLanguage;
    const primaryLanguage = browserLanguage.split('-')[0];
    
    // Definir o idioma padrão com base no navegador
    if (primaryLanguage === 'pt' || primaryLanguage === 'es') {
      setCurrentLanguage(primaryLanguage);
    } else {
      // Padrão para inglês se não for um dos idiomas suportados
      setCurrentLanguage('en');
    }
  }, [searchParams]);

  const translations = {
    pt: {
      title: "Landing Page do BreShopp",
      subtitle: "Design estratégico para conversão | Aplicação de marketing e UX | Projeto Integrador – Tecnólogo em Desenvolvimento de Software Multiplataforma",
      overview: {
        objective: "Desenvolver uma landing page atraente e funcional que promova o BreShopp e converta visitantes em apoiadores do consumo consciente.",
        challenge: "Aliar estética, clareza e persuasão para comunicar os valores da marca e aumentar o engajamento.",
        solution: "Design responsivo focado em hierarquia visual, prova social e apelo emocional, com base em princípios de marketing digital."
      },
      process: [
        { emoji: "🧠", title: "Pesquisa de Benchmark", description: "Análise detalhada de landing pages de marketplaces e marcas sustentáveis para identificar melhores práticas" },
        { emoji: "🎨", title: "Design de Interface", description: "Criação de wireframes e protótipos focados na experiência do usuário e identidade visual da marca" },
        { emoji: "🔍", title: "Otimização SEO", description: "Estratégia de palavras-chave e estrutura semântica para melhor ranqueamento e conversão" },
        { emoji: "📢", title: "Copywriting Estratégico", description: "Mensagens diretas com CTAs claras e benefícios destacados para maximizar a conversão" },
        { emoji: "📱", title: "Responsividade", description: "Adaptação total para dispositivos móveis, garantindo usabilidade e apelo visual em todas as plataformas" }
      ],
      results: {
        metrics: [
          { value: "+75%", description: "de tempo médio na página", icon: "⏱️" },
          { value: "↑ SEO", description: "Melhor posicionamento orgânico com estratégias de conteúdo otimizado", icon: "🔍" },
          { value: "💡", description: "Clareza na proposta de valor", icon: "✨" }
        ],
        feedback: "O design da landing page combina apelo visual com estratégias de marketing, promovendo o propósito do projeto de forma clara e envolvente."
      },
      tools: [
        { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "JavaScript", icon: "📘", color: "bg-yellow-100 dark:bg-yellow-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        {
          title: "Design com foco em marketing",
          description: "Aprendi a criar interfaces persuasivas que despertam interesse e levam à ação."
        },
        {
          title: "React e SEO",
          description: "Aplicações React tradicionais têm limitações de SEO devido ao carregamento client-side. Com Next.js (SSR e SSG), tornou-se possível ter melhor indexação e ranqueamento."
        },
        {
          title: "Clareza na comunicação visual",
          description: "Usei elementos visuais para reforçar valores e diferenciar a marca no mercado."
        },
        {
          title: "UX para páginas de conversão",
          description: "Apliquei técnicas de escaneabilidade, contraste e hierarquia para guiar o usuário."
        },
        {
          title: "Efeito Parallax e Interatividade",
          description: "Aprendi a implementar parallax na primeira seção para criar profundidade visual e engajar os usuários imediatamente, aumentando o tempo de permanência na página."
        },
        {
          title: "Pensamento estratégico",
          description: "Pensei além do layout e conectei cada decisão visual ao objetivo de engajamento."
        }
      ]
    },
    es: {
      title: "Página de Destino de BreShopp",
      subtitle: "Diseño estratégico para conversión | Aplicación de marketing y UX | Proyecto Integrador – Tecnólogo en Desarrollo de Software Multiplataforma",
      overview: {
        objective: "Desarrollar una página de destino atractiva y funcional que promueva BreShopp y convierta visitantes en seguidores del consumo consciente.",
        challenge: "Combinar estética, claridad y persuasión para comunicar los valores de la marca y aumentar el compromiso.",
        solution: "Diseño responsive enfocado en jerarquía visual, prueba social y apelación emocional basado en principios de marketing digital."
      },
      process: [
        { emoji: "🧠", title: "Investigación de Benchmark", description: "Análisis detallado de páginas de destino de marketplaces y marcas sostenibles para identificar mejores prácticas" },
        { emoji: "🎨", title: "Diseño de Interfaz", description: "Creación de wireframes y prototipos centrados en la experiencia del usuario e identidad visual de la marca" },
        { emoji: "🔍", title: "Optimización SEO", description: "Estrategia de palabras clave y estructura semántica para mejor posicionamiento y conversión" },
        { emoji: "📢", title: "Copywriting Estratégico", description: "Mensajes directos con CTAs claros y beneficios destacados para maximizar la conversión" },
        { emoji: "📱", title: "Responsividad", description: "Adaptación completa para dispositivos móviles, garantizando usabilidad y atractivo visual en todas las plataformas" }
      ],
      results: {
        metrics: [
          { value: "+75%", description: "de tiempo promedio en la página", icon: "⏱️" },
          { value: "↑ SEO", description: "Mejor posicionamiento orgánico con estrategias de contenido optimizado", icon: "🔍" },
          { value: "💡", description: "Claridad en la propuesta de valor", icon: "✨" }
        ],
        feedback: "El diseño de la página de destino combina atractivo visual con estrategias de marketing, promoviendo el propósito del proyecto de forma clara y envolvente."
      },
      tools: [
        { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "JavaScript", icon: "📘", color: "bg-yellow-100 dark:bg-yellow-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        {
          title: "Diseño con enfoque en marketing",
          description: "Aprendí a crear interfaces persuasivas que despiertan interés y llevan a la acción."
        },
        {
          title: "React y SEO",
          description: "Las aplicaciones React tradicionales tienen limitaciones de SEO debido a la renderización del lado del cliente. Con Next.js (SSR y SSG), se hizo posible una mejor indexación y posicionamiento."
        },
        {
          title: "Claridad en comunicación visual",
          description: "Usé elementos visuales para reforzar valores y diferenciar la marca en el mercado."
        },
        {
          title: "UX para páginas de conversión",
          description: "Apliqué técnicas de escaneabilidad, contraste y jerarquía para guiar al usuario."
        },
        {
          title: "Efecto Parallax e Interactividad",
          description: "Aprendí a implementar parallax en la primera sección para crear profundidad visual y captar la atención de los usuarios inmediatamente, aumentando el tiempo de permanencia en la página."
        },
        {
          title: "Pensamiento estratégico",
          description: "Pensé más allá del diseño y conecté cada decisión visual con el objetivo de compromiso."
        }
      ]
    },
    en: {
      title: "BreShopp Landing Page",
      subtitle: "Strategic design for conversion | Marketing and UX in action | Integrator Project – Technologist in Multiplatform Software Development",
      overview: {
        objective: "Develop an attractive and functional landing page to promote BreShopp and turn visitors into conscious consumers.",
        challenge: "Combine aesthetics, clarity and persuasion to communicate the brand's values and increase engagement.",
        solution: "Responsive design focused on visual hierarchy, social proof and emotional appeal based on digital marketing principles."
      },
      process: [
        { emoji: "🧠", title: "Benchmark Research", description: "Detailed analysis of landing pages from sustainable brands and marketplaces to identify best practices" },
        { emoji: "🎨", title: "Interface Design", description: "Creation of wireframes and prototypes focused on user experience and brand visual identity" },
        { emoji: "🔍", title: "SEO Optimization", description: "Keyword strategy and semantic structure for better ranking and conversion" },
        { emoji: "📢", title: "Strategic Copywriting", description: "Clear messaging with strong CTAs and highlighted benefits to maximize conversion" },
        { emoji: "📱", title: "Responsive Layout", description: "Full adaptation for mobile devices, ensuring usability and visual appeal across all platforms" }
      ],
      results: {
        metrics: [
          { value: "+75%", description: "average time spent on the page", icon: "⏱️" },
          { value: "↑ SEO", description: "Better organic ranking with optimized content strategy", icon: "🔍" },
          { value: "💡", description: "Clear brand value communication", icon: "✨" }
        ],
        feedback: "The landing page design blends visual appeal with marketing strategies, clearly and compellingly promoting the project's purpose."
      },
      tools: [
        { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "JavaScript", icon: "📘", color: "bg-yellow-100 dark:bg-yellow-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        {
          title: "Design with marketing focus",
          description: "I learned to create persuasive interfaces that drive attention and action."
        },
        {
          title: "React and SEO",
          description: "Traditional React applications have SEO limitations due to client-side rendering. With Next.js (SSR and SSG), it became possible to achieve better indexing and ranking."
        },
        {
          title: "Visual communication clarity",
          description: "I used visuals to reinforce values and differentiate the brand."
        },
        {
          title: "UX for conversion pages",
          description: "I applied techniques like scannability, contrast and hierarchy to guide users."
        },
        {
          title: "Parallax Effect and Interactivity",
          description: "I learned to implement parallax in the first section to create visual depth and immediately engage users, increasing time spent on the page."
        },
        {
          title: "Strategic thinking",
          description: "Every design decision was tied to the goal of engagement and conversion."
        }
      ]
    }
  };

  const t = translations[currentLanguage] || translations["pt"];

  const handleBackToMain = () => {
    router.push("/");
  };

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  const mediaItems = {
    pt: [
      {
        type: 'image', 
        src: "/images/project-breshopp/slide1.svg",
        alt: "Visão geral do projeto BreShopp",
        caption: "Visão geral da arquitetura da landing page e fluxo de conversão"
      },
      {
        type: 'image',
        src: "/images/project-breshopp/slide2-pt.svg",
        alt: "Detalhes da estrutura de conteúdo",
        caption: "Estrutura de conteúdo otimizada para conversão e engajamento"
      },
      {
        type: 'video',
        url: "/videos/video-breshopp.mp4",
        alt: "Demonstração interativa da landing page",
        caption: "Demonstração das funcionalidades e experiência do usuário"
      },
      {
        type: 'image', 
        src: "/images/project-breshopp/slide4-pt.svg",
        alt: "Design responsivo em múltiplos dispositivos",
        caption: "Adaptação perfeita para desktop, tablet e mobile"
      },
      {
        type: 'image', 
        src: "/images/project-breshopp/slide5-pt.svg",
        alt: "Elementos de otimização SEO",
        caption: "Estratégias implementadas para melhorar o ranqueamento orgânico"
      }
    ],
    en: [
      {
        type: 'image',
        src: "/images/project-breshopp/slide1.svg", 
        alt: "BreShopp project overview", 
        caption: "Landing page architecture and conversion flow overview"
      },
      {
        type: 'image',
        src: "/images/project-breshopp/slide2-en.svg", 
        alt: "Content structure details", 
        caption: "Content structure optimized for conversion and engagement"
      },
      {
        type: 'video',
        url: "/videos/video-breshopp.mp4",
        alt: "Interactive landing page demonstration",
        caption: "Functionality and user experience demonstration"
      },
      {
        type: 'image', 
        src: "/images/project-breshopp/slide4-en.svg",
        alt: "Responsive design across devices",
        caption: "Seamless adaptation for desktop, tablet and mobile"
      },
      {
        type: 'image', 
        src: "/images/project-breshopp/slide5-en.svg",
        alt: "SEO optimization elements",
        caption: "Implemented strategies to improve organic ranking"
      }
    ],
    es: [
      {
        type: 'image',
        src: "/images/project-breshopp/slide1.svg", 
        alt: "Visión general del proyecto BreShopp", 
        caption: "Arquitectura de la página de destino y flujo de conversión"
      },
      {
        type: 'image',
        src: "/images/project-breshopp/slide2-es.svg", 
        alt: "Detalles de la estructura de contenido", 
        caption: "Estructura de contenido optimizada para conversión y compromiso"
      },
      {
        type: 'video',
        url: "/videos/video-breshopp.mp4",
        alt: "Demostración interactiva de la página de destino",
        caption: "Demostración de funcionalidades y experiencia del usuario"
      },
      {
        type: 'image', 
        src: "/images/project-breshopp/slide4-es.svg",
        alt: "Diseño responsive en múltiples dispositivos",
        caption: "Adaptación perfecta para desktop, tablet y móvil"
      },
      {
        type: 'image', 
        src: "/images/project-breshopp/slide5-es.svg",
        alt: "Elementos de optimización SEO",
        caption: "Estrategias implementadas para mejorar el posicionamiento orgánico"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header id="project-header">
        <ProjectsNav
          language={currentLanguage}
          onLanguageChange={handleLanguageChange}
          onBackToMain={handleBackToMain}
        />
      </header>

      <main id="project-main">
        <section id="project-hero">
          <ProjectHero
            title={t.title}
            subtitle={t.subtitle}
            image="/images/project-breshopp/capa.svg"
            darkImage="/images/project-breshopp/capa.svg"
            imagePosition="center"
            language={currentLanguage}
          />
        </section>

        <section id="project-overview">
          <ProjectOverview
            objective={t.overview.objective}
            challenge={t.overview.challenge}
            solution={t.overview.solution}
            language={currentLanguage}
          />
        </section>

        <section id="creative-process">
          <CreativeProcess steps={t.process} language={currentLanguage} />
        </section>

        <section id="results-impact">
          <ResultsImpact
            metrics={t.results.metrics}
            feedback={t.results.feedback}
            language={currentLanguage}
          />
        </section>

        <section id="project-gallery">
          <GalleryCarousel 
            language={currentLanguage}
            mediaItems={mediaItems} 
          />
        </section>

        <section id="tools-used">
          <ToolsUsed tools={t.tools} language={currentLanguage} />
        </section>

        <section id="lessons-learned">
          <LessonsLearned language={currentLanguage} lessons={t.lessons} />
        </section>

        <section id="project-cta">
          <ProjectCTA language={currentLanguage} />
        </section>
      </main>
    </div>
  );
}