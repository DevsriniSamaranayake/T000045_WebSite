import React from "react";

interface InputButtonProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputButton: React.FC<InputButtonProps> = ({ type = "text", placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={` px-1 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 bg-amber-100 text-amber-900 placeholder-zinc-400 ${className}`}
    />
  );
};

export default InputButton;
