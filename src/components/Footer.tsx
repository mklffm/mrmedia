'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <footer className="bg-gradient-dark text-white pt-16 pb-8" ref={footerRef}>
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Footer main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 border-b border-brand-red pb-2 inline-block">Mr Media Agency</h3>
            <p className="mb-6 text-gray-300">
              Transforming businesses through innovative media solutions and creative digital strategies since 2010.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-dark"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-dark"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-dark"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-dark"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-dark"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 border-b border-brand-red pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#services" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#about" className="text-gray-300 hover:text-white hover:underline transition-all">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#testimonials" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Testimonials
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#contact" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 border-b border-brand-red pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#services-social-media" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Social Media Marketing
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#services-seo" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Search Engine Optimization
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#services-content" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Content Creation
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#services-ppc" className="text-gray-300 hover:text-white hover:underline transition-all">
                  PPC Advertising
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#services-web" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Web Development
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Link href="/#services-branding" className="text-gray-300 hover:text-white hover:underline transition-all">
                  Branding & Design
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 border-b border-brand-red pb-2 inline-block">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>123 Media Boulevard</p>
              <p>San Francisco, CA 94103</p>
              <p className="pt-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Email:</strong> <a href="mailto:info@mrmedia.com" className="hover:text-white hover:underline">info@mrmedia.com</a></p>
            </address>
            <div className="mt-6">
              <motion.button 
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/#contact'}
              >
                Get a Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom footer */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-gray-400">
                © {new Date().getFullYear()} Mr Media Agency. All rights reserved.
              </p>
            </motion.div>
          </div>
          
          {/* Scroll to top button */}
          <motion.div 
            className="fixed bottom-8 right-8 z-30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              className="bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Scroll to top"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer; 