import { Code2, Brain, Gamepad2, Download } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building responsive and modern web applications with React, PHP, and full-stack technologies.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Training models and developing intelligent systems using Python and modern ML frameworks.',
  },
  {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Creating interactive experiences with Unity engine, exploring game mechanics and design.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            A passionate developer exploring the frontiers of technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image/Illustration */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl -rotate-3 opacity-30" />
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-6">
                      <Code2 className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                      &lt;Developer /&gt;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Computer Science Undergraduate with a Passion for Building
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a Computer Science undergraduate driven by curiosity and a passion for technology.
                  My journey in programming started with web development, and has since expanded to include
                  artificial intelligence, machine learning, and game development.
                </p>
                <p>
                  I've worked on various personal and university projects, ranging from full-stack web applications
                  to AI-powered systems. I enjoy tackling complex problems and turning ideas into functional,
                  user-friendly applications.
                </p>
                <p>
                  When I'm not coding, I explore new technologies, contribute to open-source projects,
                  and continuously expand my knowledge in emerging fields like deep learning and game mechanics.
                </p>
              </div>

              {/* Download CV Button */}
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card card-hover p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
