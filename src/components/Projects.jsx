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
      <div className="flex flex-col md:flex-row h-full">
        {/* Imagem do projeto (lado esquerdo) */}
        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-gray-800 dark:to-gray-800 relative overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

        {/* Ficha técnica (lado direito) */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4 md:mb-6">
              <span className="text-xs md:text-sm text-purple-600 dark:text-purple-400 font-medium">
                {project.section}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-1 mb-2 md:mb-3">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
                {project.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                {project.details.map((detail, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 p-2 md:p-3 rounded-lg">
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {detail.label}
                    </span>
                    <span className="block text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botão fixo na parte inferior */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <a
              href={project.link}
              className="w-full flex items-center justify-center px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg md:rounded-xl hover:opacity-90 transition-opacity text-sm md:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.ctaText}
              <FiExternalLink className="ml-2" size={16} />
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
          image: "/images/project-workingbrain-mobile/slide1.svg",
          link: "/projects/workingbrain-mobile",
          ctaText: "Ver Projeto Completo",
          year: "2024",
          details: [
            { label: "Tipo de projeto", value: "TCC – Técnico em Informática para Internet" },
            { label: "Ano", value: "2024" },
            { label: "Tecnologias", value: "React Native, Typescript, Expo" },
            { label: "Resultado", value: "+85 usuários interessados" }
          ]
        },
        {
          section: "Email Marketing",
          title: "Meu Aumigo - Email Marketing",
          description: "E-mail HTML responsivo com animações CSS e foco em conversão. Desenvolvido como projeto pessoal para simular uma campanha real.",
          category: ["Email Marketing", "Motion Design", "Copywriting", "Campanhas Criativas"],
          image: "/images/aumigo.jpg",
          link: "/projects/meu-aumigo",
          ctaText: "Ver Campanha",
          year: "2025",
          details: [
            { label: "Tipo de projeto", value: "Projeto Pessoal" },
            { label: "Formato", value: "E-mail HTML responsivo" },
            { label: "Ano", value: "2025" },
            { label: "Conversão e Fidelização", value: "+60% média" }
          ]
        },
        {
          section: "Website",
          title: "Landing Page BreShopp - Marketplace de Brechós",
          description: "Página de apresentação com foco em usabilidade, design responsivo, SEO e conversão. Projeto acadêmico com estética jovem e sustentável.",
          category: ["Web App", "UX Design", "UI Design", "SEO", "Design System", "E-commerce"],
          image: "/images/breshopp.jpg",
          link: "/projects/breshopp",
          ctaText: "Ver Projeto Completo",
          year: "2025",
          details: [
            { label: "Tipo de projeto", value: "Projeto Integrador – Superior em Desenvolvimento de Software Multiplataforma" },
            { label: "Ano", value: "2025" }
          ]
        },
        {
          section: "Identidade Visual",
          title: "Identidade Visual e Gamificação WorkingBrain",
          description: "Criação de identidade visual e mascote gamificado para aplicação multiplataforma. Projeto com direção criativa completa.",
          category: ["Branding", "Design", "Ilustração", "Design Thinking"],
          image: "/images/workingbrain-brand.jpg",
          link: "/projects/visual-identity-workingbrain",
          ctaText: "Ver Detalhes",
          year: "2024",
          details: [
            { label: "Tipo de projeto", value: "TCC – Técnico em Informática para Internet" },
            { label: "Ano", value: "2024" },
            { label: "Ferramentas", value: "Figma" },
            { label: "Aprovação na Banca", value: "100%" }
          ]
        },
        {
          section: "Pesquisa & Estratégia",
          title: "UX Research - WorkingBrain",
          description: "Pesquisa com estudantes e professores sobre educação digital. Inclui personas, mapa de empatia e jornada do usuário.",
          category: ["UX Research", "Testes de Usabilidade"],
          image: "/images/ux-research.jpg",
          link: "/projects/ux-research-workingbrain",
          ctaText: "Ver Metodologia",
          year: "2024",
          details: [
            { label: "Tipo de projeto", value: "TCC – Técnico em Informática para Internet" },
            { label: "Ano", value: "2024" },
            { label: "Participantes", value: "Professores e Alunos da rede pública" },
            { label: "Processos", value: "Empatização, Definição e Ideação" },
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
          image: "/images/project-workingbrain-mobile/slide1.svg",
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
          image: "/images/aumigo.jpg",
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
          title: "BreShopp Landing Page - Thrift Marketplace",
          description: "Landing page focused on usability, responsive design, SEO and conversions. Academic project with a youthful and sustainable style.",
          category: ["Web App", "UX Design", "UI Design", "SEO", "Design System", "E-commerce"],
          image: "/images/breshopp.jpg",
          link: "/projects/breshopp",
          ctaText: "View Full Project",
          year: "2025",
          details: [
            { label: "Project type", value: "Integrative Final Project – Associate Degree in Multiplatform Software Development" },
            { label: "Year", value: "2025" }
          ]
        },
        {
          section: "Visual Identity",
          title: "WorkingBrain Visual Identity & Mascot",
          description: "Visual identity creation and gamified mascot for a multi-platform application. Full creative direction.",
          category: ["Branding", "Design", "Illustration", "Design Thinking"],
          image: "/images/workingbrain-brand.jpg",
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
          image: "/images/ux-research.jpg",
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
        "Diseño Web",
        "Identidad Visual",
        "Investigación & Estrategia"
      ],
      projects: [
        {
          section: "Aplicaciones Móviles",
          title: "WorkingBrain - Plataforma Educativa",
          description: "App educativa con gamificación e informes de desempeño. Proyecto académico y personal enfocado en inclusión digital.",
          category: ["Aplicación Móvil", "Diseño UI", "Diseño UX", "Educación"],
          image: "/images/project-workingbrain-mobile/slide1.svg",
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
          image: "/images/aumigo.jpg",
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
          section: "Diseño Web",
          title: "Landing Page BreShopp - Marketplace de Ropa",
          description: "Página de presentación con enfoque en usabilidad, diseño responsivo, SEO y conversión. Proyecto académico con estilo sostenible.",
          category: ["Aplicación Web", "Diseño UX", "Diseño UI", "SEO", "Design System", "E-commerce"],
          image: "/images/breshopp.jpg",
          link: "/projects/breshopp",
          ctaText: "Ver Proyecto Completo",
          year: "2025",
          details: [
            { label: "Tipo de proyecto", value: "Proyecto Integrador – Tecnicatura en Desarrollo de Software Multiplataforma" },
            { label: "Año", value: "2025" }
          ]
        },
        {
          section: "Identidad Visual",
          title: "Identidad Visual y Mascota WorkingBrain",
          description: "Creación de identidad visual y mascota gamificada para una app multiplataforma. Dirección creativa completa.",
          category: ["Branding", "Diseño", "Ilustración", "Design Thinking"],
          image: "/images/workingbrain-brand.jpg",
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
          image: "/images/ux-research.jpg",
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
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

  // Handlers para touch events
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
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
      <div className="md:hidden overflow-x-auto py-4 mb-6 no-scrollbar">
        <div className="flex space-x-2 px-2 w-max">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => goToSection(index)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
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

      {/* Carrossel */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="relative h-[700px] md:h-[500px] flex items-center"
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

        {/* Controles - Mobile */}
        <div className="md:hidden flex justify-center space-x-4 mt-4">
          <motion.button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
            aria-label={language === 'en' ? 'Previous project' : 'Projeto anterior'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft className="text-xl text-purple-600 dark:text-purple-400" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
            aria-label={language === 'en' ? 'Next project' : 'Próximo projeto'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight className="text-xl text-purple-600 dark:text-purple-400" />
          </motion.button>
        </div>

        {/* Controles - Desktop */}
        <motion.button
          onClick={handlePrev}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          aria-label={language === 'en' ? 'Previous project' : 'Projeto anterior'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronLeft className="text-2xl text-purple-600 dark:text-purple-400" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
          aria-label={language === 'en' ? 'Next project' : 'Próximo projeto'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronRight className="text-2xl text-purple-600 dark:text-purple-400" />
        </motion.button>
      </div>

      {/* Indicadores de progresso */}
      <div className="flex justify-center mt-8 md:mt-12">
        <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-full h-2">
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

      {/* Indicadores de pontos para mobile */}
      <div className="md:hidden flex justify-center mt-6 space-x-2">
        {translatedProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`w-2 h-2 rounded-full transition-all ${
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