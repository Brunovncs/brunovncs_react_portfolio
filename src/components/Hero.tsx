import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[42%] flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-purple-500/40 shadow-xl">
            <img
              src="/pngs/profilepicture/profile_picture.png"
              alt="Foto de perfil de Bruno Vinicius"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-4 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent transition-colors duration-1000">
            Bruno Vinicius Veronez de Jesus
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 transition-colors duration-1000">
            {t('hero.role')}
          </p>
          <a
            href="https://www.linkedin.com/company/hablla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 inline-block"
          >
            {t('hero.company')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
