import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  placeholder: string;
  className?: string;
  register: UseFormRegisterReturn;
}

export default function Input({
  placeholder,
  className,
  register,
}: InputProps) {
  return (
    <input
      {...register}
      className={`${className} font-['ChosunSm'] bg-gray-700 focus:outline-none pl-2 text-white`}
      placeholder={placeholder}
    />
  );
}
