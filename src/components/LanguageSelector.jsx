import { useState, useEffect, useRef } from "react";
import { Languages } from "lucide-react"; // Ícone de tradutor
import { motion, AnimatePresence } from "framer-motion";

const LanguageSelector = ({ onLanguageChange, language = "pt" }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const dropdownRef = useRef(null); // Referência para o dropdown

  // Textos traduzidos para cada idioma
  const translations = {
    pt: {
      tooltip: "Seletor de Idioma",
      languages: [
        { code: "pt", label: "Português" },
        { code: "es", label: "Español" },
        { code: "en", label: "English" },
      ],
    },
    es: {
      tooltip: "Selector de Idioma",
      languages: [
        { code: "pt", label: "Portugués" },
        { code: "es", label: "Español" },
        { code: "en", label: "Inglés" },
      ],
    },
    en: {
      tooltip: "Language Selector",
      languages: [
        { code: "pt", label: "Portuguese" },
        { code: "es", label: "Spanish" },
        { code: "en", label: "English" },
      ],
    },
  };

  // Seleciona o texto com base no idioma
  const { tooltip, languages } = translations[language];

  const handleSelect = (code) => {
    setOpen(false);
    onLanguageChange(code); // Notifica o componente pai sobre a mudança de idioma
  };

  // Fechar o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false); // Fecha o dropdown se o clique foi fora
      }
    };

    // Adiciona o listener ao documento
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o listener ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center" ref={dropdownRef}>
      {/* Ícone de idioma */}
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative p-2 rounded-full transition-all"
      >
        {/* Bolinha ao hover */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 w-full h-full bg-purple-100 dark:bg-gray-700 rounded-full"
        />

        {/* Ícone de idioma */}
        <Languages size={24} className="relative z-10 text-gray-800 dark:text-white" />
      </button>

      {/* Tooltip centralizado abaixo */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[42px] -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-200 border border-purple-400 dark:border-purple-600 px-2 py-1 rounded-md shadow-md whitespace-nowrap"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 5 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-10 w-36 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50 border border-purple-400 dark:border-purple-600"
          >
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-purple-100 dark:hover:bg-gray-700 ${
                  language === lang.code
                    ? "font-semibold text-purple-600 dark:text-purple-400"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {lang.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;