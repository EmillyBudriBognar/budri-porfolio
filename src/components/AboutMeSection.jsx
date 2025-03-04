"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Emilly from "../assets/img/emilly-budri.jpeg";
import { SocialIcons } from "../components/SocialIcons";
import Image from "next/image";
import Button from "./ButtonAllPurple";
import { useInView } from "react-intersection-observer";

const roles = ["UX Designer", "Desenvolvedora Front-End", "Desenvolvedora Mobile"];

export default function ProfileCard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => setDisplayedText((prev) => prev.slice(0, -1)), 50);
    } else {
      timer = setTimeout(() => setDisplayedText((prev) => fullText.slice(0, prev.length + 1)), 100);
    }

    if (!isDeleting && displayedText === fullText) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Hook useInView para a animação da seção
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Dispara a animação uma vez
    threshold: 0.1, // A animação começa quando 10% da seção estiver visível
  });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-screen w-full p-8 transition-all duration-300 bg-purple-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl font-bold text-center max-w-4xl pt-14 mx-auto pb-4"
      >
        Olá, eu sou a Emilly Budri Bognar!
      </motion.h2>

      {/* Subtítulo animado */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }} // Delay maior para aparecer após o título
        className="text-2xl font-bold text-center mb-10 max-w-4xl mx-auto pb-10 text-purple-600 dark:text-purple-400"
      >
        {displayedText}
        <span className="text-current">|</span>
      </motion.h2>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-12">
        {/* Imagem e ícones sociais */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }} // Delay maior para aparecer após o subtítulo
          className="flex flex-col items-center w-full md:w-1/3 mb-12 md:mb-0"
        >
          <div className="relative w-80 h-80 -mt-10 mb-8">
            <Image
              src={Emilly}
              alt="Emilly Budri"
              className="w-full h-full rounded-full border-4 border-purple-600 dark:border-purple-400 shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex gap-6 justify-center items-center">
            <SocialIcons />
          </div>
        </motion.div>

        {/* Texto e botão */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.3 }} // Delay maior para aparecer após a imagem
          className="flex flex-col w-full md:w-2/3 text-center md:text-left"
        >
          <motion.p
            className="mx-auto mb-10 md:mx-0 text-justify leading-relaxed sm:mt-[-45px] md:-mt-10 text-gray-700 dark:text-gray-200"
          >
            Sou apaixonada por <b>tecnologia</b> e <b>UX Design</b>, onde <b>psicologia</b>, <b>arte</b> e <b>experiência do usuário</b> se encontram. Acredito que o <b>design</b> deve ser mais do que funcional – ele precisa criar uma <b>experiência intuitiva</b> e alinhada às <b>demandas reais</b> das pessoas.
            <br /><br />
          </motion.p>
          <motion.p
            className="mx-auto mb-10 md:mx-0 text-justify leading-relaxed sm:mt-[-45px] md:-mt-10 text-gray-700 dark:text-gray-200"
          >
            Meu objetivo é desenvolver <b>soluções digitais</b> que fazem a diferença no dia a dia, sempre com <b>comunicação clara</b> e foco nas <b>necessidades reais</b> dos usuários. Sou curiosa e estou sempre explorando <b>novas perspectivas</b> para aprimorar cada detalhe do design.
          </motion.p>

          {/* Botão animado */}
          <motion.div
            className="flex justify-center items-center mt-4 pb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.7 }} // Delay maior para aparecer após o texto
          >
            <Button
              className="transition-all duration-300"
              onClick={() =>
                window.open("https://drive.google.com/file/d/SEU_ID_DO_PDF/view", "_blank")
              }
            >
              BAIXAR CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}