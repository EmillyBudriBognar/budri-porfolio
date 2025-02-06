"use client";

import React from "react";
import Logo from "../assets/img/logo/black-and-purple.svg"; 
import Image from "next/image";
import Services from "@/components/Services"; // Importando o componente de Serviços

const ServicesSection = () => {
  return (
    <section id="ServicesSection" className="bg-purple-50 w-full text-gray-800 py-16 px-6 md:px-12">
      <div className="mx-auto text-center">
        {/* Logo e Título */}
        <div className="mb-8">
          <div className="flex justify-center items-center">
            <Image
              src={Logo}
              alt="Logo Budri"
              className="w-40 mb-6"
            />
          </div>
          <h2 className="text-2xl font-bold mt-4">
            A Budri não apenas cria designs, aqui nós criamos{" "}
            <br className="mb-8" />
            <span className="bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-5xl leading-relaxed">
              EXPERIÊNCIAS
            </span>
          </h2>
        </div>

        {/* Linha decorativa */}
        <div className="w-16 h-1 bg-gray-800 mx-auto my-6 mb-10"></div>

        {/* Subtítulo */}
        <p className="text-xl mb-4 font-bold">
          Serviços oferecidos que <span className="text-purple-600">ALAVANCARÃO </span>os seus negócios.
        </p>

        {/* Cards de serviços */}
        <Services />
      </div>
    </section>
  );
};

export default ServicesSection;
