import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function SocialLinks() {
  return (
    <div className="flex gap-3 md:gap-4 transition-colors duration-1000">
      <a href="https://github.com" target="_blank" className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-1000">
        <FiGithub className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com" target="_blank" className="text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-1000">
        <FiLinkedin className="w-6 h-6" />
      </a>
    </div>
  )
}