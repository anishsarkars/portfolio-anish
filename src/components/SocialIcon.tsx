
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label, className }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md transition-all duration-300 relative",
        "border border-white/20 bg-white/10 hover:bg-white/20 shadow-lg",
        className
      )}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 20px rgba(255,255,255,0.3)" 
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[10%] right-[50%] h-[40%] bg-white/20 rounded-full transform -skew-x-12"></div>
      </div>
      
      <motion.div 
        className="z-10 text-white"
        whileHover={{ rotate: 360 }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      >
        {icon}
      </motion.div>
    </motion.a>
  );
};

export default SocialIcon;
