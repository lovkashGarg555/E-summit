"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/app/utils/cn";
import Image from "next/image";
import logo from "../../../public/courses/E-summit24 logo.png"

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <Image src={logo} width={400} height={400} alt="logo"/>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
