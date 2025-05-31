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

  const mediaItems = {
    pt: [
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide1.svg", 
        alt: "Tela inicial do aplicativo", 
        caption: "Interface principal do aplicativo WorkingBrain" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide2-pt.svg", 
        alt: "", 
        caption: "" 
      },
      { 
        type: 'video', 
        url: "/videos/video-workingbrain.mp4", 
        alt: "Demonstração do aplicativo", 
        caption: "Vídeo demonstrativo das funcionalidades principais" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide4.svg", 
        alt: "Sistema de recompensas", 
        caption: "Interface do sistema de gamificação e conquistas" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide5-pt.svg", 
        alt: "Integração com câmera", 
        caption: "Funcionalidade de captura de imagens usando a câmera do dispositivo" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide6-pt.svg", 
        alt: "Notificações push", 
        caption: "Sistema de lembretes e notificações para engajar os usuários" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide7-pt.svg", 
        alt: "Design responsivo", 
        caption: "Adaptação da interface para diferentes tamanhos de tela" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide8-pt.svg", 
        alt: "Arquitetura técnica", 
        caption: "Diagrama da estrutura técnica do aplicativo" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide9-pt.svg", 
        alt: "Tela de perfil", 
        caption: "Área do usuário com progresso e conquistas" 
      }
    ],
    en: [
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide1.svg", 
        alt: "App home screen", 
        caption: "WorkingBrain app main interface" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide2-en.svg", 
        alt: "", 
        caption: "" 
      },
      { 
        type: 'video', 
        url: "/videos/video-workingbrain.mp4", 
        alt: "App demonstration", 
        caption: "Video demo of main features" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide4.svg", 
        alt: "Rewards system", 
        caption: "Gamification and achievements interface" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide5-en-es.svg", 
        alt: "Camera integration", 
        caption: "Image capture feature using device camera" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide6-en.svg", 
        alt: "Push notifications", 
        caption: "Reminders and notifications system to engage users" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide7-en.svg", 
        alt: "Responsive design", 
        caption: "Interface adaptation for different screen sizes" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide8-en.svg", 
        alt: "Technical architecture", 
        caption: "App technical structure diagram" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide9-en.svg", 
        alt: "Profile screen", 
        caption: "User area with progress and achievements" 
      }
    ],
    es: [
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide1.svg", 
        alt: "Pantalla principal de la aplicación", 
        caption: "Interfaz principal de la aplicación WorkingBrain" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide2-es.svg", 
        alt: "", 
        caption: "" 
      },
      { 
        type: 'video', 
        url: "/videos/video-workingbrain.mp4", 
        alt: "Demostración de la aplicación", 
        caption: "Video demostrativo de las funcionalidades principales" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide4.svg", 
        alt: "Sistema de recompensas", 
        caption: "Interfaz de gamificación y logros" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide5-en-es.svg", 
        alt: "Integración con cámara", 
        caption: "Función de captura de imágenes usando la cámara del dispositivo" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide6-es.svg", 
        alt: "Notificaciones push", 
        caption: "Sistema de recordatorios y notificaciones para involucrar a los usuarios" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide7-es.svg", 
        alt: "Diseño responsivo", 
        caption: "Adaptación de la interfaz para diferentes tamaños de pantalla" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide8-es.svg", 
        alt: "Arquitectura técnica", 
        caption: "Diagrama de la estructura técnica de la aplicación" 
      },
      { 
        type: 'image', 
        src: "/images/project-workingbrain-mobile/slide9-es.svg", 
        alt: "Pantalla de perfil", 
        caption: "Área de usuario con progreso y logros" 
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
            image="/images/project-workingbrain-mobile/capa.svg"
            darkImage="/images/project-workingbrain-mobile/capa.svg"
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
              before: "/images/project-workingbrain-mobile/antes.svg",
              after: "/images/project-workingbrain-mobile/depois.svg",
              beforeAlt: "Initial concept",
              afterAlt: "Final implementation"
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
};

export default ProjectPage;