"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react"; // Ícones do lucide-react

const Icons = [
  { name: "GitHub", icon: Github, link: "https://github.com/EmillyBudriBognar" },
  { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/emilly-budri-bognar/" },
  { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/emillybudri/#" },
];

const SocialIcons = () => {
  return (
    <div className="text-purple-300 flex space-x-3">
      {Icons.map((icon) => {
        const IconComponent = icon.icon; // Armazena o componente do ícone
        return (
          <motion.div key={icon.name} className="relative flex items-center justify-center group">
            <motion.a
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 cursor-pointer inline-flex items-center rounded-full bg-purple-400 dark:bg-purple-700 text-xl text-purple-800 dark:text-white hover:text-gray-100 dark:hover:text-gray-200 hover:bg-purple-500 dark:hover:bg-purple-600 duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="w-6 h-6" /> {/* Renderiza o ícone */}
            </motion.a>
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-200 border border-purple-400 dark:border-purple-600 px-2 py-1 rounded-md shadow-md">
              {icon.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export { SocialIcons };