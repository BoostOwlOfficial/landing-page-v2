import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-boost-dark';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract Owl Icon representation */}
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
         {/* Background shape mimicking the app icon container shape */}
         <rect x="5" y="5" width="90" height="90" rx="30" className="fill-boost-teal" />
         
         {/* Owl Outline */}
         <path 
           d="M35 40 C35 40, 50 55, 65 40" 
           stroke="white" 
           strokeWidth="4" 
           strokeLinecap="round" 
           strokeLinejoin="round" 
         />
         <path 
           d="M35 40 C35 25, 50 25, 65 40" 
           stroke="white" 
           strokeWidth="4" 
           strokeLinecap="round" 
           strokeLinejoin="round" 
         />
         <circle cx="42" cy="45" r="3" className="fill-boost-accent" />
         <circle cx="58" cy="45" r="3" className="fill-boost-accent" />
         
         {/* Body/Chat Bubble Shape */}
         <path 
           d="M25 50 C25 35, 75 35, 75 50 C75 70, 60 75, 50 75 C40 75, 25 70, 25 50 Z" 
           stroke="white" 
           strokeWidth="4" 
           fill="none"
         />
         
         {/* Speed lines */}
         <line x1="10" y1="45" x2="20" y2="45" stroke="#00dfa2" strokeWidth="4" strokeLinecap="round" />
         <line x1="5" y1="55" x2="18" y2="55" stroke="#00dfa2" strokeWidth="4" strokeLinecap="round" />
         <line x1="12" y1="65" x2="22" y2="65" stroke="#00dfa2" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className={`font-bold text-xl tracking-tight ${textColor}`}>
        Boost<span className="text-boost-accent">Owl</span>
      </span>
    </div>
  );
};