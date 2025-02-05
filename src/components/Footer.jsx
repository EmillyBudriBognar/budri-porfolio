import React from "react";
import { SocialIcons, Icons } from "./SocialIcons"; 
import Logo from "../assets/img/logo/all-white.svg";
import Image from "next/image";

const Footer = () => {
  // Informações sobre a empresa
  const COMPANY_INFO = [
    {
      name: "A Budri é uma marca especializada em criar soluções digitais que combinam pesquisa sobre a experiência do usuário, design, identidade visual, desenvolvimento mobile e front-end. Focada em oferecer experiências intuitivas e envolventes, a marca transforma ideias em interfaces que unem funcionalidade e estética, sempre alinhadas às necessidades reais de quem interage.",
    },
  ];

  // Links para navegação nas páginas principais
  const PAGE_LINKS = [
    { name: "INÍCIO", link: "hero-section" },
    { name: "PROJETOS", link: "services-section" },
    { name: "SOBRE", link: "aboutme-section" },
    { name: "FORMAÇÃO", link: "formation-section" },
    { name: "CONTATO", link: "contact-section" },
  ];

  // Informações de contato
  const CONTACT_INFO = [
    { name: "+55 (11) 99998-6102", link: "tel:+5511999986102" },
    { name: "emillybudribognar@gmail.com", link: "mailto:emillybudribognar@gmail.com" },
    { name: "Brasil" },
  ];

  // Função para rolar suavemente até a seção
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Componente para exibir a logo
  const LogoComponent = () => (
    <div className="flex items-center justify-center">
      <Image
        src={Logo}
        alt="Budri Logo"
        className="w-40 h-auto"
      />
    </div>
  );

  return (
    <footer className="bg-purple-900 text-white">
      {/* Container principal com grid para organizar os itens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:px-8 px-5 py-16">
        {/* Logo */}
        <div>
          <LogoComponent />
        </div>

        {/* Sobre a empresa */}
        <div>
          <ul className="text-left text-justify">
            <h1 className="mb-1 font-semibold">SOBRE</h1>
            {COMPANY_INFO.map((item, index) => (
              <li key={index} className="text-gray-200 text-sm">
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Links das páginas */}
        <div className="lg:ml-20">
          <h1 className="mb-1 font-semibold">LINKS</h1>
          {PAGE_LINKS.map((link) => (
            <a
              key={link.name}
              href={`#${link.link}`}
              className="text-gray-200 hover:text-purple-300 duration-300 text-sm leading-6 cursor-pointer block mb-2"
              onClick={(e) => {
                e.preventDefault(); // Previne o comportamento padrão do link
                scrollToSection(link.link); // Chama a função de rolagem suave
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Informações de contato */}
        <div className="lg:-ml-10">
          <h1 className="mb-1 font-semibold">CONTATO</h1>
          {CONTACT_INFO.map((contact) => (
            <p key={contact.name} className="text-gray-200 text-sm">
              <a
                href={contact.link}
                className={`duration-300 ${contact.name === "Brasil" ? "" : "hover:text-purple-400"}`}
              >
                {contact.name}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Rodapé inferior com direitos reservados e ícones sociais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center pt-2 text-gray-200 text-sm pb-10">
        <span>© {new Date().getFullYear()}. Budri - Por: Emilly Budri Bognar.</span>
        <span>Todos os direitos reservados.</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
