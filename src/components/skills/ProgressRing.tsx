import React from 'react';
import { motion } from 'framer-motion';

interface ProgressRingProps {
  percentage: number;
}

export default function ProgressRing({ percentage }: ProgressRingProps) {
  const radius = 35; // Increased radius for better visibility
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-20 h-20 group"> {/* Increased size */}
      <motion.div
        initial={{ rotate: -90 }}
        animate={{ rotate: 270 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full h-full"
      >
        <svg className="w-full h-full">
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          
          <circle
            className="text-purple-900/20"
            strokeWidth="6" // Thicker stroke
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
          />
          <motion.circle
            className="drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]"
            strokeWidth="6"
            stroke="url(#progressGradient)"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            strokeDasharray={circumference}
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <span className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
          {percentage}%
        </span>
      </motion.div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-500/10 blur-md" />
    </div>
  );
}