'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Inline navigation to avoid module resolution issues
export default function NavigationWrapper() {
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const token = localStorage.getItem('dz_token') || localStorage.getItem('gb_token')
    setIsAuthenticated(!!token)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '/', label: 'Home', gradient: 'from-blue-500 to-cyan-500' },
    { href: '/mentors', label: 'Mentors', gradient: 'from-purple-500 to-pink-500' },
    { href: '/categories', label: 'Categories', gradient: 'from-teal-500 to-cyan-500' },
    { href: '/bookings', label: 'Bookings', gradient: 'from-green-500 to-emerald-500' },
  ]

  if (!mounted) {
    return (
      <nav className="backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50 sticky top-0 z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">DZ</span>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">DZ</span>
            </div>
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DayZero
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 rounded-xl transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl opacity-20`} />
                  )}
                  <span className="relative z-10 font-medium text-sm">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Auth Button */}
          <div className="flex items-center space-x-3">
            {isAuthenticated === null ? (
              // Loading state - show nothing during hydration
              <div className="w-20 h-8" />
            ) : isAuthenticated ? (
              <Link
                href="/profile"
                className="flex items-center space-x-2 px-3 py-2 rounded-xl text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium hidden sm:block">Profile</span>
              </Link>
            ) : (
              <Link
                href="/auth"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-colors"
              >
                <span className="text-sm font-medium text-blue-400">Sign In</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-xl pt-20 px-6">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-4 rounded-xl transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${item.gradient} text-white`
                      : 'text-gray-300 hover:bg-gray-800/50'
                  }`}
                >
                  <span className="text-lg font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </nav>
  )
}
