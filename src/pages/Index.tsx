
import React from 'react';
import SocialIcon from '@/components/SocialIcon';
import BackgroundEffect from '@/components/BackgroundEffect';
import CallToAction from '@/components/CallToAction';
import { Home, Mail, Calendar, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      <BackgroundEffect />
      
      {/* Main content container */}
      <div className="w-full max-w-xl mx-auto">
        {/* Navigation/Social Icons */}
        <div className="flex justify-center mb-12 space-x-4 opacity-0 animate-fade-in-delay-1">
          <SocialIcon 
            href="/" 
            icon={<Home className="w-5 h-5" />} 
            label="Homepage" 
          />
          <SocialIcon 
            href="mailto:hello@example.com" 
            icon={<Mail className="w-5 h-5" />} 
            label="Email" 
          />
          <SocialIcon 
            href="https://cal.com/anishsarkar/" 
            icon={<Calendar className="w-5 h-5" />} 
            label="Calendar" 
          />
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/30 glass opacity-0 animate-fade-in-delay-2">
            <img 
              src="/lovable-uploads/06415e9b-a160-45f6-a026-2c2a69129171.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-3 opacity-0 animate-fade-in-delay-3">
          <span className="text-gradient">Coming Soon</span>
        </h1>
        
        {/* Subheading */}
        <div className="text-center mb-8 opacity-0 animate-fade-in-delay-3">
          <p className="text-xl sm:text-2xl font-light text-foreground/80">Designer & Developer</p>
        </div>
        
        {/* Description */}
        <p className="text-center text-foreground/70 max-w-md mx-auto mb-12 opacity-0 animate-fade-in-delay-4">
          I craft elegant digital experiences with attention to detail and a focus on user experience. My portfolio is under construction.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
          <CallToAction href="https://cal.com/anishsarkar/">
            <span className="flex items-center">
              Book a Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </CallToAction>
          <div className="glass-card px-4 py-2 rounded-full text-sm">
            Available for new projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
