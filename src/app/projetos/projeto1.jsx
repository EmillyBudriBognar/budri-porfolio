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
import ThemeToggle from '@/components/ThemeToggle';
import TesteImage from "../assets/img/teste.jpg";

const ProjectPage = () => {
  const projectData = {
    hero: {
      title: "App Educacional",
      subtitle: "UX Case para plataforma de cursos online | Design centrado no usuário",
      image: TesteImage
    },
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
      beforeAfterImages: {
        before: TesteImage,
        after: TesteImage
      }
    },
    gallery: [
      { src: TesteImage, caption: "Tela inicial do aplicativo" },
      { src: TesteImage, caption: "Fluxo de aprendizado" },
      { src: TesteImage, caption: "Detalhe do curso" }
    ],
    tools: [
      { name: "Figma", icon: "✏️", color: "bg-purple-100", darkColor: "bg-purple-900" },
      { name: "React", icon: "⚛️", color: "bg-blue-100", darkColor: "bg-blue-900" }
    ],
    lessons: [
      { 
        title: "Importância dos testes de usabilidade", 
        description: "Descobri que pequenas mudanças baseadas em feedback podem ter um grande impacto na experiência geral." 
      },
      { 
        title: "Design inclusivo", 
        description: "Aprendi a criar interfaces que funcionam para todos os tipos de usuários." 
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      
      <ProjectHero 
        title={projectData.hero.title}
        subtitle={projectData.hero.subtitle}
        image={projectData.hero.image}
      />
      
      <ProjectOverview 
        objective={projectData.overview.objective}
        challenge={projectData.overview.challenge}
        solution={projectData.overview.solution}
      />
      
      <CreativeProcess steps={projectData.process} />
      
      <ResultsImpact 
        metrics={projectData.results.metrics}
        feedback={projectData.results.feedback}
        beforeAfterImages={projectData.results.beforeAfterImages}
      />
      
      <GalleryCarousel images={projectData.gallery} />
      
      <ToolsUsed tools={projectData.tools} />
      
      <LessonsLearned lessons={projectData.lessons} />
      
      <ProjectCTA />
    </div>
  );
};

export default ProjectPage;