
import React from 'react';
import { cn } from "@/lib/utils";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, label, className }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full glass backdrop-blur-md transition-all duration-300",
        "hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] group",
        className
      )}
    >
      <div className="transform transition-transform duration-300 group-hover:rotate-[360deg]">
        {icon}
      </div>
    </a>
  );
};

export default SocialIcon;
