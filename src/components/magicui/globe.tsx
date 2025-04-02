"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  dotSize?: number;
  dotColor?: string;
  highlightColor?: string;
  globeColor?: string;
  globeOpacity?: number;
  rotationSpeed?: number;
  interactionStrength?: number;
}

// Simplified world map coordinates (longitude/latitude pairs)
const WORLD_MAP_COORDS = [
  // North America
  [-100, 40], [-90, 35], [-80, 40], [-120, 50], [-105, 45], [-90, 50], [-80, 35], [-70, 45],
  [-110, 30], [-100, 30], [-90, 30], [-80, 30], [-70, 30], [-130, 55], [-140, 60], [-100, 55],
  [-95, 42], [-85, 38], [-75, 40], [-125, 40], [-115, 35], [-105, 35], [-80, 25],
  // South America
  [-70, -10], [-60, -20], [-70, -30], [-65, -15], [-60, -10], [-55, -15], [-65, -35], [-70, -40],
  [-70, -20], [-60, -30], [-50, -20], [-45, -15], [-65, -25], [-55, -5], [-50, -10],
  // Europe
  [0, 50], [10, 50], [20, 50], [10, 55], [15, 45], [25, 45], [5, 45], [10, 40], [20, 40],
  [-5, 50], [-10, 55], [0, 55], [5, 55], [15, 55], [20, 55], [0, 45], [5, 40], [15, 40],
  // Africa
  [0, 0], [10, 0], [20, 0], [30, 0], [0, 10], [10, 10], [20, 10], [30, 10], [40, 10],
  [0, -10], [10, -10], [20, -10], [30, -10], [40, -20], [30, -20], [20, -20], [10, -20],
  [0, -20], [10, -30], [20, -30], [30, -30], [25, -25], [15, -25], [5, -25],
  // Asia
  [90, 30], [100, 30], [110, 30], [120, 30], [130, 30], [140, 30],
  [90, 40], [100, 40], [110, 40], [120, 40], [130, 40], [140, 40],
  [90, 50], [100, 50], [110, 50], [120, 50], [130, 50], [140, 50],
  [60, 30], [70, 30], [80, 30], [60, 40], [70, 40], [80, 40],
  [60, 50], [70, 50], [80, 50], [90, 60], [100, 60], [110, 60],
  [70, 20], [80, 20], [90, 20], [100, 20], [110, 20], [120, 20],
  // Australia
  [130, -25], [140, -25], [150, -25], [130, -30], [140, -30], [150, -30], [130, -35], [140, -35], [150, -35],
  [120, -20], [130, -20], [140, -20], [145, -15], [135, -25], [145, -25], [135, -35], [145, -35]
];

// Highlight locations (will show in orange)
const HIGHLIGHT_LOCATIONS = [
  [100, 35], // China
  [78, 22],  // India
  [-95, 38], // USA
  [10, 45],  // Europe
  [135, -25], // Australia
  [-58, -20], // Brazil
  [37, 0],    // Kenya/East Africa
];

export function Globe({
  size = 400,
  dotSize = 1.8,
  dotColor = "rgba(40, 40, 40, 0.9)",
  highlightColor = "rgba(255, 100, 0, 0.9)",
  globeColor = "rgba(245, 245, 245, 1)",
  globeOpacity = 1,
  rotationSpeed = 0.3,
  interactionStrength = 0.5,
  className,
  ...props
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeDotsRef = useRef<{x: number, y: number, z: number, highlighted: boolean}[]>([]);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const mousePosition = useRef<{x: number, y: number} | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Convert lat/lng coordinates to 3D points on a sphere
    const mapCoords = [];
    
    // Convert each coordinate to 3D point on sphere
    for (const [lng, lat] of WORLD_MAP_COORDS) {
      // Convert from degrees to radians
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      
      // Convert to Cartesian coordinates
      const x = -Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
      
      // Check if this is a highlighted location
      const isHighlighted = HIGHLIGHT_LOCATIONS.some(([hlng, hlat]) => {
        return Math.abs(lng - hlng) < 10 && Math.abs(lat - hlat) < 10;
      });
      
      mapCoords.push({ x, y, z, highlighted: isHighlighted });
    }
    
    // Add some random dots for density
    for (let i = 0; i < 300; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      
      // Smaller random chance of being highlighted
      const isHighlighted = Math.random() < 0.08;
      
      mapCoords.push({ x, y, z, highlighted: isHighlighted });
    }
    
    globeDotsRef.current = mapCoords;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: (e.clientX - rect.left - size / 2) / (size / 2),
        y: (e.clientY - rect.top - size / 2) / (size / 2)
      };
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      mousePosition.current = null;
      setIsHovering(false);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const radius = size / 2 - 20;
      
      // Draw the globe background
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, radius, 0, 2 * Math.PI);
      ctx.fillStyle = globeColor;
      ctx.globalAlpha = globeOpacity;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Calculate rotation based on time and mouse position
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      let baseRotationY = (elapsed * rotationSpeed) / 2000;
      
      // Add mouse interaction to rotation if mouse is over the canvas
      let rotationX = 0;
      let rotationY = baseRotationY;
      
      if (isHovering && mousePosition.current) {
        rotationY += mousePosition.current.x * interactionStrength * 0.5;
        rotationX = -mousePosition.current.y * interactionStrength * 0.3;
      }
      
      // Sort and render dots
      const visibleDots = globeDotsRef.current.map(dot => {
        // Apply rotation around y-axis (standard rotation)
        const y1 = dot.y;
        const z1 = dot.z * Math.cos(rotationY) - dot.x * Math.sin(rotationY);
        const x1 = dot.z * Math.sin(rotationY) + dot.x * Math.cos(rotationY);
        
        // Apply rotation around x-axis (for mouse interaction)
        const y2 = y1 * Math.cos(rotationX) - z1 * Math.sin(rotationX);
        const z2 = y1 * Math.sin(rotationX) + z1 * Math.cos(rotationX);
        
        return {
          x: x1,
          y: y2,
          z: z2,
          highlighted: dot.highlighted
        };
      }).filter(dot => dot.z > -0.15)  // Only show visible dots (front hemisphere)
        .sort((a, b) => a.z - b.z);    // Sort by z-index for proper rendering
      
      // Draw dots
      visibleDots.forEach(dot => {
        const x = size / 2 + dot.x * radius;
        const y = size / 2 + dot.y * radius;
        
        // Size varies based on z position (depth effect)
        const scale = (dot.z + 1) / 2; // Scale from 0.5 to 1
        const adjustedSize = dotSize * (0.5 + scale * 0.8);
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(x, y, adjustedSize, 0, 2 * Math.PI);
        if (dot.highlighted) {
          ctx.fillStyle = highlightColor;
          
          // Add glow effect to highlighted dots
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, adjustedSize * 5);
          gradient.addColorStop(0, "rgba(255, 100, 0, 0.4)");
          gradient.addColorStop(1, "rgba(255, 100, 0, 0)");
          
          ctx.beginPath();
          ctx.arc(x, y, adjustedSize * 5, 0, 2 * Math.PI);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(x, y, adjustedSize, 0, 2 * Math.PI);
          ctx.fillStyle = highlightColor;
        } else {
          ctx.fillStyle = dotColor;
        }
        ctx.globalAlpha = scale;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      
      // Draw connections between dots that are close to each other
      ctx.strokeStyle = "rgba(80, 80, 80, 0.25)";
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < visibleDots.length; i++) {
        for (let j = i + 1; j < visibleDots.length; j++) {
          const dot1 = visibleDots[i];
          const dot2 = visibleDots[j];
          
          // Calculate 3D distance
          const dx = dot1.x - dot2.x;
          const dy = dot1.y - dot2.y;
          const dz = dot1.z - dot2.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          // Only connect dots that are close
          if (distance < 0.3) {
            const x1 = size / 2 + dot1.x * radius;
            const y1 = size / 2 + dot1.y * radius;
            const x2 = size / 2 + dot2.x * radius;
            const y2 = size / 2 + dot2.y * radius;
            
            // Set opacity based on distance and depth
            const lineOpacity = (1 - distance / 0.3) * 0.6 * ((dot1.z + dot2.z + 2) / 4);
            
            // Highlight connections between highlighted dots
            if (dot1.highlighted && dot2.highlighted) {
              ctx.strokeStyle = "rgba(255, 100, 0, 0.3)";
              ctx.lineWidth = 0.5;
            } else if (dot1.highlighted || dot2.highlighted) {
              ctx.strokeStyle = "rgba(255, 100, 0, 0.15)";
              ctx.lineWidth = 0.4;
            } else {
              ctx.strokeStyle = "rgba(80, 80, 80, 0.25)";
              ctx.lineWidth = 0.3;
            }
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.globalAlpha = lineOpacity;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [size, dotSize, dotColor, highlightColor, globeColor, globeOpacity, rotationSpeed, interactionStrength, isHovering]);

  return (
    <div 
      className={cn("relative flex items-center justify-center", className)} 
      style={{ width: size, height: size }}
      {...props}
    >
      <canvas 
        ref={canvasRef} 
        width={size} 
        height={size} 
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
      />
    </div>
  );
} 