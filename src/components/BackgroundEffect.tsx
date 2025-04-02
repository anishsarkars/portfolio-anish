
import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Subtle parallax effect on the background blobs
      const elements = containerRef.current.querySelectorAll('.parallax-blob');
      elements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        const depth = i * 0.1 + 0.2; // Different depth for each element
        const moveX = (x - 0.5) * depth * 40;
        const moveY = (y - 0.5) * depth * 40;
        htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full filter blur-3xl opacity-30 animate-float parallax-blob"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-300/30 rounded-full filter blur-3xl opacity-30 animate-float-reverse parallax-blob"></div>
      <div className="absolute top-[40%] right-[5%] w-[15%] h-[15%] bg-pink-300/30 rounded-full filter blur-3xl opacity-30 animate-pulse-slow parallax-blob"></div>
      <div className="absolute top-[20%] left-[10%] w-[20%] h-[20%] bg-indigo-300/30 rounded-full filter blur-3xl opacity-20 animate-float-slow parallax-blob"></div>
    </div>
  );
};

export default BackgroundEffect;
