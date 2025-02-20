'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Landing Page Moderna',
    description: 'Design responsivo com animações fluidas',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    links: {
      github: 'https://github.com',
      live: 'https://exemplo.com'
    }
  },
  {
    id: 2,
    title: 'Aplicativo Web',
    description: 'Dashboard com gráficos interativos',
    tech: ['React', 'TypeScript', 'Chart.js'],
    links: {
      github: 'https://github.com',
      live: 'https://exemplo.com'
    }
  },
];

export default function Projects() {
  return (
    <section className="py-20 transition-colors duration-1000" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-black dark:text-white transition-colors duration-1000"
        >
          Projetos Recentes
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-300 dark:border-white/10 backdrop-blur-sm hover:border-purple-500 dark:hover:border-purple-400/30 transition-all duration-1000"
            >
              <div className="flex flex-col h-full transition-colors duration-1000">
                {/* Cabeçalho */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white transition-colors duration-1000">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-1000">
                    {project.description}
                  </p>

                  {/* Tags de Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 rounded-full transition-colors duration-1000"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors duration-1000 text-black dark:text-white"
                  >
                    <div className="text-black dark:text-white transition-colors duration-1000">
                      <FiGithub className="w-5 h-5 inline-block" />
                    </div>
                    Code
                  </a>

                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 rounded-2xl transition-colors duration-1000 text-white"
                  >
                    <FiExternalLink className="w-5 h-5 transition-colors duration-1000" />
                    See online
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}