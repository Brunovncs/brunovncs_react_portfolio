'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl space-y-8"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Front-End Developer
        </h1>
        <p className="text-xl text-gray-400 md:text-2xl">
          Welcome to my personal portfolio
        </p>
      </motion.div>
    </section>
  );
}