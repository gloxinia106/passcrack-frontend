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
      placeholder="암호화된 비밀번호를 입력해주세요&#13;&#10;예시)&#13;&#10;adbf5a778175ee757c34d0eba4e932bc&#13;&#10;77963b7a931377ad4ab5ad6a9cd718aa"
    />
  );
}
