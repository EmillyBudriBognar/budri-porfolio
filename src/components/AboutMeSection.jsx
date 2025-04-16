"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Emilly from "../assets/img/emilly-budri.jpeg";
import { SocialIcons } from "../components/SocialIcons";
import Image from "next/image";
import Button from "./ButtonAllPurple";
import { useInView } from "react-intersection-observer";

const ProfileCard = ({ language }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Objeto de tradução para os textos e links
  const translations = {
    pt: {
      greeting: "Olá, eu sou a Emilly Budri Bognar!",
      roles: ["UX Designer", "Desenvolvedora Front-End", "Desenvolvedora Mobile"],
      description1:
        "Sou apaixonada por <b>tecnologia</b> e <b>UX Design</b>, onde <b>psicologia</b>, <b>arte</b> e <b>experiência do usuário</b> se encontram. Acredito que o <b>design</b> deve ser mais do que funcional - ele precisa criar uma <b>experiência intuitiva</b> e alinhada às <b>demandas reais</b> das pessoas.",
      description2:
        "Meu objetivo é desenvolver <b>soluções digitais</b> que fazem a diferença no dia a dia, sempre com <b>comunicação clara</b> e foco nas <b>necessidades reais</b> dos usuários. Sou curiosa e estou sempre explorando <b>novas perspectivas</b> para aprimorar cada detalhe do design.",
      description3: "Seria um prazer ajudar sua empresa a crescer com soluções digitais que realmente fazem a diferença.",
      buttonText: "BAIXAR CV",
      cvLink: "https://drive.google.com/file/", // Link para o CV em português
    },
    es: {
      greeting: "¡Hola, soy Emilly Budri Bognar!",
      roles: ["Diseñadora UX", "Desarrolladora Front-End", "Desarrolladora Mobile"],
      description1:
        "Me apasiona la <b>tecnología</b> y el <b>Diseño UX</b>, donde se encuentran la <b>psicología</b>, el <b>arte</b> y la <b>experiencia del usuario</b>. Creo que el <b>diseño</b> debe ser más que funcional: debe crear una <b>experiencia intuitiva</b> y alineada con las <b>necesidades reales</b> de las personas.",
      description2:
        "Mi objetivo es desarrollar <b>soluciones digitales</b> que marquen la diferencia en el día a día, siempre con <b>comunicación clara</b> y enfoque en las <b>necesidades reales</b> de los usuarios. Soy curiosa y siempre estoy explorando <b>nuevas perspectivas</b> para mejorar cada detalle del diseño.",
      description3: "Sería un placer ayudar a su empresa a crecer con soluciones digitales que realmente marcan la diferencia.",
      buttonText: "DESCARGAR CV",
      cvLink: "https://drive.google.com/file/", // Link para o CV em espanhol
    },
    en: {
      greeting: "Hi, I'm Emilly Budri Bognar!",
      roles: ["UX Designer", "Front-End Developer", "Mobile Developer"],
      description1:
        "I am passionate about <b>technology</b> and <b>UX Design</b>, where <b>psychology</b>, <b>art</b>, and <b>user experience</b> come together. I believe that <b>design</b> should be more than functional - it needs to create an <b>intuitive experience</b> aligned with the <b>real demands</b> of people.",
      description2:
        "My goal is to develop <b>digital solutions</b> that make a difference in everyday life, always with <b>clear communication</b> and a focus on the <b>real needs</b> of users. I am curious and always exploring <b>new perspectives</b> to enhance every detail of design.",
      description3: "It would be a pleasure to help your company grow with digital solutions that truly make a difference.",
      buttonText: "DOWNLOAD CV",
      cvLink: "https://drive.google.com/file/", // Link para o CV em inglês
    },
  };

  // Seleciona os textos e links com base no idioma
  const {
    greeting,
    roles: translatedRoles,
    description1,
    description2,
    description3,
    buttonText,
    cvLink,
  } = translations[language];

  // Efeito para a animação de digitação
  useEffect(() => {
    const fullText = translatedRoles[roleIndex];
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
      setRoleIndex((prev) => (prev + 1) % translatedRoles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, translatedRoles]);

  // Hook useInView para a animação da seção
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-screen w-full p-4 sm:p-8 transition-all duration-300 bg-purple-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Título principal */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl font-bold text-center max-w-4xl pt-8 sm:pt-14 mx-auto pb-4"
      >
        {greeting}
      </motion.h2>

      {/* Subtítulo animado */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-2xl font-bold text-center mb-6 sm:mb-16 max-w-4xl mx-auto pb-6 sm:pb-10 text-purple-600 dark:text-purple-400"
      >
        {displayedText}
        <span className="text-current">|</span>
      </motion.h2>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto gap-6 sm:gap-12">
        {/* Imagem e ícones sociais */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col items-center w-full md:w-1/3 mb-6 sm:mb-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 sm:-mt-16 mb-6 sm:mb-8">
            <Image
              src={Emilly}
              alt="Emilly Budri"
              className="w-full h-full rounded-full border-4 border-purple-600 sm:mt-2 dark:border-purple-400 shadow-xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex gap-6 lg:mb-10 justify-center items-center">
            <SocialIcons />
          </div>
        </motion.div>

        {/* Texto e botão */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-col w-full md:w-2/3 text-center md:text-left"
        >
          <motion.p
            className="mx-auto lg:mb-8 sm:mb-4 text-l md:mx-0 md:my-0 text-justify leading-relaxed sm:mt-4 md:-mt-10 text-gray-700 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: description1 }}
          />
          <motion.p
            className="mx-auto lg:mb-6 sm:mb-10 text-l md:mx-0 text-justify leading-relaxed sm:mt-0 text-gray-700 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: description2 }}
          />
          <motion.p
            className="mx-auto sm:mb-12 sm:mt-2 text-l md:mx-0 lg:text-justify sm:text-center leading-relaxed text-gray-700 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: description3 }}
          />

          {/* Botão animado */}
          <motion.div
            className="flex justify-center lg:mt-6 items-center mt-6 pb-8 sm:pb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            <Button
              className="transition-all duration-300"
              onClick={() => window.open(cvLink, "_blank")}
            >
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;