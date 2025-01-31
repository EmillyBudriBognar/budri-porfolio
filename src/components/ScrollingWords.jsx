"use client";

import React from "react";
import '../app/hero-section.css'; // Importando o CSS do componente

const ScrollingWords = () => {
  return (
    <div className="relative h-screen w-full bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden flex items-center justify-center">
      <div className="absolute whitespace-nowrap animate-scroll text-white text-3xl font-bold tracking-wide">
        EMPATIA • INTENÇÃO • ADAPTABILIDADE • INOVAÇÃO • CRIATIVIDADE • EMPATIA • INTENÇÃO • ADAPTABILIDADE • INOVAÇÃO • CRIATIVIDADE •
      </div>
    </div>
  );
};

export default ScrollingWords;
