"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Teste from "../assets/img/teste.jpg";

// Dados dos projetos
const projects = [
  {
    title: "UX/UI Design do Aplicativo MárcioPhone",
    description:
      "Aprimoramento da experiência do usuário e da interface para orientar o desenvolvimento do aplicativo MárcioPhone.",
    category: "UX/UI Design",
    image: Teste,
    link: "/projetos/",
  },
  {
    title: "Orça$imples – Sistema de Gestão Financeira",
    description:
      "Desenvolvimento de interfaces modernas e intuitivas para um sistema de gestão financeira (Projeto Integrador – Tecnólogo em Desenvolvimento de Software Multiplataforma).",
    category: "Dev. WEB",
    image: Teste,
    link: "/projetos/",
  },
  {
    title: "Aplicativo WorkingBrain – Educação Mobile",
    description:
      "Desenvolvimento de um aplicativo educacional focado na experiência do usuário e acessibilidade (TCC – Técnico em Informática para Internet).",
    category: "Dev. Mobile",
    image: Teste,
    link: "/projetos/",
  },
  {
    title: "Estudo de Caso: WorkingBrain",
    description:
      "Pesquisa e testes de usabilidade para otimização da experiência do usuário no aplicativo educacional WorkingBrain (TCC – Técnico em Informática para Internet).",
    category: "Pesquisas de Usabilidade",
    image: Teste,
    link: "/projetos/",
  },
  {
    title: "Meu Aumigo – Campanha de E-mail Marketing",
    description:
      "Criação de um template de e-mail responsivo e interativo para a campanha de marketing do Meu Aumigo.",
    category: "E-mails HTML",
    image: Teste,
    link: "/projetos/",
  },
  {
    title: "Identidade Visual – WorkingBrain",
    description:
      "Desenvolvimento da identidade visual e branding para o aplicativo educacional WorkingBrain (TCC – Técnico em Informática para Internet).",
    category: "Design Gráfico",
    image: Teste,
    link: "/projetos/",
  },
];

// Filtros disponíveis
const categories = [
  "Todos",
  "UX/UI Design",
  "Dev. WEB",
  "Dev. Mobile",
  "Pesquisas de Usabilidade",
  "E-mails HTML",
  "Design Gráfico",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filtrar projetos com base na categoria selecionada
  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="w-full px-6">
      {/* Filtros */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
              selectedCategory === category
                ? "bg-purple-600 text-white dark:bg-purple-700 dark:text-white" // Ativo
                : "bg-purple-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white" // Inativo
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.a
              ref={ref}
              key={index}
              href={project.link}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Imagem do Projeto */}
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover transition-all duration-500"
              />

              {/* Efeito ao Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white text-center p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;