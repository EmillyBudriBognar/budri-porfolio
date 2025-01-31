"use client";

import React, { useState } from "react";
import Logo from "../assets/img/logo/black-and-purple.svg"; 
import MenuIcon from "../assets/icons/menu.svg"; 
import CloseIcon from "../assets/icons/close.svg"; 
import Button from "../components/Button";
import Image from "next/image";

const Nav = () => {
  const Links = [
    { name: "INÍCIO", link: "/" },
    { name: "PORTFOLIO", link: "/portfolio" },
    { name: "SOBRE", link: "/sobre" },
    { name: "CONTATO", link: "/contato" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <Button>Pedir Orçamento</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
