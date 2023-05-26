import React, { useState } from "react";
import FileUpload from "./components/fileUpload";
import TextInput from "./components/textInput";
import PersonInput from "./components/personInput";

function App() {
  const [isFile, setIsFile] = useState(false);
  const [isPerson, setIsPerson] = useState(false);
  return (
    <div className="bg-black flex flex-col items-center w-full min-h-screen">
      <header className="flex items-center pt-16">
        <img src="./key-head.png"></img>
        <div className="text-baseyellow text-5xl mx-10">Lock Star</div>
        <img src="./key-tail.png"></img>
      </header>
      <div className="flex mt-16 ml-12 h-80">
        <div className="mr-12">
          <button
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
          {isFile ? <FileUpload /> : <TextInput />}
        </div>
        <div>
          <button
            className="flex items-center"
            onClick={() => {
              setIsPerson((val) => !val);
            }}
          >
            <img className="w-14 h-14 mr-5" src="./file-dark.png"></img>
            <span
              className={`${
                isPerson ? "text-baseyellow" : "text-white opacity-50"
              } text-2xl`}
            >
              Person
            </span>
          </button>
          {isPerson ? <PersonInput /> : <div className="w-96 h-48"></div>}
        </div>
      </div>
      <button className="text-baseyellow border border-baseyellow w-full max-w-lg text-xl py-2 rounded-full hover:bg-baseyellow hover:text-black transition">
        Start
      </button>
    </div>
  );
}

export default App;
