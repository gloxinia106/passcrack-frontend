import React from "react";
import Input from "./Input";

export default function PersonInput() {
  return (
    <div className="mt-5 bg-gray-900 rounded-lg w-96 h-48 px-2 py-4 space-y-4">
      <div className="space-x-1 flex">
        <Input className="w-1/2" placeholder="성" />
        <Input className="w-1/2" placeholder="이름" />
      </div>
      <div>
        <div className="text-xs text-white mb-2 text-opacity-50 font-['ChosunSm']">
          생년월일
        </div>
        <div className="space-x-1 flex">
          <Input className="w-1/3" placeholder="YYYY" />
          <Input className="w-1/3" placeholder="MM" />
          <Input className="w-1/3" placeholder="DD" />
        </div>
      </div>
      <div>
        <div className="text-xs text-white mb-2 text-opacity-50 font-['ChosunSm']">
          휴대폰 번호
        </div>
        <div className="space-x-1 flex">
          <Input className="w-1/3" placeholder="010" />
          <Input className="w-1/3" placeholder="1234" />
          <Input className="w-1/3" placeholder="5678" />
        </div>
      </div>
    </div>
  );
}
