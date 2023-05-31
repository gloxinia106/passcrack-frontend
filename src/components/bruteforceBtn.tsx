import React, { useState } from "react";

interface BruteForceBtnProps {
  index: number;
  setResult: React.Dispatch<any>;
  result: any;
}

export default function BruteforceBtn({
  index,
  setResult,
  result,
}: BruteForceBtnProps) {
  const [loading, setLoading] = useState(false);
  const onClickBtn = async () => {
    const ok = window.confirm(
      "비밀번호를 크랙하는데 시간이 오래 걸릴 수 있습니다. 그래도 하시겠습니까?"
    );
    if (ok) {
      setLoading(true);
      const arrayText = result.passwords[index].hash;
      try {
        const response = await fetch("http://localhost:5000/api/bruteforce", {
          headers: {
            "Content-Type": `application/json`,
          },
          method: "POST",
          body: JSON.stringify({ values: [arrayText] }),
        });
        const data = await response.json();
        setResult((val: any) => {
          const value = {
            ...val,
            passwords: val.passwords.map((val2: any, idx: any) => {
              if (idx === index) {
                return {
                  ...val2,
                  ok: true,
                  password: data.passwords[0].password,
                };
              } else {
                return val2;
              }
            }),
          };
          return value;
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return loading ? (
    <div className="border-2 w-2/3 mx-auto flex justify-center text-red-700 border-red-700 py-3 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-white animate-spin"
      >
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </svg>
    </div>
  ) : (
    <button
      onClick={onClickBtn}
      className="border-2 text-red-700 border-red-700 py-2 px-7 rounded-full hover:bg-red-700 hover:text-black"
    >
      Proceed
    </button>
  );
}
