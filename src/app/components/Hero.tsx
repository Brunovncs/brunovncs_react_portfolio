'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl space-y-8 transition-all duration-1000"
        
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent transition-colors duration-1000">
          AI & Web Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 transition-colors duration-1000">
          Welcome to my personal portfolio
        </p>
      </motion.div>
    </section>
  ); 
}