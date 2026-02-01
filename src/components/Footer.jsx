import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ],
  more: [
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/ShahabW', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shahab-wasim-5b642b282/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mshahabw61@gmail.com', label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4"
            >
              <Code2 className="w-8 h-8 text-primary-600" />
              <span>Portfolio</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              A Computer Science graduate passionate about building modern
              web applications and exploring AI technologies.
            </p>
            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              More
            </h4>
            <ul className="space-y-2">
              {footerLinks.more.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:mshahabw61@gmail.com"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  mshahabw61@gmail.com
                </a>
              </li>
              <li>Rawalpindi, Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
              Built with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
