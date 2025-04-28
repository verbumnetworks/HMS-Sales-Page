// components/ui/Button.tsx

import { cn } from "../../../lib/utils"; // Utility for merging class names
import React from "react";

// Define the props for the Button component
type ButtonProps = { // Content inside the button
  label:string;
  className?: string; // Optional custom styles
  onClick?: () => void; // Optional click handler
  variant?: "primary" | "outline";

  type?: "button" | "submit" | "reset"; // Button types
};

// Functional Button component
export default function Button({
  label,
  className = "",
  onClick,
  variant="primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "text-sm px-5 py-2 rounded-lg shadow transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#137c7f] to-[#20a1a5] text-white hover:opacity-90",
    outline:
      "border border-[#137c7f] text-[#137c7f] bg-white hover:bg-[#137c7f] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {label}
    </button>
  );
}




// "use client";

// import React from "react";

// interface ButtonProps {
//   label: string;
//   onClick?: () => void;
//   variant?: "primary" | "secondary" | "outline";
//   className?: string;
//   disabled?: boolean;
//   type?: "button" | "submit" | "reset";
//   iconLeft?: React.ReactNode;
//   iconRight?: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({
//   label,
//   onClick,
//   variant = "primary",
//   className = "",
//   disabled = false,
//   type = "button",
//   iconLeft,
//   iconRight,
// }) => {
//   const baseStyles =
//     "inline-flex items-center justify-center gap-2 px-5 py-2.5 font-medium rounded-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500";

//   const variants = {
//     primary: "bg-gradient-to-br from-purple-600 to-blue-500 ",
//     secondary: "bg-gray-600 text-white hover:bg-gray-700",
//     outline:
//       "border border-orange-600 text-white hover:bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white",
//   };

//   return (
//     <button
//       onClick={onClick}
//       type={type}
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//       disabled={disabled}
//     >
//       {iconLeft && <span className="w-5 h-5">{iconLeft}</span>}
//       <span>{label}</span>
//       {iconRight && <span className="w-5 h-5">{iconRight}</span>}
//     </button>
//   );
// };

// export default Button;
