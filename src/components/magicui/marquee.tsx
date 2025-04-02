"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface Message {
  text: string;
  icon?: React.ReactNode;
}

interface MarqueeProps {
  className?: string;
  speed?: number;
}

const messages: Message[] = [
  { text: "Coming Soon", icon: "🚀" },
  { text: "Loading...", icon: <Loader2 className="w-4 h-4 animate-spin" /> },
  { text: "Under Construction", icon: "🏗️" },
  { text: "Final Touches", icon: "✨" },
  { text: "Almost Ready", icon: "⚡" },
  { text: "Launching Soon", icon: "🎯" },
  { text: "Stay Tuned", icon: "📻" },
  { text: "Building Something Amazing", icon: "🌟" }
];

export function Marquee({ className, speed = 20 }: MarqueeProps) {
  // Double the messages array to create a seamless loop
  const doubledMessages = [...messages, ...messages];

  return (
    <div className={cn("relative flex flex-col gap-2 overflow-hidden", className)}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee ${speed}s linear infinite;
          }
        `
      }} />
      <div className="flex flex-row gap-16 animate-marquee">
        {doubledMessages.map((message, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.1,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            <span>{message.icon}</span>
            <span>{message.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 