import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, children, className, ...rest }) => {
  return (
    <motion.button
      onClick={onClick} // Configurando o evento de clique
      className={`px-8 py-3 border-2 border-purple-600 bg-[#ffffff73] text-purple-600 font-bold uppercase rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 self-center md:self-start ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
