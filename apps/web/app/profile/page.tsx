'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface UserProfile {
  email: string
  name?: string
  role?: 'mentor' | 'mentee'
  createdAt?: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'settings'>('overview')

  useEffect(() => {
    const token = localStorage.getItem('dz_token')
    if (!token) {
      router.push('/auth')
      return
    }

    // For now, decode basic info from token or use stored profile
    // In production, this would fetch from /auth/me endpoint
    const storedProfile = localStorage.getItem('dz_profile')
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile))
    } else {
      // Default profile for demo
      setProfile({
        email: 'user@example.com',
        name: 'User',
        role: 'mentee',
      })
    }
    setLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('dz_token')
    localStorage.removeItem('dz_profile')
    router.push('/auth')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!profile) {
    return null
  }

  const isMentor = profile.role === 'mentor'

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl font-bold">
                {profile.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{profile.name || 'User'}</h1>
                <p className="text-gray-400">{profile.email}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                  isMentor
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {isMentor ? 'Mentor' : 'Mentee'}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            {['overview', 'bookings', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as typeof activeTab)}
                className={`py-4 border-b-2 transition-colors capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Quick Stats */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">0</div>
                  <div className="text-sm text-gray-400">
                    {isMentor ? 'Sessions Completed' : 'Sessions Booked'}
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-sm text-gray-400">
                    {isMentor ? 'Total Earnings' : 'Mentors Saved'}
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">0</div>
                  <div className="text-sm text-gray-400">Upcoming Sessions</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">0</div>
                  <div className="text-sm text-gray-400">
                    {isMentor ? 'Reviews' : 'Reviews Given'}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {isMentor ? (
                  <>
                    <Link
                      href="/dashboard/mentor"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span>Mentor Dashboard</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/dashboard/mentor#availability"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span>Manage Availability</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/dashboard/mentor#earnings"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span>View Earnings</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/mentors"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span>Find Mentors</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/bookings"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span>My Bookings</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link
                      href="/categories"
                      className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <span>Browse Categories</span>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Become a Mentor CTA (for mentees) */}
            {!isMentor && (
              <div className="md:col-span-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Want to become a mentor?</h3>
                    <p className="text-gray-400 text-sm">Share your expertise and earn money helping others grow.</p>
                  </div>
                  <Link
                    href="/onboarding"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
            <p className="text-gray-400 mb-6">
              {isMentor
                ? "You don't have any sessions booked yet. Make sure your availability is set up."
                : "You haven't booked any sessions yet. Find a mentor to get started!"}
            </p>
            <Link
              href={isMentor ? "/dashboard/mentor" : "/mentors"}
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              {isMentor ? "Set Up Availability" : "Find Mentors"}
            </Link>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Display Name</label>
                  <input
                    type="text"
                    defaultValue={profile.name || ''}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                Save Changes
              </button>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-4 text-red-400">Danger Zone</h2>
              <p className="text-gray-400 text-sm mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="px-6 py-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
