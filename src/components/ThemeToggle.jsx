import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={toggleTheme}
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

        {/* Ícone de tema */}
        {theme === "light" ? <Sun size={20} className="relative z-10" /> : <Moon size={20} className="relative z-10" />}
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
            {theme === "light" ? "Modo Claro" : "Modo Escuro"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;