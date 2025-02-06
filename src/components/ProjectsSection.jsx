"use client";

import React from "react";
import Projects from "@/components/Projects";

const ProjectsSection = () => {
  return (
    <section
      id="ProjectsSection"
      className="bg-gradient-to-r from-purple-800 to-blue-800 w-full text-white py-24 px-6 md:px-12"
    >
      <div className="mx-auto text-center">
        {/* Título da seção */}
        <h2 className="text-4xl font-semibold mb-8 leading-tight">
          Principais Projetos
        </h2>

        {/* Linha decorativa */}
        <div className="w-24 h-1 bg-white mx-auto mt-8 mb-12"></div>

        {/* Subtítulo */}
        <p className="text-xl font-light mb-8 max-w-3xl text-gray-100 mx-auto">
          A Budri transforma ideias em <span className="text-white uppercase font-bold">soluções reais.</span>
        </p>
        <p className="text-xl font-light mb-8 max-w-3xl text-gray-100 mx-auto">
          Confira alguns dos nossos principais projetos e veja como trazemos <span className="text-white uppercase font-bold">inovação</span> e <span className="text-white uppercase font-bold">experiência</span> em cada um deles.
        </p>

        {/* Linha decorativa */}
        <div className="w-24 h-1 bg-white mx-auto mt-12 mb-12"></div>

        {/* Exibição dos projetos */}
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsSection;
