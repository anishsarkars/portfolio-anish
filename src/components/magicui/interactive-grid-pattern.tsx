"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
export interface InteractiveGridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  cellSize?: number;
  lineWidth?: number;
  dotSize?: number;
  dotColor?: string;
  lineColor?: string;
  backgroundColor?: string;
  distanceThreshold?: number;
  className?: string;
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export function InteractiveGridPattern({
  cellSize = 40,
  lineWidth = 1,
  dotSize = 2,
  dotColor = "rgba(150, 150, 255, 0.8)",
  lineColor = "rgba(120, 120, 255, 0.4)",
  backgroundColor = "transparent",
  distanceThreshold = 100,
  className,
  ...props
}: InteractiveGridPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef<number>(0);

  // Set up the canvas and draw the initial grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      setDimensions({ width: rect.width, height: rect.height });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseLeave = () => {
      setMousePosition(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Draw the grid with interactive effects
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate number of cells
      const numCols = Math.ceil(canvas.width / cellSize) + 1;
      const numRows = Math.ceil(canvas.height / cellSize) + 1;

      // Draw grid lines
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;

      // Draw vertical lines
      for (let i = 0; i < numCols; i++) {
        let x = i * cellSize;
        
        // Apply distortion if mouse is present
        if (mousePosition) {
          const distance = Math.abs(mousePosition.x - x);
          if (distance < distanceThreshold) {
            const distortion = 15 * (1 - distance / distanceThreshold);
            x += Math.sin(Date.now() / 1000 + i) * distortion;
          }
        }
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let j = 0; j < numRows; j++) {
        let y = j * cellSize;
        
        // Apply distortion if mouse is present
        if (mousePosition) {
          const distance = Math.abs(mousePosition.y - y);
          if (distance < distanceThreshold) {
            const distortion = 15 * (1 - distance / distanceThreshold);
            y += Math.sin(Date.now() / 1000 + j) * distortion;
          }
        }
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw intersection dots
      ctx.fillStyle = dotColor;
      for (let i = 0; i < numCols; i++) {
        for (let j = 0; j < numRows; j++) {
          let x = i * cellSize;
          let y = j * cellSize;
          
          // Apply distortion if mouse is present
          if (mousePosition) {
            const dx = mousePosition.x - x;
            const dy = mousePosition.y - y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < distanceThreshold) {
              const distortion = 20 * (1 - distance / distanceThreshold);
              x += dx * distortion / distance;
              y += dy * distortion / distance;
            }
          }
          
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions, mousePosition, cellSize, lineWidth, dotSize, dotColor, lineColor, backgroundColor, distanceThreshold]);

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}

InteractiveGridPattern.displayName = "InteractiveGridPattern";
