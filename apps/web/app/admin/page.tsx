'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Mock data for admin dashboard
const MOCK_STATS = {
  totalUsers: 1247,
  totalMentors: 8,
  totalMentees: 1239,
  totalSessions: 3456,
  totalRevenue: 86400,
  pendingPayouts: 12500,
  activeSubscriptions: 234,
  conversionRate: 12.4,
}

const MOCK_TRANSACTIONS = [
  { id: 'txn_001', date: '2025-12-16', user: 'john.doe@email.com', mentor: 'Deepak Bos', amount: 25, status: 'completed', type: 'session' },
  { id: 'txn_002', date: '2025-12-16', user: 'sarah.smith@email.com', mentor: 'Jithin Mathew', amount: 40, status: 'completed', type: 'session' },
  { id: 'txn_003', date: '2025-12-15', user: 'mike.wilson@email.com', mentor: 'Dhanya Krishnan', amount: 25, status: 'pending', type: 'session' },
  { id: 'txn_004', date: '2025-12-15', user: 'lisa.chen@email.com', mentor: 'Rajeevan Rajagopal', amount: 25, status: 'completed', type: 'session' },
  { id: 'txn_005', date: '2025-12-14', user: 'alex.kumar@email.com', mentor: 'Guru Kurakula', amount: 25, status: 'refunded', type: 'session' },
  { id: 'txn_006', date: '2025-12-14', user: 'emma.jones@email.com', mentor: 'Tharun Suresh Kumar', amount: 25, status: 'completed', type: 'session' },
  { id: 'txn_007', date: '2025-12-13', user: 'raj.patel@email.com', mentor: 'Jomon Kulathil Sunny', amount: 25, status: 'completed', type: 'session' },
  { id: 'txn_008', date: '2025-12-13', user: 'nina.williams@email.com', mentor: 'Devdath Kishore', amount: 25, status: 'pending', type: 'session' },
]

const MOCK_APPOINTMENTS = [
  { id: 'apt_001', date: '2025-12-17', time: '10:00 AM', mentee: 'john.doe@email.com', mentor: 'Deepak Bos', status: 'confirmed', duration: 60 },
  { id: 'apt_002', date: '2025-12-17', time: '2:00 PM', mentee: 'sarah.smith@email.com', mentor: 'Jithin Mathew', status: 'confirmed', duration: 45 },
  { id: 'apt_003', date: '2025-12-17', time: '4:00 PM', mentee: 'mike.wilson@email.com', mentor: 'Dhanya Krishnan', status: 'pending', duration: 60 },
  { id: 'apt_004', date: '2025-12-18', time: '9:00 AM', mentee: 'lisa.chen@email.com', mentor: 'Rajeevan Rajagopal', status: 'confirmed', duration: 30 },
  { id: 'apt_005', date: '2025-12-18', time: '11:00 AM', mentee: 'alex.kumar@email.com', mentor: 'Guru Kurakula', status: 'cancelled', duration: 60 },
  { id: 'apt_006', date: '2025-12-18', time: '3:00 PM', mentee: 'emma.jones@email.com', mentor: 'Tharun Suresh Kumar', status: 'confirmed', duration: 45 },
  { id: 'apt_007', date: '2025-12-19', time: '10:00 AM', mentee: 'raj.patel@email.com', mentor: 'Jomon Kulathil Sunny', status: 'pending', duration: 60 },
  { id: 'apt_008', date: '2025-12-19', time: '1:00 PM', mentee: 'nina.williams@email.com', mentor: 'Devdath Kishore', status: 'confirmed', duration: 30 },
]

const MOCK_MENTORS = [
  { id: '1', name: 'Deepak Bos', email: 'deepak@planbeta.in', category: 'Healthcare', sessions: 127, rating: 4.9, earnings: 3175, status: 'active' },
  { id: '2', name: 'Dhanya Krishnan', email: 'dhanya@planbeta.in', category: 'Engineering', sessions: 98, rating: 4.8, earnings: 2450, status: 'active' },
  { id: '3', name: 'Tharun Suresh Kumar', email: 'tharun@planbeta.in', category: 'Engineering', sessions: 76, rating: 4.85, earnings: 1900, status: 'active' },
  { id: '4', name: 'Jithin Mathew', email: 'jithin@planbeta.in', category: 'Healthcare', sessions: 156, rating: 4.95, earnings: 6240, status: 'active' },
  { id: '5', name: 'Jomon Kulathil Sunny', email: 'jomon@planbeta.in', category: 'Healthcare', sessions: 89, rating: 4.7, earnings: 2225, status: 'active' },
  { id: '6', name: 'Guru Kurakula', email: 'guru@planbeta.in', category: 'Healthcare', sessions: 134, rating: 4.8, earnings: 3350, status: 'active' },
  { id: '7', name: 'Rajeevan Rajagopal', email: 'rajeevan@planbeta.in', category: 'Engineering', sessions: 112, rating: 4.85, earnings: 2800, status: 'active' },
  { id: '8', name: 'Devdath Kishore', email: 'devdath@planbeta.in', category: 'Education', sessions: 67, rating: 4.75, earnings: 1675, status: 'active' },
]

type TabType = 'overview' | 'transactions' | 'appointments' | 'mentors'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [showAddMentor, setShowAddMentor] = useState(false)
  const [mentors, setMentors] = useState(MOCK_MENTORS)
  const [newMentor, setNewMentor] = useState({
    name: '',
    email: '',
    headline: '',
    category: 'Healthcare',
    price: 25,
    languages: '',
    expertise: '',
    about: '',
  })

  useEffect(() => {
    // Check if user is admin (for now, just check if logged in)
    const token = localStorage.getItem('dz_token')
    const profile = localStorage.getItem('dz_profile')
    if (token && profile) {
      const user = JSON.parse(profile)
      // For now, allow any logged in user - in production, check admin role
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const handleAddMentor = () => {
    const mentor = {
      id: String(mentors.length + 1),
      name: newMentor.name,
      email: newMentor.email,
      category: newMentor.category,
      sessions: 0,
      rating: 5.0,
      earnings: 0,
      status: 'active' as const,
    }
    setMentors([...mentors, mentor])
    setNewMentor({
      name: '',
      email: '',
      headline: '',
      category: 'Healthcare',
      price: 25,
      languages: '',
      expertise: '',
      about: '',
    })
    setShowAddMentor(false)
  }

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center max-w-md">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
          <p className="text-gray-400 mb-6">You need to be logged in to access the admin panel.</p>
          <Link href="/auth" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'transactions', label: 'Transactions', icon: '💰' },
    { id: 'appointments', label: 'Appointments', icon: '📅' },
    { id: 'mentors', label: 'Mentors', icon: '👥' },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">God Mode</h1>
                <p className="text-xs text-gray-400">DayZero Admin Panel</p>
              </div>
            </div>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Site
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800/30 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{tab.icon}</span>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'overview' && <OverviewTab stats={MOCK_STATS} />}
        {activeTab === 'transactions' && <TransactionsTab transactions={MOCK_TRANSACTIONS} />}
        {activeTab === 'appointments' && <AppointmentsTab appointments={MOCK_APPOINTMENTS} />}
        {activeTab === 'mentors' && (
          <MentorsTab
            mentors={mentors}
            showAddMentor={showAddMentor}
            setShowAddMentor={setShowAddMentor}
            newMentor={newMentor}
            setNewMentor={setNewMentor}
            handleAddMentor={handleAddMentor}
          />
        )}
      </div>
    </div>
  )
}

function OverviewTab({ stats }: { stats: typeof MOCK_STATS }) {
  const statCards = [
    { label: 'Total Users', value: stats.totalUsers.toLocaleString(), icon: '👥', color: 'blue' },
    { label: 'Total Mentors', value: stats.totalMentors, icon: '🎓', color: 'purple' },
    { label: 'Total Mentees', value: stats.totalMentees.toLocaleString(), icon: '📚', color: 'green' },
    { label: 'Total Sessions', value: stats.totalSessions.toLocaleString(), icon: '📅', color: 'yellow' },
    { label: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`, icon: '💰', color: 'emerald' },
    { label: 'Pending Payouts', value: `$${stats.pendingPayouts.toLocaleString()}`, icon: '⏳', color: 'orange' },
    { label: 'Active Subscriptions', value: stats.activeSubscriptions, icon: '🔄', color: 'cyan' },
    { label: 'Conversion Rate', value: `${stats.conversionRate}%`, icon: '📈', color: 'pink' },
  ]

  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    green: 'from-green-500/20 to-green-600/20 border-green-500/30',
    yellow: 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30',
    emerald: 'from-emerald-500/20 to-emerald-600/20 border-emerald-500/30',
    orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
    cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-500/30',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30',
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className={`bg-gradient-to-br ${colorClasses[stat.color]} border rounded-xl p-5`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-left transition-colors">
            <span className="text-xl mb-2 block">📧</span>
            <span className="text-sm text-white font-medium">Send Newsletter</span>
          </button>
          <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-left transition-colors">
            <span className="text-xl mb-2 block">💸</span>
            <span className="text-sm text-white font-medium">Process Payouts</span>
          </button>
          <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-left transition-colors">
            <span className="text-xl mb-2 block">📊</span>
            <span className="text-sm text-white font-medium">Export Reports</span>
          </button>
          <button className="p-4 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-left transition-colors">
            <span className="text-xl mb-2 block">⚙️</span>
            <span className="text-sm text-white font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'New user registered', user: 'john.doe@email.com', time: '2 min ago' },
            { action: 'Session completed', user: 'sarah.smith@email.com', time: '15 min ago' },
            { action: 'Payment received', user: 'mike.wilson@email.com', time: '1 hour ago' },
            { action: 'New mentor application', user: 'dr.jane@email.com', time: '2 hours ago' },
            { action: 'Refund processed', user: 'alex.kumar@email.com', time: '3 hours ago' },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
              <div>
                <p className="text-sm text-white">{activity.action}</p>
                <p className="text-xs text-gray-400">{activity.user}</p>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TransactionsTab({ transactions }: { transactions: typeof MOCK_TRANSACTIONS }) {
  const statusColors: Record<string, string> = {
    completed: 'bg-green-500/20 text-green-400',
    pending: 'bg-yellow-500/20 text-yellow-400',
    refunded: 'bg-red-500/20 text-red-400',
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Transactions</h2>
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors">
          Export CSV
        </button>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">ID</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">User</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Mentor</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                  <td className="px-4 py-3 text-sm text-gray-300 font-mono">{txn.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{txn.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{txn.user}</td>
                  <td className="px-4 py-3 text-sm text-white">{txn.mentor}</td>
                  <td className="px-4 py-3 text-sm text-white font-medium">${txn.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[txn.status]}`}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-400 hover:text-blue-300 text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function AppointmentsTab({ appointments }: { appointments: typeof MOCK_APPOINTMENTS }) {
  const statusColors: Record<string, string> = {
    confirmed: 'bg-green-500/20 text-green-400',
    pending: 'bg-yellow-500/20 text-yellow-400',
    cancelled: 'bg-red-500/20 text-red-400',
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Appointments</h2>
        <div className="flex gap-2">
          <select className="px-3 py-2 bg-gray-700 text-white text-sm rounded-lg border border-gray-600">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors">
            Export
          </button>
        </div>
      </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">ID</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Date & Time</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Mentee</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Mentor</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Duration</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                  <td className="px-4 py-3 text-sm text-gray-300 font-mono">{apt.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    <div>{apt.date}</div>
                    <div className="text-xs text-gray-500">{apt.time}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">{apt.mentee}</td>
                  <td className="px-4 py-3 text-sm text-white">{apt.mentor}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{apt.duration} min</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[apt.status]}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 text-sm">Edit</button>
                      <button className="text-red-400 hover:text-red-300 text-sm">Cancel</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function MentorsTab({
  mentors,
  showAddMentor,
  setShowAddMentor,
  newMentor,
  setNewMentor,
  handleAddMentor,
}: {
  mentors: typeof MOCK_MENTORS
  showAddMentor: boolean
  setShowAddMentor: (show: boolean) => void
  newMentor: any
  setNewMentor: (mentor: any) => void
  handleAddMentor: () => void
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Mentors</h2>
        <button
          onClick={() => setShowAddMentor(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-sm rounded-lg transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Mentor
        </button>
      </div>

      {/* Add Mentor Modal */}
      {showAddMentor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Add New Mentor</h3>
                <button onClick={() => setShowAddMentor(false)} className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={newMentor.name}
                    onChange={(e) => setNewMentor({ ...newMentor, name: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={newMentor.email}
                    onChange={(e) => setNewMentor({ ...newMentor, email: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Headline</label>
                <input
                  type="text"
                  value={newMentor.headline}
                  onChange={(e) => setNewMentor({ ...newMentor, headline: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Software Engineer at Google"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={newMentor.category}
                    onChange={(e) => setNewMentor({ ...newMentor, category: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Healthcare">Healthcare & Medicine</option>
                    <option value="Engineering">Engineering & IT</option>
                    <option value="Education">Education & Studies</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price per Session ($)</label>
                  <input
                    type="number"
                    value={newMentor.price}
                    onChange={(e) => setNewMentor({ ...newMentor, price: Number(e.target.value) })}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Languages (comma-separated)</label>
                <input
                  type="text"
                  value={newMentor.languages}
                  onChange={(e) => setNewMentor({ ...newMentor, languages: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="English, German, Hindi"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Expertise (comma-separated)</label>
                <input
                  type="text"
                  value={newMentor.expertise}
                  onChange={(e) => setNewMentor({ ...newMentor, expertise: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  placeholder="Career Guidance, Visa Process, Job Search"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">About</label>
                <textarea
                  value={newMentor.about}
                  onChange={(e) => setNewMentor({ ...newMentor, about: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 min-h-[100px]"
                  placeholder="Brief description about the mentor..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddMentor(false)}
                  className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMentor}
                  disabled={!newMentor.name || !newMentor.email}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Add Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mentors Table */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Mentor</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Category</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Sessions</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Rating</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Earnings</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mentors.map((mentor) => (
                <tr key={mentor.id} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                        {mentor.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm text-white font-medium">{mentor.name}</p>
                        <p className="text-xs text-gray-400">{mentor.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">{mentor.category}</td>
                  <td className="px-4 py-3 text-sm text-white">{mentor.sessions}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-white">{mentor.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-green-400 font-medium">${mentor.earnings.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                      {mentor.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300 text-sm">Edit</button>
                      <button className="text-red-400 hover:text-red-300 text-sm">Disable</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
