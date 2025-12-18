"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";
import Image from "next/image";
import Services from "@/components/Services";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useTranslation } from "@/hooks/useTranslation";

interface Translation {
    title: string;
    experiences: string;
    subtitle: string;
    highlight: string;
    restSubtitle: string;
}

interface Translations {
    [key: string]: Translation;
}

const ServicesSection: React.FC = () => {
    const { language } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const translations: Translations = {
        pt: {
            title: "A Budri não apenas cria designs, aqui nós criamos",
            experiences: "EXPERIÊNCIAS",
            subtitle: "Serviços oferecidos que ",
            highlight: "ALAVANCARÃO",
            restSubtitle: " os seus negócios.",
        },
        es: {
            title: "Budri no solo crea diseños, aquí creamos",
            experiences: "EXPERIENCIAS",
            subtitle: "Servicios ofrecidos que ",
            highlight: "IMPULSARÁN",
            restSubtitle: " sus negocios.",
        },
        en: {
            title: "Budri doesn't just create designs, here we create",
            experiences: "EXPERIENCES",
            subtitle: "Services offered that will ",
            highlight: "BOOST",
            restSubtitle: " your business.",
        },
    };

    const { title, experiences, subtitle, highlight, restSubtitle } = translations[language] || translations['pt'];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useGSAP(() => {
        const blobs = gsap.utils.toArray('.services-blob');
        blobs.forEach((blob: any) => {
            gsap.to(blob, {
                x: "random(-50, 50)",
                y: "random(-50, 50)",
                duration: "random(5, 10)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative bg-purple-50 dark:bg-gray-950 w-full py-24 px-6 md:px-12 overflow-hidden transition-colors duration-500"
            id="services-section"
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="services-blob absolute top-1/3 -right-20 w-80 h-80 bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60" />
                <div className="services-blob absolute bottom-1/4 -left-20 w-64 h-64 bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        className="mb-8"
                    >
                        <Image
                            src="/images/logo/black-and-purple.svg"
                            alt="Logo Budri"
                            width={160}
                            height={40}
                            className="w-32 md:w-40 dark:hidden"
                        />
                        <Image
                            src="/images/logo/white-and-purple.svg"
                            alt="Logo Budri"
                            width={160}
                            height={40}
                            className="w-32 md:w-40 hidden dark:block"
                        />
                    </motion.div>

                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl font-medium mb-4 max-w-4xl"
                    >
                        {title}
                        <span className="block text-5xl md:text-7xl font-black mt-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 uppercase">
                            {experiences}
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full my-8"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl"
                    >
                        {subtitle}
                        <span className="font-bold text-gray-900 dark:text-white uppercase mx-1 underline decoration-purple-500 decoration-4 underline-offset-4">{highlight}</span>
                        {restSubtitle}
                    </motion.p>
                </div>

                <Services />
            </div>
        </section>
    );
};

export default ServicesSection;
