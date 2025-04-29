
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl'
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-investbot-purple">Invest</span>
      <span className="text-investbot-indigo">bot</span>
      <span className="text-investbot-purple font-semibold">IQ</span>
    </div>
  );
};

export default Logo;
