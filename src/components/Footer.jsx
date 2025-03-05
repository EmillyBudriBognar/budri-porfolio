import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SocialIcons, Icons } from "./SocialIcons";
import LogoWhite from "../assets/img/logo/all-white.svg"; // Logo para o modo escuro
import LogoBlack from "../assets/img/logo/all-black.svg"; // Logo para o modo claro
import Image from "next/image";

const Footer = ({ language = "pt" }) => {
  // Textos traduzidos para cada idioma
  const translations = {
    pt: {
      aboutTitle: "SOBRE",
      aboutDescription:
        "A Budri é uma marca especializada em criar soluções digitais que combinam pesquisa sobre a experiência do usuário, design, identidade visual, desenvolvimento mobile e front-end. Focada em oferecer experiências intuitivas e envolventes, a marca transforma ideias em interfaces que unem funcionalidade e estética, sempre alinhadas às necessidades reais de quem interage.",
      linksTitle: "LINKS",
      pageLinks: [
        { name: "INÍCIO", link: "hero-section" },
        { name: "SERVIÇOS", link: "services-section" },
        { name: "PROJETOS", link: "projects-section" },
        { name: "SOBRE", link: "aboutme-section" },
        { name: "FORMAÇÃO", link: "formation-section" },
        { name: "CONTATO", link: "contact-section" },
      ],
      contactTitle: "CONTATO",
      contactInfo: [
        { name: "+55 (11) 99998-6102", link: "tel:+5511999986102" },
        { name: "emillybudribognar@gmail.com", link: "mailto:emillybudribognar@gmail.com" },
        { name: "Brasil" },
      ],
      copyright: `© ${new Date().getFullYear()}. Budri - Por: Emilly Budri Bognar.`,
      rights: "Todos os direitos reservados.",
    },
    es: {
      aboutTitle: "SOBRE NOSOTROS",
      aboutDescription:
        "Budri es una marca especializada en crear soluciones digitales que combinan investigación sobre la experiencia del usuario, diseño, identidad visual, desarrollo móvil y front-end. Enfocada en ofrecer experiencias intuitivas y envolventes, la marca transforma ideas en interfaces que unen funcionalidad y estética, siempre alineadas con las necesidades reales de quienes interactúan.",
      linksTitle: "ENLACES",
      pageLinks: [
        { name: "INICIO", link: "hero-section" },
        { name: "SERVICIOS", link: "services-section" },
        { name: "PROYECTOS", link: "projects-section" },
        { name: "SOBRE MÍ", link: "aboutme-section" },
        { name: "FORMACIÓN", link: "formation-section" },
        { name: "CONTACTO", link: "contact-section" },
      ],
      contactTitle: "CONTACTO",
      contactInfo: [
        { name: "+55 (11) 99998-6102", link: "tel:+5511999986102" },
        { name: "emillybudribognar@gmail.com", link: "mailto:emillybudribognar@gmail.com" },
        { name: "Brasil" },
      ],
      copyright: `© ${new Date().getFullYear()}. Budri - Por: Emilly Budri Bognar.`,
      rights: "Todos los derechos reservados.",
    },
    en: {
      aboutTitle: "ABOUT",
      aboutDescription:
        "Budri is a brand specialized in creating digital solutions that combine user experience research, design, visual identity, mobile and front-end development. Focused on delivering intuitive and engaging experiences, the brand transforms ideas into interfaces that combine functionality and aesthetics, always aligned with the real needs of those who interact.",
      linksTitle: "LINKS",
      pageLinks: [
        { name: "HOME", link: "hero-section" },
        { name: "SERVICES", link: "services-section" },
        { name: "PROJECTS", link: "projects-section" },
        { name: "ABOUT ME", link: "aboutme-section" },
        { name: "EDUCATION", link: "formation-section" },
        { name: "CONTACT", link: "contact-section" },
      ],
      contactTitle: "CONTACT",
      contactInfo: [
        { name: "+55 (11) 99998-6102", link: "tel:+5511999986102" },
        { name: "emillybudribognar@gmail.com", link: "mailto:emillybudribognar@gmail.com" },
        { name: "Brazil" },
      ],
      copyright: `© ${new Date().getFullYear()}. Budri - By: Emilly Budri Bognar.`,
      rights: "All rights reserved.",
    },
  };

  // Seleciona o texto com base no idioma
  const {
    aboutTitle,
    aboutDescription,
    linksTitle,
    pageLinks,
    contactTitle,
    contactInfo,
    copyright,
    rights,
  } = translations[language];

  // Função para rolar suavemente até a seção
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Componente para exibir a logo (alterna entre logo clara e escura)
  const LogoComponent = () => (
    <div className="flex items-center justify-center">
      <Image
        src={LogoWhite} // Logo para o modo escuro
        alt="Budri Logo"
        className="w-40 h-auto hidden dark:block" // Exibe no modo escuro
      />
      <Image
        src={LogoBlack} // Logo para o modo claro
        alt="Budri Logo"
        className="w-40 h-auto block dark:hidden" // Exibe no modo claro
      />
    </div>
  );

  // Hook useInView para detectar quando a seção está visível
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true, // Dispara a animação uma vez
    threshold: 0.1, // A animação começa quando 10% da seção estiver visível
  });

  return (
    <footer
      ref={footerRef}
      className="bg-purple-200 dark:bg-purple-900 text-gray-900 dark:text-white"
    >
      {/* Container principal com grid para organizar os itens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:px-8 px-5 py-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }} // Logo aparece primeiro
        >
          <LogoComponent />
        </motion.div>

        {/* Sobre a empresa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }} // Delay maior para aparecer após a logo
        >
          <ul className="text-left text-justify">
            <h1 className="mb-1 font-semibold">{aboutTitle}</h1>
            <li className="text-gray-700 dark:text-gray-200 text-sm">
              {aboutDescription}
            </li>
          </ul>
        </motion.div>

        {/* Links das páginas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }} // Delay maior para aparecer após "SOBRE"
          className="lg:ml-20"
        >
          <h1 className="mb-1 font-semibold">{linksTitle}</h1>
          {pageLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.link}`}
              className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-300 duration-300 text-sm leading-6 cursor-pointer block mb-2"
              onClick={(e) => {
                e.preventDefault(); // Previne o comportamento padrão do link
                scrollToSection(link.link); // Chama a função de rolagem suave
              }}
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        {/* Informações de contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }} // Delay maior para aparecer após "LINKS"
          className="lg:-ml-10"
        >
          <h1 className="mb-1 font-semibold">{contactTitle}</h1>
          {contactInfo.map((contact) => (
            <p key={contact.name} className="text-gray-700 dark:text-gray-200 text-sm">
              <a
                href={contact.link}
                className={`duration-300 ${contact.name === "Brasil" || contact.name === "Brazil" ? "" : "hover:text-purple-600 dark:hover:text-purple-300"}`}
              >
                {contact.name}
              </a>
            </p>
          ))}
        </motion.div>
      </div>

      {/* Rodapé inferior com direitos reservados e ícones sociais */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.9 }} // Delay maior para aparecer por último
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center pt-2 text-gray-700 dark:text-gray-200 text-sm pb-10"
      >
        <span>{copyright}</span>
        <span>{rights}</span>
        <div className="place-self-center">
          <SocialIcons Icons={Icons} />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;