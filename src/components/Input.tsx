import React from "react";

interface InputProps {
  placeholder: string;
  className?: string;
}

export default function Input({ placeholder, className }: InputProps) {
  return (
    <input
      className={`${className} font-['ChosunSm'] bg-gray-700 focus:outline-none pl-2 text-white`}
      placeholder={placeholder}
    />
  );
}
