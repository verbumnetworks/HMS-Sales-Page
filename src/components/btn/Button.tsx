// components/ui/Button.tsx

import { cn } from "../../../lib/utils";
import React from "react";

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  loading?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  label,
  className = "",
  onClick,
  variant = "primary",
  type = "button",
  loading = false,
}: ButtonProps) {
  const baseStyles =
    "text-sm px-5 py-2 rounded-lg shadow transition-all duration-300 inline-flex items-center justify-center gap-2";

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
      disabled={loading}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      )}
      {loading ? "Loading..." : label}
    </button>
  );
}
