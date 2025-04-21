"use client";

import React from 'react';
import ProjectHero from '@/components/ProjectHero';
import ProjectOverview from '@/components/ProjectOverview';
import CreativeProcess from '@/components/CreativeProcess';
import ResultsImpact from '@/components/ResultsImpact';
import GalleryCarousel from '@/components/GalleryCarousel';
import ToolsUsed from '@/components/ToolsUsed';
import LessonsLearned from '@/components/LessonsLearned';
import ProjectCTA from '@/components/ProjectCTA';
import ProjectsNav from '@/components/ProjectsNav';
import WorkingBrainLogo from "@/assets/img/logoworkingbrain.svg";
import BrianMascot from "@/assets/img/teste.jpg";
import ColorPalette from "@/assets/img/teste.jpg";
import { useRouter } from 'next/navigation';

const ProjectPage = ({ language = 'en' }) => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const translations = {
    pt: {
      title: "WorkingBrain - Identidade Visual e Gamificação",
      subtitle: "Design de marca e personagem para aplicativo educacional | TCC ETEC",
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
        feedback: "A identidade visual e o mascote foram fundamentais para comunicar o propósito do WorkingBrain de forma imediata e memorável.",
        gallery: [
          { src: WorkingBrainLogo, alt: "Logo do WorkingBrain", caption: "Logo com cérebro saindo da caixa" },
          { src: BrianMascot, alt: "Mascote Brian", caption: "Brian, o mascote cerebral" },
          { src: ColorPalette, alt: "Paleta de cores", caption: "Sistema de cores da marca" }
        ]
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
      subtitle: "Brand and character design for educational app | Final Project",
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
        feedback: "The visual identity and mascot were crucial to immediately and memorably communicate WorkingBrain's purpose.",
        gallery: [
          { src: WorkingBrainLogo, alt: "WorkingBrain logo", caption: "Brain-out-of-box logo" },
          { src: BrianMascot, alt: "Brian mascot", caption: "Brian, the brain mascot" },
          { src: ColorPalette, alt: "Color palette", caption: "Brand color system" }
        ]
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
      subtitle: "Diseño de marca y personaje para aplicación educativa | Proyecto Final",
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
        feedback: "La identidad visual y la mascota fueron fundamentales para comunicar el propósito de WorkingBrain de manera inmediata y memorable.",
        gallery: [
          { src: WorkingBrainLogo, alt: "Logo de WorkingBrain", caption: "Logo con cerebro saliendo de la caja" },
          { src: BrianMascot, alt: "Mascota Brian", caption: "Brian, la mascota cerebral" },
          { src: ColorPalette, alt: "Paleta de colores", caption: "Sistema de colores de la marca" }
        ]
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

  const t = translations[currentLanguage] || translations['en'];

  const handleBackToMain = () => {
    router.push('/');
  };

  const handleLanguageChange = (newLanguage) => {
    setCurrentLanguage(newLanguage);
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
            image={WorkingBrainLogo}
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
              before: WorkingBrainLogo,
              after: BrianMascot,
              beforeAlt: "Logo design",
              afterAlt: "Final mascot"
            }}
            language={currentLanguage}
          />
        </section>
        
        <section id="project-gallery">
          <GalleryCarousel 
            images={t.results.gallery}
            language={currentLanguage}
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