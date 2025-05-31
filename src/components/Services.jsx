"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./ButtonPurple";

export default function Services({ language }) {
  const [selectedService, setSelectedService] = useState(null);

  // Objeto de tradução para os serviços
  const translations = {
    pt: {
      services: [
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

          Meu foco está em entregar soluções inovadoras que maximizem a satisfação do usuário e o impacto visual.`,
        },
        {
          title: "Desenvolvimento Front-End WEB",
          icon: "</>",
          description:
            "Desenvolvo sites funcionais e impactantes, utilizando tecnologias modernas para criar experiências envolventes.",
          methodology: `O desenvolvimento front-end WEB abrange a criação de interfaces modernas, escaláveis e responsivas para oferecer experiências digitais excepcionais. A metodologia utilizada consiste em:

          💻 Tecnologias modernas: Trabalho com HTML, CSS, SASS, React, Bootstrap, Tailwind, JavaScript, TypeScript e outras para desenvolver soluções escaláveis.

          🎨 Design responsivo: Garanto que as interfaces sejam adaptáveis a diferentes dispositivos, proporcionando uma experiência consistente.

          ⚙️ Integração eficiente: Estruturo projetos com atenção à organização do código, garantindo manutenção e evolução simplificada.

          O objetivo é criar sites funcionais, bonitos e impactantes para o usuário final.`,
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

          Meu compromisso é entregar aplicativos que unam funcionalidade e design em todas as plataformas.`,
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

          O objetivo é garantir produtos acessíveis, funcionais e alinhados às expectativas dos usuários.`,
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

          Ofereço soluções visuais e estratégicas que impactam diretamente nas campanhas de marketing e comunicação.`,
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

          Meu trabalho reflete personalidade e valor, ajudando empresas a se destacarem no mercado.`,
        },
      ],
      buttonText: "como funciona",
    },
    es: {
      services: [
        {
          title: "Diseño UX/UI",
          icon: "💬",
          description:
            "Creo diseños de UI/UX para sitios web y aplicaciones, garantizando una apariencia única y una experiencia intuitiva.",
          methodology: `El diseño UX/UI implica la creación de interfaces funcionales y estéticamente agradables, enfocadas en la interacción intuitiva y eficiente con el usuario. La metodología utilizada consiste en:

          💡 Investigación de usuarios: Realizo investigaciones detalladas para comprender las necesidades, comportamientos y expectativas del público objetivo.

          👩‍🎨 Creación de personas: Desarrollo representaciones detalladas de los usuarios para guiar decisiones estratégicas de diseño.

          📝 Wireframes y prototipos: Creo bocetos estructurales y prototipos interactivos para probar conceptos antes de la implementación.

          🧪 Pruebas y validación: Implemento pruebas con usuarios y reviso constantemente para garantizar que las interfaces sean intuitivas y accesibles.

          Mi enfoque está en entregar soluciones innovadoras que maximicen la satisfacción del usuario y el impacto visual.`,
        },
        {
          title: "Desarrollo Front-End WEB",
          icon: "</>",
          description:
            "Desarrollo sitios web funcionales e impactantes, utilizando tecnologías modernas para crear experiencias envolventes.",
          methodology: `El desarrollo front-end WEB abarca la creación de interfaces modernas, escalables y responsivas para ofrecer experiencias digitales excepcionales. La metodología utilizada consiste en:

          💻 Tecnologías modernas: Trabajo con HTML, CSS, SASS, React, Bootstrap, Tailwind, JavaScript, TypeScript y otras para desarrollar soluciones escalables.

          🎨 Diseño responsivo: Garantizo que las interfaces sean adaptables a diferentes dispositivos, proporcionando una experiencia consistente.

          ⚙️ Integración eficiente: Estructuro proyectos con atención a la organización del código, garantizando mantenimiento y evolución simplificada.

          El objetivo es crear sitios web funcionales, bonitos e impactantes para el usuario final.`,
        },
        {
          title: "Desarrollo Front-End Mobile",
          icon: "📱",
          description:
            "Creo aplicaciones nativas con interfaces atractivas y navegación fluida que funcionan en todas las plataformas.",
          methodology: `El desarrollo mobile utiliza tecnologías que permiten crear aplicaciones fluidas e intuitivas, optimizadas para cualquier plataforma. La metodología utilizada consiste en:

          📲 Código unificado con React Native: Creo aplicaciones nativas que funcionan en todos los sistemas operativos a partir de un único código.

          📡 Integración con Expo: Uso Expo para aprovechar las funciones nativas del dispositivo, como cámara, notificaciones y GPS.

          🧩 Atención a los detalles: Priorizo fluidez e interfaces intuitivas que proporcionen una navegación eficiente y agradable.

          Mi compromiso es entregar aplicaciones que combinen funcionalidad y diseño en todas las plataformas.`,
        },
        {
          title: "Investigación de Usabilidad",
          icon: "⚡",
          description:
            "Realizo pruebas e investigaciones para garantizar que los productos sean accesibles y fáciles de usar.",
          methodology: `La investigación de usabilidad tiene como objetivo comprender y mejorar la interacción del usuario con productos digitales, garantizando accesibilidad y funcionalidad. La metodología utilizada consiste en:

          🔍 Pruebas A/B: Comparo variaciones para entender qué funciona mejor para los usuarios.

          🗣️ Entrevistas y feedback: Recojo insights directamente del público objetivo para mejorar los productos.

          📊 Análisis heurístico: Evalúo la interfaz basándome en principios de usabilidad para identificar mejoras.

          🏆 Auditorías competitivas: Analizo la experiencia de productos competidores para identificar oportunidades de diferenciación.

          El objetivo es garantizar productos accesibles, funcionales y alineados con las expectativas de los usuarios.`,
        },
        {
          title: "Correos Personalizados en HTML",
          icon: "🎨",
          description:
            "Desarrollo correos electrónicos responsivos, atractivos y alineados con la identidad de la marca para campañas y comunicación.",
          methodology: `Los correos personalizados en HTML ayudan a conectar marcas con sus públicos, creando experiencias de comunicación atractivas y consistentes. La metodología utilizada consiste en:

          ✉️ Creación estratégica: Desarrollo plantillas optimizadas e interactivas para atraer y comprometer a los destinatarios.

          🌐 Compatibilidad: Garantizo que los correos funcionen perfectamente en diferentes dispositivos y clientes de correo.

          🗣️ Identidad de la marca: Produzco mensajes alineadas con la voz y la personalidad que la empresa desea transmitir.

          📈 Optimización de rendimiento: Implemento estrategias para aumentar las tasas de apertura y conversión.

          Ofrezco soluciones visuales y estratégicas que impactan directamente en las campañas de marketing y comunicación.`,
        },
        {
          title: "Diseño Gráfico",
          icon: "✍️",
          description:
            "Creo identidades visuales, logotipos y materiales gráficos impactantes para marcas y negocios.",
          methodology: `El diseño gráfico transforma conceptos en elementos visuales que comunican valores y fortalecen la identidad de las marcas. La metodología utilizada consiste en:

          🎨 Estilo estratégico: Integro colores, tipografías y elementos visuales alineados con la esencia de la marca.

          🖌️ Creación personalizada: Produzco identidades visuales únicas, adaptadas a cada cliente.

          📄 Entrega consistente: Garantizo materiales gráficos de alta calidad que refuerzan la identidad de la marca.

          Mi trabajo refleja personalidad y valor, ayudando a las empresas a destacarse en el mercado.`,
        },
      ],
      buttonText: "cómo funciona",
    },
    en: {
      services: [
        {
          title: "UX/UI Design",
          icon: "💬",
          description:
            "I create UI/UX designs for websites and apps, ensuring a unique look and intuitive experience.",
          methodology: `UX/UI design involves creating functional and aesthetically pleasing interfaces focused on intuitive and efficient user interaction. The methodology used consists of:

          💡 User research: I conduct detailed investigations to understand the needs, behaviors, and expectations of the target audience.

          👩‍🎨 Persona creation: I develop detailed representations of users to guide strategic design decisions.

          📝 Wireframes and prototyping: I create structural sketches and interactive prototypes to test concepts before implementation.

          🧪 Testing and validation: I implement user testing and constantly review to ensure interfaces are intuitive and accessible.

          My focus is on delivering innovative solutions that maximize user satisfaction and visual impact.`,
        },
        {
          title: "Front-End WEB Development",
          icon: "</>",
          description:
            "I develop functional and impactful websites using modern technologies to create engaging experiences.",
          methodology: `Front-end WEB development involves creating modern, scalable, and responsive interfaces to deliver exceptional digital experiences. The methodology used consists of:

          💻 Modern technologies: I work with HTML, CSS, SASS, React, Bootstrap, Tailwind, JavaScript, TypeScript, and others to develop scalable solutions.

          🎨 Responsive design: I ensure interfaces are adaptable to different devices, providing a consistent experience.

          ⚙️ Efficient integration: I structure projects with attention to code organization, ensuring simplified maintenance and evolution.

          The goal is to create functional, beautiful, and impactful websites for the end user.`,
        },
        {
          title: "Front-End Mobile Development",
          icon: "📱",
          description:
            "I create native apps with attractive interfaces and smooth navigation that work on all platforms.",
          methodology: `Mobile development uses technologies that enable the creation of fluid and intuitive apps optimized for any platform. The methodology used consists of:

          📲 Unified code with React Native: I create native apps that run on all operating systems from a single codebase.

          📡 Integration with Expo: I use Expo to leverage native device features like camera, notifications, and GPS.

          🧩 Attention to detail: I prioritize fluidity and intuitive interfaces that provide efficient and pleasant navigation.

          My commitment is to deliver apps that combine functionality and design across all platforms.`,
        },
        {
          title: "Usability Research",
          icon: "⚡",
          description:
            "I conduct tests and research to ensure products are accessible and easy to use.",
          methodology: `Usability research aims to understand and improve user interaction with digital products, ensuring accessibility and functionality. The methodology used consists of:

          🔍 A/B testing: I compare variations to understand what works best for users.

          🗣️ Interviews and feedback: I gather insights directly from the target audience to improve products.

          📊 Heuristic analysis: I evaluate the interface based on usability principles to identify improvements.

          🏆 Competitive audits: I analyze the experience of competing products to identify differentiation opportunities.

          The goal is to ensure accessible, functional products aligned with user expectations.`,
        },
        {
          title: "Custom HTML Emails",
          icon: "🎨",
          description:
            "I develop responsive, attractive emails aligned with the brand identity for campaigns and communication.",
          methodology: `Custom HTML emails help connect brands with their audiences, creating attractive and consistent communication experiences. The methodology used consists of:

          ✉️ Strategic creation: I develop optimized and interactive templates to attract and engage recipients.

          🌐 Compatibility: I ensure emails work perfectly on different devices and email clients.

          🗣️ Brand identity: I produce messages aligned with the voice and personality the company wants to convey.

          📈 Performance optimization: I implement strategies to increase open and conversion rates.

          I offer visual and strategic solutions that directly impact marketing and communication campaigns.`,
        },
        {
          title: "Graphic Design",
          icon: "✍️",
          description:
            "I create visual identities, logos, and impactful graphic materials for brands and businesses.",
          methodology: `Graphic design transforms concepts into visual elements that communicate values and strengthen brand identity. The methodology used consists of:

          🎨 Strategic style: I integrate colors, typography, and visual elements aligned with the brand's essence.

          🖌️ Custom creation: I produce unique visual identities tailored to each client.

          📄 Consistent delivery: I ensure high-quality graphic materials that reinforce the brand identity.

          My work reflects personality and value, helping businesses stand out in the market.`,
        },
      ],
      buttonText: "how it works",
    },
  };

  // Seleciona os serviços e textos com base no idioma
  const { services, buttonText } = translations[language];

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
            <p className="text-l">{service.description}</p>
            <Button
              onClick={() => setSelectedService(service)}
              className="mt-4 dark:bg-[#ffffff30] dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-purple-800"
            >
              {buttonText}
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