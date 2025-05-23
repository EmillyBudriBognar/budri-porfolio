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

// Assets - Logos
import WorkingBrainLogoDark from "@/assets/img/project-workingbrain/logoworkingbrain-white.svg"; 
import WorkingBrainLogoLight from "@/assets/img/project-workingbrain/logoworkingbrain-black.svg";

// Assets - Before/After
import Antes from "@/assets/img/project-workingbrain/antes.svg";
import Depois from "@/assets/img/project-workingbrain/depois.svg";

// Assets - Slides (PT)
import Slide1PT from "@/assets/img/project-workingbrain/slide1-pt.svg";
import Slide2PT from "@/assets/img/project-workingbrain/slide2-pt.svg";
import Slide3PT from "@/assets/img/project-workingbrain/slide3-pt.svg";

// Assets - Slides (EN)
import Slide1EN from "@/assets/img/project-workingbrain/slide1-en.svg";
import Slide2EN from "@/assets/img/project-workingbrain/slide2-en.svg";
import Slide3EN from "@/assets/img/project-workingbrain/slide3-en.svg";

// Assets - Slides (ES)
import Slide1ES from "@/assets/img/project-workingbrain/slide1-es.svg";
import Slide2ES from "@/assets/img/project-workingbrain/slide2-es.svg";
import Slide3ES from "@/assets/img/project-workingbrain/slide3-es.svg";

const ProjectPage = ({ language = 'en' }) => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const translations = {
    pt: {
      title: "WorkingBrain - Pesquisa de Usabilidade Educacional",
      subtitle: "Análise das necessidades de alunos e professores no Novo Ensino Médio | TCC do Técnico em Informática para Internet",
      overview: {
        objective: "Identificar as principais dificuldades de alunos e professores na adaptação ao Novo Ensino Médio, com foco nas disparidades entre redes pública e privada.",
        challenge: "Compreender como as mudanças curriculares afetam a preparação para vestibulares e criar personas representativas desses grupos.",
        solution: "Pesquisa qualitativa com entrevistas e criação de personas detalhadas para guiar o desenvolvimento de soluções educacionais eficazes."
      },
      process: [
        { emoji: "🔍", title: "Definição do Problema", description: "Análise das mudanças no Novo Ensino Médio e seus impactos" },
        { emoji: "👥", title: "Entrevistas", description: "Conversas com alunos e professores de escolas públicas e privadas" },
        { emoji: "📊", title: "Análise de Dados", description: "Identificação de padrões e pontos críticos comuns" },
        { emoji: "👤", title: "Criação de Personas", description: "Desenvolvimento de perfis representativos de alunos e professores" },
        { emoji: "💡", title: "Insights", description: "Extrair conclusões valiosas para orientar soluções tecnológicas" }
      ],
      results: {
        metrics: [
          { value: "12", description: "Entrevistas realizadas", icon: "🎤" },
          { value: "4", description: "Personas criadas", icon: "👥" },
          { value: "85%", description: "Relataram defasagem", icon: "📉" }
        ],
        feedback: "A pesquisa revelou a profunda desigualdade na adaptação ao novo currículo, com alunos da rede pública em desvantagem significativa na preparação para vestibulares."
      },
      tools: [
        { name: "Entrevistas", icon: "🎤", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "Mapa Empatia", icon: "🧩", color: "bg-green-100 dark:bg-green-900" },
        { name: "Personas", icon: "👤", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Journey Map", icon: "🗺️", color: "bg-yellow-100 dark:bg-yellow-900" }
      ],
      lessons: [
        { title: "Disparidades educacionais", description: "Compreendi em profundidade como as mudanças curriculares afetam diferentemente alunos de escolas públicas e privadas." },
        { title: "Metodologia de pesquisa", description: "Aprendi técnicas valiosas de coleta e análise de dados qualitativos em contextos educacionais." }
      ]
    },
    en: {
      title: "WorkingBrain - Educational Usability Research",
      subtitle: "Analysis of students and teachers needs in the New High School System | Internet Computing Technical Final Project",
      overview: {
        objective: "Identify the main difficulties of students and teachers in adapting to the New High School system, focusing on disparities between public and private networks.",
        challenge: "Understand how curriculum changes affect preparation for college entrance exams and create representative personas of these groups.",
        solution: "Qualitative research with interviews and detailed personas creation to guide the development of effective educational solutions."
      },
      process: [
        { emoji: "🔍", title: "Problem Definition", description: "Analysis of changes in the New High School and their impacts" },
        { emoji: "👥", title: "Interviews", description: "Conversations with students and teachers from public and private schools" },
        { emoji: "📊", title: "Data Analysis", description: "Identification of patterns and common critical points" },
        { emoji: "👤", title: "Personas Creation", description: "Development of representative profiles of students and teachers" },
        { emoji: "💡", title: "Insights", description: "Extract valuable conclusions to guide technological solutions" }
      ],
      results: {
        metrics: [
          { value: "12", description: "Interviews conducted", icon: "🎤" },
          { value: "4", description: "Personas created", icon: "👥" },
          { value: "85%", description: "Reported gap", icon: "📉" }
        ],
        feedback: "The research revealed the profound inequality in adapting to the new curriculum, with public school students at a significant disadvantage in preparing for college entrance exams."
      },
      tools: [
        { name: "Interviews", icon: "🎤", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "Empathy Map", icon: "🧩", color: "bg-green-100 dark:bg-green-900" },
        { name: "Personas", icon: "👤", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Journey Map", icon: "🗺️", color: "bg-yellow-100 dark:bg-yellow-900" }
      ],
      lessons: [
        { title: "Educational disparities", description: "I deeply understood how curriculum changes differently affect students from public and private schools." },
        { title: "Research methodology", description: "Learned valuable techniques for collecting and analyzing qualitative data in educational contexts." }
      ]
    },
    es: {
      title: "WorkingBrain - Investigación de Usabilidad Educativa",
      subtitle: "Análisis de necesidades de estudiantes y profesores en el Nuevo Sistema de Secundaria | Proyecto Final del Técnico en Informática para Internet",
      overview: {
        objective: "Identificar las principales dificultades de estudiantes y profesores en la adaptación al Nuevo Sistema de Secundaria, con enfoque en las disparidades entre redes públicas y privadas.",
        challenge: "Comprender cómo los cambios curriculares afectan la preparación para exámenes de ingreso a la universidad y crear personajes representativos de estos grupos.",
        solution: "Investigación cualitativa con entrevistas y creación de personajes detallados para guiar el desarrollo de soluciones educativas efectivas."
      },
      process: [
        { emoji: "🔍", title: "Definición del Problema", description: "Análisis de los cambios en el Nuevo Sistema de Secundaria y sus impactos" },
        { emoji: "👥", title: "Entrevistas", description: "Conversaciones con estudiantes y profesores de escuelas públicas y privadas" },
        { emoji: "📊", title: "Análisis de Datos", description: "Identificación de patrones y puntos críticos comunes" },
        { emoji: "👤", title: "Creación de Personas", description: "Desarrollo de perfiles representativos de estudiantes y profesores" },
        { emoji: "💡", title: "Conclusiones", description: "Extraer conclusiones valiosas para orientar soluciones tecnológicas" }
      ],
      results: {
        metrics: [
          { value: "12", description: "Entrevistas realizadas", icon: "🎤" },
          { value: "4", description: "Personas creadas", icon: "👥" },
          { value: "85%", description: "Reportaron desfase", icon: "📉" }
        ],
        feedback: "La investigación reveló la profunda desigualdad en la adaptación al nuevo currículo, con estudiantes de escuelas públicas en desventaja significativa en la preparación para exámenes de ingreso a la universidad."
      },
      tools: [
        { name: "Entrevistas", icon: "🎤", color: "bg-blue-100 dark:bg-blue-900" },
        { name: "Mapa Empatía", icon: "🧩", color: "bg-green-100 dark:bg-green-900" },
        { name: "Personas", icon: "👤", color: "bg-purple-100 dark:bg-purple-900" },
        { name: "Journey Map", icon: "🗺️", color: "bg-yellow-100 dark:bg-yellow-900" }
      ],
      lessons: [
        { title: "Disparidades educativas", description: "Comprendí en profundidad cómo los cambios curriculares afectan de manera diferente a estudiantes de escuelas públicas y privadas." },
        { title: "Metodología de investigación", description: "Aprendí técnicas valiosas de recolección y análisis de datos cualitativos en contextos educativos." }
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
      { src: Slide1PT, alt: "Mapa de empatia de aluno", caption: "Análise das dores e necessidades dos alunos" },
      { src: Slide2PT, alt: "Persona de professor", caption: "Perfil detalhado de professor da rede pública" },
      { src: Slide3PT, alt: "Comparativo curricular", caption: "Disparidades entre escolas públicas e privadas" }
    ],
    en: [
      { src: Slide1EN, alt: "Student empathy map", caption: "Analysis of student pains and needs" },
      { src: Slide2EN, alt: "Teacher persona", caption: "Detailed profile of public school teacher" },
      { src: Slide3EN, alt: "Curriculum comparison", caption: "Disparities between public and private schools" }
    ],
    es: [
      { src: Slide1ES, alt: "Mapa de empatía de estudiante", caption: "Análisis de las dificultades y necesidades de los estudiantes" },
      { src: Slide2ES, alt: "Persona de profesor", caption: "Perfil detallado de profesor de escuela pública" },
      { src: Slide3ES, alt: "Comparativo curricular", caption: "Disparidades entre escuelas públicas y privadas" }
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
            image={WorkingBrainLogoLight}
            darkImage={WorkingBrainLogoDark}
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
              before: Antes,
              after: Depois,
              beforeAlt: "Sistema educacional tradicional",
              afterAlt: "Desafios do novo ensino médio"
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