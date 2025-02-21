import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => (
    <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-bold text-[#350301] transition-all hover:opacity-90 bg-gradient-to-r from-[#F6951D] to-[#FDE63B] ${className}`}
  >
    {text}
  </button>
);

export default Button;
