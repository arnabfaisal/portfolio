"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Typer } from "./Typer";
import { PixelatedCanvas } from "./ui/pixelated-canvas";

export function BackGround() {
  return (
    <WavyBackground
      backgroundFill="white"
      blur={10}
      className="
        min-h-svh
        flex
        items-center
        justify-center
        pt-20 md:pt-24
        pb-16 md:pb-40
      "
    >
      {/* Main container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 w-full max-w-6xl">

        {/* Left: Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Typer />
        </div>

        {/* Right: Image (desktop only) */}
        <div className="hidden md:flex justify-center">
          <PixelatedCanvas
            src="../arnabRemove.png"
            shape="circle"
            className="md:size-80 rounded-full object-cover shadow-xl"
            backgroundColor=""
          />
        </div>

      </div>
    </WavyBackground>
  );
}
