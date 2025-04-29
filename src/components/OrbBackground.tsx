
import React from 'react';

interface OrbBackgroundProps {
  className?: string;
}

const OrbBackground = ({ className = '' }: OrbBackgroundProps) => {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main orb */}
      <div 
        className="orb-gradient orb-lg animate-orb-float" 
        style={{
          top: '20%',
          right: '10%',
          animationDelay: '0s',
        }}
      />
      
      {/* Secondary orb */}
      <div 
        className="orb-gradient orb-md animate-orb-float" 
        style={{
          bottom: '15%',
          left: '10%',
          animationDelay: '1.5s',
        }}
      />
      
      {/* Smaller orb */}
      <div 
        className="orb-gradient orb-sm animate-orb-float" 
        style={{
          top: '60%',
          left: '30%',
          animationDelay: '3s',
        }}
      />
      
      {/* Another small orb */}
      <div 
        className="orb-gradient orb-sm animate-pulse-glow" 
        style={{
          top: '25%',
          left: '20%',
          animationDelay: '2s',
        }}
      />
    </div>
  );
};

export default OrbBackground;
