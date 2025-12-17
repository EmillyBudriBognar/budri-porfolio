import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "solid" | "outline" | "white";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  className = "", 
  variant = "solid", 
  ...rest 
}) => {
  const baseStyles = "px-8 py-3 border-2 font-bold uppercase rounded-xl transition-all duration-300 self-center md:self-start";
  
  const variants = {
    solid: "border-purple-600 dark:border-purple-700 bg-purple-600 text-white hover:bg-purple-500",
    outline: "border-purple-600 bg-[#ffffff73] text-purple-600 hover:bg-purple-600 hover:text-white",
    white: "border-white bg-[#ffffff30] text-white hover:bg-white hover:text-purple-600"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
