import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Germany Relocation Guides 2025 | Visa, Jobs, Living | DayZero',
  description: 'Comprehensive guides for moving to Germany in 2025. Blue Card, Opportunity Card, job search, German language, and settling in. Free resources from people who did it.',
  keywords: 'germany visa guide, blue card germany, move to germany, work in germany, germany immigration 2025',
}

const guides = [
  {
    slug: 'blue-card',
    title: 'EU Blue Card Germany 2025: Complete Guide',
    description: 'Everything you need to know about the EU Blue Card - requirements, salary thresholds, application process, and fast-track to permanent residence.',
    category: 'Visa',
    readTime: '12 min',
    featured: true,
    updated: 'December 2024',
  },
  {
    slug: 'opportunity-card',
    title: 'Opportunity Card (Chancenkarte) 2025: The New Job Seeker Visa',
    description: 'Germany\'s new points-based job seeker visa launched in June 2024. Learn how to qualify, calculate your points, and use it to find work in Germany.',
    category: 'Visa',
    readTime: '10 min',
    featured: true,
    updated: 'December 2024',
  },
  {
    slug: 'india-to-germany',
    title: 'Move to Germany from India: Complete 2025 Guide',
    description: 'Step-by-step guide for Indian professionals relocating to Germany. Visa options, job search, salary expectations, and tips from Indians in Germany.',
    category: 'Country Guide',
    readTime: '15 min',
    featured: true,
    updated: 'December 2024',
  },
  {
    slug: 'skilled-worker-visa',
    title: 'Skilled Worker Visa Germany (§18a/18b)',
    description: 'For vocational training graduates and specialists. Learn about qualification recognition, requirements, and the application process.',
    category: 'Visa',
    readTime: '8 min',
    featured: false,
    updated: 'November 2024',
  },
  {
    slug: 'it-specialist-germany',
    title: 'IT Jobs in Germany Without a Degree',
    description: 'Since 2024, IT specialists with 3+ years experience can get a Blue Card without a university degree. Here\'s how.',
    category: 'Career',
    readTime: '7 min',
    featured: false,
    updated: 'November 2024',
  },
  {
    slug: 'german-language-requirements',
    title: 'German Language Requirements by Profession',
    description: 'Do you need German to work in Germany? Depends on your field. Detailed breakdown for IT, healthcare, engineering, and more.',
    category: 'Language',
    readTime: '6 min',
    featured: false,
    updated: 'October 2024',
  },
  {
    slug: 'first-month-germany',
    title: 'Your First Month in Germany: Checklist',
    description: 'Anmeldung, bank account, health insurance, residence permit - everything you need to do in your first weeks after arriving.',
    category: 'Settling In',
    readTime: '9 min',
    featured: false,
    updated: 'October 2024',
  },
  {
    slug: 'salary-germany',
    title: 'Salaries in Germany 2025: What to Expect',
    description: 'Realistic salary expectations by profession, city, and experience level. Plus how to negotiate and understand German pay slips.',
    category: 'Career',
    readTime: '8 min',
    featured: false,
    updated: 'December 2024',
  },
]

export default function GuidesPage() {
  const featuredGuides = guides.filter(g => g.featured)
  const otherGuides = guides.filter(g => !g.featured)

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
              <span className="text-xl">📚</span>
              <span className="text-sm text-yellow-300 font-medium">Free Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
              Germany Relocation Guides
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              In-depth guides written by people who've actually moved to Germany.
              Updated for 2025 immigration laws.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Visa', 'Career', 'Language', 'Settling In'].map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Guides</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/germany/guides/${guide.slug}`}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-yellow-500/30 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Category Banner */}
                <div className="h-2 bg-gradient-to-r from-yellow-500 to-orange-500" />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full font-medium">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-500">{guide.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Updated {guide.updated}</span>
                    <span className="text-yellow-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read guide →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8">All Guides</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {otherGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/germany/guides/${guide.slug}`}
                className="group flex gap-4 p-5 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 rounded-xl transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-500">{guide.readTime}</span>
                  </div>

                  <h3 className="font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {guide.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2">
                    {guide.description}
                  </p>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-gray-400 mb-8">
            Talk to someone who's been through the process. Our mentors have relocated from your country to Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/germany"
              className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold rounded-xl transition-colors"
            >
              Check Your Eligibility
            </Link>
            <Link
              href="/mentors?category=life-in-germany"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold rounded-xl transition-colors"
            >
              Find a Mentor
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
