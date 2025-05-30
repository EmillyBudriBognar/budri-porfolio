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

const ProjectPage = ({ language = 'en' }) => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const translations = {
    pt: {
      title: "MárcioPhone - Gestão de Serviços Técnicos",
      subtitle: "Aplicativo para otimizar processos em assistência técnica de eletrônicos | Projeto Freelancer",
      overview: {
        objective: "Desenvolver um aplicativo para substituir o sistema manual de fichas de clientes e organizar o fluxo de trabalho da assistência técnica.",
        challenge: "Resolver os problemas de perda de fichas, desorganização e falta de praticidade no sistema em papel que a empresa utilizava.",
        solution: "Aplicativo mobile com cadastro digital de clientes, histórico de serviços, acompanhamento de status e notificações."
      },
      process: [
        { emoji: "🔍", title: "Análise de Problemas", description: "Identificação dos principais pontos de dor no sistema atual" },
        { emoji: "📱", title: "Wireframes", description: "Criação dos fluxos de navegação e interfaces principais" },
        { emoji: "🎨", title: "Design de Interface", description: "Desenvolvimento da UI com foco em usabilidade" },
        { emoji: "🧑‍💻", title: "Prototipagem", description: "Criação do protótipo interativo para validação" },
        { emoji: "🔄", title: "Testes e Ajustes", description: "Validação com o cliente e implementação de feedbacks" }
      ],
      results: {
        metrics: [
          { value: "70%", description: "Redução de tempo no atendimento", icon: "⏱️" },
          { value: "100%", description: "Eliminação de fichas perdidas", icon: "📋" }
        ],
        feedback: "O aplicativo transformou a gestão da assistência técnica, trazendo organização, rastreabilidade e profissionalismo ao negócio."
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Design Thinking", icon: "💡", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "UX Research", icon: "🔍", color: "bg-green-100 dark:bg-green-900" }
      ],
      lessons: [
        { title: "Design para não-digitais", description: "Aprendi a criar interfaces intuitivas para usuários pouco familiarizados com tecnologia." },
        { title: "Solução de problemas reais", description: "Desenvolvi habilidades para identificar e resolver problemas práticos do dia a dia empresarial." }
      ]
    },
    en: {
      title: "MárcioPhone - Technical Service Management",
      subtitle: "App to optimize processes in electronics repair shop | Freelance Project",
      overview: {
        objective: "Develop an application to replace the manual customer forms system and organize the workflow of the technical assistance.",
        challenge: "Solve the problems of lost forms, disorganization and lack of practicality in the paper system the company used.",
        solution: "Mobile app with digital customer registration, service history, status tracking and notifications."
      },
      process: [
        { emoji: "🔍", title: "Problem Analysis", description: "Identification of main pain points in current system" },
        { emoji: "📱", title: "Wireframing", description: "Creation of navigation flows and main interfaces" },
        { emoji: "🎨", title: "Interface Design", description: "UI development focused on usability" },
        { emoji: "🧑‍💻", title: "Prototyping", description: "Interactive prototype creation for validation" },
        { emoji: "🔄", title: "Testing & Adjustments", description: "Client validation and feedback implementation" }
      ],
      results: {
        metrics: [
          { value: "70%", description: "Reduction in service time", icon: "⏱️" },
          { value: "100%", description: "Elimination of lost forms", icon: "📋" }
        ],
        feedback: "The app transformed the technical assistance management, bringing organization, traceability and professionalism to the business."
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Design Thinking", icon: "💡", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "UX Research", icon: "🔍", color: "bg-green-100 dark:bg-green-900" }
      ],
      lessons: [
        { title: "Design for non-digital users", description: "I learned to create intuitive interfaces for users not familiar with technology." },
        { title: "Real problem solving", description: "Developed skills to identify and solve practical everyday business problems." }
      ]
    },
    es: {
      title: "MárcioPhone - Gestión de Servicios Técnicos",
      subtitle: "Aplicación para optimizar procesos en asistencia técnica de electrónicos | Proyecto Freelance",
      overview: {
        objective: "Desarrollar una aplicación para reemplazar el sistema manual de fichas de clientes y organizar el flujo de trabajo de la asistencia técnica.",
        challenge: "Resolver los problemas de pérdida de fichas, desorganización y falta de practicidad en el sistema en papel que utilizaba la empresa.",
        solution: "Aplicación móvil con registro digital de clientes, historial de servicios, seguimiento de estado y notificaciones."
      },
      process: [
        { emoji: "🔍", title: "Análisis de Problemas", description: "Identificación de los principales puntos de dolor en el sistema actual" },
        { emoji: "📱", title: "Wireframes", description: "Creación de flujos de navegación e interfaces principales" },
        { emoji: "🎨", title: "Diseño de Interfaz", description: "Desarrollo de UI con enfoque en usabilidad" },
        { emoji: "🧑‍💻", title: "Prototipado", description: "Creación del prototipo interactivo para validación" },
        { emoji: "🔄", title: "Pruebas y Ajustes", description: "Validación con el cliente e implementación de feedbacks" }
      ],
      results: {
        metrics: [
          { value: "70%", description: "Reducción de tiempo en atención", icon: "⏱️" },
          { value: "100%", description: "Eliminación de fichas perdidas", icon: "📋" }
        ],
        feedback: "La aplicación transformó la gestión de la asistencia técnica, aportando organización, trazabilidad y profesionalismo al negocio."
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Design Thinking", icon: "💡", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "UX Research", icon: "🔍", color: "bg-green-100 dark:bg-green-900" }
      ],
      lessons: [
        { title: "Diseño para no digitales", description: "Aprendí a crear interfaces intuitivas para usuarios poco familiarizados con la tecnología." },
        { title: "Solución de problemas reales", description: "Desarrollé habilidades para identificar y resolver problemas prácticos del día a día empresarial." }
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

  const galleryImages = {
    pt: [
      { src: "/images/project-marciophone/slide1-pt.svg", alt: "Tela de cadastro de cliente", caption: "Formulário digital para cadastro de clientes" },
      { src: "/images/project-marciophone/slide2-pt.svg", alt: "Tela de histórico de serviços", caption: "Registro completo de serviços realizados" },
      { src: "/images/project-marciophone/slide3-pt.svg", alt: "Tela de acompanhamento", caption: "Status atual dos aparelhos em reparo" }
    ],
    en: [
      { src: "/images/project-marciophone/slide1-en.svg", alt: "Customer registration screen", caption: "Digital form for customer registration" },
      { src: "/images/project-marciophone/slide2-en.svg", alt: "Service history screen", caption: "Complete record of services performed" },
      { src: "/images/project-marciophone/slide3-en.svg", alt: "Tracking screen", caption: "Current status of devices under repair" }
    ],
    es: [
      { src: "/images/project-marciophone/slide1-es.svg", alt: "Pantalla de registro de clientes", caption: "Formulario digital para registro de clientes" },
      { src: "/images/project-marciophone/slide2-es.svg", alt: "Pantalla de historial de servicios", caption: "Registro completo de servicios realizados" },
      { src: "/images/project-marciophone/slide3-es.svg", alt: "Pantalla de seguimiento", caption: "Estado actual de dispositivos en reparación" }
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
            image="/images/project-marciophone/logoworkingbrain-white.svg"
            darkImage="/images/project-marciophone/logoworkingbrain-white.svg"
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
              before: "/images/project-marciophone/antes.svg",
              after: "/images/project-marciophone/depois.svg",
              beforeAlt: "Sistema antigo com fichas de papel",
              afterAlt: "Novo sistema digital"
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