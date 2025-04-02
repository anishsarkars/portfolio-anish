
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
        "flex items-center justify-center w-10 h-10 rounded-full glass transition-all duration-300 hover:scale-110",
        className
      )}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
