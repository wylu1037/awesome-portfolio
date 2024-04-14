import React from "react";
import { BsSun } from "react-icons/bs";

export default function ToggleTheme() {
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[2.6rem] h-[2.6rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center
     items-center hover:scale-[1.15] active:scale-105 transition-all"
    >
      <BsSun className="" />
    </button>
  );
}
