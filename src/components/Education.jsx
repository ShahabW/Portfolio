import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const educationData = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'University',
    period: '2021 - Present',
    location: 'Pakistan',
    description:
      'Currently pursuing a degree in Computer Science with a focus on software development, algorithms, and artificial intelligence. Engaged in various academic projects and coursework covering data structures, machine learning, and web technologies.',
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Artificial Intelligence',
      'Web Development',
      'Software Engineering',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Academic background and continuous learning journey
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="card p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Relevant Courses */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, cIndex) => (
                        <span
                          key={cIndex}
                          className="px-3 py-1.5 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Learning */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Beyond formal education, I continuously expand my skills through:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Online Courses', 'Documentation', 'Open Source', 'Tech Articles', 'YouTube Tutorials'].map(
                (item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
