"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ProjectItem = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      className="relative rounded-xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Imagem do Projeto */}
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-60 object-cover transition-all duration-500"
      />

      {/* Efeito ao Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white text-center p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-l mt-2">{project.description}</p>
      </div>
    </motion.a>
  );
};

export default ProjectItem;