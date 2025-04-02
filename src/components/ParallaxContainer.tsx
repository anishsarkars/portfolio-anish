
import React, { useRef, useEffect } from 'react';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ 
  children, 
  speed = 0.05,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let animationFrameId: number;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (!container) return;
      const scrollY = window.scrollY;
      const delta = (scrollY - lastScrollY) * speed;
      
      container.style.transform = `translateY(${-delta}px)`;
      lastScrollY = scrollY;
      
      animationFrameId = requestAnimationFrame(handleScroll);
    };
    
    animationFrameId = requestAnimationFrame(handleScroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);
  
  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxContainer;
