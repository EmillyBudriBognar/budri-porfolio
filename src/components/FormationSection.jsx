import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ButtonWhite";  

const Formacao = () => {
  const [expanded, setExpanded] = useState(false);

  const formacoesAcademicas = [
    { nome: "Tecnólogo em Desenvolvimento de Softwares Multiplataforma - FATEC", ano: "2027" },
    { nome: "Ensino Médio - Colégio COB", ano: "2024" },
    { nome: "Técnico em Informática para Internet - ETEC", ano: "2024" },
    { nome: "Profissional em Criação de Sites e Plataformas Digitais - SENAI", ano: "2022" }
  ];

  const idiomas = [
    { nome: "Português", nivel: "Nativo" },
    { nome: "Inglês", nivel: "Intermediário" },
    { nome: "Espanhol", nivel: "Básico" }
  ];

  const certificacoes = [
    { nome: "Google UX Design", ano: "2024", link: "https://www.coursera.org/verify/professional-cert/NF9AFJHZW6DZ" },
    { nome: "Design de uma experiência do usuário para o bem social e preparação para o mercado - Google", ano: "2024", link: "https://www.coursera.org/verify/YY9UASZKBGNT" },
    { nome: "Criar interfaces do usuário (IU) dinâmicas para sites - Google", ano: "2024", link: "https://coursera.org/verify/XQBNSZ83VLYG" },
    { nome: "Criar designs e protótipos de alta fidelidade no Figma - Google", ano: "2024", link: "https://coursera.org/verify/JKDHW34UCZHZ" },
    { nome: "Conduzir pesquisas de UX e testar os primeiros conceitos - Google", ano: "2024", link: "https://www.coursera.org/verify/KQRD5UTP7B9E" },
    { nome: "Criar wireframes e protótipos de baixa fidelidade - Google", ano: "2024", link: "https://coursera.org/verify/8Y44TZCAH64P" },
    { nome: "Iniciar o processo de design de UX: criar empatia, definir e idealizar - Google", ano: "2024", link: "https://coursera.org/verify/XUL5KMD5RXA6" },
    { nome: "Fundamentos do design da experiência do usuário (UX) - Google", ano: "2023", link: "https://coursera.org/verify/Q56CCANK3EYL" },
    { nome: "Meta Front-End Developer", ano: "2024", link: "https://www.credly.com/badges/cf00d608-63f1-49fd-8100-29decfc0dc46/" },
    { nome: "Preparação para a entrevista de codificação - Meta", ano: "2024", link: "https://www.coursera.org/verify/JKQ3W4X8PMTX" },
    { nome: "Capstone para desenvolvedores front-end - Meta", ano: "2024", link: "https://www.coursera.org/verify/RSERHCM3UYJG" },
    { nome: "Princípios de design de UX/UI - Meta", ano: "2024", link: "https://www.coursera.org/verify/EPEW3HS7KRGO" },
    { nome: "React avançado - Meta", ano: "2024", link: "https://www.coursera.org/verify/IW6A6M8ZTLPM" },
    { nome: "Noções básicas de React - Meta", ano: "2024", link: "https://www.coursera.org/verify/PWUM5FO6VFTS" },
    { nome: "HTML e CSS em profundidade - Meta", ano: "2024", link: "https://coursera.org/verify/HEMQSCZM2Q37" },
    { nome: "Controle de versão - Meta", ano: "2024", link: "https://coursera.org/verify/68AMXBR5DZBH" },
    { nome: "Programação com JavaScript - Meta", ano: "2024", link: "https://www.coursera.org/verify/NLVLLFW25QMJ" },
    { nome: "Introdução ao desenvolvimento de front-end - Meta", ano: "2024", link: "https://coursera.org/verify/MPHK2EV89FKG" },
    { nome: "Redes e Computadores - Fundação Bradesco", ano: "2023" },
    { nome: "Imersão com Python na Prática - Empowerdata", ano: "2023"},
    { nome: "Lógica de Programação - SENAI", ano: "2023"}
  ];

  return (
    <div id="FormationSection" className="bg-gradient-to-l from-purple-800 to-blue-800 w-full text-white py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">FORMAÇÃO</h2>
        <p className="text-sm sm:text-base max-w-2xl mx-auto">
          Aqui você encontra um resumo das minhas formações acadêmicas, cursos e certificações.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Coluna 1: Formações Acadêmicas */}
        <div>
          <h3 className="font-semibold text-lg border-b border-white pb-2 mb-4">Formações Acadêmicas</h3>
          {formacoesAcademicas.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{item.nome}</span>
              <span>{item.ano}</span>
            </div>
          ))}
        </div>

        {/* Coluna 2: Idiomas */}
        <div>
          <h3 className="font-semibold text-lg border-b border-white pb-2 mb-4">Idiomas</h3>
          {idiomas.map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{item.nome}</span>
              <span>{item.nivel}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Certificações (ocupando toda a largura) */}
      <div className="mt-8 w-full">
        <h3 className="font-semibold text-lg border-b border-white pb-2 mb-4">Certificações</h3>
        <div className="space-y-2">
          {certificacoes.slice(0, 5).map((item, index) => (
            <div key={index} className="flex justify-between ">
              <span><a href={item.link} target="_blank" rel="noopener noreferrer" className=" hover:text-purple-300 duration-300">{item.nome}</a></span>
              <span>{item.ano}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seção expandida (continuação das certificações) */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, maxHeight: 0 }}
          animate={{ opacity: 1, maxHeight: 1000 }}
          exit={{ opacity: 0, maxHeight: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 w-full text-center overflow-hidden"
        >
          {certificacoes.slice(5).map((item, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span><a href={item.link} target="_blank" rel="noopener noreferrer" className="left-text hover:text-purple-300 duration-300">{item.nome}</a></span>
              <span>{item.ano}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Botão Ver Mais/Ver Menos */}
      <div className="mt-2 text-center">
      <Button onClick={() => setExpanded(!expanded)} className="mt-12 text-center">
        {expanded ? "VER MENOS" : "VER MAIS"}
      </Button>
      </div>
    </div>
  );
};

export default Formacao;
