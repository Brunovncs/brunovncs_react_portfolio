import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const experiencesMeta = [
  {
    key: 'backendDev',
    typeKey: 'experience.fullTime',
    company: 'Hablla',
    companyUrl: 'https://www.linkedin.com/company/hablla',
    tags: ['Go', 'MongoDB', 'Redis', 'REST APIs'],
  },
  {
    key: 'intern',
    typeKey: 'experience.internship',
    company: 'Hablla',
    companyUrl: 'https://www.linkedin.com/company/hablla',
    tags: ['React', 'TypeScript', 'Redux', 'Redux Saga', 'Vite'],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();

  return (
    <section className={`${open ? 'py-20' : 'py-6'} transition-all duration-300`} id="experience">
      <div className="max-w-5xl mx-auto px-4">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-3 mb-12 group w-full text-left"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-black dark:text-white transition-colors duration-1000"
          >
            {t('experience.title')}
          </motion.h2>
          <FiChevronDown
            className={`w-6 h-6 text-purple-500 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="relative border-l-2 border-purple-500/30 pl-8 space-y-12">
                {experiencesMeta.map((exp, index) => {
                  const bullets = t(`experience.${exp.key}.bullets`, { returnObjects: true }) as string[];
                  return (
                    <motion.div
                      key={exp.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <span className="absolute -left-[2.65rem] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-black" />

                      <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-white/10 rounded-xl p-6 hover:border-purple-500/40 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                          <div>
                            <h3 className="text-lg font-bold text-black dark:text-white">
                              {t(`experience.${exp.key}.role`)}
                            </h3>
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                            >
                              {exp.company}
                            </a>
                            <span className="text-gray-500 dark:text-gray-500 text-sm ml-2">· {t(exp.typeKey)}</span>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                            {t(`experience.${exp.key}.period`)}
                          </span>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {bullets.map((bullet, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex gap-2">
                              <span className="text-purple-500 mt-1 shrink-0">›</span>
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
