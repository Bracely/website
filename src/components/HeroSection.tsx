import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-white text-center px-4 overflow-hidden" style={{backgroundImage: 'url(/images/Background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Fallback background color */}
      <div className="absolute inset-0 bg-primary opacity-50"></div>
      {/* Remove colorful background elements for a professional look */}

      <motion.h1 
        className="text-5xl md:text-7xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        World Speech Day Zimbabwe 2026
      </motion.h1>

      <motion.p 
        className="text-xl md:text-3xl mb-2 font-light"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Invest in Zimbabwe. Voices for growth and opportunity.
      </motion.p>

      <motion.p 
        className="text-lg md:text-xl mb-6 font-medium"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        March 27, 2026 | Harare, Zimbabwe
      </motion.p>

      <motion.button 
        className="bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-accent transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Register Now
      </motion.button>

      {/* Remove decorative elements */}
    </section>
  );
};

export default HeroSection;