"use client";

import React, { useState, useEffect } from 'react';
import Emilly from "../assets/img/me-bg.svg"; 
import Me from "../assets/img/me.svg"; 
import Image from "next/image";
import '../app/hero-section.css';

const HeroSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Considera tela pequena para menos de 768px
    };

    handleResize(); // Verifica no carregamento da página
    window.addEventListener('resize', handleResize); // Verifica ao redimensionar

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o ouvinte de evento ao desmontar o componente
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-start h-[90vh] text-center py-10 px-4 relative bg-gradient-circle">
      <div className="flex flex-col items-center z-10 mt-16">
        <h3 className="text-gray-700 text-lg font-bold">
          <span className="text-3xl md:text-3xl animate-wave">👋</span> Olá, eu sou a Emilly, mas pode me chamar de{' '}
          <span className="text-purple-500 text-2xl md:text-2xl">BUDRI</span>
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 my-6">
          TORNANDO O DIGITAL SIMPLES, HUMANO & INESQUECÍVEL.
        </h1>
      </div>

      <div className="relative w-full h-[87%] z-20 mb-[-40px]">
        <Image
          src={isSmallScreen ? Me : Emilly}
          alt="Personagem Budri"
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-0 w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
