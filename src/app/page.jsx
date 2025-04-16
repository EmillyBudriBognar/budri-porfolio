// "use client";

// import React, { useState } from "react";
// import "@/app/globals.css";
// import Nav from "@/components/Nav";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/HeroSection";
// import ScrollingWords from "@/components/ScrollingWords";
// import ServicesSection from "@/components/ServicesSection";
// import AboutMeSection from "@/components/AboutMeSection";
// import FormationSection from "@/components/FormationSection";
// import ContactSection from "@/components/ContactSection";
// import ProjectsSection from "@/components/ProjectsSection";

// export default function Home() {
//   const [language, setLanguage] = useState("en");

//   const handleLanguageChange = (code) => {
//     setLanguage(code);
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col">
//       <header className="w-full">
//         <Nav language={language} onLanguageChange={handleLanguageChange} />
//       </header>

//       <main className="flex-grow w-full">
//         <section id="hero-section" aria-label="Main section" className="w-full">
//           <HeroSection language={language} />
//         </section>
        
//         <ScrollingWords language={language} />
        
//         <section id="services-section" aria-label="Services section" className="w-full">
//           <ServicesSection language={language} />
//         </section>
        
//         <section id="projects-section" aria-label="Projects section" className="w-full">
//           <ProjectsSection language={language} />
//         </section>
        
//         <section id="aboutme-section" aria-label="About me" className="w-full">
//           <AboutMeSection language={language} />
//         </section>
        
//         <section id="formation-section" aria-label="Formation" className="w-full">
//           <FormationSection language={language} />
//         </section>
        
//         <section id="contact-section" aria-label="Contact" className="w-full">
//           <ContactSection language={language} />
//         </section>
//       </main>

//       <Footer language={language} className="w-full" />
//     </div>
//   );
// }

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
import ScrollToTopButton from '@/components/ScrollToTopButton';
import TesteImage from "../assets/img/teste.jpg";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
      <ProjectsNav 
        language={currentLanguage} 
        onLanguageChange={handleLanguageChange}
        onBackToMain={handleBackToMain}
      />
      
      <div id='hero-sectio'>
      <ProjectHero 
        title={t.title}
        subtitle={t.subtitle}
        image={TesteImage}
        language={currentLanguage}
      />
      </div>
      
      <ProjectOverview 
        objective={t.overview.objective}
        challenge={t.overview.challenge}
        solution={t.overview.solution}
        language={currentLanguage}
      />
      
      <CreativeProcess
        steps={t.process}
        language={currentLanguage}
      />
      
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
      
      <GalleryCarousel 
        images={t.results.gallery}
        language={currentLanguage}
      />
      
      <ToolsUsed
        tools={t.tools}
        language={currentLanguage}
      />
      
      <LessonsLearned
        language={currentLanguage}
        lessons={t.lessons}
      />
      
      <ProjectCTA
        language={currentLanguage}
      />

      {/* Botão de scroll para o topo */}
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectPage;
