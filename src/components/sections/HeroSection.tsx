"use client";

import React, { useRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useTranslation } from "@/hooks/useTranslation";

interface Translation {
    greeting: string;
    name: string;
    headline: string;
    altMobile: string;
    altDesktop: string;
}

interface Translations {
    [key: string]: Translation;
}

const HeroSection: React.FC = () => {
    const { language } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const illustrationRef = useRef<HTMLDivElement>(null);
    const blobsRef = useRef<HTMLDivElement>(null);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const translations: Translations = {
        pt: {
            greeting: "Olá, eu sou a Emilly, mas pode me chamar de",
            name: "BUDRI",
            headline: "TORNANDO O DIGITAL SIMPLES, HUMANO & INESQUECÍVEL.",
            altMobile: "Ilustração de Emilly (Personagem Budri)",
            altDesktop: "Ilustração de Emilly (Personagem Budri)",
        },
        es: {
            greeting: "Hola, soy Emilly, pero puedes llamarme",
            name: "BUDRI",
            headline: "HACIENDO LO DIGITAL SIMPLE, HUMANO & INOLVIDABLE.",
            altMobile: "Ilustración de Emilly (Personaje Budri)",
            altDesktop: "Ilustración de Emilly (Personaje Budri)",
        },
        en: {
            greeting: "Hi, I'm Emilly, but you can call me",
            name: "BUDRI",
            headline: "MAKING DIGITAL SIMPLE, HUMAN & UNFORGETTABLE.",
            altMobile: "Illustration of Emilly (Budri Character)",
            altDesktop: "Illustration of Emilly (Budri Character)",
        },
    };

    const { greeting, name, headline, altMobile, altDesktop } = translations[language] || translations['pt'];

    // GSAP Animations
    useGSAP(() => {
        // Floating Blobs Animation
        const blobs = gsap.utils.toArray('.hero-blob');
        blobs.forEach((blob: any) => {
            gsap.to(blob, {
                x: "random(-40, 40)",
                y: "random(-40, 40)",
                rotation: "random(-15, 15)",
                duration: "random(4, 8)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Mouse Parallax Effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const moveX = (clientX - innerWidth / 2) / innerWidth;
            const moveY = (clientY - innerHeight / 2) / innerHeight;

            gsap.to(illustrationRef.current, {
                x: moveX * 30,
                y: moveY * 30,
                duration: 1,
                ease: "power2.out"
            });

            gsap.to('.hero-blob-1', {
                x: moveX * -50,
                y: moveY * -50,
                duration: 1.5,
                ease: "power2.out"
            });

            gsap.to('.hero-blob-2', {
                x: moveX * 40,
                y: moveY * 40,
                duration: 1.2,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-[100vh] text-center px-4 overflow-hidden bg-purple-50 dark:bg-gray-950 transition-colors duration-500"
            id="hero-section"
        >
            {/* Playful Background Blobs */}
            <div className="absolute inset-0 z-0 pointer-events-none" ref={blobsRef}>
                <div className="hero-blob hero-blob-1 absolute top-1/4 -left-20 w-80 h-80 bg-purple-400/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
                <div className="hero-blob hero-blob-2 absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
                <div className="hero-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-white/30 to-transparent dark:from-purple-900/5 dark:to-transparent opacity-50" />
            </div>

            <div className="z-10 w-full flex flex-col items-center justify-center max-w-5xl mx-auto pt-20">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center mb-6"
                >
                    <div className="inline-flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-6 py-2 rounded-full border border-purple-100 dark:border-purple-900/30 shadow-sm mb-8">
                        <span className="text-2xl animate-wave">👋</span>
                        <h3 className="text-gray-700 dark:text-gray-300 font-medium">
                            {greeting} <span className="text-purple-600 dark:text-purple-400 font-bold">{name}</span>
                        </h3>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                        {headline.split(' ').map((word, i) => (
                            <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                                {word === "SIMPLES," || word === "HUMANO" || word === "INESQUECÍVEL." ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                                        {word}
                                    </span>
                                ) : word}
                            </span>
                        ))}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                    className="relative w-full h-[45vh] md:h-[55vh] z-20 perspective-1000"
                    ref={illustrationRef}
                >
                    <div className="relative w-full h-full flex items-center justify-center filter drop-shadow-2xl">
                        <Image
                            src="/images/me.svg"
                            alt={altMobile}
                            fill
                            className="md:hidden object-contain"
                            priority
                        />
                        <Image
                            src="/images/me-bg.svg"
                            alt={altDesktop}
                            fill
                            className="hidden md:block object-contain scale-110"
                            priority
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
