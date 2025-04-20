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
import TesteImage from "@/assets/img/teste.jpg";
import { useRouter } from 'next/navigation';

const ProjectPage = ({ language = 'en' }) => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const translations = {
    pt: {
      title: "App Educacional",
      subtitle: "UX Case para plataforma de cursos online | Design centrado no usuário",
      overview: {
        objective: "Criar uma experiência intuitiva para uma plataforma de cursos online.",
        challenge: "Interface confusa e baixa taxa de conversão de usuários.",
        solution: "Aplicação de UX Writing, hierarquia visual clara e testes de usabilidade."
      },
      process: [
        { emoji: "🔍", title: "Pesquisa", description: "Entrevistas com usuários e análise de dados" },
        { emoji: "🛣️", title: "Jornada", description: "Mapeamento da jornada do usuário" },
        { emoji: "✏️", title: "Wireframes", description: "Criação de esboços e fluxos" },
        { emoji: "🎨", title: "Design", description: "Desenvolvimento da interface visual" },
        { emoji: "🧪", title: "Testes", description: "Validação com usuários reais" }
      ],
      results: {
        metrics: [
          { value: "+40%", description: "Aumento no engajamento", icon: "📈" },
          { value: "85%", description: "Satisfação do usuário", icon: "😊" }
        ],
        feedback: "O redesign transformou completamente nossa plataforma, tornando-a muito mais acessível.",
        gallery: [
          { src: TesteImage, alt: "Tela inicial do aplicativo", caption: "Tela inicial do aplicativo" },
          { src: TesteImage, alt: "Fluxo de aprendizado", caption: "Fluxo de aprendizado" },
          { src: TesteImage, alt: "Detalhe do curso", caption: "Detalhe do curso" }
        ]
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" }
      ],
      lessons: [
        { title: "Importância dos testes de usabilidade", description: "Descobri que pequenas mudanças baseadas em feedback podem ter um grande impacto na experiência geral." },
        { title: "Design inclusivo", description: "Aprendi a criar interfaces que funcionam para todos os tipos de usuários." }
      ]
    },
    en: {
      title: "Educational App",
      subtitle: "UX Case for an online course platform | User-centered design",
      overview: {
        objective: "Create an intuitive experience for an online course platform.",
        challenge: "Confusing interface and low user conversion rate.",
        solution: "UX Writing, clear visual hierarchy, and usability testing."
      },
      process: [
        { emoji: "🔍", title: "Research", description: "User interviews and data analysis" },
        { emoji: "🛣️", title: "Journey", description: "User journey mapping" },
        { emoji: "✏️", title: "Wireframes", description: "Sketching and flow creation" },
        { emoji: "🎨", title: "Design", description: "Development of the visual interface" },
        { emoji: "🧪", title: "Testing", description: "Validation with real users" }
      ],
      results: {
        metrics: [
          { value: "+40%", description: "Increase in engagement", icon: "📈" },
          { value: "85%", description: "User satisfaction", icon: "😊" }
        ],
        feedback: "The redesign completely transformed our platform, making it much more accessible.",
        gallery: [
          { src: TesteImage, alt: "App home screen", caption: "App home screen" },
          { src: TesteImage, alt: "Learning flow", caption: "Learning flow" },
          { src: TesteImage, alt: "Course detail", caption: "Course detail" }
        ]
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" }
      ],
      lessons: [
        { title: "Importance of usability testing", description: "I discovered that small changes based on feedback can greatly improve the overall experience." },
        { title: "Inclusive design", description: "I learned to create interfaces that work for all types of users." }
      ]
    },
    es: {
      title: "Aplicación Educativa",
      subtitle: "Caso UX para una plataforma de cursos en línea | Diseño centrado en el usuario",
      overview: {
        objective: "Crear una experiencia intuitiva para una plataforma de cursos en línea.",
        challenge: "Interfaz confusa y baja tasa de conversión de usuarios.",
        solution: "UX Writing, jerarquía visual clara y pruebas de usabilidad."
      },
      process: [
        { emoji: "🔍", title: "Investigación", description: "Entrevistas a usuarios y análisis de datos" },
        { emoji: "🛣️", title: "Viaje", description: "Mapeo del recorrido del usuario" },
        { emoji: "✏️", title: "Wireframes", description: "Creación de bocetos y flujos" },
        { emoji: "🎨", title: "Diseño", description: "Desarrollo de la interfaz visual" },
        { emoji: "🧪", title: "Pruebas", description: "Validación con usuarios reales" }
      ],
      results: {
        metrics: [
          { value: "+40%", description: "Incremento en el compromiso", icon: "📈" },
          { value: "85%", description: "Satisfacción del usuario", icon: "😊" }
        ],
        feedback: "El rediseño transformó completamente nuestra plataforma, haciéndola mucho más accesible.",
        gallery: [
          { src: TesteImage, alt: "Pantalla de inicio de la aplicación", caption: "Pantalla de inicio de la aplicación" },
          { src: TesteImage, alt: "Flujo de aprendizaje", caption: "Flujo de aprendizaje" },
          { src: TesteImage, alt: "Detalle del curso", caption: "Detalle del curso" }
        ]
      },
      tools: [
        { name: "Figma", icon: "✏️", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900" }
      ],
      lessons: [
        { title: "Importancia de las pruebas de usabilidad", description: "Descubrí que pequeños cambios basados en comentarios pueden tener un gran impacto en la experiencia general." },
        { title: "Diseño inclusivo", description: "Aprendí a crear interfaces que funcionan para todo tipo de usuarios." }
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
            image={TesteImage}
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
              before: TesteImage,
              after: TesteImage,
              beforeAlt: "Before redesign",
              afterAlt: "After redesign"
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