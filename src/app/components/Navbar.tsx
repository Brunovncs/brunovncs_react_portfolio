'use client';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed w-full flex justify-between items-center p-6 bg-white/10 backdrop-blur-sm z-50"
    >
      <span className="text-xl font-bold">Bruno Vinicius</span>
      <div className="flex items-center gap-4">
        <SocialLinks />
        <a href="#work" className="hover:text-gray-300 transition">Work</a>
        <a href="#contact" className="flex items-center gap-2 hover:text-gray-300 transition">
          <FiMail /> Contact
        </a>
      </div>
    </motion.nav>
  );
}