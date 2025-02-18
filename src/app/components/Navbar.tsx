'use client';
import { motion } from 'framer-motion';
import { FiCode, FiDownload, FiMail } from 'react-icons/fi';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 max-w-5xl w-[90%] flex justify-between items-center p-4 bg-neutral-900 backdrop-blur-sm z-50 rounded-3xl shadow-xl border border-white/10"
    >
      {/* Lado Esquerdo com Logo e Ícone */}
      <Link href="/" className="flex items-center gap-2 group">
        <FiCode className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
        <span className="text-xl font-bold">Bruno Vinicius</span>
      </Link>

      {/* Lado Direito com Links */}
      <div className="flex items-center gap-6">
        <a href="#work" className="hover:text-purple-300 transition">Projetos</a>
        
        <SocialLinks />
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/files/curriculo.pdf"
          download
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition-colors"
        >
          <FiDownload className="w-4 h-4" />
          Currículo
        </motion.a>
      </div>
    </motion.nav>
  );
}