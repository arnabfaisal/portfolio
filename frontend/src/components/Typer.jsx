"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import { Button } from "./ui/moving-border"; 
import { IconMail } from "@tabler/icons-react";


export function Typer() {
  const words = [
    {
      text: "hi, ",
    },
    {
      text: "I ",
    },
    {
      text: "am ",
    },
    {
      text: "Arnab.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <div>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div>
        <p>
          I'm a undergraduate CSE student based in Dhaka. I'm fascinated by large-scale, high-impact products and contributed to major feature launches in industry-leading services as well as apps that have 100M+ installs.
        </p>
      </div>
      <div
        className="flex flex-col mt-10 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <a href="mailto:fahimfaisalarnab@gmail.com" className="flex items-center">
          <IconMail size={20} />
          <p className="ml-1">Say hi</p>
        </a>
      </Button>
      </div>
    </div>
  );
}

