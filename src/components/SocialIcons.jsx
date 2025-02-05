"use client";
import React from "react";
import LogoGithub from "../assets/icons/logo-github.svg";
import LogoLinkedin from "../assets/icons/logo-linkedin.svg";
import LogoInstagram from "../assets/icons/logo-instagram.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const Icons = [
  { name: "GitHub", icon: LogoGithub, link: "https://github.com/EmillyBudriBognar" },
  { name: "LinkedIn", icon: LogoLinkedin, link: "https://www.linkedin.com/in/emilly-budri-bognar/" },
  { name: "Instagram", icon: LogoInstagram, link: "https://www.instagram.com/emillybudri/#" },
];

const SocialIcons = () => {
  return (
    <div className="text-purple-300 flex space-x-3">
      {Icons.map((icon) => (
        <motion.div key={icon.name} className="relative flex items-center justify-center group">
          <motion.a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 cursor-pointer inline-flex items-center rounded-full bg-purple-700 text-xl hover:text-gray-100 hover:bg-purple-500 duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src={icon.icon} alt={icon.name} className="w-6 h-6" />
          </motion.a>
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold bg-white text-purple-700 border border-purple-400 px-2 py-1 rounded-md shadow-md">
            {icon.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export { SocialIcons };