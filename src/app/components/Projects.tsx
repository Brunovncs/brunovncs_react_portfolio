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
    <section className="py-20" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12"
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
              className="group bg-gray-900/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all"
            >
              <div className="flex flex-col h-full">
                {/* Cabeçalho */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  {/* Tags de Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-purple-400/10 text-purple-400 rounded-full"
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
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    Code
                  </a>
                  
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-2xl transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
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