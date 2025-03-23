'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact Us', href: '/#contact', isButton: true }
  ];

  const headerVariants = {
    initial: { 
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      height: '80px',
    },
    scrolled: { 
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      height: '70px',
      backdropFilter: 'blur(10px)'
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-brand-white"
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={headerVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom flex justify-between items-center h-full">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-brand-red flex items-center">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="mr-2 text-3xl"
            >
              Mr
            </motion.span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 'auto' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden"
            >
              <span>Media Agency</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.isButton ? (
                <Link href={link.href} className="px-5 py-2 bg-brand-red text-white rounded-md hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                  {link.name}
                </Link>
              ) : (
                <Link 
                  href={link.href} 
                  className="font-medium text-gray-800 hover:text-brand-red transition-colors relative group"
                >
                  {link.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-brand-black focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white py-6 px-4 shadow-xl absolute w-full"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={menuItemVariants}
                  whileHover={{ x: 5 }}
                  className="border-b border-gray-100 pb-2"
                >
                  <Link 
                    href={link.href} 
                    className={`font-medium ${link.isButton 
                      ? 'text-brand-red font-bold' 
                      : 'text-gray-800 hover:text-brand-red'} transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 