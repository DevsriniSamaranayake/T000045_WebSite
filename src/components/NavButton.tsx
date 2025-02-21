import React from "react";

interface NavButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ text, onClick, className }) => (
    <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-bold text-[#350301] transition-all hover:opacity-90 bg-[#FFFBDE] ${className}`}
  >
    {text}
  </button>
);

export default NavButton;
