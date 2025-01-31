import React from "react";
import LogoGithub from "../assets/icons/logo-github.svg";
import LogoLinkedin from "../assets/icons/logo-linkedin.svg";
import LogoInstagram from "../assets/icons/logo-instagram.svg";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300"
        >
          <img src={icon.icon} alt={icon.name} className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

const Icons = [
  { name: "logo-github", icon: LogoGithub, link: "https://github.com/EmillyBudriBognar" },
  { name: "logo-linkedin", icon: LogoLinkedin, link: "https://www.linkedin.com/in/emilly-budri-bognar/" },
  { name: "logo-instagram", icon: LogoInstagram, link: "https://www.instagram.com/emillybudri/#" },
];

export { SocialIcons, Icons };
