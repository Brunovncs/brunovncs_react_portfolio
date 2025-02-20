'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'Figma', level: 75 },
];

export default function Skills() {
  return (
    <section className="py-20 transition-colors duration-1000" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-black dark:text-white transition-colors duration-1000"
        >
          Minhas Habilidades
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2 transition-colors duration-1000"
            >
              <div className="flex justify-between">
                <span className="font-medium text-black dark:text-white transition-colors duration-1000">
                  {skill.name}
                </span>
                <span className="text-purple-600 dark:text-purple-400 transition-colors duration-1000">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 transition-colors duration-1000">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-400 dark:from-purple-600 dark:to-purple-400 h-2.5 rounded-full transition-colors duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags de Tecnologias */}
        <div className="mt-12 flex flex-wrap gap-3 transition-colors duration-1000">
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-purple-100 dark:bg-purple-600/10 text-purple-600 dark:text-purple-400 rounded-full text-sm transition-colors duration-1000"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}