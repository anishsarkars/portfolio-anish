"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGridPatternProps {
  cellSize?: number;
  lineWidth?: number;
  lineColor?: string;
  dotSize?: number;
  dotColor?: string;
  blur?: number;
  className?: string;
}

export function AnimatedGridPattern({
  cellSize = 40,
  lineWidth = 1,
  lineColor = "rgba(255,255,255,0.05)",
  dotSize = 1.5,
  dotColor = "rgba(255,255,255,0.15)",
  blur = 0,
  className,
}: AnimatedGridPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let rafId: number;
    let frame = 0;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply blur if specified
      if (blur > 0) {
        ctx.filter = `blur(${blur}px)`;
      }

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const time = frame * 0.002; // Slow down animation

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;

      // Vertical lines
      for (let x = 0; x <= w; x += cellSize) {
        const waveOffset = Math.sin(time + x * 0.05) * 2;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + waveOffset, h);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= h; y += cellSize) {
        const waveOffset = Math.sin(time + y * 0.05) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w + waveOffset, y);
        ctx.stroke();
      }

      // Draw intersection dots
      ctx.fillStyle = dotColor;
      for (let x = 0; x <= w; x += cellSize) {
        for (let y = 0; y <= h; y += cellSize) {
          const offsetX = Math.sin(time + y * 0.05) * 2;
          const offsetY = Math.sin(time + x * 0.05) * 2;
          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, dotSize, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      frame++;
      rafId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      setSize();
      draw();
    };

    window.addEventListener("resize", handleResize);
    setSize();
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, [cellSize, lineWidth, lineColor, dotSize, dotColor, blur]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full", className)}
    />
  );
} 