
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
        const moveX = (x - 0.5) * depth * 60;
        const moveY = (y - 0.5) * depth * 60;
        htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1729] to-[#1c1033] opacity-80"></div>
      
      {/* Animated noise texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light bg-repeat bg-noise"></div>
      
      {/* Animated gradient blobs */}
      <motion.div 
        className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-400/30 rounded-full filter blur-[100px] opacity-40 parallax-blob"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-400/30 rounded-full filter blur-[100px] opacity-40 parallax-blob"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      <motion.div 
        className="absolute top-[40%] right-[5%] w-[15%] h-[15%] bg-pink-400/30 rounded-full filter blur-[100px] opacity-40 parallax-blob"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div 
        className="absolute top-[20%] left-[10%] w-[20%] h-[20%] bg-indigo-400/30 rounded-full filter blur-[100px] opacity-30 parallax-blob"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3,
        }}
      />
      
      {/* Stars effect */}
      <div className="stars-container absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundEffect;
