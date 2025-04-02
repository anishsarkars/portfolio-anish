"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const skills: SkillItem[] = [
  {
    name: "React.js",
    description: "Frontend Development",
    icon: "⚛️",
    color: "#61DAFB",
    time: "5y exp"
  },
  {
    name: "Next.js",
    description: "Full-stack Framework",
    icon: "▲",
    color: "#000000",
    time: "3y exp"
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript",
    icon: "📘",
    color: "#3178C6",
    time: "4y exp"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS",
    icon: "🎨",
    color: "#06B6D4",
    time: "3y exp"
  },
  {
    name: "Framer Motion",
    description: "Animation Library",
    icon: "✨",
    color: "#0055FF",
    time: "2y exp"
  },
  {
    name: "UI/UX Design",
    description: "User Interface Design",
    icon: "🎭",
    color: "#FF3366",
    time: "4y exp"
  },
  {
    name: "Node.js",
    description: "Backend Development",
    icon: "🟢",
    color: "#339933",
    time: "4y exp"
  },
  {
    name: "GraphQL",
    description: "API Query Language",
    icon: "🔮",
    color: "#E535AB",
    time: "2y exp"
  },
];

const SkillCard = ({ name, description, icon, color, time }: SkillItem) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        // light styles
        "bg-white/90 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-white/10 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-row items-center whitespace-pre text-base font-medium">
            <span className="text-sm sm:text-base text-gray-800 dark:text-white">{name}</span>
            <span className="mx-1 text-gray-400">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
          <p className="text-sm font-normal text-gray-600 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function SkillsList({
  className,
}: {
  className?: string;
}) {
  const [visibleSkills, setVisibleSkills] = useState<SkillItem[]>([]);
  
  useEffect(() => {
    // Clear any existing skills
    setVisibleSkills([]);
    
    // Add skills one by one with delays
    const delays = skills.map((_, index) => {
      return setTimeout(() => {
        setVisibleSkills(prev => [...prev, skills[index]]);
      }, 500 + (index * 800)); // Initial delay + staggered delay
    });
    
    return () => {
      delays.forEach(delay => clearTimeout(delay));
    };
  }, []);
  
  return (
    <div
      className={cn(
        "relative flex flex-col space-y-3 overflow-hidden",
        className,
      )}
    >
      <AnimatePresence>
        {visibleSkills.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </AnimatePresence>
    </div>
  );
} 