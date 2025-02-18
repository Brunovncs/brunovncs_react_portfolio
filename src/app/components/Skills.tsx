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
    <section className="py-20" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12"
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
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-purple-600 to-purple-400 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tags de Tecnologias */}
        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-purple-600/10 text-purple-400 rounded-full text-sm"
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}