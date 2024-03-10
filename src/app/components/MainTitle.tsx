import { Arvo, Lato } from "next/font/google";
import React from "react";

const titleFont = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type MainTitleProps = {};

export default function MainTitle({}: MainTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <h1
        className={`bg-gradient-to-r from-[#007BFF] via-[#E6F7FF] to-[#FFC107]
          bg-clip-text bg-300% animate-gradient
          text-transparent ${titleFont.className} text-5xl font-bold uppercase`}
      >
        Ayowa
      </h1>

      <h2 className="text-xl fontbold">Feel the Joy of exploring Solana</h2>
    </div>
  );
}
