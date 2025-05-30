"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

// Components
import ProjectHero from '@/components/ProjectHero';
import ProjectOverview from '@/components/ProjectOverview';
import CreativeProcess from '@/components/CreativeProcess';
import ResultsImpact from '@/components/ResultsImpact';
import GalleryCarousel from '@/components/GalleryCarousel';
import ToolsUsed from '@/components/ToolsUsed';
import LessonsLearned from '@/components/LessonsLearned';
import ProjectCTA from '@/components/ProjectCTA';
import ProjectsNav from '@/components/ProjectsNav';

const ProjectPage = ({ language = 'pt' }) => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

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
        { emoji: "🧠", title: "Pesquisa de Benchmark", description: "Análise de landing pages de marketplaces e marcas sustentáveis" },
        { emoji: "🎯", title: "Definição de Persona", description: "Foco em consumidores preocupados com sustentabilidade e estilo" },
        { emoji: "🎨", title: "Design Visual", description: "Exploração de cores, tipografia e imagens alinhadas à proposta jovem e consciente" },
        { emoji: "📢", title: "Copywriting Estratégico", description: "Mensagens diretas com CTA claras e benefícios destacados" },
        { emoji: "📱", title: "Responsividade", description: "Adaptação total para dispositivos móveis, mantendo apelo visual" }
      ],
      results: {
        metrics: [
          { value: "+75%", description: "de tempo médio na página", icon: "⏱️" },
          { value: "↑ Conversão", description: "Aumento nas interações com o botão de ação", icon: "🔁" },
          { value: "💡", description: "Clareza na proposta de valor", icon: "✨" }
        ],
        feedback: "O design da landing page combina apelo visual com estratégias de marketing, promovendo o propósito do projeto de forma clara e envolvente."
      },
      tools: [
        { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "TypeScript", icon: "📘", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        {
          title: "Design com foco em marketing",
          description: "Aprendi a criar interfaces persuasivas que despertam interesse e levam à ação."
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
          title: "Apresentação de valor",
          description: "A landing apresenta claramente o que é o BreShopp e por que ele importa."
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
        { emoji: "🧠", title: "Investigación de Benchmark", description: "Análisis de páginas de destino de marketplaces y marcas sostenibles" },
        { emoji: "🎯", title: "Definición de Persona", description: "Enfoque en consumidores preocupados por sostenibilidad y estilo" },
        { emoji: "🎨", title: "Diseño Visual", description: "Exploración de colores, tipografía e imágenes alineadas con una propuesta joven y consciente" },
        { emoji: "📢", title: "Copywriting Estratégico", description: "Mensajes directos con CTAs claros y beneficios destacados" },
        { emoji: "📱", title: "Responsividad", description: "Adaptación total para dispositivos móviles manteniendo atractivo visual" }
      ],
      results: {
        metrics: [
          { value: "+75%", description: "de tiempo promedio en la página", icon: "⏱️" },
          { value: "↑ Conversión", description: "Aumento en interacciones con el botón de acción", icon: "🔁" },
          { value: "💡", description: "Claridad en la propuesta de valor", icon: "✨" }
        ],
        feedback: "El diseño de la página de destino combina atractivo visual con estrategias de marketing, promoviendo el propósito del proyecto de forma clara y envolvente."
      },
      tools: [
        { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "TypeScript", icon: "📘", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        {
          title: "Diseño con enfoque en marketing",
          description: "Aprendí a crear interfaces persuasivas que despiertan interés y llevan a la acción."
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
          title: "Presentación de valor",
          description: "La página de destino presenta claramente qué es BreShopp y por qué es importante."
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
        { emoji: "🧠", title: "Benchmark Research", description: "Analysis of landing pages from sustainable brands and marketplaces" },
        { emoji: "🎯", title: "Persona Definition", description: "Targeting consumers who care about sustainability and style" },
        { emoji: "🎨", title: "Visual Design", description: "Exploration of colors, typography and imagery aligned with a young, conscious identity" },
        { emoji: "📢", title: "Strategic Copywriting", description: "Clear messaging with strong CTAs and highlighted benefits" },
        { emoji: "📱", title: "Responsive Layout", description: "Fully optimized for mobile without losing visual impact" }
      ],
      results: {
        metrics: [
          { value: "+75%", description: "average time spent on the page", icon: "⏱️" },
          { value: "↑ Conversion", description: "Increased engagement with CTA button", icon: "🔁" },
          { value: "💡", description: "Clear brand value communication", icon: "✨" }
        ],
        feedback: "The landing page design blends visual appeal with marketing strategies, clearly and compellingly promoting the project's purpose."
      },
      tools: [
        { name: "Next.js", icon: "⚡", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "TypeScript", icon: "📘", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 dark:bg-cyan-900" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        {
          title: "Design with marketing focus",
          description: "I learned to create persuasive interfaces that drive attention and action."
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
          title: "Value proposition presentation",
          description: "The landing clearly communicates what BreShopp is and why it matters."
        },
        {
          title: "Strategic thinking",
          description: "Every design decision was tied to the goal of engagement and conversion."
        }
      ]
    }
  };

  const t = translations[currentLanguage] || translations['pt'];

  const handleBackToMain = () => {
    router.push('/');
  };

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  const galleryImages = {
    pt: [
      { src: "/images/project-breshopp/slide1-pt.svg", alt: "Interface do marketplace", caption: "Tela principal com navegação intuitiva" },
      { src: "/images/project-breshopp/slide2-pt.svg", alt: "Painel de impacto", caption: "Painel de impacto" },
      { src: "/images/project-breshopp/slide3-pt.svg", alt: "Perfil do vendedor", caption: "Perfil do vendedor" }
    ],
    en: [
      { src: "/images/project-breshopp/slide1-en.svg", alt: "Main screen of the landing page", caption: "Main screen with intuitive navigation" },
      { src: "/images/project-breshopp/slide2-en.svg", alt: "Highlight of social/environmental benefits", caption: "Highlight of social/environmental benefits" },
      { src: "/images/project-breshopp/slide3-en.svg", alt: "Humanized and inclusive brand presentation", caption: "Humanized and inclusive brand presentation" }
    ],
    es: [
      { src: "/images/project-breshopp/slide1-es.svg", alt: "Pantalla principal de la página de destino", caption: "Pantalla principal con navegación intuitiva" },
      { src: "/images/project-breshopp/slide2-es.svg", alt: "Destacado de beneficios sociales/ambientales", caption: "Destacado de beneficios sociales/ambientales" },
      { src: "/images/project-breshopp/slide3-es.svg", alt: "Presentación humanizada e inclusiva", caption: "Presentación humanizada e inclusiva" }
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
            image="/images/project-breshopp/logoworkingbrain-white.svg"
            darkImage="/images/project-breshopp/logoworkingbrain-white.svg"
            imagePosition="bottom"
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
          <CreativeProcess
            steps={t.process}
            language={currentLanguage}
          />
        </section>

        <section id="results-impact">
          <ResultsImpact 
            metrics={t.results.metrics}
            feedback={t.results.feedback}
            beforeAfterImages={{
              before: "/images/project-breshopp/antes.svg",
              after: "/images/project-breshopp/depois.svg",
              beforeAlt: currentLanguage === 'en' ? "Generic presentation" : 
                        currentLanguage === 'es' ? "Presentación genérica" : "Apresentação genérica",
              afterAlt: currentLanguage === 'en' ? "Emotional and purposeful design" : 
                      currentLanguage === 'es' ? "Diseño emocional y con propósito" : "Design emocional e com propósito"
            }}
            language={currentLanguage}
          />
        </section>

        <section id="project-gallery">
          <GalleryCarousel 
            language={currentLanguage}
            images={galleryImages}
          />
        </section>

        <section id="tools-used">
          <ToolsUsed
            tools={t.tools}
            language={currentLanguage}
          />
        </section>

        <section id="lessons-learned">
          <LessonsLearned
            language={currentLanguage}
            lessons={t.lessons}
          />
        </section>

        <section id="project-cta">
          <ProjectCTA
            language={currentLanguage}
          />
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;