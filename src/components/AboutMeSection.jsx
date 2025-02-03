"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Emilly from "../assets/img/emilly-budri.jpeg";
import { SocialIcons } from "../components/SocialIcons";
import Image from "next/image";
import Button from "./Button";

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-8 bg-[#f5f0ff]">
      <h2 className="text-3xl font-bold text-black leading-tight text-center mb-6 max-w-5xl mx-auto">
        Olá, eu sou a Emilly Budri Bognar! <br/>
        <motion.span className="text-purple-600 ml-2">{displayedText}</motion.span>
      </h2>
  
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
        {/* Imagem e Social Icons */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0">
          <Image
            src={Emilly}
            alt="Emilly Budri"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-purple-600 shadow-lg"
          />
          <div className="flex gap-4 mt-4">
            <SocialIcons/>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col w-full md:w-2/3 text-center md:text-left md:ml-12">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Altamente Qualificada",
              "Melhoria na Performance",
              "Melhor Custo-Benefício",
            ].map((text, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md text-center">
                <p className="text-black font-medium">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-6 max-w-2xl mx-auto mb-6 md:mx-0">
            I'm a Brazilian enthusiast who loves blending creativity and technology.
            Working as a UX/UI Designer and Front-End Developer is where I find my
            true calling. In my free time, I enjoy learning new things, diving into
            books, playing the piano, and cherishing special moments with my family
            and friends.
          </p>
          <Button>BAIXAR CV</Button>
        </div>
      </div>
    </div>
  );
}