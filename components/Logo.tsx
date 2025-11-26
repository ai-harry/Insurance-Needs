
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Shield */}
      <svg viewBox="0 0 100 100" className="h-full w-auto">
        {/* Shield Shape */}
        <path 
          d="M50 95 C20 85 10 70 10 30 L50 10 L90 30 C90 70 80 85 50 95 Z" 
          fill="#5b1484" 
        />
        {/* Stylized Child Figure */}
        <g transform="translate(50, 52)" fill="white">
          {/* Head */}
          <circle cx="0" cy="-22" r="10" />
          {/* Body/Arms - Abstract joyful figure */}
          <path d="M-14 -8 C-14 -8 -18 -2 -12 2 C-8 4 -5 0 -5 0 L-5 15 C-5 15 -8 28 -2 28 C4 28 2 15 2 15 L2 0 C2 0 5 4 9 2 C15 -2 11 -8 11 -8" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </svg>
      {/* Text */}
      <div className="flex flex-col justify-center select-none">
        <span className="text-2xl font-bold tracking-[0.15em] text-brand-600 uppercase leading-none font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>Thrive</span>
        <span className="text-[0.6rem] font-bold tracking-[0.4em] text-brand-400 uppercase mt-1 ml-1">Financial</span>
      </div>
    </div>
  );
};
