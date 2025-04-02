"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ConfettiProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The number of confetti particles.
   */
  count?: number;
  /**
   * Whether to recycle the confetti particles.
   */
  recycle?: boolean;
  /**
   * The width of the confetti canvas.
   */
  width?: number;
  /**
   * The height of the confetti canvas.
   */
  height?: number;
  /**
   * Confetti colors array
   */
  colors?: string[];
  /**
   * Duration in milliseconds. If provided, confetti will stop after this duration.
   * If not provided, confetti will continue indefinitely (if recycle is true)
   */
  duration?: number;
  /**
   * Whether the confetti is currently active
   */
  isActive?: boolean;
}

type Particle = {
  color: string;
  x: number;
  y: number;
  diameter: number;
  tilt: number;
  tiltAngleIncrement: number;
  tiltAngle: number;
  particleSpeed: number;
  waveAngle: number;
};

export function Confetti({
  className,
  count = 150,
  recycle = true,
  width,
  height,
  colors = [
    "#7C3AED", // purple-600
    "#4F46E5", // indigo-600
    "#2563EB", // blue-600
    "#0EA5E9", // sky-500
    "#14B8A6", // teal-500
    "#10B981", // emerald-500
    "#F59E0B", // amber-500
    "#F97316", // orange-500
    "#EF4444", // red-500
    "#EC4899", // pink-500
  ],
  duration,
  isActive = true,
  ...props
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isRunning, setIsRunning] = useState(isActive);

  useEffect(() => {
    setIsRunning(isActive);
  }, [isActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isRunning) return;

    // Set canvas dimensions
    const computedStyle = getComputedStyle(canvas.parentElement as HTMLElement);
    const w = width || parseInt(computedStyle.width, 10);
    const h = height || parseInt(computedStyle.height, 10);
    
    canvas.width = w;
    canvas.height = h;
    setDimensions({ width: w, height: h });

    // Initialize particles
    const initialParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      initialParticles.push(createParticle(w, h, colors));
    }
    setParticles(initialParticles);

    // Start the animation
    if (animationFrameId === null) {
      const animate = () => {
        draw(canvas, initialParticles, w, h, recycle);
        setAnimationFrameId(requestAnimationFrame(animate));
      };
      setAnimationFrameId(requestAnimationFrame(animate));
    }

    // Set timeout to stop animation if duration is provided
    let timeoutId: NodeJS.Timeout | null = null;
    if (duration) {
      timeoutId = setTimeout(() => {
        setIsRunning(false);
      }, duration);
    }

    // Clean up animation frame on unmount or when isRunning changes
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        setAnimationFrameId(null);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [count, recycle, colors, width, height, isRunning]);

  // Helper function to create a particle
  const createParticle = (canvasWidth: number, canvasHeight: number, particleColors: string[]): Particle => {
    return {
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight - canvasHeight,
      diameter: Math.random() * 10 + 5,
      tilt: Math.random() * 10 - 10,
      tiltAngleIncrement: Math.random() * 0.07 + 0.05,
      tiltAngle: 0,
      particleSpeed: Math.random() * 1 + 0.5,
      waveAngle: Math.random() * Math.PI * 2,
    };
  };

  // Draw function to render particles
  const draw = (
    canvas: HTMLCanvasElement,
    particleArray: Particle[],
    canvasWidth: number,
    canvasHeight: number,
    shouldRecycle: boolean
  ) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    particleArray.forEach((particle, i) => {
      // Update particle position and tilt
      particle.tiltAngle += particle.tiltAngleIncrement;
      particle.y += (Math.cos(particle.waveAngle + particle.diameter) + particle.particleSpeed) * 0.4;
      particle.tilt = Math.sin(particle.tiltAngle) * 15;
      particle.x += Math.sin(particle.tiltAngle);

      // Draw the particle
      ctx.beginPath();
      ctx.lineWidth = particle.diameter;
      ctx.strokeStyle = particle.color;
      
      const x = particle.x + particle.tilt;
      ctx.moveTo(x, particle.y);
      ctx.lineTo(x, particle.y + 10);
      ctx.stroke();

      // Reset the particle if it's out of the canvas and recycling is enabled
      if (particle.y > canvasHeight) {
        if (shouldRecycle) {
          particleArray[i] = createParticle(canvasWidth, canvasHeight, colors);
          particleArray[i].y = -10;
        } else {
          particleArray.splice(i, 1);
        }
      }
    });
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
} 