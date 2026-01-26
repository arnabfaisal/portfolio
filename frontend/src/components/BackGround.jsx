"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { Typer } from "./Typer";
import { PixelatedCanvas } from "./ui/pixelated-canvas";

export function BackGround() {
  return (
    <WavyBackground
      className="min-h-svh flex items-center justify-center pb-20 md:pb-40"
      backgroundFill="white"
      blur={10}
    >
      {/* Main centered container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 w-full max-w-6xl">
        {/* Left: Typer / Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Typer />
        </div>

        {/* Right: Pixelated Profile Image */}
        <div className="flex justify-center">
          <PixelatedCanvas
            src="../arnabRemove.png"
            shape="circle"
            className="size-64 md:size-80 rounded-full object-cover shadow-xl"
            backgroundColor="" // remove if not needed
          />
        </div>
      </div>
    </WavyBackground>
  );
}