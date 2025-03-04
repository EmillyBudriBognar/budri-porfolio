"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./ButtonPurple";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "UX/UI Design",
      icon: "💬",
      description:
        "Crio designs de UI/UX para sites e aplicativos, garantindo uma aparência única e experiência intuitiva.",
      methodology: `O design UX/UI envolve a criação de interfaces funcionais e esteticamente agradáveis, focadas na interação intuitiva e eficiente com o usuário. A metodologia utilizada consiste em:

      💡 Pesquisa de usuários: Realizo investigações detalhadas para compreender as necessidades, comportamentos e expectativas do público-alvo.

      👩‍🎨 Criação de personas: Desenvolvo representações detalhadas dos usuários para guiar decisões estratégicas de design.

      📝 Wireframes e prototipagem: Crio esboços estruturais e protótipos interativos para testar conceitos antes da implementação.

      🧪 Testes e validação: Implemento testes com usuários e reviso constantemente para garantir que as interfaces sejam intuitivas e acessíveis.

      Meu foco está em entregar soluções inovadoras que maximizem a satisfação do usuário e o impacto visual.`
    },
    {
      title: "Desenvolvimento Front-End WEB",
      icon: "</>",
      description:
        "Desenvolvo sites funcionais e impactantes, utilizando tecnologias modernas para criar experiências envolventes.",
      methodology: `O desenvolvimento front-end WEB abrange a criação de interfaces modernas, escaláveis e responsivas para oferecer experiências digitais excepcionais. A metodologia utilizada consiste em:

      💻 Tecnologias modernas: Trabalho com HTML, CSS, Styled Components, SASS, React, Bootstrap, Tailwind, JavaScript, TypeScript e outras para desenvolver soluções escaláveis.

      🎨 Design responsivo: Garanto que as interfaces sejam adaptáveis a diferentes dispositivos, proporcionando uma experiência consistente.

      ⚙️ Integração eficiente: Estruturo projetos com atenção à organização do código, garantindo manutenção e evolução simplificada.

      O objetivo é criar sites funcionais, bonitos e impactantes para o usuário final.`
    },
    {
      title: "Desenvolvimento Front-End Mobile",
      icon: "📱",
      description:
        "Crio aplicativos nativos com interfaces atraentes e navegação fluida que funcionam em todas as plataformas.",
      methodology: `O desenvolvimento mobile utiliza tecnologias que possibilitam criar aplicativos fluidos e intuitivos, otimizados para qualquer plataforma. A metodologia utilizada consiste em:

      📲 Código unificado com React Native: Crio aplicativos nativos que rodam em todos os sistemas operacionais a partir de um único código.

      📡 Integração com Expo: Uso o Expo para aproveitar as funções nativas do dispositivo, como câmera, notificações e GPS.

      🧩 Atenção aos detalhes: Priorizo fluidez e interfaces intuitivas que proporcionem uma navegação eficiente e agradável.

      Meu compromisso é entregar aplicativos que unam funcionalidade e design em todas as plataformas.`
    },
    {
      title: "Pesquisas de Usabilidade",
      icon: "⚡",
      description:
        "Realizo testes e pesquisas para garantir que os produtos sejam acessíveis e fáceis de usar.",
      methodology: `Pesquisas de usabilidade visam compreender e melhorar a interação do usuário com produtos digitais, garantindo acessibilidade e funcionalidade. A metodologia utilizada consiste em:

      🔍 Testes A/B: Comparo variações para entender o que funciona melhor para os usuários.

      🗣️ Entrevistas e feedback: Recolho insights diretamente do público-alvo para aprimorar os produtos.

      📊 Análise heurística: Avalio a interface com base em princípios de usabilidade para identificar melhorias.

      🏆 Auditorias competitivas: Analiso a experiência de produtos concorrentes para identificar oportunidades de diferenciação.

      O objetivo é garantir produtos acessíveis, funcionais e alinhados às expectativas dos usuários.`
    },
    {
      title: "E-mails Personalizados em HTML",
      icon: "🎨",
      description:
        "Desenvolvo e-mails responsivos, atrativos e alinhados com a identidade da marca para campanhas e comunicação.",
      methodology: `E-mails personalizados em HTML ajudam a conectar marcas com seus públicos, criando experiências de comunicação atraentes e consistentes. A metodologia utilizada consiste em:

      ✉️ Criação estratégica: Desenvolvo templates otimizados e interativos para atrair e engajar os destinatários.

      🌐 Compatibilidade: Garanto que os e-mails funcionem perfeitamente em diferentes dispositivos e clientes de e-mail.

      🗣️ Identidade da marca: Produzo mensagens alinhadas com a voz e a personalidade que a empresa deseja transmitir.

      📈 Otimização de desempenho: Implemento estratégias para aumentar as taxas de abertura e conversão.

      Ofereço soluções visuais e estratégicas que impactam diretamente nas campanhas de marketing e comunicação.`
    },
    {
      title: "Design Gráfico",
      icon: "✍️",
      description:
        "Crio identidades visuais, logotipos e materiais gráficos impactantes para marcas e negócios.",
      methodology: `O design gráfico transforma conceitos em elementos visuais que comunicam valores e fortalecem a identidade das marcas. A metodologia utilizada consiste em:

      🎨 Estilo estratégico: Integro cores, tipografias e elementos visuais alinhados à essência da marca.

      🖌️ Criação personalizada: Produzo identidades visuais únicas, adaptadas a cada cliente.

      📄 Entrega consistente: Garanto materiais gráficos de alta qualidade que reforçam a identidade da marca.

      Meu trabalho reflete personalidade e valor, ajudando empresas a se destacarem no mercado.`
          },
  ];

  useEffect(() => {
    if (selectedService) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedService]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        return (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            className="p-6 h-auto bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-900 rounded-lg shadow-md text-gray-800 dark:text-white text-center"
          >
            <span className="text-3xl">{service.icon}</span>
            <h3 className="font-semibold text-lg my-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
            <Button
              onClick={() => setSelectedService(service)}
              className="mt-4 dark:bg-[#ffffff30] dark:border-gray-400 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-purple-800"
            >
              como funciona
            </Button>
          </motion.div>
        );
      })}

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-[90%] md:w-[40%] text-left shadow-lg relative dark:bg-gray-800"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-3 text-gray-500 text-xl hover:text-gray-700 dark:text-gray-300"
                onClick={() => setSelectedService(null)}
              >
                ✖
              </button>
              <h2 className="text-xl font-bold text-purple-700 text-center dark:text-purple-300">
                {selectedService.title}
              </h2>
              <p className="text-gray-600 mt-3 whitespace-pre-line dark:text-gray-300">
                {selectedService.methodology}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
