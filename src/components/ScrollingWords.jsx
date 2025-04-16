"use client";

import React from "react";
import "../app/hero-section.css";

const ScrollingWords = ({ language }) => {
  // Objeto de tradução para as palavras
  const translations = {
    pt: ["CRIATIVIDADE", "INOVAÇÃO", "EMPATIA", "INTENÇÃO", "ADAPTABILIDADE"],
    es: ["CREATIVIDAD", "INNOVACIÓN", "EMPATÍA", "INTENCIÓN", "ADAPTABILIDAD"],
    en: ["CREATIVITY", "INNOVATION", "EMPATHY", "INTENTION", "ADAPTABILITY"],
  };

  const words = translations[language] || translations.en; 

  return (
    <div className="relative w-full h-12 overflow-hidden flex items-center font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-blue-800">
      <div className="relative flex overflow-x-hidden w-full">
        {/* Texto rolando */}
        <div className="py-12 animate-marquee whitespace-nowrap flex">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span className="text-2xl mx-8 text-white">{word}</span>
              <span className="text-2xl mx-8 text-white">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Segunda linha para rolagem contínua */}
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span className="text-2xl mx-8 text-white">{word}</span>
              <span className="text-2xl mx-8 text-white">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingWords;