"use client";

import React from "react";
import '../app/hero-section.css';

const ScrollingWords = () => {
  return (
    <div className="relative h-12 w-full bg-gradient-to-r from-purple-900 to-blue-800 overflow-hidden flex items-center justify-center">
      <div className="absolute whitespace-nowrap animate-scroll text-white text-2xl font-bold tracking-wide">
        EMPATIA • INTENÇÃO • ADAPTABILIDADE • INOVAÇÃO • CRIATIVIDADE • EMPATIA • INTENÇÃO • ADAPTABILIDADE • INOVAÇÃO • CRIATIVIDADE •
      </div>
    </div>
  );
};

export default ScrollingWords;
