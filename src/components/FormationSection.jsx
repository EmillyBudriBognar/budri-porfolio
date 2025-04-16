import React, { useState } from "react";
import { motion } from "framer-motion";
import ButtonAllPurple from "@/components/ButtonAllPurple";
import { useInView } from "react-intersection-observer";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaJs, 
  FaReact,
  FaPython,
  FaBootstrap
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiExpo
} from "react-icons/si";

const Formacao = ({ language = "pt" }) => {
  const [expanded, setExpanded] = useState(false);

  // Textos traduzidos para cada idioma
  const translations = {
    pt: {
      title: "FORMAÇÃO",
      description: "Aqui você encontra um resumo das minhas formações acadêmicas, cursos e certificações.",
      academicTitle: "Formações Acadêmicas",
      technologiesTitle: "Tecnologias",
      certificationsTitle: "Certificações",
      seeMore: "VER MAIS",
      seeLess: "VER MENOS",
      formacoesAcademicas: [
        { nome: "Tecnólogo em Desenvolvimento de Softwares Multiplataforma - FATEC", ano: "2027" },
        { nome: "Técnico em Informática para Internet - ETEC", ano: "2024" },
        { nome: "Profissional em Criação de Sites e Plataformas Digitais - SENAI", ano: "2022" }
      ],
      tecnologias: [
        { nome: "HTML 5", icone: <FaHtml5 className="text-gray-900 dark:text-gray-100" /> },
        { nome: "REACT", icone: <FaReact className="text-gray-900 dark:text-gray-100" /> },
        { nome: "CSS 3", icone: <FaCss3Alt className="text-gray-900 dark:text-gray-100" /> },
        { nome: "REACT NATIVE", icone: <FaReact className="text-gray-900 dark:text-gray-100" /> },
        { nome: "SASS", icone: <FaSass className="text-gray-900 dark:text-gray-100" /> },
        { nome: "EXPO", icone: <SiExpo className="text-gray-900 dark:text-gray-100" /> },
        { nome: "JAVASCRIPT", icone: <FaJs className="text-gray-900 dark:text-gray-100" /> },
        { nome: "TAILWIND CSS", icone: <SiTailwindcss className="text-gray-900 dark:text-gray-100" /> },
        { nome: "TYPESCRIPT", icone: <SiTypescript className="text-gray-900 dark:text-gray-100" /> },
        { nome: "BOOTSTRAP", icone: <FaBootstrap className="text-gray-900 dark:text-gray-100" /> },
        { nome: "FIGMA", icone: <SiFigma className="text-gray-900 dark:text-gray-100" /> },
        { nome: "PHOTOSHOP", icone: <SiAdobephotoshop className="text-gray-900 dark:text-gray-100" /> }
      ],
      certificacoes: [
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
        { nome: "Imersão com Python na Prática - Empowerdata", ano: "2023" },
        { nome: "Lógica de Programação - SENAI", ano: "2023" }
      ]
    },
    es: {
      title: "FORMACIÓN",
      description: "Aquí encuentras un resumen de mis formaciones académicas, cursos y certificaciones.",
      academicTitle: "Formaciones Académicas",
      technologiesTitle: "Tecnologías",
      certificationsTitle: "Certificaciones",
      seeMore: "VER MÁS",
      seeLess: "VER MENOS",
      formacoesAcademicas: [
        { nome: "Tecnólogo en Desarrollo de Software Multiplataforma - FATEC", ano: "2027" },
        { nome: "Técnico en Informática para Internet - ETEC", ano: "2024" },
        { nome: "Profesional en Creación de Sitios y Plataformas Digitales - SENAI", ano: "2022" }
      ],
      tecnologias: [
        { nome: "HTML 5", icone: <FaHtml5 className="text-gray-900 dark:text-gray-100" /> },
        { nome: "REACT", icone: <FaReact className="text-gray-900 dark:text-gray-100" /> },
        { nome: "CSS 3", icone: <FaCss3Alt className="text-gray-900 dark:text-gray-100" /> },
        { nome: "REACT NATIVE", icone: <FaReact className="text-gray-900 dark:text-gray-100" /> },
        { nome: "SASS", icone: <FaSass className="text-gray-900 dark:text-gray-100" /> },
        { nome: "EXPO", icone: <SiExpo className="text-gray-900 dark:text-gray-100" /> },
        { nome: "JAVASCRIPT", icone: <FaJs className="text-gray-900 dark:text-gray-100" /> },
        { nome: "TAILWIND CSS", icone: <SiTailwindcss className="text-gray-900 dark:text-gray-100" /> },
        { nome: "TYPESCRIPT", icone: <SiTypescript className="text-gray-900 dark:text-gray-100" /> },
        { nome: "BOOTSTRAP", icone: <FaBootstrap className="text-gray-900 dark:text-gray-100" /> },
        { nome: "FIGMA", icone: <SiFigma className="text-gray-900 dark:text-gray-100" /> },
        { nome: "PHOTOSHOP", icone: <SiAdobephotoshop className="text-gray-900 dark:text-gray-100" /> }
      ],
      certificacoes: [
        { nome: "Google UX Design", ano: "2024", link: "https://www.coursera.org/verify/professional-cert/NF9AFJHZW6DZ" },
        { nome: "Design de una experiencia de usuario para el bien social y preparación para el mercado - Google", ano: "2024", link: "https://www.coursera.org/verify/YY9UASZKBGNT" },
        { nome: "Crear interfaces de usuario (UI) dinámicas para sitios web - Google", ano: "2024", link: "https://coursera.org/verify/XQBNSZ83VLYG" },
        { nome: "Crear diseños y prototipos de alta fidelidad en Figma - Google", ano: "2024", link: "https://coursera.org/verify/JKDHW34UCZHZ" },
        { nome: "Realizar investigaciones de UX y probar primeros conceptos - Google", ano: "2024", link: "https://www.coursera.org/verify/KQRD5UTP7B9E" },
        { nome: "Crear wireframes y prototipos de baja fidelidad - Google", ano: "2024", link: "https://coursera.org/verify/8Y44TZCAH64P" },
        { nome: "Iniciar el proceso de diseño de UX: empatizar, definir e idear - Google", ano: "2024", link: "https://coursera.org/verify/XUL5KMD5RXA6" },
        { nome: "Fundamentos del diseño de la experiencia del usuario (UX) - Google", ano: "2023", link: "https://coursera.org/verify/Q56CCANK3EYL" },
        { nome: "Desarrollador Front-End de Meta", ano: "2024", link: "https://www.credly.com/badges/cf00d608-63f1-49fd-8100-29decfc0dc46/" },
        { nome: "Preparación para la entrevista de codificación - Meta", ano: "2024", link: "https://www.coursera.org/verify/JKQ3W4X8PMTX" },
        { nome: "Proyecto final para desarrolladores front-end - Meta", ano: "2024", link: "https://www.coursera.org/verify/RSERHCM3UYJG" },
        { nome: "Principios de diseño de UX/UI - Meta", ano: "2024", link: "https://www.coursera.org/verify/EPEW3HS7KRGO" },
        { nome: "React avanzado - Meta", ano: "2024", link: "https://www.coursera.org/verify/IW6A6M8ZTLPM" },
        { nome: "Conceptos básicos de React - Meta", ano: "2024", link: "https://www.coursera.org/verify/PWUM5FO6VFTS" },
        { nome: "HTML y CSS a profundidad - Meta", ano: "2024", link: "https://coursera.org/verify/HEMQSCZM2Q37" },
        { nome: "Control de versiones - Meta", ano: "2024", link: "https://coursera.org/verify/68AMXBR5DZBH" },
        { nome: "Programación con JavaScript - Meta", ano: "2024", link: "https://www.coursera.org/verify/NLVLLFW25QMJ" },
        { nome: "Introducción al desarrollo front-end - Meta", ano: "2024", link: "https://coursera.org/verify/MPHK2EV89FKG" },
        { nome: "Redes y Computadoras - Fundación Bradesco", ano: "2023" },
        { nome: "Inmersión en Python en la Práctica - Empowerdata", ano: "2023" },
        { nome: "Lógica de Programación - SENAI", ano: "2023" }
      ]
    },
    en: {
      title: "EDUCATION",
      description: "Here you can find a summary of my academic background, courses, and certifications.",
      academicTitle: "Academic Background",
      technologiesTitle: "Technologies",
      certificationsTitle: "Certifications",
      seeMore: "SEE MORE",
      seeLess: "SEE LESS",
      formacoesAcademicas: [
        { nome: "Technologist in Multiplatform Software Development - FATEC", ano: "2027" },
        { nome: "Technical in Internet Computing - ETEC", ano: "2024" },
        { nome: "Professional in Website and Digital Platforms Creation - SENAI", ano: "2022" }
      ],
      tecnologias: [
        { nome: "HTML 5", icone: <FaHtml5 className="text-gray-900 dark:text-gray-100" /> },
        { nome: "REACT", icone: <FaReact className="text-gray-900 dark:text-gray-100" /> },
        { nome: "CSS 3", icone: <FaCss3Alt className="text-gray-900 dark:text-gray-100" /> },
        { nome: "REACT NATIVE", icone: <FaReact className="text-gray-900 dark:text-gray-100" /> },
        { nome: "SASS", icone: <FaSass className="text-gray-900 dark:text-gray-100" /> },
        { nome: "EXPO", icone: <SiExpo className="text-gray-900 dark:text-gray-100" /> },
        { nome: "JAVASCRIPT", icone: <FaJs className="text-gray-900 dark:text-gray-100" /> },
        { nome: "TAILWIND CSS", icone: <SiTailwindcss className="text-gray-900 dark:text-gray-100" /> },
        { nome: "TYPESCRIPT", icone: <SiTypescript className="text-gray-900 dark:text-gray-100" /> },
        { nome: "BOOTSTRAP", icone: <FaBootstrap className="text-gray-900 dark:text-gray-100" /> },
        { nome: "FIGMA", icone: <SiFigma className="text-gray-900 dark:text-gray-100" /> },
        { nome: "PHOTOSHOP", icone: <SiAdobephotoshop className="text-gray-900 dark:text-gray-100" /> }
      ],
      certificacoes: [
        { nome: "Google UX Design", ano: "2024", link: "https://www.coursera.org/verify/professional-cert/NF9AFJHZW6DZ" },
        { nome: "Design a User Experience for Social Good and Prepare for Jobs - Google", ano: "2024", link: "https://www.coursera.org/verify/YY9UASZKBGNT" },
        { nome: "Create Dynamic User Interfaces (UI) for Websites - Google", ano: "2024", link: "https://coursera.org/verify/XQBNSZ83VLYG" },
        { nome: "Create High-Fidelity Designs and Prototypes in Figma - Google", ano: "2024", link: "https://coursera.org/verify/JKDHW34UCZHZ" },
        { nome: "Conduct UX Research and Test Early Concepts - Google", ano: "2024", link: "https://www.coursera.org/verify/KQRD5UTP7B9E" },
        { nome: "Create Wireframes and Low-Fidelity Prototypes - Google", ano: "2024", link: "https://coursera.org/verify/8Y44TZCAH64P" },
        { nome: "Start the UX Design Process: Empathize, Define, and Ideate - Google", ano: "2024", link: "https://coursera.org/verify/XUL5KMD5RXA6" },
        { nome: "Foundations of User Experience (UX) Design - Google", ano: "2023", link: "https://coursera.org/verify/Q56CCANK3EYL" },
        { nome: "Meta Front-End Developer", ano: "2024", link: "https://www.credly.com/badges/cf00d608-63f1-49fd-8100-29decfc0dc46/" },
        { nome: "Coding Interview Preparation - Meta", ano: "2024", link: "https://www.coursera.org/verify/JKQ3W4X8PMTX" },
        { nome: "Front-End Developer Capstone - Meta", ano: "2024", link: "https://www.coursera.org/verify/RSERHCM3UYJG" },
        { nome: "Principles of UX/UI Design - Meta", ano: "2024", link: "https://www.coursera.org/verify/EPEW3HS7KRGO" },
        { nome: "Advanced React - Meta", ano: "2024", link: "https://www.coursera.org/verify/IW6A6M8ZTLPM" },
        { nome: "React Basics - Meta", ano: "2024", link: "https://www.coursera.org/verify/PWUM5FO6VFTS" },
        { nome: "HTML and CSS in Depth - Meta", ano: "2024", link: "https://coursera.org/verify/HEMQSCZM2Q37" },
        { nome: "Version Control - Meta", ano: "2024", link: "https://coursera.org/verify/68AMXBR5DZBH" },
        { nome: "Programming with JavaScript - Meta", ano: "2024", link: "https://www.coursera.org/verify/NLVLLFW25QMJ" },
        { nome: "Introduction to Front-End Development - Meta", ano: "2024", link: "https://coursera.org/verify/MPHK2EV89FKG" },
        { nome: "Networks and Computers - Fundação Bradesco", ano: "2023" },
        { nome: "Python Immersion in Practice - Empowerdata", ano: "2023" },
        { nome: "Programming Logic - SENAI", ano: "2023" }
      ]
    }
  };

  // Seleciona o texto com base no idioma
  const { title, description, academicTitle, technologiesTitle, certificationsTitle, seeMore, seeLess, formacoesAcademicas, tecnologias, certificacoes } = translations[language];

  // Hook useInView para detectar quando a seção está visível
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-l from-purple-200 to-blue-200 dark:from-purple-900 dark:to-blue-900 w-full text-gray-900 dark:text-white py-12 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      {/* Título e descrição */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-center pt-12 mb-8"
      >
        <h2 className="text-3xl sm:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl mx-auto text-gray-700 dark:text-gray-200">
          {description}
        </p>
      </motion.div>

      {/* Formações Acadêmicas e Tecnologias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Coluna 1: Formações Acadêmicas */}
        <div>
          <h3 className="font-semibold text-lg border-b border-gray-900 dark:border-white pb-2 mb-4">
            {academicTitle}
          </h3>
          {formacoesAcademicas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }} // Delay progressivo
              className="flex justify-between mb-2"
            >
              <span>{item.nome}</span>
              <span>{item.ano}</span>
            </motion.div>
          ))}
        </div>

        {/* Coluna 2: Tecnologias */}
        <div>
          <h3 className="font-semibold text-lg border-b border-gray-900 dark:border-white pb-2 mb-4">
            {technologiesTitle}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {tecnologias.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-xl">{item.icone}</span>
                <span>{item.nome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Seção de Certificações */}
      <div className="mt-8 w-full">
        <h3 className="font-semibold text-lg border-b border-gray-900 dark:border-white pb-2 mb-4">
          {certificationsTitle}
        </h3>
        <div className="space-y-2">
          {certificacoes.slice(0, 5).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }} 
              className="flex justify-between"
            >
              <span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 text-l dark:hover:text-purple-300 duration-300"
                >
                  {item.nome}
                </a>
              </span>
              <span>{item.ano}</span>
            </motion.div>
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
          className="mt-2 w-full text-center overflow-hidden"
        >
          {certificacoes.slice(5).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }} 
              className="flex justify-between mb-2"
            >
              <span>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 dark:hover:text-purple-300 duration-300"
                >
                  {item.nome}
                </a>
              </span>
              <span>{item.ano}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Botão Ver Mais/Ver Menos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 1.5 }} 
        className="mt-2 text-center"
      >
        <ButtonAllPurple
          onClick={() => setExpanded(!expanded)}
          className={`mt-8 dark:bg-[#ffffff30] dark:border-gray-100 dark:hover:bg-gray-200 dark:hover:text-purple-800`}
        >
          {expanded ? seeLess : seeMore}
        </ButtonAllPurple>
      </motion.div>
    </div>
  );
};

export default Formacao;