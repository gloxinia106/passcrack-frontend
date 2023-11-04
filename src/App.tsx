import React, { useState } from "react";
import FileUpload from "./components/fileUpload";
import TextInput from "./components/textInput";
import PersonInput from "./components/personInput";
import { useForm } from "react-hook-form";
import { extrackYear } from "./utility/extract";
import BruteforceBtn from "./components/bruteforceBtn";

export interface FormProps {
  text?: string;
  file?: File;
  person?: {
    first_name: string;
    last_name: string;
    birth_year: string;
    birth_month: string;
    birth_day: string;
    phone_number1: string;
    phone_number2: string;
    phone_number3: string;
  };
}

function App() {
  const [isFile, setIsFile] = useState(false);
  const [mode, setMode] = useState<"english" | "korean" | "custom">("english");
  const [result, setResult] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<FormProps>();

  const onSubmit = async (data: FormProps) => {
    if (isFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const lines = (e.target?.result as string).trim().split(/\r\n|\n/);
        const arr = lines.map((line) => {
          return { hash: line, ok: false };
        });
        setResult({ ok: true, passwords: arr });
      };
      reader.readAsText(data.file!);
    } else {
      const lines = data.text!.trim().split(/\r\n|\n/);
      const arr = lines!.map((line) => {
        return { hash: line, ok: false };
      });
      setResult({ ok: true, passwords: arr });
    }
  };
  return (
    <div className="bg-black flex flex-col items-center w-full min-h-screen">
      <header className="flex items-center pt-16">
        <img src="./key-head.png"></img>
        <div className="text-baseyellow text-5xl mx-10">Lock Star</div>
        <img src="./key-tail.png"></img>
      </header>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex mt-16 ml-12 h-80">
          <div className="mr-12">
            <button
              type="button"
              className="flex items-center"
              onClick={() => {
                setIsFile((val) => !val);
              }}
            >
              <img className="w-14 h-14 mr-5" src="./file-dark.png"></img>
              <span
                className={`${
                  isFile ? "text-baseyellow" : "text-white opacity-50"
                } text-2xl`}
              >
                파일 업로드
              </span>
            </button>
            {isFile ? (
              <FileUpload setValue={setValue} watch={watch} />
            ) : (
              <TextInput register={register("text")} />
            )}
          </div>
          <div className="flex flex-col items-center">
            <div className="flex space-x-5">
              <button
                type="button"
                className="flex items-center"
                onClick={() => {
                  setMode("english");
                }}
              >
                <img className="w-14 h-14 mr-2" src="./english-dark.png"></img>
                <span
                  className={`${
                    mode === "english"
                      ? "text-baseyellow"
                      : "text-white opacity-50"
                  } text-2xl`}
                >
                  영어 사전
                </span>
              </button>
              <button
                type="button"
                className="flex items-center"
                onClick={() => {
                  setMode("korean");
                }}
              >
                <img className="w-14 h-14 mr-2" src="./korean-dark.png"></img>
                <span
                  className={`${
                    mode === "korean"
                      ? "text-baseyellow"
                      : "text-white opacity-50"
                  } text-2xl`}
                >
                  한국어 사전
                </span>
              </button>
              <button
                type="button"
                className="flex items-center"
                onClick={() => {
                  setMode("custom");
                }}
              >
                <img className="w-14 h-14 mr-2" src="./privacy-dark.png"></img>
                <span
                  className={`${
                    mode === "custom"
                      ? "text-baseyellow"
                      : "text-white opacity-50"
                  } text-2xl`}
                >
                  커스텀 사전
                </span>
              </button>
            </div>
            {mode === "custom" ? (
              <PersonInput register={register} />
            ) : (
              <div className="w-96 h-48"></div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center text-baseyellow border border-baseyellow w-full max-w-lg text-xl py-3 rounded-full hover:bg-baseyellow hover:text-black transition"
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-7 h-7 fill-baseyellow animate-spin"
            >
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
            </svg>
          ) : (
            <span>비밀번호 크랙</span>
          )}
        </button>
      </form>
      {result?.ok ? (
        <table className="my-14 table-fixed w-full max-w-5xl text-baseyellow font-['ChosunSm'] border border-baseyellow">
          <thead>
            <tr>
              <th className="border border-baseyellow w-7/12 py-3">
                암호화된 비밀번호
              </th>
              <th className="border border-baseyellow w-3/12 py-3">비밀번호</th>
              <th className="border border-baseyellow w-2/12 py-3">
                브루트포스
              </th>
            </tr>
          </thead>
          <tbody>
            {result.passwords.map((value: any, index: any) => (
              <tr>
                <td
                  className={`border border-baseyellow ${
                    value.ok ? "text-green-500" : "text-red-500"
                  } break-words w-4/8 py-3 px-2`}
                >
                  {value.hash}
                </td>
                <td className="border border-baseyellow break-words w-1/8 py-3 px-2 text-center text-green-500">
                  {value.ok ? value.password : ""}
                </td>
                <td className="border border-baseyellow break-words w-1/8 py-3 px-2 text-center">
                  {value.ok ? (
                    ""
                  ) : (
                    <BruteforceBtn
                      index={index}
                      result={result}
                      setResult={setResult}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
