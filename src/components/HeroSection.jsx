"use client";

import React from 'react';
import Emilly from "../assets/img/me.svg"; 
import Image from "next/image";
import '../app/hero-section.css'; // Importando o CSS do componente

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-start h-[75vh] text-center py-10 px-4 relative bg-gradient-circle">
      <div className="flex flex-col items-center z-10">
        <h3 className="text-gray-700 text-lg font-bold">
          <span className="text-3xl md:text-3xl animate-wave">👋</span> Olá, eu sou a Emilly, mas pode me chamar de{' '}
          <span className="text-purple-500 text-2xl md:text-2xl">BUDRI</span> 
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 my-6">
          TORNANDO O DIGITAL SIMPLES, HUMANO & INESQUECÍVEL.
        </h1>
      </div>

      {/* Imagem de fundo alinhada ao limite inferior */}
        <div className="relative w-full h-[100%] mt-auto mb-[-40px]">
            <Image
                src={Emilly}
                alt="Personagem Budri"
                layout="fill"
                objectFit="contain"
            />
        </div>

    </section>
  );
};

export default HeroSection;
