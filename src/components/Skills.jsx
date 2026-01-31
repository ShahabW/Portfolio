const skillCategories = [
  {
    title: 'Programming & Web',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 75 },
      { name: 'PHP', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'C++ (OOP)', level: 70 },
    ],
  },
  {
    title: 'AI / Machine Learning',
    color: 'from-purple-500 to-pink-400',
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Deep Learning', level: 65 },
      { name: 'Model Training', level: 70 },
      { name: 'Data Preprocessing', level: 75 },
      { name: 'TensorFlow/Keras', level: 60 },
    ],
  },
  {
    title: 'Game Development',
    color: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'Unity Engine', level: 55 },
      { name: 'C# Scripting', level: 50 },
      { name: 'Game Design', level: 45 },
    ],
  },
  {
    title: 'Other Skills',
    color: 'from-orange-500 to-yellow-400',
    skills: [
      { name: 'Content Writing', level: 85 },
      { name: 'Problem Solving', level: 80 },
      { name: 'System Design', level: 65 },
      { name: 'Git/GitHub', level: 75 },
      { name: 'REST APIs', level: 70 },
    ],
  },
]

function SkillBar({ name, level, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
