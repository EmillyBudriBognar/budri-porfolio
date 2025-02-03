"use client";

import React, { useState } from "react";
import Logo from "../assets/img/logo/black-and-purple.svg";
import MenuIcon from "../assets/icons/menu.svg";
import CloseIcon from "../assets/icons/close.svg";
import Button from "./ButtonPurple";
import { motion } from "framer-motion";
import Image from "next/image";

const Nav = () => {
  const Links = [
    { name: "INÍCIO", link: "/" },
    { name: "PROJETOS", link: "/portfolio" },
    { name: "SOBRE", link: "/sobre" },
    { name: "FORMAÇÃO", link: "/formacao" },
    { name: "CONTATO", link: "/contato" },
  ];

  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7">
        {/* Logo */}
        <div
          className="font-bold text-2xl cursor-pointer flex items-center text-gray-800"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          <span className="text-3xl mr-3 flex items-center">
            <Image
              src={Logo}
              alt="Budri Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </span>
          Budri
        </div>

        {/* Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <Image
            src={open ? CloseIcon : MenuIcon}
            alt={open ? "Fechar menu" : "Abrir menu"}
            width={30}
            height={30}
          />
        </div>

        {/* Links */}
        <ul
          className={`absolute md:static bg-gray-100 left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100 flex flex-col items-center gap-5"
              : "top-[-490px] opacity-0"
          } md:opacity-100 md:flex md:flex-row md:gap-8 md:left-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl">
              <motion.a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
          {/* Botão em telas menores */}
          <li className="mt-3 md:hidden">
            <Button onClick={() => scrollToSection("AboutMe")}>
              FALE COMIGO!
            </Button>
          </li>
        </ul>

        {/* Botão em telas maiores */}
        <div className="hidden md:block">
          <Button onClick={() => scrollToSection("AboutMe")}>
            FALE COMIGO!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
