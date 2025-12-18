"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SocialIcons } from "../ui/SocialIcons";
import Image from "next/image";
import Button from "../ui/Button";
import { useInView } from "react-intersection-observer";
import {
    FaTrophy,
    FaPaintBrush,
    FaRocket,
    FaComments,
    FaAward,
    FaLightbulb
} from "react-icons/fa";

import { useTranslation } from "@/hooks/useTranslation";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    delay: number;
    inView: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, delay, inView }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border-b-4 ${color} transition-all duration-300 flex flex-col items-center text-center`}
        >
            <div className={`p-4 rounded-full mb-4 ${color.replace('border-', 'bg-').replace('-600', '-100').replace('-400', '-900/40')} text-2xl`}>
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2 tracking-tight">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        </motion.div>
    );
};

const ProfileCard: React.FC = () => {
    const { language } = useTranslation();
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const translations: any = {
        pt: {
            greeting: "Olá, eu sou a Emilly Budri Bognar!",
            roles: ["UX Designer", "Desenvolvedora Front-End", "Desenvolvedora Mobile"],
            intro: "Transformo ideias em experiências digitais impecáveis, onde a técnica encontra a sensibilidade.",
            cards: [
                {
                    title: "Hall da Fama",
                    description: "1º lugar na <b>OBI</b> e 4º no <b>InterFatecs</b>. Competição e lógica estão no meu DNA.",
                    icon: <FaTrophy className="text-yellow-600 dark:text-yellow-400" />,
                    color: "border-yellow-500"
                },
                {
                    title: "Alma UX",
                    description: "Onde <b>psicologia</b> e <b>arte</b> se fundem para criar fluxos que encantam usuários.",
                    icon: <FaPaintBrush className="text-purple-600 dark:text-purple-400" />,
                    color: "border-purple-500"
                },
                {
                    title: "Foco em Conversão",
                    description: "Interfaces de alta performance com <b>React e Liquid</b>, otimizadas para resultados reais.",
                    icon: <FaRocket className="text-blue-600 dark:text-blue-400" />,
                    color: "border-blue-500"
                },
                {
                    title: "Conexão Direta",
                    description: "Comunicação clara e foco total nas <b>necessidades reais</b> do seu negócio.",
                    icon: <FaComments className="text-green-600 dark:text-green-400" />,
                    color: "border-green-500"
                }
            ],
            buttonText: "BAIXAR CV",
            cvLink: "https://docs.google.com/document/d/1H7_aH-NyoqNIUuRG0EnQNOj6_9n7PHjR/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true",
        },
        es: {
            greeting: "¡Hola, soy Emilly Budri Bognar!",
            roles: ["Diseñadora UX", "Desarrolladora Front-End", "Desarrolladora Mobile"],
            intro: "Transformo ideas en experiencias digitales impecables, donde la técnica encuentra la sensibilidad.",
            cards: [
                {
                    title: "Salón de la Fama",
                    description: "1º lugar en <b>OBI</b> y 4º en <b>InterFatecs</b>. La competición y la lógica están en mi ADN.",
                    icon: <FaTrophy className="text-yellow-600 dark:text-yellow-400" />,
                    color: "border-yellow-500"
                },
                {
                    title: "Alma UX",
                    description: "Donde la <b>psicología</b> y el <b>arte</b> se funden para crear flujos que encantan.",
                    icon: <FaPaintBrush className="text-purple-600 dark:text-purple-400" />,
                    color: "border-purple-500"
                },
                {
                    title: "Foco en Conversión",
                    description: "Interfaces de alto rendimiento con <b>React y Liquid</b>, optimizadas para resultados.",
                    icon: <FaRocket className="text-blue-600 dark:text-blue-400" />,
                    color: "border-blue-500"
                },
                {
                    title: "Conexión Directa",
                    description: "Comunicación clara y enfoque total en las <b>necesidades reales</b> de su negocio.",
                    icon: <FaComments className="text-green-600 dark:text-green-400" />,
                    color: "border-green-500"
                }
            ],
            buttonText: "DESCARGAR CV",
            cvLink: "https://docs.google.com/document/d/1Ny_GQbOLBQ6wj0X0j3nNAjpSLHejhQxX/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true",
        },
        en: {
            greeting: "Hi, I'm Emilly Budri Bognar!",
            roles: ["UX Designer", "Front-End Developer", "Mobile Developer"],
            intro: "I transform ideas into flawless digital experiences, where technique meets sensibility.",
            cards: [
                {
                    title: "Hall of Fame",
                    description: "1st place in <b>OBI</b> and 4th in <b>InterFatecs</b>. Competition and logic are in my DNA.",
                    icon: <FaTrophy className="text-yellow-600 dark:text-yellow-400" />,
                    color: "border-yellow-500"
                },
                {
                    title: "UX Soul",
                    description: "Where <b>psychology</b> and <b>art</b> merge to create flows that delight users.",
                    icon: <FaPaintBrush className="text-purple-600 dark:text-purple-400" />,
                    color: "border-purple-500"
                },
                {
                    title: "Conversion Focused",
                    description: "High-performance interfaces with <b>React and Liquid</b>, optimized for results.",
                    icon: <FaRocket className="text-blue-600 dark:text-blue-400" />,
                    color: "border-blue-500"
                },
                {
                    title: "Direct Connect",
                    description: "Clear communication and total focus on the <b>real needs</b> of your business.",
                    icon: <FaComments className="text-green-600 dark:text-green-400" />,
                    color: "border-green-500"
                }
            ],
            buttonText: "DOWNLOAD CV",
            cvLink: "https://docs.google.com/document/d/195dhkZSfskG7wDIYI1DwUNJmXTpYWQD0/edit?usp=sharing&ouid=107642192742902543413&rtpof=true&sd=true",
        },
    };

    const currentTranslation = translations[language] || translations['pt'];

    useEffect(() => {
        const fullText = currentTranslation.roles[roleIndex];
        let timer: NodeJS.Timeout;

        if (isDeleting) {
            timer = setTimeout(() => setDisplayedText((prev) => prev.slice(0, -1)), 50);
        } else {
            timer = setTimeout(() => setDisplayedText((prev) => fullText.slice(0, prev.length + 1)), 100);
        }

        if (!isDeleting && displayedText === fullText) {
            setTimeout(() => setIsDeleting(true), 1200);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % currentTranslation.roles.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, roleIndex, currentTranslation.roles]);

    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col items-center justify-center min-h-screen w-full py-20 px-4 sm:px-8 md:px-16 lg:px-32 bg-purple-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-hidden"
            id="aboutme-section"
        >
            {/* Playful background elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 -left-20 w-64 h-64 bg-purple-300/20 dark:bg-purple-900/10 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -70, 0],
                    x: [0, -40, 0],
                    y: [0, 60, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 -right-20 w-80 h-80 bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"
            />

            <div className="max-w-6xl mx-auto w-full z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    {/* Left: Intro & Profile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative flex-shrink-0"
                    >
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/images/emilly-budri.jpeg"
                                alt="Emilly Budri"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={sectionInView ? { scale: 1 } : {}}
                            transition={{ delay: 1, type: "spring" }}
                            className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-3 rounded-2xl shadow-lg border-2 border-white dark:border-gray-800"
                        >
                            <FaAward className="text-xl" />
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex flex-col flex-grow text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: 30 }}
                            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                            className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
                        >
                            {currentTranslation.greeting}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={sectionInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 h-10"
                        >
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8 leading-relaxed italic"
                        >
                            "{currentTranslation.intro}"
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                        >
                            <div className="flex gap-4">
                                <SocialIcons />
                            </div>
                            <Button
                                className="px-8 shadow-xl hover:shadow-purple-500/20"
                                onClick={() => window.open(currentTranslation.cvLink, "_blank")}
                            >
                                {currentTranslation.buttonText}
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentTranslation.cards.map((card: any, index: number) => (
                        <FeatureCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            color={card.color}
                            delay={1 + index * 0.1}
                            inView={sectionInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
