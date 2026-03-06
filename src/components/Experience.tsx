import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const experiences = [
  {
    role: 'Back-end Developer',
    type: 'Full-time',
    company: 'Hablla',
    companyUrl: 'https://www.linkedin.com/company/hablla',
    period: 'Jan 2026 — Present',
    bullets: [
      'Developing and maintaining scalable back-end services using Go (Golang), with focus on performance, concurrency and clean architecture.',
      'Working with MongoDB for data persistence and Redis for caching strategies and performance optimization.',
    ],
    tags: ['Go', 'MongoDB', 'Redis', 'REST APIs'],
  },
  {
    role: 'Intern — Support & Front-end Developer',
    type: 'Internship · Remote',
    company: 'Hablla',
    companyUrl: 'https://www.linkedin.com/company/hablla',
    period: 'Oct 2024 — Dec 2025',
    bullets: [
      'Started in the support team for 3 months, gaining deep knowledge of the platform, its flows, APIs and third-party integrations.',
      'Moved to the dev team as a front-end developer, building flow components and integrating third-party APIs using React, TypeScript, Redux, Redux Saga and Vite.',
      'Participated in the development of an AI agent interface, contributing to the planning and implementation of the UI for autonomous agents.',
      'Attended client meetings regularly, developing a strong understanding of business rules and stakeholder communication.',
    ],
    tags: ['React', 'TypeScript', 'Redux', 'Redux Saga', 'Vite'],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(true);

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
            Experience
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
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[2.65rem] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-black" />

              <div className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-white/10 rounded-xl p-6 hover:border-purple-500/40 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:underline text-sm font-medium"
                    >
                      {exp.company}
                    </a>
                    <span className="text-gray-500 dark:text-gray-500 text-sm ml-2">· {exp.type}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, i) => (
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
          ))}
        </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
