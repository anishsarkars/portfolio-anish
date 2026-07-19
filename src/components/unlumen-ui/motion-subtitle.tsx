"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface MotionSubtitleProps {
  /** Text to reveal. */
  text: string;
  /** Direction characters animate in from. @default "top" */
  direction?: "top" | "bottom";
  /** Animation speed multiplier. @default 1 */
  speed?: number;
  /** Delay between character reveals in seconds. @default 0.018 */
  stagger?: number;
  /** Additional class name. */
  className?: string;
}

export function MotionSubtitle({
  text,
  direction = "top",
  speed = 1,
  stagger = 0.018,
  className,
}: MotionSubtitleProps) {
  const chars = Array.from(text);
  const yFrom = direction === "bottom" ? "0.7em" : "-0.7em";
  const duration = 0.5 / Math.max(0.3, speed);

  return (
    <motion.p
      key={text}
      aria-label={text}
      className={cn("inline-flex flex-wrap justify-center", className)}
    >
      {chars.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden
          initial={{ opacity: 0, y: yFrom, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
          transition={{ duration, delay: i * stagger, ease: "easeOut" }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default MotionSubtitle;
