"use client";

import React from 'react';
import Emilly from "../assets/img/me-bg.svg"; 
import Me from "../assets/img/me.svg"; 
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-start h-[90vh] text-center py-10 px-4 relative bg-gray-100">
      {/* Fundo do círculo com a classe bg-gradient-circle */}
      <div className="absolute inset-0 bg-gradient-circle z-0"></div>

      <div className="flex flex-col items-center z-10 mt-16">
        <h3 className="text-gray-700 text-lg font-bold">
          <span className="text-3xl animate-wave">👋</span> Olá, eu sou a Emilly, mas pode me chamar de{' '}
          <span className="text-purple-500 text-2xl">BUDRI</span>
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 my-6">
          TORNANDO O DIGITAL SIMPLES, HUMANO & INESQUECÍVEL.
        </h1>
      </div>

      <div className="relative w-full h-[87%] z-20 mb-[-40px]">
        <Image
          src={Me}
          alt="Ilustração de Emilly (Personagem Budri) com fundo claro, exibindo uma imagem em dispositivos móveis"
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-0 w-full md:hidden"
        />
        <Image
          src={Emilly}
          alt="Ilustração de Emilly (Personagem Budri) com fundo escuro, exibindo uma imagem em telas maiores"
          layout="fill"
          objectFit="contain"
          className="absolute bottom-0 left-0 w-full hidden md:block"
        />
      </div>
    </section>
  );
};

export default HeroSection;
