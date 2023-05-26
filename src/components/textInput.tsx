import React from "react";

export default function TextInput() {
  return (
    <textarea
      className="mt-5 bg-gray-900 rounded-lg text-white w-96 h-48 p-2 font-['ChosunSm'] focus:outline-none"
      placeholder="비밀번호를 입력해주세요"
    />
  );
}
