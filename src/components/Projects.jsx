"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

const ProjectItem = ({ project, isActive }) => {
  return (
    <motion.div
      className={`relative w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 ${
        isActive ? "opacity-100" : "opacity-0 absolute"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Layout diferente para mobile e desktop */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Imagem do projeto - mobile tem imagem menor e diferente */}
        <div className="w-full md:w-1/2 h-48 md:h-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-gray-800 dark:to-gray-800 relative overflow-hidden group">
          {/* Imagem para mobile */}
          <img
            src={project.mobileImage || project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 md:hidden"
            loading="lazy"
          />
          {/* Imagem para desktop */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 hidden md:block"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 md:p-6 flex flex-col justify-end">
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/10"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Conteúdo - layout mais compacto no mobile */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col h-full">
          <div className="flex-grow overflow-y-auto">
            <div className="mb-3 md:mb-6">
              <span className="text-xs md:text-sm text-purple-600 dark:text-purple-400 font-medium">
                {project.section}
              </span>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mt-1 mb-1 md:mb-3">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 md:mb-4 line-clamp-3 md:line-clamp-none">
                {project.description}
              </p>
              
              {/* Grid mais compacto no mobile */}
              <div className="grid grid-cols-2 gap-2 mb-3 md:mb-6">
                {project.details.map((detail, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 p-2 md:p-3 rounded-lg">
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mb-0 md:mb-1">
                      {detail.label}
                    </span>
                    <span className="block text-xs font-medium text-gray-900 dark:text-white truncate">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botão fixo na parte inferior - mobile */}
          <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 sticky bottom-0 bg-white dark:bg-gray-900 pb-2 md:pb-0">
            <a
              href={project.link}
              className="w-full flex items-center justify-center px-3 py-4 md:px-6 md:py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-l"
            >
              {project.ctaText}
              <FiExternalLink className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = ({ language = "pt" }) => {
  const translations = {
    pt: {
      sections: [
        "Aplicações Mobile",
        "Email Marketing",
        "Website",
        "Identidade Visual",
        "Pesquisa & Estratégia"
      ],
      projects: [
        {
          section: "Aplicações Mobile",
          title: "WorkingBrain - Plataforma Educacional",
          description: "Aplicativo educacional com gamificação e relatórios de desempenho, desenvolvido com React Native e Expo. Projeto acadêmico e pessoal focado na inclusão digital.",
          category: ["Mobile App", "UI Design", "UX Design", "Educação"],
          image: "/images/project-workingbrain-mobile/capa-desktop.svg",
          mobileImage: "/images/project-workingbrain-mobile/slide1.svg",
          link: "/projects/workingbrain-mobile",
          ctaText: "Ver Projeto",
          year: "2024",
          details: [
            { label: "Tipo de projeto", value: "TCC – Técnico em Informática para Internet" },
            { label: "Ano", value: "2024" },
            { label: "Tecnologias", value: "React Native, Typescript, Expo" },
            { label: "Resultado", value: "+85 usuários" }
          ]
        },
        {
          section: "Email Marketing",
          title: "Meu Aumigo - Email Marketing",
          description: "E-mail HTML responsivo com animações CSS e foco em conversão. Desenvolvido como projeto pessoal para simular uma campanha real.",
          category: ["Email Marketing", "Motion Design", "Copywriting"],
          image: "/images/project-meuaumigo/capa-desktop-pt.svg",
          mobileImage: "/images/project-meuaumigo/capa-mobile-pt.svg",
          link: "/projects/meu-aumigo",
          ctaText: "Ver Campanha",
          year: "2025",
          details: [
            { label: "Tipo de projeto", value: "Projeto Pessoal" },
            { label: "Formato", value: "E-mail HTML Responsivo" },
            { label: "Ano", value: "2025" },
            { label: "Conversão", value: "+60% média" }
          ]
        },
        {
          section: "Website",
          title: "Portfólio LKS Data",
          description: "Projeto completo para a LKS Data com foco em soluções visuais e digitais. Incluiu o desenvolvimento de website institucional responsivo, identidade visual moderna, criação de logo, design de e-mails HTML e otimização para SEO.",
          category: ["Web App", "UX Design", "UI Design", "SEO", "Logo", "Identidade Visual", "Email HTML"],
          image: "/images/project-lks/capa-desktop-pt.png",
          mobileImage: "/images/project-lks/capa-desktop-pt.png",
          link: "/projects/lks-data",
          ctaText: "Ver Projeto",
          year: "2025",
          details: [
            { label: "Cliente", value: "LKS Data" },
            { label: "Ano", value: "2025" },
            { label: "Tipo", value: "Portfólio Institucional" },
            { label: "Pacote", value: "Website, Email HTML, Logo, Identidade Visual" }
          ]
        },
        {
          section: "Identidade Visual",
          title: "WorkingBrain Brand",
          description: "Criação de identidade visual e mascote gamificado para aplicação multiplataforma. Projeto com direção criativa completa.",
          category: ["Branding", "Design", "Ilustração"],
          image: "/images/project-workingbrain/capa-desktop-pt.png",
          mobileImage: "/images/project-workingbrain/slide1-pt.png",
          link: "/projects/visual-identity-workingbrain",
          ctaText: "Ver Detalhes",
          year: "2024",
          details: [
            { label: "Tipo de projeto", value: "TCC – Técnico em Informática para Internet" },
            { label: "Ano", value: "2024" },
            { label: "Ferramentas", value: "Figma" },
            { label: "Aprovação", value: "100%" }
          ]
        },
        {
          section: "Pesquisa & Estratégia",
          title: "UX Research - WorkingBrain",
          description: "Pesquisa com estudantes e professores sobre educação digital. Inclui personas, mapa de empatia e jornada do usuário.",
          category: ["UX Research", "Testes de Usabilidade"],
          image: "/images/project-ux-research-workingbrain/capa-desktop.svg",
          mobileImage: "/images/project-ux-research-workingbrain/slide1.svg",
          link: "/projects/ux-research-workingbrain",
          ctaText: "Ver Metodologia",
          year: "2024",
          details: [
            { label: "Tipo de projeto", value: "TCC – Técnico em Informática para Internet" },
            { label: "Ano", value: "2024" },
            { label: "Participantes", value: "Professores e Alunos da Rede Pública" },
            { label: "Processos", value: "Empatizar, Definir e Idear" },
          ]
        }
      ]
    },
    en: {
      sections: [
        "Mobile Applications",
        "Email Marketing",
        "Website",
        "Visual Identity",
        "Research & Strategy"
      ],
      projects: [
        {
          section: "Mobile Applications",
          title: "WorkingBrain - Educational Platform",
          description: "Educational app with gamification and performance reports. Academic and personal project focused on digital inclusion.",
          category: ["Mobile App", "UI Design", "UX Design", "Education"],
          image: "/images/project-workingbrain-mobile/capa-desktop.svg",
          mobileImage: "/images/project-workingbrain-mobile/slide1.svg",
          link: "/projects/workingbrain-mobile",
          ctaText: "View Full Project",
          year: "2024",
          details: [
            { label: "Project type", value: "Capstone Project – Technical Course in Internet Systems" },
            { label: "Year", value: "2024" },
            { label: "Technologies", value: "React Native, Typescript, Expo" },
            { label: "Result", value: "+85 interested users" }
          ]
        },
        {
          section: "Email Marketing",
          title: "Meu Aumigo – Email Marketing",
          description: "Responsive HTML email with CSS animations focused on conversion. Developed as a personal project to simulate a real campaign.",
          category: ["Email Marketing", "Motion Design", "Copywriting", "Creative Campaigns"],
          image: "/images/project-meuaumigo/capa-desktop-en.svg",
          mobileImage: "/images/project-meuaumigo/capa-mobile-en.svg",
          link: "/projects/meu-aumigo",
          ctaText: "View Campaign",
          year: "2025",
          details: [
            { label: "Project type", value: "Personal Project" },
            { label: "Format", value: "Responsive HTML Email" },
            { label: "Year", value: "2025" },
            { label: "Conversion & Retention", value: "60%+ average" }
          ]
        },
        {
          section: "Website",
          title: "LKS Data Portfolio",
          description: "A full project for LKS Data focused on digital and visual solutions. Delivered a responsive institutional website, modern visual identity, logo design, HTML email templates, and SEO optimization.",
          category: ["Web App", "UX Design", "UI Design", "SEO", "Logo", "Visual Identity", "HTML Email"],
          image: "/images/project-lks/capa-desktop-en.png",
          mobileImage: "/images/project-lks/capa-desktop-en.png",
          link: "/projects/lks-data",
          ctaText: "View Project",
          year: "2025",
          details: [
            { label: "Client", value: "LKS Data" },
            { label: "Year", value: "2025" },
            { label: "Type", value: "Institutional Portfolio" },
            { label: "Package", value: "Website, HTML Email, Logo, Visual Identity" }
          ]
        },
        {
          section: "Visual Identity",
          title: "WorkingBrain Visual Identity & Mascot",
          description: "Visual identity creation and gamified mascot for a multi-platform application. Full creative direction.",
          category: ["Branding", "Design", "Illustration", "Design Thinking"],
          image: "/images/project-workingbrain/capa-desktop-en.png",
          mobileImage: "/images/project-workingbrain/slide1-en.png",
          link: "/projects/visual-identity-workingbrain",
          ctaText: "View Details",
          year: "2024",
          details: [
            { label: "Project type", value: "Capstone Project – Technical Course in Internet Systems" },
            { label: "Year", value: "2024" },
            { label: "Tools", value: "Figma" },
            { label: "Presentation Grade", value: "100%" }
          ]
        },
        {
          section: "Research & Strategy",
          title: "UX Research – WorkingBrain",
          description: "Research with students and teachers on digital education. Includes personas, empathy map, and user journey.",
          category: ["UX Research", "Usability Testing"],
          image: "/images/project-ux-research-workingbrain/capa-desktop.svg",
          mobileImage: "/images/project-ux-research-workingbrain/slide1.svg",
          link: "/projects/ux-research-workingbrain",
          ctaText: "View Methodology",
          year: "2024",
          details: [
            { label: "Project type", value: "Capstone Project – Technical Course in Internet Systems" },
            { label: "Year", value: "2024" },
            { label: "Participants", value: "Public school teachers and students" },
            { label: "Processes", value: "Empathize, Define, and Ideate" },
          ]
        }
      ]
    },
    es: {
      sections: [
        "Aplicaciones Móviles",
        "Email Marketing",
        "Sitio Web",
        "Identidad Visual",
        "Investigación & Estrategia"
      ],
      projects: [
        {
          section: "Aplicaciones Móviles",
          title: "WorkingBrain - Plataforma Educativa",
          description: "App educativa con gamificación e informes de desempeño. Proyecto académico y personal enfocado en inclusión digital.",
          category: ["Aplicación Móvil", "Diseño UI", "Diseño UX", "Educación"],
          image: "/images/project-workingbrain-mobile/capa-desktop.svg",
          mobileImage: "/images/project-workingbrain-mobile/slide1.svg",
          link: "/projects/workingbrain-mobile",
          ctaText: "Ver Proyecto Completo",
          year: "2024",
          details: [
            { label: "Tipo de proyecto", value: "Trabajo Final – Técnico en Informática para Internet" },
            { label: "Año", value: "2024" },
            { label: "Tecnologías", value: "React Native, Typescript, Expo" },
            { label: "Resultado", value: "+85 usuarios interesados" }
          ]
        },
        {
          section: "Email Marketing",
          title: "Meu Aumigo – Email Marketing",
          description: "Correo electrónico HTML responsivo con animaciones CSS enfocado en conversión. Desarrollado como proyecto personal para simular una campaña real.",
          category: ["Email Marketing", "Motion Design", "Copywriting", "Campañas Creativas"],
          image: "/images/project-meuaumigo/capa-desktop-es.svg",
          mobileImage: "/images/project-meuaumigo/capa-mobile-es.svg",
          link: "/projects/meu-aumigo",
          ctaText: "Ver Campaña",
          year: "2025",
          details: [
            { label: "Tipo de proyecto", value: "Proyecto Personal" },
            { label: "Formato", value: "Correo HTML responsivo" },
            { label: "Año", value: "2025" },
            { label: "Conversión y Fidelización", value: "60%+ promedio" }
          ]
        },
        {
          section: "Sitio Web",
          title: "Portafolio LKS Data",
          description: "Proyecto integral para LKS Data con enfoque en soluciones digitales y visuales. Incluyó el desarrollo de un sitio institucional adaptable, identidad visual moderna, diseño de logotipo, emails HTML y optimización SEO.",
          category: ["Aplicación Web", "Diseño UX", "Diseño UI", "SEO", "Logo", "Identidad Visual", "Email HTML"],
          image: "/images/project-lks/capa-desktop-es.png",
          mobileImage: "/images/project-lks/capa-desktop-es.png",
          link: "/projects/lks-data",
          ctaText: "Ver Proyecto",
          year: "2025",
          details: [
            { label: "Cliente", value: "LKS Data" },
            { label: "Año", value: "2025" },
            { label: "Tipo", value: "Portafolio Institucional" },
            { label: "Paquete", value: "Sitio Web, Email HTML, Logo, Identidad Visual" }
          ]
        },
        {
          section: "Identidad Visual",
          title: "Identidad Visual y Mascota WorkingBrain",
          description: "Creación de identidad visual y mascota gamificada para una app multiplataforma. Dirección creativa completa.",
          category: ["Branding", "Diseño", "Ilustración", "Design Thinking"],
          image: "/images/project-workingbrain/capa-desktop-es.png",
          mobileImage: "/images/project-workingbrain/slide1-es.png",
          link: "/projects/visual-identity-workingbrain",
          ctaText: "Ver Detalles",
          year: "2024",
          details: [
            { label: "Tipo de proyecto", value: "Trabajo Final – Técnico en Informática para Internet" },
            { label: "Año", value: "2024" },
            { label: "Herramientas", value: "Figma" },
            { label: "Evaluación Final", value: "100%" }
          ]
        },
        {
          section: "Investigación y Estrategia",
          title: "UX Research – WorkingBrain",
          description: "Investigación con estudiantes y docentes sobre educación digital. Incluye personas, mapa de empatía y recorrido del usuario.",
          category: ["Investigación UX", "Pruebas de Usabilidad"],
          image: "/images/project-ux-research-workingbrain/capa-desktop.svg",
          mobileImage: "/images/project-ux-research-workingbrain/slide1.svg",
          link: "/projects/ux-research-workingbrain",
          ctaText: "Ver Metodología",
          year: "2024",
          details: [
            { label: "Tipo de proyecto", value: "Trabajo Final – Técnico en Informática para Internet" },
            { label: "Año", value: "2024" },
            { label: "Participantes", value: "Docentes y estudiantes de escuelas públicas" },
            { label: "Procesos", value: "Empatizar, Definir e Idear" },
          ]
        }
      ]
    }
  };

  const { 
    sections,
    projects: translatedProjects 
  } = translations[language];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [activeSection, setActiveSection] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const carouselRef = useRef(null);

  // Configuração para auto-rotatividade
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex(prev => 
      prev >= translatedProjects.length - 1 ? 0 : prev + 1
    );
    setActiveSection(prev => 
      prev >= sections.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setDirection('left');
    setCurrentIndex(prev => 
      prev <= 0 ? translatedProjects.length - 1 : prev - 1
    );
    setActiveSection(prev => 
      prev <= 0 ? sections.length - 1 : prev - 1
    );
  };

  const goToSection = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setActiveSection(index);
  };

  // Handlers para touch events melhorados
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX); // Inicializa touchEndX também
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const diffX = touchStartX - touchEndX;
    const threshold = 50; // Limite mínimo para considerar o swipe
    
    if (diffX > threshold) {
      // Swipe para a esquerda (avançar)
      handleNext();
    } else if (diffX < -threshold) {
      // Swipe para a direita (voltar)
      handlePrev();
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction === 'right' ? -1000 : 1000,
      opacity: 0,
      transition: { 
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  return (
    <section className="w-full px-4 md:px-8 pb-12 md:pb-20 relative max-w-7xl mx-auto">
      {/* Seções do portfólio - Versão mobile scrollável */}
      <div className="md:hidden overflow-x-auto py-4 mb-4 no-scrollbar">
        <div className="flex space-x-2 px-2 w-max">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => goToSection(index)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                activeSection === index
                  ? 'bg-white dark:bg-gray-900 shadow-sm text-purple-600 dark:text-purple-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Seções do portfólio - Versão desktop */}
      <div className="hidden md:flex justify-center mb-8 md:mb-12">
        <div className="inline-flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => goToSection(index)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeSection === index
                  ? 'bg-white dark:bg-gray-900 shadow-sm text-purple-600 dark:text-purple-400'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Carrossel com altura adaptável */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="relative h-[550px] md:h-[500px] flex items-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex justify-center"
            >
              <ProjectItem 
                project={translatedProjects[currentIndex]} 
                isActive={true}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles - Mobile mais acessíveis */}
        <div className="md:hidden flex justify-center space-x-4 mt-4">
          <motion.button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            aria-label={language === 'en' ? 'Previous project' : 'Projeto anterior'}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronLeft className="text-lg text-purple-600 dark:text-purple-400" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all"
            aria-label={language === 'en' ? 'Next project' : 'Próximo projeto'}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronRight className="text-lg text-purple-600 dark:text-purple-400" />
          </motion.button>
        </div>

        {/* Controles - Desktop */}
        <motion.button
          onClick={handlePrev}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow transition-colors backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          aria-label={language === 'en' ? 'Previous project' : 'Projeto anterior'}
        >
          <FiChevronLeft className="text-xl text-purple-600 dark:text-purple-400" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow transition-colors backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          aria-label={language === 'en' ? 'Next project' : 'Próximo projeto'}
        >
          <FiChevronRight className="text-xl text-purple-600 dark:text-purple-400" />
        </motion.button>

      </div>

      {/* Indicadores de progresso */}
      <div className="flex justify-center mt-6 md:mt-10">
        <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-full h-1.5 md:h-2">
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: `${(currentIndex + 1) / translatedProjects.length * 100}%`,
              transition: { duration: 0.6 }
            }}
          />
        </div>
      </div>

      {/* Indicadores de pontos para mobile mais visíveis */}
      <div className="md:hidden flex justify-center mt-4 space-x-2">
        {translatedProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-purple-600 w-4'
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;