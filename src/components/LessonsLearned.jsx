"use client";

import React from 'react';

const LessonsLearned = ({ 
  lessons = [],
  bgColor = 'bg-gray-50',
  darkBgColor = 'bg-gray-800',
  textColor = 'text-gray-800',
  darkTextColor = 'text-gray-100',
  language = 'en'
}) => {
  const translations = {
    pt: {
      sectionTitle: "O que Aprendi"
    },
    es: {
      sectionTitle: "Lo que Aprendí"
    },
    en: {
      sectionTitle: "Lessons Learned"
    }
  };

  const { sectionTitle } = translations[language] || translations['en'];

  return (
    <section className={`${bgColor} dark:${darkBgColor} py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center ${textColor} dark:${darkTextColor}`}>
          {sectionTitle}
        </h2>

        <ul className="space-y-6">
          {lessons.map((lesson, index) => (
            <li 
              key={index}
              className={`p-6 rounded-xl bg-white dark:bg-gray-700 shadow-md ${textColor} dark:${darkTextColor}`}
            >
              <h3 className="font-semibold mb-2">{lesson.title}</h3>
              <p className="opacity-90">{lesson.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LessonsLearned;
