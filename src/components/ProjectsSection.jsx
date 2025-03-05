"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Projects from "@/components/Projects";

const ProjectsSection = ({ language }) => {
  // Objeto de tradução para os textos da seção
  const translations = {
    pt: {
      title: "PRINCIPAIS PROJETOS",
      subtitle: "A Budri transforma ideias em ",
      highlight: "soluções reais.",
      firstText: "Confira alguns dos nossos principais projetos e veja como trazemos ",
      innovation: "inovação",
      and: "e",
      experience: "experiência",
      secondText: " em cada um deles.",
    },
    es: {
      title: "PRINCIPALES PROYECTOS",
      subtitle: "Budri transforma ideas en ",
      highlight: "soluciones reales.",
      firstText: "Descubre algunos de nuestros principales proyectos y cómo aportamos ",
      innovation: "innovación",
      and: "y",
      experience: "experiencia",
      secondText: " en cada uno de ellos.",
    },
    en: {
      title: "MAIN PROJECTS",
      subtitle: "Budri transforms ideas into ",
      highlight: "real solutions.",
      firstText: "Check out some of our main projects and see how we bring ",
      innovation: "innovation",
      and: "and",
      experience: "experience",
      secondText: " to each of them.",
    },
  };

  // Seleciona os textos com base no idioma
  const {
    title,
    subtitle,
    highlight,
    firstText,
    innovation,
    and,
    experience,
    secondText,
  } = translations[language];

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
          {title}
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
          {subtitle}
          <span className="text-gray-900 dark:text-white uppercase font-bold">
            {highlight}
          </span>
        </p>

        {/* Texto adicional com animação */}
        <p
          ref={firstTextRef}
          className={`text-xl font-light mb-8 max-w-3xl text-gray-700 dark:text-gray-200 mx-auto ${
            firstTextInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700 ease-out`}
        >
          {firstText}
          <span className="text-gray-900 dark:text-white uppercase font-bold">
            {innovation}
          </span>{" "}
          {and}{" "}
          <span className="text-gray-900 dark:text-white uppercase font-bold">
            {experience}
          </span>
          {secondText}
        </p>

        {/* Linha decorativa */}
        <div className="w-24 h-1 bg-gray-900 dark:bg-white mx-auto mt-12 mb-12"></div>

        {/* Exibição dos projetos */}
        <div>
          <Projects language={language} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;