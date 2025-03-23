'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container-custom section-padding" ref={ref}>
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-brand-red to-brand-black shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold"
              >
                <span className="relative">
                  MMA
                  <motion.div
                    className="absolute -inset-2 rounded-lg opacity-30 blur-md"
                    animate={{
                      background: [
                        'linear-gradient(0deg, rgba(255,0,0,0.5), rgba(0,0,0,0.5))',
                        'linear-gradient(120deg, rgba(255,0,0,0.5), rgba(0,0,0,0.5))',
                        'linear-gradient(240deg, rgba(255,0,0,0.5), rgba(0,0,0,0.5))',
                        'linear-gradient(360deg, rgba(255,0,0,0.5), rgba(0,0,0,0.5))'
                      ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
                  />
                </span>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute bottom-0 left-0 w-16 h-16 bg-brand-red opacity-30"
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 bg-white opacity-20 rounded-full"
                animate={{ 
                  x: [0, -10, 0],
                  y: [0, 10, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 120 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-brand-red mb-6"
            />
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              About <span className="text-brand-red">Mr Media Agency</span>
            </motion.h2>
            <motion.p 
              className="text-lg mb-4 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Mr Media Agency is a premier social media marketing agency dedicated to helping businesses harness the power of social platforms to achieve their marketing goals.
            </motion.p>
            <motion.p 
              className="text-lg mb-8 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Founded with a passion for digital innovation, we bring together a team of experienced social media strategists, content creators, and data analysts to deliver results-driven campaigns.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { number: '150+', text: 'Happy Clients' },
                { number: '5+', text: 'Years Experience' },
                { number: '300+', text: 'Campaigns Managed' },
                { number: '15M+', text: 'Social Impressions' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white border border-gray-200 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  custom={index}
                >
                  <motion.div 
                    className="text-3xl font-bold text-brand-red mb-2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-600">{stat.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 