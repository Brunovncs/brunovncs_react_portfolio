import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const skills = [
  'React', 'Vite', 'TypeScript', 'Next.js',
  'Tailwind CSS', 'Node.js', 'Go', 'C',
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="py-20 transition-colors duration-1000" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-black dark:text-white transition-colors duration-1000"
        >
          {t('skills.title')}
        </motion.h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ delay: index * 0.05 }}
              className="px-5 py-2.5 bg-purple-100 dark:bg-purple-600/10 border border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium shadow-sm hover:shadow-purple-500/20 hover:shadow-md transition-shadow duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
