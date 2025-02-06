import { useState } from "react";
import { Languages } from "lucide-react"; // Ícone de tradutor
import { motion, AnimatePresence } from "framer-motion";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("pt");

  const languages = [
    { code: "pt", label: "Português" },
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
  ];

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Ícone de idioma */}
      <button onClick={() => setOpen(!open)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
        <Languages size={24} className="text-gray-800 dark:text-white" />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  language === lang.code ? "font-semibold text-purple-600 dark:text-purple-400" : "text-gray-800 dark:text-white"
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
