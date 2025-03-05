"use client";

import React from "react";
import "../app/hero-section.css";

const ScrollingWords = ({ language }) => {
  // Objeto de tradução para as palavras
  const translations = {
    pt: {
      creativity: "CRIATIVIDADE",
      innovation: "INOVAÇÃO",
      empathy: "EMPATIA",
      intention: "INTENÇÃO",
      adaptability: "ADAPTABILIDADE",
    },
    es: {
      creativity: "CREATIVIDAD",
      innovation: "INNOVACIÓN",
      empathy: "EMPATÍA",
      intention: "INTENCIÓN",
      adaptability: "ADAPTABILIDAD",
    },
    en: {
      creativity: "CREATIVITY",
      innovation: "INNOVATION",
      empathy: "EMPATHY",
      intention: "INTENTION",
      adaptability: "ADAPTABILITY",
    },
  };

  // Seleciona as palavras com base no idioma
  const { creativity, innovation, empathy, intention, adaptability } = translations[language];

  return (
    <div className="relative h-12 w-full bg-gradient-to-r from-purple-900 via-purple-700 to-blue-800 overflow-hidden flex items-center font-bold">
      <div className="relative flex overflow-x-hidden w-full">
        {/* Primeira linha de rolagem */}
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-2xl mx-4">{creativity}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{innovation}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{empathy}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{intention}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{adaptability}</span>
          <span className="text-2xl mx-4">•</span>
        </div>

        {/* Segunda linha de rolagem (inicia após a primeira) */}
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-2xl mx-4">{creativity}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{innovation}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{empathy}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{intention}</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">{adaptability}</span>
          <span className="text-2xl mx-4">•</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingWords;