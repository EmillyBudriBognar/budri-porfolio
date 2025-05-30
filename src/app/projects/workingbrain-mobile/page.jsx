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
      title: "WorkingBrain - Aplicativo Educacional",
      subtitle: "Plataforma completa de aprendizagem | TCC do Técnico em Informática para Internet",
      overview: {
        objective: "Desenvolver uma solução educacional completa que atenda tanto professores quanto alunos, com conteúdo interativo e sistema de recompensas.",
        challenge: "Criar uma experiência coesa sem apoio institucional para os conteúdos, garantindo usabilidade em diferentes dispositivos móveis.",
        solution: "Aplicativo multiplataforma com React Native e TypeScript, integrando funções nativas dos dispositivos para enriquecer a experiência de aprendizagem."
      },
      process: [
        { emoji: "🔍", title: "Pesquisa e Planejamento", description: "Análise das necessidades de professores e alunos para definir os requisitos do sistema" },
        { emoji: "🎨", title: "Design de Interface", description: "Criação de wireframes e protótipos para uma experiência intuitiva" },
        { emoji: "📱", title: "Desenvolvimento Principal", description: "Implementação das funcionalidades básicas e integrações" },
        { emoji: "⚙️", title: "Recursos Nativos", description: "Integração de câmera, notificações e outros recursos específicos de dispositivos" },
        { emoji: "🧪", title: "Testes e Refinamento", description: "Validação em diferentes dispositivos e ajustes finais" }
      ],
      results: {
        metrics: [
          { value: "100%", description: "Aprovação com louvor", icon: "🎓" },
          { value: "⚡", description: "Desenvolvimento eficiente", icon: "⏱️" },
          { value: "📲", description: "Funciona em iOS e Android", icon: "✔️" }
        ],
        feedback: "O projeto demonstrou maturidade técnica ao integrar diversas tecnologias de forma harmoniosa, resultando em uma ferramenta educacional completa e acessível."
      },
      tools: [
        { name: "React Native", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "TypeScript", icon: "📘", color: "bg-sky-100 dark:bg-sky-900" },
        { name: "Expo", icon: "📱", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        { 
          title: "Aprendizado autodidata", 
          description: "Desenvolvi a capacidade de aprender tecnologias por conta própria, como React Native e TypeScript, que não faziam parte do currículo do curso." 
        },
        { 
          title: "Gestão de tempo eficiente", 
          description: "Concluí todo o design em 1 mês e meio e o desenvolvimento em 3 meses, totalizando 4.5 meses de projeto." 
        },
        { 
          title: "Solução de problemas", 
          description: "Adquiri experiência em resolver desafios técnicos complexos de forma independente, sem apoio institucional." 
        },
        { 
          title: "Recursos nativos móveis", 
          description: "Dominei a integração de câmera e notificações push para criar experiências mais ricas e engajadoras." 
        },
        { 
          title: "Desenvolvimento multiplataforma", 
          description: "Aprendi a criar componentes reutilizáveis e lidar com diferenças específicas de plataforma mantendo uma única base de código." 
        }
      ]
    },
    en: {
      title: "WorkingBrain - Educational App",
      subtitle: "Complete learning platform | Internet Computing Technical Final Project",
      overview: {
        objective: "Develop a complete educational solution for both teachers and students, with interactive content and reward system.",
        challenge: "Create a cohesive experience without institutional content support, ensuring usability across different mobile devices.",
        solution: "Cross-platform app with React Native and TypeScript, integrating native device features to enhance the learning experience."
      },
      process: [
        { emoji: "🔍", title: "Research & Planning", description: "Analysis of teacher and student needs to define system requirements" },
        { emoji: "🎨", title: "Interface Design", description: "Creation of wireframes and prototypes for an intuitive experience" },
        { emoji: "📱", title: "Core Development", description: "Implementation of basic functionalities and integrations" },
        { emoji: "⚙️", title: "Native Features", description: "Integration of camera, notifications and other device-specific features" },
        { emoji: "🧪", title: "Testing & Refinement", description: "Validation on different devices and final adjustments" }
      ],
      results: {
        metrics: [
          { value: "100%", description: "Approved with distinction", icon: "🎓" },
          { value: "⚡", description: "Efficient development", icon: "⏱️" },
          { value: "📲", description: "Works on iOS and Android", icon: "✔️" }
        ],
        feedback: "The project demonstrated technical maturity by harmoniously integrating various technologies, resulting in a complete and accessible educational tool."
      },
      tools: [
        { name: "React Native", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "TypeScript", icon: "📘", color: "bg-sky-100 dark:bg-sky-900" },
        { name: "Expo", icon: "📱", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        { 
          title: "Self-taught learning", 
          description: "I developed the ability to learn technologies on my own, such as React Native and TypeScript, which were not part of the course curriculum." 
        },
        { 
          title: "Efficient time management", 
          description: "I completed all the design in 1.5 months and development in 3 months, totaling 4.5 months for the project." 
        },
        { 
          title: "Problem solving", 
          description: "I gained experience in solving complex technical challenges independently, without institutional support." 
        },
        { 
          title: "Mobile native features", 
          description: "Mastered the integration of camera and push notifications to create richer, more engaging experiences." 
        },
        { 
          title: "Cross-platform development", 
          description: "Learned to create reusable components and handle platform-specific differences while maintaining a single codebase." 
        }
      ]
    },
    es: {
      title: "WorkingBrain - Aplicación Educativa",
      subtitle: "Plataforma de aprendizaje completa | Proyecto Final del Técnico en Informática para Internet",
      overview: {
        objective: "Desarrollar una solución educativa completa para profesores y estudiantes, con contenido interactivo y sistema de recompensas.",
        challenge: "Crear una experiencia cohesionada sin apoyo institucional para los contenidos, garantizando usabilidad en diferentes dispositivos móviles.",
        solution: "Aplicación multiplataforma con React Native y TypeScript, integrando funciones nativas de los dispositivos para enriquecer la experiencia de aprendizaje."
      },
      process: [
        { emoji: "🔍", title: "Investigación y Planificación", description: "Análisis de las necesidades de profesores y alumnos para definir los requisitos del sistema" },
        { emoji: "🎨", title: "Diseño de Interfaz", description: "Creación de wireframes y prototipos para una experiencia intuitiva" },
        { emoji: "📱", title: "Desarrollo Principal", description: "Implementación de las funcionalidades básicas e integraciones" },
        { emoji: "⚙️", title: "Recursos Nativos", description: "Integración de cámara, notificaciones y otras funciones específicas de dispositivos" },
        { emoji: "🧪", title: "Pruebas y Refinamiento", description: "Validación en diferentes dispositivos y ajustes finales" }
      ],
      results: {
        metrics: [
          { value: "100%", description: "Aprobado con distinción", icon: "🎓" },
          { value: "⚡", description: "Desarrollo eficiente", icon: "⏱️" },
          { value: "📲", description: "Funciona en iOS y Android", icon: "✔️" }
        ],
        feedback: "El proyecto demostró madurez técnica al integrar armoniosamente diversas tecnologías, resultando en una herramienta educativa completa y accesible."
      },
      tools: [
        { name: "React Native", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "TypeScript", icon: "📘", color: "bg-sky-100 dark:bg-sky-900" },
        { name: "Expo", icon: "📱", color: "bg-gray-100 dark:bg-gray-800" },
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" }
      ],
      lessons: [
        { 
          title: "Aprendizaje autodidacta", 
          description: "Desarrollé la capacidad de aprender tecnologías por mi cuenta, como React Native y TypeScript, que no formaban parte del currículo del curso." 
        },
        { 
          title: "Gestión eficiente del tiempo", 
          description: "Completé todo el diseño en 1 mes y medio y el desarrollo en 3 meses, totalizando 4.5 meses de proyecto." 
        },
        { 
          title: "Solución de problemas", 
          description: "Adquirí experiencia en resolver desafíos técnicos complejos de forma independiente, sin apoyo institucional." 
        },
        { 
          title: "Funciones nativas móviles", 
          description: "Dominé la integración de cámara y notificaciones push para crear experiencias más ricas y atractivas." 
        },
        { 
          title: "Desarrollo multiplataforma", 
          description: "Aprendí a crear componentes reutilizables y manejar diferencias específicas de plataforma manteniendo una única base de código." 
        }
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
      { src: "/images/project-workingbrain-mobile/slide1-pt.svg", alt: "Interface do aplicativo", caption: "Tela principal com navegação intuitiva" },
      // { src: Slide2PT, alt: "Recursos para professores", caption: "Painel de controle para educadores" },
      // { src: Slide3PT, alt: "Sistema de interação", caption: "Exemplo de quiz com gamificação" }
    ],
    en: [
      { src: "/images/project-workingbrain-mobile/slide1-en.svg", alt: "App interface", caption: "Main screen with intuitive navigation" },
      // { src: Slide2EN, alt: "Teacher features", caption: "Educator control panel" },
      // { src: Slide3EN, alt: "Interaction system", caption: "Gamified quiz example" }
    ],
    es: [
      { src: "/images/project-workingbrain-mobile/slide1-es.svg", alt: "Interfaz de la aplicación", caption: "Pantalla principal con navegación intuitiva" },
      // { src: Slide2ES, alt: "Recursos para profesores", caption: "Panel de control para educadores" },
      // { src: Slide3ES, alt: "Sistema de interacción", caption: "Ejemplo de quiz con gamificación" }
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
            image="/images/project-workingbrain-mobile-mobile/capa.svg"
            darkImage="/images/project-workingbrain-mobile-mobile/capa.svg"
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
              before: "/images/project-workingbrain-mobile-mobile/antes.svg",
              after: "/images/project-workingbrain-mobile-mobile/depois.svg",
              beforeAlt: "Initial concept",
              afterAlt: "Final implementation"
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