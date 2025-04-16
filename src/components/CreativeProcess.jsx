"use client";

import React from 'react';

const CreativeProcess = ({ 
  steps = [], 
  bgColor = 'bg-gray-50',
  darkBgColor = 'bg-gray-800',
  cardColors = ['bg-purple-100', 'bg-pink-100', 'bg-blue-100', 'bg-indigo-100', 'bg-teal-100'],
  darkCardColors = ['bg-purple-900', 'bg-pink-900', 'bg-blue-900', 'bg-indigo-900', 'bg-teal-900'],
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100',
  language = 'en'
}) => {
  // Objeto de tradução para os textos
  const translations = {
    pt: {
      sectionTitle: "Processo Criativo"
    },
    es: {
      sectionTitle: "Proceso Creativo"
    },
    en: {
      sectionTitle: "Creative Process"
    }
  };

  // Seleciona os textos com base no idioma
  const { sectionTitle } = translations[language];

  // Usa os steps fornecidos ou um valor vazio
  const displaySteps = steps.length > 0 ? steps : [];

  return (
    <section className={`${bgColor} dark:${darkBgColor} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}>
          {sectionTitle}
        </h2>
        
        <div className="grid md:grid-cols-5 gap-4">
          {displaySteps.map((step, index) => (
            <ProcessStep 
              key={index}
              step={step}
              bgColor={cardColors[index % cardColors.length]}
              darkBgColor={darkCardColors[index % darkCardColors.length]}
              textColor={textColor}
              darkTextColor={darkTextColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ step, bgColor, darkBgColor, textColor, darkTextColor }) => {
  return (
    <div className={`p-6 rounded-xl ${bgColor} dark:${darkBgColor} text-center transition-transform hover:scale-105`}>
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-2xl ${textColor} dark:${darkTextColor}`}>
        {step.emoji}
      </div>
      <h3 className={`font-semibold mb-2 ${textColor} dark:${darkTextColor}`}>{step.title}</h3>
      <p className={`text-sm opacity-80 ${textColor} dark:${darkTextColor}`}>{step.description}</p>
    </div>
  );
};

export default CreativeProcess;
