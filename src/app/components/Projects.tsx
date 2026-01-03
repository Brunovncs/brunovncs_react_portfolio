'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo, FiX } from 'react-icons/fi';
import { Project } from '../types';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';

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
      description: 'The primary goal of AnotaAI is to create an application where users can add, review, edit, and delete flashcards in different collections.',
      images: [ // Agora é um array de imagens
        '/pngs/anotaAI/loginScreen.png',
        '/pngs/anotaAI/cardsScreen.png',
        '/pngs/anotaAI/cardScreen.png'
      ],
    },
  },
  {
    id: 2,
    title: 'Operational System simulator',
    description: 'Here I develop an interactive interface using ncurses and low-level technologies to manipulate tasks.',
    tech: ['C', 'ncurses', 'threads', 'semaphors'],
    show: true,
    links: {
      github: 'https://github.com/Brunovncs/opsysSim',
      live: {
        url: 'https://exemplo.com',
        show: false, // Define se o botão "See online" deve aparecer
      },
    },
    details: {
      show: true, // Exibe ou não o botão "See details"
      // Outras propriedades para a modal:
      description: 'Operational System simulator. Here I develop an interactive interface using ncurses, where you can manipulate infos about processes and simulate how an operational system uses complex concepts of threads and semaphors to read and write tasks. I even demonstrate the possibility of deadlocks happening in the system.',
      images: [ // Agora é um array de imagens
        '/pngs/opsSysSim/main_interface.png',
        '/pngs/opsSysSim/process_running.png',
        '/pngs/opsSysSim/semaphor.png',
        '/pngs/opsSysSim/finished.png'
      ],
    },
  },
  {
    id: 3,
    title: 'Speech to text AI software (Speech2Text)',
    description: 'A little project using threads and Whisper (an OpenAI model) to convert speech to text.',
    tech: ['Python', 'Qt', 'Threads', 'Signals'],
    show: true,
    links: {
      github: 'https://github.com/Brunovncs/speechtotext',
      live: {
        url: 'https://exemplo.com',
        show: false, // Define se o botão "See online" deve aparecer
      },
    },
    details: {
      show: true, // Exibe ou não o botão "See details"
      description: 'This project is a desktop application for high-accuracy audio transcription, built with Python and PySide6. Its core feature is a dynamic model-switching system that allows the user to choose the best balance between speed and accuracy by selecting different OpenAI Whisper models on the fly. To ensure a smooth, non-blocking user experience, all intensive operations—such as loading multi-gigabyte AI models and running the transcription—are offloaded to separate background threads using Qts QThread. This architecture guarantees the UI remains fully responsive at all times, demonstrating a practical application of multithreading in a desktop GUI environment.',
      images: [
        '/pngs/speech2text/interface.png',
        '/pngs/speech2text/interface_transcript.png'
      ],
    },
  },
  {
    id: 4,
    title: 'Swales - Scientific Writing',
    description: 'Web application with an BERT AI model ported in ONNX and trained with pytorch to help students and researchers write scientific articles. The application provides real-time feedback on the structure and coherence of the text.',
    tech: ['React', 'TypeScript', 'BERT'],
    show: true,
    links: {
      github: 'https://github.com/Brunovncs/SwalesScientificWriting',
      live: {
        url: 'https://swales.com.br',
        show: true,
      },
    },
    details: {
      show: false,
      description: 'Web application with an BERT AI model ported in ONNX and trained with pytorch to help students and researchers write scientific articles. The application provides real-time feedback on the structure and coherence of the text.',
      image: '/path/to/image.png',
    },
  },
  {
    id: 5,
    title: 'Loveflow - Manage your contatinhos',
    description: 'Aplicação web de um CRM focado em relacionamentos amorosos, ajudando usuários a organizar e acompanhar suas interações com potenciais parceiros. Esse projeto é apenas uma brincadeira entre amigos e não deve ser levado a sério.',
    tech: ['React', 'TypeScript'],
    show: true,
    links: {
      github: 'https://github.com/Brunovncs/loveflow',
      live: {
        url: 'https://loveflow.vercel.app/',
        show: true,
      },
    },
    details: {
      show: false,
      description: 'Web application with an BERT AI model ported in ONNX and trained with pytorch to help students and researchers write scientific articles. The application provides real-time feedback on the structure and coherence of the text.',
      image: '/path/to/image.png',
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    const images = selectedProject?.details?.images;
    if (!images || images.length === 0) return;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevImage = () => {
    const images = selectedProject?.details?.images;
    if (!images || images.length === 0) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


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
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50"
          onClick={closeModal}>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl relative max-w-3xl w-full border-[1px] border-purple-500 mx-4 max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white text-center">
              {selectedProject.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">  {/* Divisão do conteúdo entre descrição e imagens em 2 colunas */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedProject.details.description}
              </p>
              {selectedProject.details.images && selectedProject.details.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {selectedProject.details.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-48 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden cursor-pointer group"
                      onClick={() => setFullscreenImage(image)}
                    >
                      {/* Imagem */}
                      <Image
                        src={image}
                        alt={`${selectedProject.title} - Imagem ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Overlay escuro */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Ícone de lupa */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FiZoomIn className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      {/* Modal de imagem em tela cheia */}
      {fullscreenImage && selectedProject?.details.images && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <Image
              src={selectedProject.details.images[currentImageIndex]}
              alt="Imagem em tela cheia"
              width={1200}
              height={800}
              className="object-contain"
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
              }}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-white"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-white"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full text-white"
            >
              <FiX className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/50 px-3 py-1 rounded-full text-white text-sm">
              {currentImageIndex + 1} / {selectedProject.details.images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}