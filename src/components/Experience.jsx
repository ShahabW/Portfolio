import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Web Dev Intern',
    company: 'GN Technologies (E-11, Islamabad)',
    period: '2025',
    description:
      'Contributed to web development projects during my internship at GN Technologies. Gained hands-on experience in website prototyping and content creation for the company.',
    highlights: [
      'Made a prototype of their old website',
      'Wrote several articles for their blogs',
      'Collaborated with the development team',
    ],
  },
  {
    title: 'Content Writer',
    company: 'Freelance / Remote',
    period: '2022 - Present',
    description:
      'Creating engaging technical content, documentation, and articles on web development, AI, and technology topics. Developed strong written communication skills while explaining complex concepts.',
    highlights: [
      'Technical writing and documentation',
      'Blog posts on web development',
      'Educational content creation',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Personal & University Projects',
    period: '2021 - Present',
    description:
      'Developing full-stack web applications using modern technologies. Built responsive websites, dynamic web apps, and RESTful APIs for various personal and academic projects.',
    highlights: [
      'Full-stack development with React and PHP',
      'Database design and management',
      'Frontend UI/UX implementation',
    ],
  },
  {
    title: 'AI/ML Enthusiast',
    company: 'Research & Personal Projects',
    period: '2023 - Present',
    description:
      'Exploring machine learning and deep learning through hands-on projects. Training models for classification, prediction, and natural language processing tasks.',
    highlights: [
      'Model training and evaluation',
      'Data preprocessing pipelines',
      'Experimentation with neural networks',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My journey through various roles and projects in the tech industry
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 transform md:-translate-x-1/2" />

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-950 transform -translate-x-1.5 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="card p-6 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center shrink-0">
                        <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
