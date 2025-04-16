"use client";

import React from 'react';

const ToolsUsed = ({
  tools = [],
  bgColor = 'bg-white',
  darkBgColor = 'bg-gray-900',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100',
  language = 'en'
}) => {
  const translations = {
    pt: {
      sectionTitle: "Ferramentas Usadas"
    },
    es: {
      sectionTitle: "Herramientas Utilizadas"
    },
    en: {
      sectionTitle: "Tools Used"
    }
  };

  const { sectionTitle } = translations[language] || translations['en'];

  return (
    <section className={`${bgColor} dark:${darkBgColor} py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}>
          {sectionTitle}
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              icon={tool.icon}
              color={tool.color}
              darkColor={tool.darkColor}
              textColor={textColor}
              darkTextColor={darkTextColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({
  name,
  icon,
  color = 'bg-gray-100',
  darkColor = 'bg-gray-800',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100'
}) => {
  return (
    <div className={`${color} dark:${darkColor} p-6 rounded-xl flex flex-col items-center justify-center w-24 h-24 shadow-md hover:shadow-lg transition-shadow`}>
      <div className={`text-3xl mb-2 ${textColor} dark:${darkTextColor}`}>
        {icon}
      </div>
      <p className={`text-sm font-medium text-center ${textColor} dark:${darkTextColor}`}>
        {name}
      </p>
    </div>
  );
};

export default ToolsUsed;
