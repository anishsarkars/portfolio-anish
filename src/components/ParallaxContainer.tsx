
import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  children, 
  speed = 0.05,
  className = "",
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create transforms based on direction
  const yValue = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === 'up' ? [50, -50] : 
    direction === 'down' ? [-50, 50] : [0, 0]
  );
  
  const xValue = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === 'left' ? [50, -50] : 
    direction === 'right' ? [-50, 50] : [0, 0]
  );
  
  // Mouse movement parallax effect
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let animationFrameId: number | null = null;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position as percentage
      const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      // Apply gentle transform based on mouse position and speed
      const moveX = -x * 10 * speed;
      const moveY = -y * 10 * speed;
      
      // Apply the transform
      cancelAnimationFrame(animationFrameId as number);
      animationFrameId = requestAnimationFrame(() => {
        container.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed]);
  
  return (
    <div ref={ref} className={className}>
      <motion.div
        ref={containerRef}
        style={{ 
          y: yValue,
          x: xValue
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;
