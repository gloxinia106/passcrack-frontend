import React from "react";
import { FileUploader } from "react-drag-drop-files";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormProps } from "../App";

const fileTypes = ["TXT"];

interface FileUploadProps {
  setValue: UseFormSetValue<FormProps>;
  watch: UseFormWatch<FormProps>;
}

export default function FileUpload({ setValue, watch }: FileUploadProps) {
  const file = watch("file");
  const handleChange = (file: File) => {
    setValue("file", file);
  };
  return (
    <FileUploader handleChange={handleChange} types={fileTypes}>
      {file ? (
        <div className="mt-5 bg-gray-900 rounded-lg text-baseyellow w-96 h-48 p-2 hover:cursor-pointer focus:outline-none  flex flex-col items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div className="mt-3 font-['ChosunSm']">{file.name}</div>
        </div>
      ) : (
        <div className="mt-5 bg-gray-900 rounded-lg text-baseyellow w-96 h-48 p-2 hover:cursor-pointer focus:outline-none  flex flex-col items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div className="mt-3 font-['ChosunSm']">
            클릭을 하거나 이미지를 올려주세요
          </div>
        </div>
      )}
    </FileUploader>
  );
}
