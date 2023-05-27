import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextInputForms {
  register: UseFormRegisterReturn;
}

export default function TextInput({ register }: TextInputForms) {
  return (
    <textarea
      {...register}
      className="mt-5 bg-gray-900 rounded-lg text-white w-96 h-48 p-2 font-['ChosunSm'] focus:outline-none"
      placeholder="비밀번호를 입력해주세요"
    />
  );
}
