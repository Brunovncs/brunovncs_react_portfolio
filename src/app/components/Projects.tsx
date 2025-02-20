'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo, FiX } from 'react-icons/fi';
import { Project } from '../types';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'AnotaAI',
    description: 'Flashcards app inspired by Anki',
    tech: ['React Native', 'Javascript', 'Jupyter'],
    show: true,
    links: {
      github: 'https://github.com/Brunovncs/AnotaAI',
      live: {
        url: 'https://exemplo.com',
        show: false, // Define se o botão "See online" deve aparecer
      },
    },
    details: {
      show: true, // Exibe ou não o botão "See details"
      // Outras propriedades para a modal:
      description: 'Descrição detalhada do projeto...',
      image: '/path/to/image.png', // Pode ser opcional
    },
  },
  {
    id: 2,
    title: 'Aplicativo Web',
    description: 'Dashboard com gráficos interativos',
    tech: ['React', 'TypeScript', 'Chart.js'],
    show: false,
    links: {
      github: 'https://github.com/Brunovncs/AnotaAI',
      live: {
        url: 'https://exemplo.com',
        show: false, // Define se o botão "See online" deve aparecer
      },
    },
    details: {
      show: false, // Exibe ou não o botão "See details"
      // Outras propriedades para a modal:
      description: 'Descrição detalhada do projeto...',
      image: '/path/to/image.png', // Pode ser opcional
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Função para abrir a modal
  const openModal = (project: Project): void => {
    setSelectedProject(project);
  };

  // Função para fechar a modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-20 transition-colors duration-1000" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 text-black dark:text-white transition-colors duration-1000"
        >
          Recent projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects
            .filter((project) => project.show)
            .map((project) => (
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
                      <FiGithub className="w-5 h-5" />
                      Code
                    </a>

                    {/* Botão "See online" condicional */}
                    {project.links?.live?.show && (
                      <a
                        href={project.links.live.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 rounded-2xl transition-colors duration-1000 text-white"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        See online
                      </a>
                    )}

                    {/* Botão "See details" condicional */}
                    {project.details?.show && (
                      <button
                        onClick={() => openModal(project)}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 rounded-2xl transition-colors duration-1000 text-white"
                      >
                        <FiInfo className="w-5 h-5" />
                        See details
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Modal para exibir os detalhes do projeto */}
      {selectedProject && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl relative max-w-md w-full border-[1px] border-purple-500">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
              {selectedProject.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.details.description}
            </p>
            {selectedProject.details.image && (
              <Image
                src={selectedProject.details.image}
                alt={selectedProject.title}
                width={600} // Defina uma largura ou use layout="responsive"
                height={400} // Defina uma altura proporcional ou use layout="responsive"
                className="rounded" // Continue com suas classes para borda arredondada
                layout="responsive" // Para tornar a imagem responsiva
              />
            )}
            {/* Botões dentro da modal */}
            <div className="flex gap-4">
              {selectedProject.links?.github && (
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-colors duration-1000 text-black dark:text-white"
                >
                  <FiGithub className="w-5 h-5" />
                  Code
                </a>
              )}
              {selectedProject.links?.live?.show && (
                <a
                  href={selectedProject.links.live.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 rounded-2xl transition-colors duration-1000 text-white"
                >
                  <FiExternalLink className="w-5 h-5" />
                  See online
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}