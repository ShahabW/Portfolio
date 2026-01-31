import { useState, useEffect } from 'react'
import { ExternalLink, Github, Star, GitFork, Calendar, AlertCircle, RefreshCw } from 'lucide-react'

// GitHub username - Change this to your GitHub username
const GITHUB_USERNAME = 'ShahabW'

// Skeleton loading component
function ProjectSkeleton() {
  return (
    <div className="card p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="skeleton h-6 w-3/4 rounded" />
        <div className="skeleton h-6 w-6 rounded" />
      </div>
      <div className="space-y-2 mb-4">
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-2/3 rounded" />
      </div>
      <div className="flex gap-2 mb-4">
        <div className="skeleton h-6 w-16 rounded-full" />
        <div className="skeleton h-6 w-20 rounded-full" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="skeleton h-4 w-12 rounded" />
          <div className="skeleton h-4 w-12 rounded" />
        </div>
        <div className="skeleton h-4 w-24 rounded" />
      </div>
    </div>
  )
}

// Language color mapping
const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  PHP: '#4F5D95',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'C++': '#f34b7d',
  'C#': '#178600',
  Java: '#b07219',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Shell: '#89e051',
  Vue: '#41b883',
  default: '#6b7280',
}

function ProjectCard({ repo }) {
  const formattedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  const languageColor = languageColors[repo.language] || languageColors.default

  return (
    <article className="card card-hover p-6 flex flex-col h-full group">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
          {repo.name}
        </h3>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shrink-0"
          aria-label={`View ${repo.name} on GitHub`}
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
        {repo.description || 'No description available for this project.'}
      </p>

      {/* Topics/Tags */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-4">
          {/* Language */}
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: languageColor }}
              />
              <span>{repo.language}</span>
            </div>
          )}

          {/* Stars */}
          {repo.stargazers_count > 0 && (
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>{repo.stargazers_count}</span>
            </div>
          )}

          {/* Forks */}
          {repo.forks_count > 0 && (
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{repo.forks_count}</span>
            </div>
          )}
        </div>

        {/* Updated date */}
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [visibleCount, setVisibleCount] = useState(6)

  const fetchRepos = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`
      )

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? 'GitHub user not found'
            : 'Failed to fetch repositories'
        )
      }

      const data = await response.json()
      
      // Filter out forks and sort by most recent update
      const filteredRepos = data
        .filter((repo) => !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))

      setRepos(filteredRepos)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, repos.length))
  }

  return (
    <section id="projects" className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore my GitHub repositories - from web applications to AI experiments
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <div className="flex-grow">
                <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
              </div>
              <button
                onClick={fetchRepos}
                className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                aria-label="Retry"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? // Skeleton loaders
                Array.from({ length: 6 }).map((_, index) => (
                  <ProjectSkeleton key={index} />
                ))
              : // Actual projects
                repos.slice(0, visibleCount).map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))}
          </div>

          {/* Show More Button */}
          {!loading && !error && visibleCount < repos.length && (
            <div className="text-center mt-12">
              <button onClick={showMore} className="btn-secondary gap-2">
                Show More Projects
                <span className="text-sm opacity-75">
                  ({repos.length - visibleCount} remaining)
                </span>
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && repos.length === 0 && (
            <div className="text-center py-12">
              <Github className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-700 mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                No public repositories found.
              </p>
            </div>
          )}

          {/* GitHub Profile Link */}
          {!loading && repos.length > 0 && (
            <div className="text-center mt-8">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                View all repositories on GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
