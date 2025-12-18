"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useTranslation } from "@/hooks/useTranslation";

interface ServiceItem {
    title: string;
    icon: string;
    description: string;
    methodology: string;
}

interface Translation {
    services: ServiceItem[];
    buttonText: string;
}

interface Translations {
    [key: string]: Translation;
}

interface ServiceCardProps {
    item: ServiceItem;
    index: number;
    buttonText: string;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index, buttonText, onClick }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useGSAP(() => {
        if (!cardRef.current || !innerRef.current) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = cardRef.current!.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            gsap.to(innerRef.current, {
                x: x * 0.2,
                y: y * 0.2,
                duration: 0.4,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(innerRef.current, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
        };

        const target = cardRef.current;
        target.addEventListener('mousemove', handleMouseMove);
        target.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            target.removeEventListener('mousemove', handleMouseMove);
            target.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, { scope: cardRef });

    return (
        <motion.div
            ref={inViewRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group p-4 h-full"
        >
            <div ref={cardRef} className="h-full">
                <div
                    ref={innerRef}
                    className="h-full bg-white/80 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-purple-100 dark:border-purple-900/30 group-hover:border-purple-500/50 transition-colors duration-500 flex flex-col items-center text-center"
                >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner ring-4 ring-white dark:ring-gray-800/50">
                        {item.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-4 tracking-tight text-gray-900 dark:text-white uppercase transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-auto">
                        {item.description}
                    </p>
                    <Button
                        variant="outline"
                        onClick={onClick}
                        className="mt-8 rounded-full border-2 border-purple-200 dark:border-purple-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default function Services() {
    const { language } = useTranslation();
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

    const translations: Translations = {
        pt: {
            services: [
                {
                    title: "UX/UI Design",
                    icon: "💬",
                    description: "Crio designs de UI/UX para sites e aplicativos, garantindo uma aparência única e experiência intuitiva.",
                    methodology: `O design UX/UI envolve a criação de interfaces funcionais e esteticamente agradáveis, focadas na interação intuitiva e eficiente com o usuário. \n\n💡 Pesquisa de usuários: Investigações detalhadas para compreender necessidades.\n👩‍🎨 Criação de personas: Representações do público-alvo.\n📝 Wireframes: Esboços e protótipos interativos.\n🧪 Testes: Validação constante das interfaces.`
                },
                {
                    title: "Front-End WEB",
                    icon: "</>",
                    description: "Desenvolvo sites impactantes utilizando tecnologias modernas para criar experiências envolventes.",
                    methodology: `Criação de interfaces modernas, escaláveis e responsivas.\n\n💻 Stack: HTML, CSS, SASS, React, Tailwind, TypeScript.\n🎨 Responsividade: Adaptação perfeita a qualquer dispositivo.\n⚙️ Código Limpo: Organização para fácil manutenção.`
                },
                {
                    title: "Front-End Mobile",
                    icon: "📱",
                    description: "Crio aplicativos nativos com interfaces atraentes e navegação fluida em todas as plataformas.",
                    methodology: `Apps fluidos e otimizados utilizando React Native.\n\n📲 Código Unificado: iOS e Android com a mesma base.\n📡 Expo: Acesso a recursos nativos (GPS, Câmera).\n🧩 Detalhes: Fluidez e interfaces de alta fidelidade.`
                },
                {
                    title: "Usabilidade",
                    icon: "⚡",
                    description: "Realizo testes e pesquisas para garantir que os produtos sejam acessíveis e fáceis de usar.",
                    methodology: `Melhoria da interação usuário-produto.\n\n🔍 Testes A/B: Comparação de variações.\n🗣️ Entrevistas: Insights diretos do público.\n📊 Auditoria: Princípios de usabilidade aplicados.\n🏆 Competidores: Análise de diferenciação.`
                },
                {
                    title: "E-mails em HTML",
                    icon: "✉️",
                    description: "Desenvolvo e-mails responsivos e atrativos, alinhados à identidade da marca para campanhas.",
                    methodology: `Comunicação estratégica e consistente.\n\n🎨 Design: Templates interativos e otimizados.\n🌐 Cross-device: Funciona em qualquer cliente de e-mail.\n📈 Performance: Foco em taxas de abertura e cliques.`
                },
                {
                    title: "Design Gráfico",
                    icon: "🎨",
                    description: "Crio identidades visuais, logotipos e materiais gráficos impactantes para sua marca.",
                    methodology: `Transformação de conceitos em valores visuais.\n\n✍️ Logotipos: Criação única e versátil.\n📘 Branding: Cores e tipografias estratégicas.\n📄 Materiais: Consistência em cada peça gráfica.`
                }
            ],
            buttonText: "como funciona",
        },
        es: {
            services: [
                {
                    title: "Diseño UX/UI",
                    icon: "💬",
                    description: "Creo diseños de UI/UX para sitios web y aplicaciones, garantizando una apariencia única y una experiencia intuitiva.",
                    methodology: `El diseño UX/UI implica la creación de interfaces funcionales y estéticamente agradables.\n\n💡 Investigación: Entender necesidades profundamente.\n👩‍🎨 Personas: Representación ideal de usuarios.\n📝 Wireframes: Prototipos para probar conceptos.\n🧪 Pruebas: Validación constante y refinamiento.`
                },
                {
                    title: "Desarrollo Front-End WEB",
                    icon: "</>",
                    description: "Desarrollo sitios web funcionales e impactantes, utilizando tecnologías modernas.",
                    methodology: `Interfaces modernas, escalables y responsivas.\n\n💻 Tecnologías: React, SASS, Tailwind, TypeScript.\n🎨 Diseño dinámico: Experiencia consistente en todo dispositivo.\n⚙️ Integración: Atención al código escalable.`
                },
                {
                    title: "Desarrollo Front-End Mobile",
                    icon: "📱",
                    description: "Creo aplicaciones nativas con interfaces atractivas y navegación fluida en todas las plataformas.",
                    methodology: `Apps optimizadas para cualquier ecosistema.\n\n📲 React Native: Desarrollo multiplataforma eficiente.\n📡 Expo Integration: Funciones nativas potentes.\n🧩 UX Mobile: Fluidez en cada interacción.`
                },
                {
                    title: "Investigación de Usabilidad",
                    icon: "⚡",
                    description: "Realizo pruebas e investigaciones para garantizar que los productos sean fáciles de usar.",
                    methodology: `Mejora de la interacción usuario-producto.\n\n🔍 Pruebas A/B: Análisis comparativo.\n🗣️ Insights: Feedback directo del público.\n📊 Heurística: Evaluación basada en principios UX.\n🏆 Auditoría: Análisis de la competencia.`
                },
                {
                    title: "Correos Personalizados en HTML",
                    icon: "✉️",
                    description: "Desarrollo correos responsivos y atractivos, alinhados con la identidad de su marca.",
                    methodology: `E-mails personalizados que conectan marcas con sus públicos.\n\n✉️ Estrategia: Plantillas optimizadas y atractivas.\n🌐 Compatibilidad: Funciona en todos los clientes.\n📉 Conversión: Foco en resultados constantes.`
                },
                {
                    title: "Diseño Gráfico",
                    icon: "🎨",
                    description: "Creo identidades visuales, logotipos y materiales gráficos impactantes para marcas.",
                    methodology: `Conceptos transformados en comunicación visual.\n\n🎨 Estilo: Color y tipografía con propósito.\n🖌️ Creatividad: Identidades únicas al cliente.\n📄 Consistencia: Materiales de alta calidad.`
                }
            ],
            buttonText: "cómo funciona",
        },
        en: {
            services: [
                {
                    title: "UX/UI Design",
                    icon: "💬",
                    description: "I create UI/UX designs for websites and apps, ensuring a unique look and intuitive experience.",
                    methodology: `Creating functional and aesthetically pleasing interfaces.\n\n💡 Research: Understanding user needs.\n👩‍🎨 Personas: Strategic design guidance.\n📝 Prototyping: Testing concepts early.\n🧪 Validation: Constant interface refinement.`
                },
                {
                    title: "Front-End WEB",
                    icon: "</>",
                    description: "I develop functional and impactful websites using modern technologies for engaging experiences.",
                    methodology: `Modern, scalable, and responsive interfaces.\n\n💻 Stack: React, Tailwind, TypeScript, SASS.\n🎨 Responsive: Perfect on every screen size.\n⚙️ Clean Code: Structured for easy evolution.`
                },
                {
                    title: "Front-End Mobile",
                    icon: "📱",
                    description: "I create native apps with attractive interfaces and smooth navigation on all platforms.",
                    methodology: `Fluid mobile apps optimized for any device.\n\n📲 React Native: Cross-platform unified codebase.\n📡 Expo: Leveraging native hardware features.\n🧩 Precision: Focus on fluid mobile UX.`
                },
                {
                    title: "Usability Research",
                    icon: "⚡",
                    description: "I conduct tests and research to ensure products are accessible and easy to use.",
                    methodology: `Analyzing and improving digital interactions.\n\n🔍 A/B Testing: Data-driven design choices.\n🗣️ Interviews: Direct audience insights.\n📊 Heuristics: Principle-based evaluation.\n🏆 Competitors: Finding unique opportunities.`
                },
                {
                    title: "Custom HTML Emails",
                    icon: "✉️",
                    description: "I develop responsive and attractive emails aligned with brand identity for campaigns.",
                    methodology: `Strategic and consistent email communication.\n\n✉️ Creation: Interactive and optimized templates.\n🌐 Compatibility: Flawless on all email clients.\n📈 Conversion: Focus on engagement rates.`
                },
                {
                    title: "Graphic Design",
                    icon: "🎨",
                    description: "I create visual identities, logos, and impactful graphic materials for brands.",
                    methodology: `Transforming concepts into strong visual values.\n\n🖌️ Branding: Custom identities for each client.\n✍️ Logos: Unique and versatile symbols.\n📄 Quality: Professional-grade graphic assets.`
                }
            ],
            buttonText: "how it works",
        },
    };

    const { services, buttonText } = translations[language] || translations['pt'];

    useEffect(() => {
        if (selectedService) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [selectedService]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 px-4">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    item={service}
                    index={index}
                    buttonText={buttonText}
                    onClick={() => setSelectedService(service)}
                />
            ))}

            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xl z-[100] px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-10 w-full max-w-2xl text-left shadow-2xl border border-purple-100 dark:border-purple-900/30 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-6 right-8 text-gray-400 hover:text-purple-600 transition-colors text-2xl"
                                onClick={() => setSelectedService(null)}
                            >
                                ✖
                            </button>
                            <div className="text-4xl mb-6">{selectedService.icon}</div>
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-8">
                                {selectedService.title}
                            </h2>
                            <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed text-lg">
                                {selectedService.methodology}
                            </div>
                            <Button
                                className="mt-12 w-full sm:w-auto rounded-full"
                                onClick={() => setSelectedService(null)}
                            >
                                FECHAR
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
