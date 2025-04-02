
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialIcon from '@/components/SocialIcon';
import BackgroundEffect from '@/components/BackgroundEffect';
import CallToAction from '@/components/CallToAction';
import ParallaxContainer from '@/components/ParallaxContainer';
import { Home, Mail, Calendar, ArrowRight, Linkedin, Github, Twitter } from 'lucide-react';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  if (!isMounted) return null;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 overflow-hidden">
      <BackgroundEffect />
      
      {/* Enhanced cursor spotlight effect */}
      <div 
        className="fixed pointer-events-none opacity-70 rounded-full mix-blend-plus-lighter blur-sm z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)',
          width: '500px',
          height: '500px',
          transform: `translate(${cursorPosition.x - 250}px, ${cursorPosition.y - 250}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      />
      
      {/* Main content container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto z-20 relative"
      >
        {/* Navigation/Social Icons */}
        <motion.div 
          className="flex justify-center mb-16 space-x-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <SocialIcon 
              href="/" 
              icon={<Home className="w-5 h-5 text-white/90" />} 
              label="Homepage" 
            />
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <SocialIcon 
              href="mailto:hello@anishsarkar.com" 
              icon={<Mail className="w-5 h-5 text-white/90" />} 
              label="Email" 
            />
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <SocialIcon 
              href="https://cal.com/anishsarkar/" 
              icon={<Calendar className="w-5 h-5 text-white/90" />} 
              label="Calendar" 
            />
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <SocialIcon 
              href="https://www.linkedin.com/in/anishsarkar-/" 
              icon={<Linkedin className="w-5 h-5 text-white/90" />} 
              label="LinkedIn" 
              className="bg-[#0077B5]/20"
            />
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <SocialIcon 
              href="https://github.com/anishsarkar" 
              icon={<Github className="w-5 h-5 text-white/90" />} 
              label="GitHub"
              className="bg-[#333]/20" 
            />
          </motion.div>
        </motion.div>
        
        {/* Enhanced glass card container */}
        <motion.div 
          className="glass-card rounded-3xl p-10 backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl overflow-hidden relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-400/20 rounded-full filter blur-3xl"></div>
          
          {/* Profile section */}
          <div className="flex flex-col items-center">
            {/* Profile Image with enhanced hover effect */}
            <motion.div 
              className="mb-8 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/30 glass group">
                <img 
                  src="/lovable-uploads/19c442ef-4588-401e-b6a5-99f293652cd8.png" 
                  alt="Anish Sarkar" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-400/30 to-blue-400/30 blur-sm -z-10 animate-pulse-slow"></div>
            </motion.div>
            
            <ParallaxContainer speed={0.05} className="mb-3 overflow-visible">
              {/* Heading with enhanced text gradient */}
              <motion.h1 
                className="text-5xl sm:text-6xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent inline-block">
                  Anish Sarkar
                </span>
              </motion.h1>
            </ParallaxContainer>
            
            {/* Subheading with typewriter effect */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-xl sm:text-2xl font-light text-white/90 inline-flex">
                <TypewriterText texts={["Designer", "Developer", "Creator"]} />
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-center text-white/70 max-w-md mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              I craft elegant digital experiences with attention to detail and a focus on user experience. 
              My portfolio is under construction, but feel free to reach out for collaborations.
            </motion.p>
            
            {/* CTA Buttons with enhanced effects */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <CallToAction 
                  href="https://cal.com/anishsarkar/"
                  className="bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500"
                >
                  <span className="flex items-center">
                    Book a Call
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </CallToAction>
              </motion.div>
              <motion.div 
                className="glass px-6 py-2 rounded-full text-sm backdrop-blur-md"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Available for new projects
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          className="text-center mt-8 text-white/50 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          © {new Date().getFullYear()} Anish Sarkar • All rights reserved
        </motion.div>
      </motion.div>
    </div>
  );
};

// Typewriter effect component
const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  
  // Typing effect
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1000 : 150, parseInt((Math.random() * 100).toString())));
    
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);
  
  // Blinking cursor effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout);
  }, [blink]);
  
  return (
    <span className="inline-flex items-center">
      {texts[index].substring(0, subIndex)}
      <span className={`ml-1 w-[2px] h-5 bg-white/80 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};

export default Index;
