'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: 'red' | 'black' | 'white';
  text?: string;
}

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'red',
  text
}: LoadingSpinnerProps) => {
  
  // Size mappings
  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-20 h-20'
  };
  
  // Color mappings
  const colorMap = {
    red: 'border-brand-red',
    black: 'border-brand-black',
    white: 'border-white'
  };
  
  const textSizeMap = {
    small: 'text-xs mt-2',
    medium: 'text-sm mt-3',
    large: 'text-base mt-4'
  };
  
  const spinTransition = {
    repeat: Infinity,
    ease: "linear",
    duration: 1
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className={`rounded-full border-4 border-t-transparent ${sizeMap[size]} ${colorMap[color]}`}
        animate={{ rotate: 360 }}
        transition={spinTransition}
        role="status"
        aria-label="loading"
      />
      {text && (
        <p className={`${textSizeMap[size]} text-gray-600 font-medium`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner; 