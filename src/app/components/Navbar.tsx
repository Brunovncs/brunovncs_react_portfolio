'use client';
import { motion } from 'framer-motion';
import { FiCode, FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import { useEffect, useState } from 'react';
// import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
    setIsDark(!isDark);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl w-[90%] flex justify-between items-center p-4 bg-neutral-100 dark:bg-neutral-900 backdrop-blur-sm z-50 rounded-3xl shadow-xl border border-neutral-300 dark:border-white/10 transition-colors duration-1000"
    >
      {/* Lado Esquerdo com Logo e Ícone */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 group transition-colors duration-1000"
      >
        <FiCode className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-1000" />
        <span className="text-xl font-bold text-black dark:text-white transition-colors duration-1000">
          Bruno Vinicius
        </span>
      </button>

      {/* Lado Direito com Links */}
      <div className="flex items-center gap-4 md:gap-6 transition-colors duration-1000">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-1000 text-black dark:text-white"
        >
          {isDark ? (
            <FiSun className="w-5 h-5 transition-opacity duration-1000" />
          ) : (
            <FiMoon className="w-5 h-5 transition-opacity duration-1000" />
          )}
        </button>

        <a href="#skills" className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors duration-1000 hidden md:block">
          Projects
        </a>

        <SocialLinks />

        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/files/curriculoen.pdf"
          download
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 p-2 md:px-4 md:py-2 rounded-full transition-colors duration-1000 text-white"
        >
          <FiDownload className="w-4 h-4" />
          <span className="hidden md:block">Resume</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}