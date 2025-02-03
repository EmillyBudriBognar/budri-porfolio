import React from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button 
            className="px-8 py-3 border-2 border-purple-600 bg-[#ffffff73] text-purple-600 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300 self-center md:self-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
