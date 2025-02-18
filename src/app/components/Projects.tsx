// components/Projects.tsx
'use client';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project 1', description: 'Web Development' },
  { id: 2, title: 'Project 2', description: 'UI/UX Design' },
  // Add more projects
];

export default function Projects() {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-6 rounded-lg"
        >
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
        </motion.div>
      ))}
    </section>
  );
}