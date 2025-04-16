"use client";

import React from 'react';

const ProjectHero = ({ 
  title, 
  subtitle, 
  image, 
  gradientFrom = 'from-purple-400', 
  gradientTo = 'to-pink-500',
  darkGradientFrom = 'from-purple-600',
  darkGradientTo = 'to-pink-700',
  colorText = 'text-gray-900',
  darkColorText = 'text-gray-100',
  language = 'en' // Adicionando suporte a idiomas
}) => {
  // Objeto de tradução para os textos
  const translations = {
    pt: {
      defaultTitle: "Meus Projetos",
      defaultSubtitle: "Explore meus trabalhos e projetos recentes"
    },
    es: {
      defaultTitle: "Mis Proyectos",
      defaultSubtitle: "Explora mis trabajos y proyectos recientes"
    },
    en: {
      defaultTitle: "My Projects",
      defaultSubtitle: "Explore my recent works and projects"
    }
  };

  // Seleciona os textos com base no idioma
  const { defaultTitle, defaultSubtitle } = translations[language];

  // Usa os valores padrão se não forem fornecidos props
  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <section className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} dark:${darkGradientFrom} dark:${darkGradientTo} mt-[70px] md:py-32 px-4 pt-[calc(70px+1rem)]`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className={`text-4xl md:text-6xl font-bold ${colorText} dark:${darkColorText}`}>
            {displayTitle}
          </h1>
          <p className={`text-xl md:text-2xl font-light opacity-90 ${colorText} dark:${darkColorText}`}>
            {displaySubtitle}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {image && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={image} 
                alt={displayTitle} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
