import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, children, className, ...rest }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-8 py-3 border-2 border-purple-600 dark:border-purple-700 bg-purple-600 text-white font-bold uppercase rounded-xl hover:bg-purple-500 transition-all duration-300 self-center md:self-start ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;