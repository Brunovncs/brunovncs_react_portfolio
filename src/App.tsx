import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-1000">
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          <Hero />
          <Experience />
          <Education />
          <Publications />
          <Skills />
          <Projects />
        </div>
      </main>
    </div>
  );
}
