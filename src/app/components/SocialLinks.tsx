import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com" target="_blank">
        <FiGithub className="w-6 h-6 hover:text-blue-400 transition" />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <FiLinkedin className="w-6 h-6 hover:text-blue-400 transition" />
      </a>
    </div>
  )
}