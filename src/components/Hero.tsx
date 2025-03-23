'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-brand-black to-gray-900 text-brand-white min-h-[80vh] flex items-center -mt-20">
      <div className="container-custom section-padding flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 mb-10 md:mb-0 space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Elevate Your Brand with <span className="text-brand-red">Premium</span> Social Media Marketing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl opacity-90"
          >
            Mr Media Agency helps businesses build powerful social media presence, increase engagement, and drive measurable results.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/#contact" className="btn-primary text-center px-8 py-3 rounded-md font-bold text-brand-white bg-brand-red hover:bg-red-700 transition-all transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/#services" className="bg-transparent border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black transition-all transform hover:scale-105 font-bold py-3 px-8 rounded-md text-center">
              Our Services
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-brand-red to-brand-black p-1"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-5xl font-bold text-white text-center"
              >
                Mr Media
              </motion.div>
            </div>
            <motion.div
              className="absolute -inset-1 blur-md opacity-30"
              animate={{ 
                background: ['linear-gradient(0deg, #ff0000, #000000)', 'linear-gradient(180deg, #ff0000, #000000)', 'linear-gradient(360deg, #ff0000, #000000)'] 
              }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 