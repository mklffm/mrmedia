'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
}

const Toast = ({
  type,
  message,
  isVisible,
  onClose,
  duration = 5000,
  position = 'top-right'
}: ToastProps) => {
  
  // Auto-close the toast after duration
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  
  // Icon based on toast type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheck />;
      case 'error':
        return <FaTimes />;
      case 'warning':
        return <FaExclamationTriangle />;
      case 'info':
        return <FaInfoCircle />;
      default:
        return null;
    }
  };
  
  // Background color based on toast type
  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-brand-red';
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-gray-700';
    }
  };
  
  // Position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'top-center':
        return 'top-4 left-1/2 -translate-x-1/2';
      case 'bottom-center':
        return 'bottom-4 left-1/2 -translate-x-1/2';
      default:
        return 'top-4 right-4';
    }
  };
  
  // Animation variants
  const variants = {
    initial: { 
      opacity: 0,
      y: position.includes('top') ? -20 : 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: 0.2 
      }
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed ${getPositionClasses()} z-50 shadow-lg rounded-lg max-w-sm w-full`}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className={`flex items-center justify-between p-4 rounded-lg ${getBgColor()} text-white`}>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                {getIcon()}
              </div>
              <div className="flex-1 ml-3 text-sm font-medium">
                {message}
              </div>
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white/20 text-white rounded-lg p-1.5 
                        inline-flex h-8 w-8 hover:bg-white/30 focus:ring-2 focus:ring-white"
              onClick={onClose}
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast; 