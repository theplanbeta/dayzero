'use client'

import Link from 'next/link'
import { useState } from 'react'
import EligibilityQuiz from '@/components/germany/EligibilityQuiz'

export default function GermanyRelocationPage() {
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <main className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* German Flag Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-red-600 to-yellow-500" />

        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-yellow-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
                <span className="text-2xl">🇩🇪</span>
                <span className="text-sm text-yellow-300 font-medium">Your Germany Journey Starts Here</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
                  Move to Germany
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl text-gray-300">
                  Successfully in 2025
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get your personalized relocation roadmap. We help skilled professionals navigate
                <span className="text-yellow-400 font-semibold"> visas</span>,
                <span className="text-yellow-400 font-semibold"> German language</span>, and
                <span className="text-yellow-400 font-semibold"> job search</span> — guided by people who've done it.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400">200K+</div>
                  <div className="text-xs text-gray-400">Work visas issued in 2024</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="text-2xl md:text-3xl font-bold text-green-400">1.3M</div>
                  <div className="text-xs text-gray-400">Unfilled jobs</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">€44K+</div>
                  <div className="text-xs text-gray-400">Blue Card threshold</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowQuiz(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-xl font-bold text-lg text-gray-900 shadow-2xl shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Check Your Eligibility
                  <span className="ml-2">→</span>
                </button>
                <Link
                  href="/mentors?category=life-in-germany"
                  className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 rounded-xl font-bold text-lg text-white transition-all duration-300 text-center"
                >
                  Talk to a Mentor
                </Link>
              </div>

              {/* Trust Signal */}
              <p className="mt-6 text-sm text-gray-500 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free eligibility check • No login required • Takes 2 minutes
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                {/* Journey Preview Card */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">Your Relocation Journey</h3>

                  {[
                    { step: '1', title: 'Eligibility Check', desc: 'See which visa fits you', icon: '✓', color: 'green' },
                    { step: '2', title: 'Learn German', desc: 'A1→B1 in 90 days', icon: '📚', color: 'blue' },
                    { step: '3', title: 'Find a Job', desc: 'Companies that sponsor', icon: '💼', color: 'purple' },
                    { step: '4', title: 'Get Your Visa', desc: 'Document checklist', icon: '📋', color: 'yellow' },
                    { step: '5', title: 'Land & Thrive', desc: 'Arrival support', icon: '🏠', color: 'green' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 border border-${item.color}-500/30 flex items-center justify-center text-xl`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Quiz Modal */}
      {showQuiz && (
        <EligibilityQuiz onClose={() => setShowQuiz(false)} />
      )}

      {/* Why Germany Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Germany in 2025?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Germany has never been more open to skilled immigrants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-bold text-white mb-3">New Immigration Law</h3>
              <p className="text-gray-400 leading-relaxed">
                The 2024 Skilled Immigration Act makes it easier than ever. Lower salary thresholds,
                Opportunity Card for job seekers, and IT specialists no longer need degrees.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-white mb-3">7 Million Jobs by 2035</h3>
              <p className="text-gray-400 leading-relaxed">
                Germany faces a massive labor shortage. Tech, healthcare, engineering —
                companies are actively recruiting internationally and willing to sponsor visas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Quality of Life</h3>
              <p className="text-gray-400 leading-relaxed">
                Free healthcare, strong worker protections, 30 days vacation, excellent public transport,
                and gateway to all of Europe. Build a life, not just a career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Pathways Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Visa Options
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Multiple pathways to work legally in Germany
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* EU Blue Card */}
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-lg font-bold text-white mb-2">EU Blue Card</h3>
              <p className="text-sm text-gray-400 mb-4">For university graduates with job offer €44K+ salary</p>
              <div className="text-xs text-blue-400 font-medium">Most Popular</div>
            </div>

            {/* Skilled Worker */}
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-lg font-bold text-white mb-2">Skilled Worker Visa</h3>
              <p className="text-sm text-gray-400 mb-4">For vocational training graduates with recognized qualifications</p>
              <div className="text-xs text-purple-400 font-medium">§18a/18b AufenthG</div>
            </div>

            {/* Opportunity Card */}
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Opportunity Card</h3>
              <p className="text-sm text-gray-400 mb-4">Job seeker visa — come to Germany and find work within 1 year</p>
              <div className="text-xs text-green-400 font-medium">New in 2024!</div>
            </div>

            {/* IT Specialist */}
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-lg font-bold text-white mb-2">IT Specialist</h3>
              <p className="text-sm text-gray-400 mb-4">No degree needed — 3 years experience qualifies you</p>
              <div className="text-xs text-orange-400 font-medium">Tech Workers</div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setShowQuiz(true)}
              className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-all duration-300"
            >
              Find which visa fits you
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Complete Relocation Support
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need, from decision to integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* German Learning */}
            <Link href="/vocabulary-review" className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-blue-500/50 rounded-2xl p-8 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🇩🇪</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Learn German</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our app helps you reach A2/B1 with spaced repetition, pronunciation practice, and real-world vocabulary.
              </p>
              <span className="text-blue-400 text-sm font-medium group-hover:underline">Start learning →</span>
            </Link>

            {/* Mentor Connection */}
            <Link href="/mentors?category=life-in-germany" className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Talk to Someone Who Did It</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Connect with mentors who moved from your country to Germany. Get real advice, not generic info.
              </p>
              <span className="text-purple-400 text-sm font-medium group-hover:underline">Find a mentor →</span>
            </Link>

            {/* Guides */}
            <Link href="/germany/guides" className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-green-500/50 rounded-2xl p-8 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">In-Depth Guides</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Step-by-step guides on Blue Card, visa applications, finding apartments, and settling in.
              </p>
              <span className="text-green-400 text-sm font-medium group-hover:underline">Read guides →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              They Made It to Germany
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from people who successfully relocated
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🇮🇳</span>
                <span className="text-sm text-gray-400">India → Berlin</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "From application to landing in Berlin took 4 months. The eligibility check helped me understand
                I qualified for Blue Card. My mentor guided me through every step."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  PK
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Priya K.</div>
                  <div className="text-xs text-gray-400">Software Engineer at Delivery Hero</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🇧🇷</span>
                <span className="text-sm text-gray-400">Brazil → Munich</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "I was scared of the German language but the app made it manageable. Reached A2 in 3 months
                while working. Now I'm doing B1 evening classes here."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  RM
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Rafael M.</div>
                  <div className="text-xs text-gray-400">Data Scientist at BMW</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🇵🇭</span>
                <span className="text-sm text-gray-400">Philippines → Frankfurt</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "As a nurse, the recognition process seemed impossible. My mentor walked me through Anabin,
                defizitbescheid, and adaptation courses. Now fully recognized!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MA
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Maria A.</div>
                  <div className="text-xs text-gray-400">Registered Nurse at Uniklinik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to speak German to work in Germany?",
                a: "For tech jobs, often no — many companies work in English. But for healthcare, nursing, and customer-facing roles, B1/B2 German is usually required. Learning German also helps you integrate and stay long-term."
              },
              {
                q: "How long does the visa process take?",
                a: "EU Blue Card typically takes 2-4 months from job offer to visa approval. The new Opportunity Card can be processed in 4-8 weeks. Embassy appointment availability varies by country."
              },
              {
                q: "What salary do I need for the Blue Card?",
                a: "As of 2025, the threshold is €43,759 for shortage occupations (IT, engineering, healthcare) and €48,300 for other fields. IT specialists with 3+ years experience don't need a degree."
              },
              {
                q: "Can I bring my family?",
                a: "Yes! Blue Card and Skilled Worker visa holders can bring spouse and children. Your spouse gets work permit without restrictions. Children can attend free German schools."
              },
              {
                q: "How is the job market for foreigners?",
                a: "Very strong in 2025. Germany needs 7 million skilled workers by 2035. Tech, healthcare, engineering are especially in demand. Many companies actively recruit internationally."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gray-800/30 border border-gray-700/50 rounded-xl">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">🇩🇪</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            Your Germany Journey Starts Today
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Take the free eligibility check and get your personalized roadmap.
            No signup required.
          </p>
          <button
            onClick={() => setShowQuiz(true)}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-2xl font-bold text-xl text-gray-900 shadow-2xl shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Check Your Eligibility — Free
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">DZ</span>
                </div>
                <span className="text-xl font-bold text-white">DayZero Germany</span>
              </div>
              <p className="text-gray-400 text-sm">
                Helping skilled professionals relocate to Germany successfully.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Visa Guides</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/germany/guides/blue-card" className="text-gray-400 hover:text-white transition-colors">EU Blue Card</Link></li>
                <li><Link href="/germany/guides/opportunity-card" className="text-gray-400 hover:text-white transition-colors">Opportunity Card</Link></li>
                <li><Link href="/germany/guides/skilled-worker" className="text-gray-400 hover:text-white transition-colors">Skilled Worker Visa</Link></li>
                <li><Link href="/germany/guides/it-specialist" className="text-gray-400 hover:text-white transition-colors">IT Specialist Route</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/vocabulary-review" className="text-gray-400 hover:text-white transition-colors">Learn German</Link></li>
                <li><Link href="/mentors?category=life-in-germany" className="text-gray-400 hover:text-white transition-colors">Find a Mentor</Link></li>
                <li><Link href="/germany/guides" className="text-gray-400 hover:text-white transition-colors">All Guides</Link></li>
                <li><Link href="/germany/checklist" className="text-gray-400 hover:text-white transition-colors">Document Checklist</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 DayZero. All rights reserved. Not affiliated with the German government.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
