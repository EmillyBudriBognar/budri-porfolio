"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Emilly from "../assets/img/emilly-budri.jpeg";
import { SocialIcons } from "../components/SocialIcons";
import Image from "next/image";
import Button from "./ButtonPurple";

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

  return (
    <motion.div
      id="AboutMeSection"
      className="flex flex-col items-center justify-center min-h-screen w-full p-8 bg-purple-50"
    >
      <h2 className="text-3xl font-bold text-gray-900 text-center max-w-4xl pt-16 mx-auto pb-4">
        Olá, eu sou a Emilly Budri Bognar!
      </h2>
      <motion.h2 className="text-3xl font-bold text-center mb-10 max-w-4xl mx-auto pb-10 text-purple-600">
        {displayedText}
        <span className="text-gray-900">|</span>
      </motion.h2>
     
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-12">
        {/* Imagem e Social Icons */}
        <div className="flex flex-col items-center w-full md:w-1/3 mb-12 md:mb-0">
          <div className="relative w-80 h-80 -mt-8 mb-8">
            <Image
              src={Emilly}
              alt="Emilly Budri"
              className="w-full h-full rounded-full border-4 border-purple-600 shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex gap-6 justify-center items-center">
            <SocialIcons />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col w-full md:w-2/3 text-center md:text-left">
          <p className="text-gray-700 mx-auto mb-10 md:mx-0 text-justify leading-relaxed sm:mt-[-35px] md:mt-0">
            Sou apaixonada por <b>tecnologia</b> e <b>UX Design</b>, onde <b>psicologia</b>, <b>arte</b> e <b>experiência do usuário</b> se encontram. Acredito que o <b>design</b> deve ser mais do que funcional – ele precisa criar uma <b>experiência intuitiva</b> e alinhada às <b>demandas reais</b> das pessoas.
            <br /><br />
            Meu objetivo é desenvolver <b>soluções digitais</b> que fazem a diferença no dia a dia, sempre com <b>comunicação clara</b> e foco nas <b>necessidades reais</b> dos usuários. Sou curiosa e estou sempre explorando <b>novas perspectivas</b> para aprimorar cada detalhe do design.
          </p>

          {/* Botão Centralizado */}
          <div className="flex justify-center items-center mt-4 pb-12">
            <Button
              onClick={() =>
                window.open("https://drive.google.com/file/d/SEU_ID_DO_PDF/view", "_blank")
              }
            >
              BAIXAR CV
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
