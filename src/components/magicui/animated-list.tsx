"use client";

import { useRef, useEffect, createContext, useContext, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AnimatedListContextType = {
  visibleItemsCount: number;
  setVisibleItemsCount: (count: number) => void;
};

const AnimatedListContext = createContext<AnimatedListContextType>({
  visibleItemsCount: 0,
  setVisibleItemsCount: () => {},
});

export function AnimatedList({
  children,
  animationDuration = 0.2,
  showDelay = 0.1,
  maxDisplayCount = 10,
  className = "",
}: {
  children: ReactNode;
  animationDuration?: number;
  showDelay?: number;
  maxDisplayCount?: number;
  className?: string;
}) {
  const [visibleItemsCount, setVisibleItemsCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenArray = Array.isArray(children) ? children : [children];
  const items = childrenArray.slice(0, maxDisplayCount);

  useEffect(() => {
    // Reset visible count on new items
    setVisibleItemsCount(0);
    
    // Start reveal animation
    const timer = setTimeout(() => {
      const showInterval = setInterval(() => {
        setVisibleItemsCount((prev) => {
          if (prev < items.length) {
            return prev + 1;
          } else {
            clearInterval(showInterval);
            return prev;
          }
        });
      }, showDelay * 1000);
      
      return () => clearInterval(showInterval);
    }, 500); // Small initial delay
    
    return () => clearTimeout(timer);
  }, [items.length, showDelay]);

  return (
    <AnimatedListContext.Provider value={{ visibleItemsCount, setVisibleItemsCount }}>
      <div 
        ref={containerRef} 
        className={`overflow-y-auto ${className}`}
        style={{ scrollbarWidth: "none" }}
      >
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={index < visibleItemsCount ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: animationDuration,
                ease: "easeOut", 
                delay: index * showDelay
              }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-3"
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AnimatedListContext.Provider>
  );
}

export const useAnimatedList = () => useContext(AnimatedListContext); 