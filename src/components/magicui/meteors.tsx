"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number = 15,
  className,
  isDark,
}: {
  number?: number;
  className?: string;
  isDark?: boolean;
}) => {
  const meteors = new Array(number || 15).fill(true);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-[2px] w-[2px] rounded-[50%] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%]",
            "before:w-[100px] before:h-[1px] before:bg-gradient-to-r",
            "after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-[50%]",
            "after:w-1 after:h-1 after:rounded-full after:blur-[2px]",
            "bg-white dark:bg-white",
            "before:from-[rgba(75,75,75,0.8)] before:via-[rgba(75,75,75,0.3)] before:to-transparent dark:before:from-[rgba(255,255,255,0.8)] dark:before:via-[rgba(255,255,255,0.3)] dark:before:to-transparent",
            "after:shadow-[0_0_10px_rgba(75,75,75,0.8)] dark:after:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * (2 - 0.5) + 0.5 + "s",
            animationDuration: Math.floor(Math.random() * (6 - 3) + 3) + "s",
            opacity: Math.random() * (1 - 0.7) + 0.7,
            transform: `rotate(${215 + (Math.random() * 10 - 5)}deg)`,
          }}
        />
      ))}
    </div>
  );
}; 