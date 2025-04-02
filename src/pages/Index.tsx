import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SocialIcon from '@/components/SocialIcon';
import CallToAction from '@/components/CallToAction';
import ParallaxContainer from '@/components/ParallaxContainer';
import { BorderBeam } from '@/components/magicui/border-beam';
import { Home, Mail, Calendar, ArrowRight, Linkedin, Sun, Moon } from 'lucide-react';
import { Marquee } from '@/components/magicui/marquee';
import { Meteors } from '@/components/magicui/meteors';
import { useTheme } from '@/hooks/useTheme';
import { Dock, DockItem } from '@/components/magicui/dock';

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    setIsMounted(true);
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
    <div className={`h-screen flex flex-col items-center justify-center relative overflow-hidden ${theme}`}>
      {/* Background with Meteors */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-[#0c0c0c] dark:via-[#111111] dark:to-[#161616]" />
        <Meteors 
          number={12} 
          className={theme === 'dark' ? 'opacity-85' : 'opacity-30'} 
        />
      </div>
      
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-gray-600" />
        )}
      </motion.button>
      
      {/* Dock Navigation */}
      <Dock className="fixed top-4 left-1/2 transform -translate-x-1/2">
        <DockItem href="/" label="Home" active={true}>
          <Home className="w-5 h-5 text-gray-800 dark:text-white/90" />
        </DockItem>
        <DockItem href="mailto:chat@anishsarkar.site" label="Email">
          <Mail className="w-5 h-5 text-gray-800 dark:text-white/90" />
        </DockItem>
        <DockItem href="https://www.linkedin.com/in/anishsarkar-/" label="LinkedIn">
          <Linkedin className="w-5 h-5 text-gray-800 dark:text-white/90" />
        </DockItem>
      </Dock>
      
      {/* Main content container */}
      <div className="w-full max-w-xl mx-auto z-20 px-4">
        {/* Profile Image with hover effect and border beam */}
        <motion.div 
          className="flex justify-center mb-6 relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-24 h-24 rounded-full overflow-hidden glass group z-10 shadow-lg">
            <BorderBeam 
              size={80}
              colorFrom="rgba(108, 99, 255, 0.8)"
              colorTo="rgba(47, 166, 187, 0.8)"
              duration={4}
              className="z-10"
            />
            <img 
              src="/lovable-uploads/19c442ef-4588-401e-b6a5-99f293652cd8.png" 
              alt="Profile" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
        
        <ParallaxContainer speed={0.03} className="mb-2">
          {/* Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="text-gradient inline-block">Coming Soon</span>
          </motion.h1>
        </ParallaxContainer>
        
        {/* Subheading */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg sm:text-xl font-light text-gray-700 dark:text-gray-200">Designer & Developer</p>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-8 text-sm sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          I craft elegant digital experiences with attention to detail and a focus on user experience. My portfolio is under construction.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
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

      {/* Bottom Loading Marquee */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 w-full bg-gradient-to-b from-transparent to-black/5 backdrop-blur-sm"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <Marquee speed={30} className="py-1" />
      </motion.div>
    </div>
  );
};

export default Index;
