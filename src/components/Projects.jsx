"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Teste from "../assets/img/teste.jpg";

// Dados dos projetos
const projects = [
  {
    title: "Redesign App Financeiro",
    description: "Melhoria da usabilidade e interface para um app de finanças.",
    category: "UX/UI Design",
    image: Teste,
    link: "/projetos/finance-app",
  },
  {
    title: "Landing Page Agência",
    description: "Desenvolvimento de uma landing page moderna para agência.",
    category: "Dev. WEB",
    image: Teste,
    link: "/projetos/agency-landing",
  },
  {
    title: "Aplicativo Fitness",
    description: "Criação de um app mobile para treinos personalizados.",
    category: "Dev. Mobile",
    image: Teste,
    link: "/projetos/fitness-app",
  },
  {
    title: "Testes de Usabilidade",
    description: "Pesquisa e testes para otimização de um e-commerce.",
    category: "Pesquisas de Usabilidade",
    image: Teste,
    link: "/projetos/usability-test",
  },
  {
    title: "Campanha de E-mail Marketing",
    description: "Template responsivo e interativo para campanha de e-mails.",
    category: "E-mails HTML",
    image: Teste,
    link: "/projetos/email-marketing",
  },
  {
    title: "Identidade Visual Startup",
    description: "Criação do branding para uma startup de tecnologia.",
    category: "Design Gráfico",
    image: Teste,
    link: "/projetos/startup-branding",
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
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-purple-500 hover:text-white"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
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
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
