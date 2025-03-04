"use client";

import React from "react";
import "../app/hero-section.css";

const ScrollingWords = () => {
  return (
    <div className="relative h-12 w-full bg-gradient-to-r from-purple-900 via-purple-700 to-blue-800 overflow-hidden flex items-center font-bold">
      <div className="relative flex overflow-x-hidden w-full">
        {/* Primeira linha de rolagem */}
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="text-2xl mx-4">CRIATIVIDADE</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">INOVAÇÃO</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">EMPATIA</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">INTENÇÃO</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">ADAPTABILIDADE</span>
          <span className="text-2xl mx-4">•</span>
        </div>

        {/* Segunda linha de rolagem (inicia após a primeira) */}
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-2xl mx-4">CRIATIVIDADE</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">INOVAÇÃO</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">EMPATIA</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">INTENÇÃO</span>
          <span className="text-2xl mx-4">•</span>
          <span className="text-2xl mx-4">ADAPTABILIDADE</span>
          <span className="text-2xl mx-4">•</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingWords;