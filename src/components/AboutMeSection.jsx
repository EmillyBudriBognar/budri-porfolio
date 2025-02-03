"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Emilly from "../assets/img/emilly-budri.jpeg";
import { SocialIcons } from "../components/SocialIcons";
import Image from "next/image";
import Button from "./Button";
import Slider from "react-slick";

const roles = ["UX Designer", "Front-End Developer", "Mobile Developer"];

export default function ProfileCard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedText === fullText) {
      setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-8 bg-[#fafafa]">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10 max-w-4xl mx-auto">
        Olá, eu sou a <span className="text-purple-600">Emilly Budri Bognar</span>! <br />
        <motion.span className="text-indigo-600">
          {displayedText}
          <span className="text-gray-900">|</span>
        </motion.span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-24">
        {/* Imagem e Social Icons */}
        <div className="flex flex-col items-center w-full md:w-1/3 mb-12 md:mb-0 md:ml-12">
          <div className="relative w-74 h-74 mb-8">
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
        <div className="flex flex-col w-full md:w-2/3 text-center md:text-left md:mr-24"> {/* Aumentei a margem direita aqui */}
          <div className="mt-6 w-[80%] mb-12 mx-auto"> {/* Carrossel de Cards */}
            <Slider {...settings}>
              {[
                { icon: "🔥", title: "Qualificação de Excelência", subtitle: "Expertise comprovada para entregar resultados excepcionais." },
                { icon: "⚡", title: "Performance Acelerada", subtitle: "Soluções eficientes que elevam seus resultados rapidamente." },
                { icon: "💰", title: "Custo-Benefício Imbatível", subtitle: "Máxima qualidade com investimentos que fazem sentido para seu bolso." },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg shadow-md text-white text-center w-[250px] mx-auto transition-all"
                >
                  <div className="text-3xl mb-4 group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-xl mb-2 group-hover:scale-105 transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm group-hover:scale-105 transition-all duration-300">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </Slider>
          </div>

          <p className="text-gray-700 mt-6 mx-auto mb-6 md:mx-0">
            I'm a Brazilian enthusiast who loves blending creativity and technology. As a UX/UI Designer and Front-End Developer, I am passionate about building user-friendly, innovative products that make a difference. Outside of work, I enjoy learning new things, playing the piano, and spending time with family and friends.
          </p>

          {/* Botão Centralizado */}
          <div className="flex justify-center items-center mt-4">
            <Button>BAIXAR CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
}