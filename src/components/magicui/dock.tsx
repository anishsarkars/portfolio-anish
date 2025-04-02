"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DockProps {
  className?: string;
  children?: React.ReactNode;
}

interface DockItemProps {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  label?: string;
  onClick?: () => void;
}

export function Dock({ className, children }: DockProps) {
  return (
    <div 
      className={cn(
        "flex justify-center w-auto z-50", 
        className
      )}
    >
      <div className="backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-full p-1.5 shadow-sm border border-white/10 dark:border-white/5">
        <div className="flex items-center space-x-2 relative">
          {children}
        </div>
      </div>
    </div>
  );
}

export function DockItem({ 
  active, 
  children, 
  className, 
  href, 
  label, 
  onClick
}: DockItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const content = (
    <motion.div
      layout
      initial={{ scale: 1 }}
      animate={{ 
        scale: isHovered ? 1.05 : 1,
        y: isHovered ? -4 : 0,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
      className={cn(
        "relative flex items-center justify-center rounded-full p-2",
        "bg-white/5 backdrop-blur-[2px]",
        "hover:bg-white/10 dark:hover:bg-white/5",
        "transition-colors duration-300",
        active && "bg-white/15 dark:bg-white/10",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
      {label && isHovered && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.8, y: 0 }}
          className="absolute -bottom-8 whitespace-nowrap text-xs font-medium text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-black/60 backdrop-blur-[2px] px-2 py-1 rounded-md"
        >
          {label}
        </motion.div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="outline-none focus:outline-none">
        {content}
      </a>
    );
  }

  return content;
} 