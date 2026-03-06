import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiExternalLink } from 'react-icons/fi';

const publications = [
  {
    title: 'Deep Learning for Rhetorical Move Detection',
    publisher: 'Sociedade Brasileira de Computação',
    date: 'Sep 2025',
    description:
      'Fine-tuned the BERTimbau language model on the CorpusDT dataset to identify rhetorical moves in Portuguese scientific abstracts, achieving an F1-score of 0.94 in sentence classification. Highlights the potential of NLP for enhancing the quality of academic writing in Portuguese.',
    url: 'https://sol.sbc.org.br/index.php/stil/article/view/37824',
    doi: 'https://doi.org/10.5753/stil.2025.37824',
  },
  {
    title: 'Graphical Interface for Exascale Systems Simulation',
    publisher: 'ERADSP 2023',
    date: '2023',
    description:
      'Contributed to the GUI of iSPD (Iconic Simulator of Parallel and Distributed Systems), a tool for performance analysis of large-scale distributed systems. Led the redesign and reimplementation of the interface in C++ using Qt, focusing on responsive design, event handling and efficient visualization of massive performance metrics.',
    url: 'https://www.researchgate.net/publication/373225279_Interface_Grafica_Para_Simulacao_De_Sistemas_Exascale',
    doi: 'https://doi.org/10.5753/eradsp.2023.231910',
  },
];

export default function Publications() {
  const [open, setOpen] = useState(true);

  return (
    <section className={`${open ? 'py-20' : 'py-6'} transition-all duration-300`} id="publications">
      <div className="max-w-5xl mx-auto px-4">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-3 mb-12 w-full text-left"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-black dark:text-white transition-colors duration-1000"
          >
            Publications
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
              <div className="grid gap-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-white/10 rounded-xl p-6 hover:border-purple-500/40 transition-colors duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-black dark:text-white">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mt-0.5">
                          {pub.publisher} · {pub.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm px-4 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors duration-300"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        View paper
                      </a>
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm px-4 py-1.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-black dark:text-white rounded-full transition-colors duration-300"
                      >
                        DOI
                      </a>
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
