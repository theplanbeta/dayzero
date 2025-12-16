'use client'

import Link from 'next/link'
import { useCategories } from '@/lib/hooks/useMentors'

const categoryMeta: Record<string, { gradient: string; border: string; description: string }> = {
  engineering: {
    gradient: 'from-blue-900/30 to-cyan-900/30',
    border: 'border-blue-500/30 hover:border-blue-400/50',
    description: 'Software, hardware, data science and more',
  },
  medicine: {
    gradient: 'from-purple-900/30 to-pink-900/30',
    border: 'border-purple-500/30 hover:border-purple-400/50',
    description: 'Doctors, specialists, medical licensing',
  },
  nursing: {
    gradient: 'from-green-900/30 to-emerald-900/30',
    border: 'border-green-500/30 hover:border-green-400/50',
    description: 'Healthcare professionals and nursing recognition',
  },
  'life in germany': {
    gradient: 'from-orange-900/30 to-red-900/30',
    border: 'border-orange-500/30 hover:border-orange-400/50',
    description: 'Visa, immigration, settling in Germany',
  },
  premium: {
    gradient: 'from-yellow-900/30 to-amber-900/30',
    border: 'border-yellow-500/30 hover:border-yellow-400/50',
    description: 'C-level executives and industry leaders',
  },
  career: {
    gradient: 'from-indigo-900/30 to-violet-900/30',
    border: 'border-indigo-500/30 hover:border-indigo-400/50',
    description: 'Resume, interviews, career development',
  },
}

const defaultMeta = {
  gradient: 'from-gray-800/50 to-gray-900/50',
  border: 'border-gray-700/50 hover:border-gray-600/50',
  description: 'Expert mentors ready to help you succeed',
}

function getCategoryMeta(name: string) {
  const key = name.toLowerCase()
  return categoryMeta[key] || defaultMeta
}

export default function CategoriesPage() {
  const { categories, loading, error } = useCategories()

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Browse Categories
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find mentors specialized in your field of interest. From engineering to medicine, immigration to career development.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-800/50 rounded-2xl p-8 animate-pulse">
                <div className="w-12 h-12 bg-gray-700 rounded-xl mb-4" />
                <div className="h-6 bg-gray-700 rounded w-2/3 mb-2" />
                <div className="h-4 bg-gray-700 rounded w-full mb-4" />
                <div className="h-4 bg-gray-700 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const meta = getCategoryMeta(category.name)

              return (
                <Link
                  key={category.id}
                  href={`/mentors?category=${category.id}`}
                  className={`group relative overflow-hidden bg-gradient-to-br ${meta.gradient} border ${meta.border} rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-[1.02]`}
                >
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-4xl mb-4">{category.icon}</div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 text-sm">{meta.description}</p>

                    {/* Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{category.count} mentors</span>
                      <span className="inline-flex items-center text-sm font-medium text-white group-hover:translate-x-1 transition-transform">
                        Browse
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && categories.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-20 h-20 text-gray-600 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">No categories found</h3>
            <p className="text-gray-400 mb-6">Check back later for available categories</p>
            <Link
              href="/mentors"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Browse All Mentors
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
