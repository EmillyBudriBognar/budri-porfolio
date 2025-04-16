"use client";

import React from 'react';

const ProjectOverview = ({ 
  objective, 
  challenge, 
  solution,
  backgroundColor = 'bg-white',
  darkBackgroundColor = 'bg-gray-900',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100',
  language = 'en'
}) => {
  // Objeto de tradução para os textos
  const translations = {
    pt: {
      sectionTitle: "Sobre o Projeto",
      objectiveTitle: "Objetivo",
      challengeTitle: "Desafio",
      solutionTitle: "Solução",
    },
    es: {
      sectionTitle: "Sobre el Proyecto",
      objectiveTitle: "Objetivo",
      challengeTitle: "Desafío",
      solutionTitle: "Solución",
    },
    en: {
      sectionTitle: "About the Project",
      objectiveTitle: "Objective",
      challengeTitle: "Challenge",
      solutionTitle: "Solution",
    }
  };

  // Seleciona os textos com base no idioma
  const { 
    sectionTitle,
    objectiveTitle,
    challengeTitle,
    solutionTitle
  } = translations[language];

  // Usa os valores fornecidos ou os valores padrão
  const displayObjective = objective || "Define the main project objectives";
  const displayChallenge = challenge || "Describe the challenges faced";
  const displaySolution = solution || "Present the implemented solution";

  return (
    <section className={`${backgroundColor} dark:${darkBackgroundColor} py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}>
          {sectionTitle}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <OverviewCard 
            emoji="🎯"
            title={objectiveTitle}
            content={displayObjective}
            textColor={textColor}
            darkTextColor={darkTextColor}
          />
          <OverviewCard 
            emoji="🧩"
            title={challengeTitle}
            content={displayChallenge}
            textColor={textColor}
            darkTextColor={darkTextColor}
          />
          <OverviewCard 
            emoji="💡"
            title={solutionTitle}
            content={displaySolution}
            textColor={textColor}
            darkTextColor={darkTextColor}
          />
        </div>
      </div>
    </section>
  );
};

const OverviewCard = ({ emoji, title, content, textColor, darkTextColor }) => {
  return (
    <div className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ${textColor} dark:${darkTextColor} bg-white dark:bg-gray-800`}>
      <span className="text-4xl mb-4 block" aria-hidden="true">{emoji}</span>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="opacity-90">{content}</p>
    </div>
  );
};

export default ProjectOverview;
