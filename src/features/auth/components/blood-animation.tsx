"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const BloodAnimation = () => {
  return (
    <div className="w-1/2 bg-green-400">
      <DotLottieReact src="/blod.json" loop autoplay />
    </div>
  );
};
