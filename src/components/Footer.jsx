import React from "react";
import { SocialIcons, Icons } from "./SocialIcons"; // Importando o novo componente
import Logo from "../assets/img/logo/all-white.svg"; // Importe a logo corretamente

const Footer = () => {
  const COMPANY_INFO = [
    { name: "A Budri é uma marca especializada em criar soluções digitais que combinam pesquisa sobre a experiência do usuário, design, identidade visual, desenvolvimento mobile e front-end. Focada em oferecer experiências intuitivas e envolventes, a marca transforma ideias em interfaces que unem funcionalidade e estética, sempre alinhadas às necessidades reais de quem interage." },
  ];

  const PAGE_LINKS = [
    { name: "INÍCIO", link: "#" },
    { name: "PROJETOS", link: "#" },
    { name: "SOBRE", link: "#" },
    { name: "CONTATO", link: "#" },
  ];

  const CONTACT_INFO = [
    { name: "+55 (11) 99998-6102", link: "tel:+5511999986102" },
    { name: "emillybudribognar@gmail.com", link: "mailto:emillybudribognar@gmail.com" },
    { name: "Brazil", link: "#" },
  ];

  const LogoComponent = () => (
    <div className="flex items-center justify-center">
      <img
        src={Logo}
        alt="Budri Logo"
        className="w-24 h-auto"
      />
    </div>
  );

  const Item = ({ Links, title, removeHover, justifyText, cursorType }) => {
    return (
      <ul>
        <h1 className="mb-1 font-semibold">{title}</h1>
        {Links.map((link) => (
          <li key={link.name}>
            <a
              className={`text-gray-400 ${removeHover ? 'cursor-default' : `hover:text-teal-400 ${cursorType ? 'cursor-text' : ''}`} duration-300 text-sm leading-6 ${justifyText ? 'text-justify' : ''}`}
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Items Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:px-8 px-5 py-16">
        <div>
          <LogoComponent />
        </div>
        <div>
          <Item Links={COMPANY_INFO} title="SOBRE" removeHover justifyText cursorType={true} />
        </div>
        <div>
          <Item Links={PAGE_LINKS} title="LINKS" />
        </div>
        <div>
          <h1 className="mb-1 font-semibold">CONTATO</h1>
          {CONTACT_INFO.map((contact) => (
            <p key={contact.name} className="text-gray-400 text-sm">
              <a href={contact.link} className="hover:text-teal-400 duration-300">
                {contact.name}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© {currentYear} Budri - Por: Emilly Budri Bognar.</span>
        <span>Todos os direitos reservados.</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
