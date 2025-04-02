
import React from 'react';
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-block px-6 py-3 rounded-full font-medium transition-all duration-300 hover:translate-y-[-2px]",
        variant === 'primary' 
          ? "bg-black text-white hover:bg-black/90" 
          : "bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30",
        className
      )}
    >
      {children}
    </a>
  );
};

export default CallToAction;
