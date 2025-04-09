"use client";

import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline"; // Different button styles
  className?: string; // Custom styles
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyles = "px-4 py-2 font-semibold rounded transition duration-300";

  // Different button styles
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
