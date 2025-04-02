
import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-blue-300/30 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-[40%] right-[5%] w-[15%] h-[15%] bg-pink-300/30 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
    </div>
  );
};

export default BackgroundEffect;
