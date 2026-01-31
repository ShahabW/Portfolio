import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/20 dark:bg-primary-700/10 rounded-full blur-3xl animate-float animation-delay-200" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 animate-slide-up">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up animation-delay-200">
            A <span className="gradient-text">Web Developer</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up animation-delay-400">
            Computer Science Undergraduate
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about building intelligent systems and modern web applications.
            I explore the intersection of <span className="text-primary-600 dark:text-primary-400 font-medium">Artificial Intelligence</span>,{' '}
            <span className="text-primary-600 dark:text-primary-400 font-medium">Web Development</span>, and{' '}
            <span className="text-primary-600 dark:text-primary-400 font-medium">Game Development</span>{' '}
            to create impactful real-world solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#projects" className="btn-primary gap-2 w-full sm:w-auto">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary gap-2 w-full sm:w-auto">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahab-wasim-5b642b282/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mshahabw61@gmail.com"
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-gray-400 dark:text-gray-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
