"use client";

import React from 'react';

const ResultsImpact = ({ 
  metrics = [], 
  feedback,
  beforeAfterImages,
  bgColor = 'bg-gray-50',
  darkBgColor = 'bg-gray-800',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100',
  language = 'en'
}) => {
  // Objeto de tradução para os textos
  const translations = {
    pt: {
      sectionTitle: "Resultados & Impacto",
      metricsTitle: "Métricas",
      feedbackTitle: "Feedback",
      beforeTitle: "Antes",
      afterTitle: "Depois"
    },
    es: {
      sectionTitle: "Resultados & Impacto",
      metricsTitle: "Métricas",
      feedbackTitle: "Comentarios",
      beforeTitle: "Antes",
      afterTitle: "Después"
    },
    en: {
      sectionTitle: "Results & Impact",
      metricsTitle: "Metrics",
      feedbackTitle: "Feedback",
      beforeTitle: "Before",
      afterTitle: "After"
    }
  };

  // Seleciona os textos com base no idioma
  const { 
    sectionTitle, 
    metricsTitle, 
    feedbackTitle, 
    beforeTitle, 
    afterTitle
  } = translations[language];

  return (
    <section className={`${bgColor} dark:${darkBgColor} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}>
          {sectionTitle}
        </h2>
        
        {metrics.length > 0 && (
          <>
            <h3 className={`text-xl font-semibold mb-6 ${textColor} dark:${darkTextColor}`}>
              {metricsTitle}
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {metrics.map((metric, index) => (
                <MetricCard 
                  key={index}
                  value={metric.value}
                  description={metric.description}
                  icon={metric.icon}
                  textColor={textColor}
                  darkTextColor={darkTextColor}
                />
              ))}
            </div>
          </>
        )}
        
        {feedback && (
          <>
            <h3 className={`text-xl font-semibold mb-6 ${textColor} dark:${darkTextColor}`}>
              {feedbackTitle}
            </h3>
            <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-8 mb-16">
              <blockquote className={`text-xl italic text-center ${textColor} dark:${darkTextColor}`}>
                "{feedback}"
              </blockquote>
            </div>
          </>
        )}
        
        {beforeAfterImages && (
          <>
            <h3 className={`text-xl font-semibold mb-6 ${textColor} dark:${darkTextColor}`}>
              {beforeTitle} & {afterTitle}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className={`text-lg font-medium mb-4 ${textColor} dark:${darkTextColor}`}>
                  {beforeTitle}
                </h4>
                <img 
                  src={beforeAfterImages.before} 
                  alt={beforeTitle} 
                  className="rounded-xl shadow-md w-full"
                />
              </div>
              <div>
                <h4 className={`text-lg font-medium mb-4 ${textColor} dark:${darkTextColor}`}>
                  {afterTitle}
                </h4>
                <img 
                  src={beforeAfterImages.after} 
                  alt={afterTitle} 
                  className="rounded-xl shadow-md w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const MetricCard = ({ value, description, icon, textColor, darkTextColor }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105">
      <div className="text-4xl font-bold mb-2 text-purple-600 dark:text-purple-400">
        {value}
      </div>
      <p className={`text-sm opacity-80 ${textColor} dark:${darkTextColor}`}>{description}</p>
      <div className="text-2xl mt-4">{icon}</div>
    </div>
  );
};

export default ResultsImpact;
