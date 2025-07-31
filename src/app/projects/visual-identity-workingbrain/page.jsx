"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

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

export default function ProjectPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  useEffect(() => {
    // Verificar se há um parâmetro de idioma na URL
    const urlLanguage = searchParams.get('lang');

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
      title: "WorkingBrain - Identidade Visual e Gamificação",
      subtitle: "Design de marca e personagem para aplicativo educacional | TCC do Técnico em Informática para Internet",
      overview: {
        objective: "Criar uma identidade visual atraente e um mascote gamificado para um aplicativo de aprendizagem que promove o pensamento crítico.",
        challenge: "Desenvolver uma marca que comunique simultaneamente seriedade acadêmica e abordagem lúdica à educação.",
        solution: "Sistema visual baseado em formas geométricas com mascote personificado para criar conexão emocional com os usuários."
      },
      process: [
        { emoji: "🧠", title: "Conceptualização", description: "Definição do conceito central 'pensar fora da caixa'" },
        { emoji: "🎨", title: "Design da Logo", description: "Criação da logo com cérebro saindo da caixa usando formas geométricas" },
        { emoji: "🌈", title: "Paleta de Cores", description: "Seleção de cores psicologicamente alinhadas aos valores do projeto" },
        { emoji: "🧑‍🎨", title: "Design do Mascote", description: "Desenvolvimento do Brian, o cérebro personificado" },
        { emoji: "🔄", title: "Testes e Iteração", description: "Validação com colegas e orientadores" }
      ],
      results: {
        metrics: [
          { value: "100%", description: "Aprovação na banca", icon: "🎓" },
          { value: "+85", description: "Interessados no app", icon: "👥" }
        ],
        feedback: "A identidade visual e o mascote foram fundamentais para comunicar o propósito do WorkingBrain de forma imediata e memorável."
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Design Thinking", icon: "💡", color: "bg-blue-100 dark:bg-blue-900" }
      ],
      lessons: [
        { title: "Psicologia das cores", description: "Aprendi como cores específicas podem influenciar a percepção e emoções dos usuários em contextos educacionais." },
        { title: "Balanceamento visual", description: "Desenvolvi habilidades para equilibrar elementos geométricos rígidos com toques orgânicos e acolhedores." }
      ]
    },
    en: {
      title: "WorkingBrain - Visual Identity & Gamification",
      subtitle: "Brand and character design for educational app | Internet Computing Technical Final Project",
      overview: {
        objective: "Create an appealing visual identity and gamified mascot for a learning app that promotes critical thinking.",
        challenge: "Develop a brand that simultaneously communicates academic seriousness and playful approach to education.",
        solution: "Visual system based on geometric shapes with personified mascot to create emotional connection with users."
      },
      process: [
        { emoji: "🧠", title: "Conceptualization", description: "Defining the core 'thinking outside the box' concept" },
        { emoji: "🎨", title: "Logo Design", description: "Creating the brain-out-of-box logo using geometric shapes" },
        { emoji: "🌈", title: "Color Palette", description: "Selecting psychologically aligned colors for project values" },
        { emoji: "🧑‍🎨", title: "Mascot Design", description: "Development of Brian, the personified brain" },
        { emoji: "🔄", title: "Testing & Iteration", description: "Validation with peers and advisors" }
      ],
      results: {
        metrics: [
          { value: "100%", description: "Approval by evaluators", icon: "🎓" },
          { value: "85+", description: "Interested users", icon: "👥" }
        ],
        feedback: "The visual identity and mascot were crucial to immediately and memorably communicate WorkingBrain's purpose."
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Design Thinking", icon: "💡", color: "bg-blue-100 dark:bg-blue-900" }
      ],
      lessons: [
        { title: "Color psychology", description: "I learned how specific colors can influence user perception and emotions in educational contexts." },
        { title: "Visual balancing", description: "Developed skills to balance rigid geometric elements with organic and welcoming touches." }
      ]
    },
    es: {
      title: "WorkingBrain - Identidad Visual y Gamificación",
      subtitle: "Diseño de marca y personaje para aplicación educativa | Proyecto Final del Técnico en Informática para Internet",
      overview: {
        objective: "Crear una identidad visual atractiva y una mascota gamificada para una aplicación de aprendizaje que promueve el pensamiento crítico.",
        challenge: "Desarrollar una marca que comunique simultáneamente seriedad académica y enfoque lúdico de la educación.",
        solution: "Sistema visual basado en formas geométricas con mascota personificada para crear conexión emocional con los usuarios."
      },
      process: [
        { emoji: "🧠", title: "Conceptualización", description: "Definición del concepto central 'pensar fuera de la caja'" },
        { emoji: "🎨", title: "Diseño de Logo", description: "Creación del logo con cerebro saliendo de la caja usando formas geométricas" },
        { emoji: "🌈", title: "Paleta de Colores", description: "Selección de colores psicológicamente alineados con los valores del proyecto" },
        { emoji: "🧑‍🎨", title: "Diseño de Mascota", description: "Desarrollo de Brian, el cerebro personificado" },
        { emoji: "🔄", title: "Pruebas e Iteración", description: "Validación con compañeros y asesores" }
      ],
      results: {
        metrics: [
          { value: "100%", description: "Aprobación del tribunal", icon: "🎓" },
          { value: "+85", description: "Interesados en la app", icon: "👥" }
        ],
        feedback: "La identidad visual y la mascota fueron fundamentales para comunicar el propósito de WorkingBrain de manera inmediata y memorable."
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Design Thinking", icon: "💡", color: "bg-blue-100 dark:bg-blue-900" }
      ],
      lessons: [
        { title: "Psicología del color", description: "Aprendí cómo colores específicos pueden influir en la percepción y emociones de los usuarios en contextos educativos." },
        { title: "Equilibrio visual", description: "Desarrollé habilidades para equilibrar elementos geométricos rígidos con toques orgánicos y acogedores." }
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

  const mediaItems = {
    pt: [
      {
        type: 'image',
        src: "/images/project-workingbrain/slide1-pt.png",
        alt: "Capa do WorkingBrain",
        caption: "Identidade visual do aplicativo educacional WorkingBrain"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide2.svg",
        alt: "Logo",
        caption: "Logo principal do WorkingBrain"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide3-pt.svg",
        alt: "Apresentação da logo",
        caption: "Apresentação conceitual da marca e elementos que a compõem"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide4-pt.svg",
        alt: "Mascote",
        caption: "O mascote da plataforma"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide5-pt.svg",
        alt: "Brian, o cérebro",
        caption: "Brian, o cérebro: mascote carismático que conduz a gamificação"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide6-pt.svg",
        alt: "Cores e Tipografia",
        caption: "Cores e tipografias utilizadas na identidade visual"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide7-pt.svg",
        alt: "Significado visual",
        caption: "Significados por trás das escolhas cromáticas e tipográficas"
      }
    ],
    en: [
      {
        type: 'image',
        src: "/images/project-workingbrain/slide1-en.png",
        alt: "WorkingBrain Cover",
        caption: "Visual identity of the educational app WorkingBrain"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide2.svg",
        alt: "Logo",
        caption: "Main logo of the WorkingBrain project"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide3-en.svg",
        alt: "Logo presentation",
        caption: "Conceptual presentation of the brand and its visual elements"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide4-en.svg",
        alt: "Mascot",
        caption: "Platform mascot design"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide5-en.svg",
        alt: "Brian the brain",
        caption: "Brian the brain: friendly mascot guiding the gamification experience"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide6-en.svg",
        alt: "Colors and Typography",
        caption: "Color palette and typographic choices for the visual identity"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide7-en.svg",
        alt: "Visual meaning",
        caption: "Meanings behind the selected colors and typography"
      }
    ],
    es: [
      {
        type: 'image',
        src: "/images/project-workingbrain/slide1-es.png",
        alt: "Portada de WorkingBrain",
        caption: "Identidad visual de la aplicación educativa WorkingBrain"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide2.svg",
        alt: "Logo",
        caption: "Logo principal del proyecto WorkingBrain"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide3-es.svg",
        alt: "Presentación del logo",
        caption: "Presentación conceptual de la marca y sus elementos visuales"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide4-es.svg",
        alt: "Mascota",
        caption: "Diseño de la mascota de la plataforma"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide5-es.svg",
        alt: "Brian, el cerebro",
        caption: "Brian, el cerebro: mascota carismática que lidera la gamificación"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide6-es.svg",
        alt: "Colores y tipografía",
        caption: "Paleta de colores y tipografía utilizada en la identidad visual"
      },
      {
        type: 'image',
        src: "/images/project-workingbrain/slide7-es.svg",
        alt: "Significado visual",
        caption: "Significados detrás de los colores y tipografía elegidos"
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
            image="/images/project-workingbrain/brian.svg"
            darkImage="/images/project-workingbrain/brian.svg"
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
              before: "/images/project-workingbrain/antes.svg",
              after: "/images/project-workingbrain/depois.svg",
              beforeAlt: "Logo design",
              afterAlt: "Final mascot"
            }}
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
}