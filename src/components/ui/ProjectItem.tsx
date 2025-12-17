"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

interface ProjectItemProps {
    project: Project;
    index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
        >
            <Link href={project.link} aria-label={`Ver projeto ${project.title}`}>
                {/* Imagem do Projeto */}
                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover transition-all duration-500"
                    priority={index < 3}
                />

                {/* Efeito ao Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white text-center p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-l mt-2">{project.description}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectItem;
