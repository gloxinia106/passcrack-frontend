import React, { useState } from "react";
import FileUpload from "./components/fileUpload";
import TextInput from "./components/textInput";
import PersonInput from "./components/personInput";
import { useForm } from "react-hook-form";
import { extrackYear } from "./utility/extract";

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
  const [isPerson, setIsPerson] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<FormProps>();
  const onSubmit = (data: FormProps) => {
    let obj: any = {};
    const formData = new FormData();
    if (isPerson) {
      const phoneNumber = `${data.person?.phone_number1}-${data.person?.phone_number2}-${data.person?.phone_number3}`;
      const birthMonth = parseInt(data.person!.birth_month, 10).toString();
      const birthDay = parseInt(data.person!.birth_day, 10).toString();
      const birthYear = extrackYear(data.person!.birth_year);
      const person = {
        first_name: data.person?.first_name,
        last_name: data.person?.last_name,
        birth_year: birthYear,
        birth_month: birthMonth,
        birth_day: birthDay,
        phone_number: phoneNumber,
      };
      if (isFile) {
        formData.append("mode", "custom");
        formData.append("person", JSON.stringify(person));
      } else {
        obj["mode"] = "custom";
        obj["person"] = person;
      }
    }
    if (isFile) {
    } else {
      const arrayText = data.text?.split(/\s+/);
      obj["values"] = arrayText;
      obj["mode"] = "";
      console.log(obj);
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
                File upload
              </span>
            </button>
            {isFile ? (
              <FileUpload setValue={setValue} watch={watch} />
            ) : (
              <TextInput register={register("text")} />
            )}
          </div>
          <div>
            <button
              type="button"
              className="flex items-center"
              onClick={() => {
                setIsPerson((val) => !val);
              }}
            >
              <img className="w-14 h-14 mr-5" src="./privacy-dark.png"></img>
              <span
                className={`${
                  isPerson ? "text-baseyellow" : "text-white opacity-50"
                } text-2xl`}
              >
                Person
              </span>
            </button>
            {isPerson ? (
              <PersonInput register={register} />
            ) : (
              <div className="w-96 h-48"></div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="text-baseyellow border border-baseyellow w-full max-w-lg text-xl py-2 rounded-full hover:bg-baseyellow hover:text-black transition"
        >
          Start
        </button>
      </form>
    </div>
  );
}

export default App;
