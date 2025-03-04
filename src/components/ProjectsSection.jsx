"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Projects from "@/components/Projects";

const ProjectsSection = () => {
  // Definindo hook useInView para os textos
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // Só dispara uma vez
    threshold: 0.1, // A transição começa quando 10% do título estiver visível
  });

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: firstTextRef, inView: firstTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: secondTextRef, inView: secondTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-gradient-to-r pt-12 from-purple-200 to-blue-200 dark:from-purple-900 dark:to-blue-900 w-full text-gray-900 dark:text-white py-24 px-6 md:px-12">
      <div className="mx-auto text-center pt-12">
        {/* Título da seção com animação */}
        <h2
          ref={titleRef}
          className={`text-3xl font-semibold mb-8 leading-tight ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 ease-out`}
        >
          PRINCIPAIS PROJETOS
        </h2>

        {/* Linha decorativa */}
        <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-8 mb-12"></div>

        {/* Subtítulo com animação */}
        <p
          ref={subtitleRef}
          className={`text-xl font-light mb-8 max-w-3xl text-gray-700 dark:text-gray-200 mx-auto ${
            subtitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 ease-out`}
        >
          A Budri transforma ideias em{" "}
          <span className="text-gray-900 dark:text-white uppercase font-bold">
            soluções reais.
          </span>
        </p>

        {/* Texto adicional com animação */}
        <p
          ref={firstTextRef}
          className={`text-xl font-light mb-8 max-w-3xl text-gray-700 dark:text-gray-200 mx-auto ${
            firstTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 ease-out`}
        >
          Confira alguns dos nossos principais projetos e veja como trazemos{" "}
          <span className="text-gray-900 dark:text-white uppercase font-bold">
            inovação
          </span>{" "}
          e{" "}
          <span className="text-gray-900 dark:text-white uppercase font-bold">
            experiência
          </span>{" "}
          em cada um deles.
        </p>

        {/* Linha decorativa */}
        <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-12 mb-12"></div>

        {/* Exibição dos projetos */}
        <div>
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
