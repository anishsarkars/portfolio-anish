
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
      
      {/* Custom cursor spotlight effect */}
      <div 
        className="fixed pointer-events-none opacity-70 rounded-full mix-blend-screen z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)',
          width: '400px',
          height: '400px',
          transform: `translate(${cursorPosition.x - 200}px, ${cursorPosition.y - 200}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      {/* Main content container */}
      <div className="w-full max-w-xl mx-auto z-20">
        {/* Navigation/Social Icons */}
        <motion.div 
          className="flex justify-center mb-12 space-x-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <SocialIcon 
              href="/" 
              icon={<Home className="w-5 h-5 text-white/90" />} 
              label="Homepage" 
            />
          </motion.div>
          <motion.div variants={item}>
            <SocialIcon 
              href="mailto:hello@anishsarkar.com" 
              icon={<Mail className="w-5 h-5 text-white/90" />} 
              label="Email" 
            />
          </motion.div>
          <motion.div variants={item}>
            <SocialIcon 
              href="https://cal.com/anishsarkar/" 
              icon={<Calendar className="w-5 h-5 text-white/90" />} 
              label="Calendar" 
            />
          </motion.div>
          <motion.div variants={item}>
            <SocialIcon 
              href="https://www.linkedin.com/in/anishsarkar-/" 
              icon={<Linkedin className="w-5 h-5 text-white/90" />} 
              label="LinkedIn" 
              className="bg-[#0077B5]/20"
            />
          </motion.div>
          <motion.div variants={item}>
            <SocialIcon 
              href="https://github.com/anishsarkar" 
              icon={<Github className="w-5 h-5 text-white/90" />} 
              label="GitHub"
              className="bg-[#333]/20" 
            />
          </motion.div>
        </motion.div>
        
        {/* Profile Image with hover effect */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/30 glass group">
            <img 
              src="/lovable-uploads/19c442ef-4588-401e-b6a5-99f293652cd8.png" 
              alt="Anish Sarkar" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
        
        <ParallaxContainer speed={0.03} className="mb-3">
          {/* Heading */}
          <motion.h1 
            className="text-4xl sm:text-6xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="text-gradient inline-block">Anish Sarkar</span>
          </motion.h1>
        </ParallaxContainer>
        
        {/* Subheading */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-xl sm:text-2xl font-light text-foreground/80">Designer & Developer</p>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          className="text-center text-foreground/70 max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          I craft elegant digital experiences with attention to detail and a focus on user experience. My portfolio is under construction.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <CallToAction href="https://cal.com/anishsarkar/">
              <span className="flex items-center">
                Book a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </CallToAction>
          </motion.div>
          <motion.div 
            className="glass-card px-6 py-2 rounded-full text-sm backdrop-blur-md"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Available for new projects
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
