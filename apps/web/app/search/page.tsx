'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useMentors } from '@/lib/hooks/useMentors'
import MentorCard, { MentorCardSkeleton } from '@/components/mentors/MentorCard'

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || ''

  const [query, setQuery] = useState(initialQuery)
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery)

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
      if (query) {
        router.replace(`/search?q=${encodeURIComponent(query)}`, { scroll: false })
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [query, router])

  const { mentors, loading, error, total } = useMentors({
    search: debouncedQuery || undefined,
    limit: 12,
  })

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Search Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-800/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Search Mentors
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Find the perfect mentor by name, expertise, or specialty
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name, expertise, category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full pl-14 pr-12 py-5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-gray-400 text-sm">Popular:</span>
            {['Software Engineering', 'Visa Help', 'Medical License', 'Data Science'].map(
              (term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-300"
                >
                  {term}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Results count */}
        {debouncedQuery && (
          <div className="mb-6 text-gray-400">
            {loading ? (
              'Searching...'
            ) : (
              <>
                Found <span className="text-white font-semibold">{total}</span> mentors
                {debouncedQuery && (
                  <>
                    {' '}
                    for "<span className="text-blue-400">{debouncedQuery}</span>"
                  </>
                )}
              </>
            )}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <MentorCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 rounded-2xl p-6 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Results Grid */}
        {!loading && !error && mentors.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && mentors.length === 0 && debouncedQuery && (
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
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">No mentors found</h3>
            <p className="text-gray-400 mb-6">
              Try different keywords or browse by category
            </p>
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Browse Categories
            </Link>
          </div>
        )}

        {/* Initial state */}
        {!loading && !error && !debouncedQuery && (
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-white mb-2">Start searching</h3>
            <p className="text-gray-400 mb-6">
              Enter keywords above to find mentors
            </p>
            <Link
              href="/mentors"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg font-medium transition-all duration-300"
            >
              Browse All Mentors
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  )
}
