
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface CallToActionProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const CallToAction: React.FC<CallToActionProps> = ({ 
  href, 
  children, 
  className,
  variant = 'primary'
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden",
        "shadow-lg border border-white/20",
        variant === 'primary' 
          ? "bg-black text-white hover:bg-black/90" 
          : "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30",
        className
      )}
      whileHover={{ 
        y: -3,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" 
      }}
      whileTap={{ y: 0 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Glass reflection effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[10%] right-[60%] h-[40%] bg-white/20 rounded-full transform -skew-x-12"></div>
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </motion.a>
  );
};

export default CallToAction;
