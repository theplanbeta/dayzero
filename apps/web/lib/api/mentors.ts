// API client for mentor-related endpoints

export interface Mentor {
  id: string
  name: string
  headline: string
  avatar: string
  rating: number
  sessionCount: number
  pricePerSession: number
  category: string
  languages: string[]
  availableToday: boolean
  expertise: string[]
  about: string
  nextAvailableSlots: string[]
  totalReviews: number
  isPremium: boolean
}

export interface Review {
  id: string
  mentorId: string
  userName: string
  userAvatar: string
  rating: number
  comment: string
  createdAt: string
}

export interface MentorFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  languages?: string[]
  availableNow?: boolean
  availableThisWeek?: boolean
  minRating?: number
  search?: string
  page?: number
  limit?: number
}

export interface Category {
  id: string
  name: string
  icon: string
  count: number
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

// Mock data for initial development
const MOCK_MENTORS: Mentor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    headline: 'VP of Engineering | Ex-Google, Ex-Meta',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 4.9,
    sessionCount: 247,
    pricePerSession: 150,
    category: 'Engineering',
    languages: ['English', 'Mandarin'],
    availableToday: true,
    expertise: ['System Design', 'Leadership', 'Career Growth', 'Technical Interviews'],
    about: 'I help engineers level up their careers. With 15+ years at top tech companies, I understand what it takes to grow from IC to VP.',
    nextAvailableSlots: ['2025-12-14T10:00:00Z', '2025-12-14T14:00:00Z', '2025-12-15T09:00:00Z', '2025-12-16T11:00:00Z', '2025-12-17T15:00:00Z'],
    totalReviews: 189,
    isPremium: true,
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    headline: 'Senior Product Manager at Stripe',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4.8,
    sessionCount: 312,
    pricePerSession: 120,
    category: 'Product',
    languages: ['English', 'Spanish'],
    availableToday: false,
    expertise: ['Product Strategy', 'User Research', 'Roadmapping', 'PM Interviews'],
    about: 'Former engineer turned PM. I help aspiring PMs break into the field and current PMs level up their craft.',
    nextAvailableSlots: ['2025-12-15T16:00:00Z', '2025-12-16T10:00:00Z', '2025-12-17T14:00:00Z', '2025-12-18T09:00:00Z', '2025-12-19T11:00:00Z'],
    totalReviews: 267,
    isPremium: false,
  },
  {
    id: '3',
    name: 'Priya Sharma',
    headline: 'Data Science Lead at Netflix',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 4.95,
    sessionCount: 156,
    pricePerSession: 130,
    category: 'Data',
    languages: ['English', 'Hindi'],
    availableToday: true,
    expertise: ['Machine Learning', 'Data Strategy', 'A/B Testing', 'Career Switch'],
    about: 'I mentor professionals transitioning into data science and help data scientists grow into leadership roles.',
    nextAvailableSlots: ['2025-12-14T13:00:00Z', '2025-12-15T10:00:00Z', '2025-12-16T14:00:00Z', '2025-12-17T09:00:00Z', '2025-12-18T16:00:00Z'],
    totalReviews: 142,
    isPremium: true,
  },
  {
    id: '4',
    name: 'James Thompson',
    headline: 'Executive Coach | Former McKinsey Partner',
    avatar: 'https://i.pravatar.cc/150?img=13',
    rating: 4.7,
    sessionCount: 423,
    pricePerSession: 200,
    category: 'Career',
    languages: ['English', 'French'],
    availableToday: true,
    expertise: ['Executive Presence', 'Career Transitions', 'Negotiation', 'Leadership'],
    about: 'I help professionals navigate career transitions and develop executive presence. Specialized in tech and consulting.',
    nextAvailableSlots: ['2025-12-14T11:00:00Z', '2025-12-14T15:00:00Z', '2025-12-15T13:00:00Z', '2025-12-16T10:00:00Z', '2025-12-17T14:00:00Z'],
    totalReviews: 381,
    isPremium: false,
  },
  {
    id: '5',
    name: 'Dr. Elena Volkov',
    headline: 'CTO & Startup Advisor | Premium Mentor',
    avatar: 'https://i.pravatar.cc/150?img=9',
    rating: 5.0,
    sessionCount: 89,
    pricePerSession: 250,
    category: 'Premium',
    languages: ['English', 'Russian'],
    availableToday: false,
    expertise: ['Startup Strategy', 'Fundraising', 'Technical Leadership', 'Scaling Teams'],
    about: 'Premium mentorship for founders and CTOs. I\'ve built and scaled 3 startups, including one to IPO.',
    nextAvailableSlots: ['2025-12-16T14:00:00Z', '2025-12-18T10:00:00Z', '2025-12-20T11:00:00Z', '2025-12-22T15:00:00Z', '2025-12-23T09:00:00Z'],
    totalReviews: 89,
    isPremium: true,
  },
  {
    id: '6',
    name: 'Lisa Park',
    headline: 'Engineering Manager at Airbnb',
    avatar: 'https://i.pravatar.cc/150?img=16',
    rating: 4.85,
    sessionCount: 198,
    pricePerSession: 100,
    category: 'Leadership',
    languages: ['English', 'Korean'],
    availableToday: true,
    expertise: ['Engineering Management', 'Team Building', 'IC to Manager', '1:1s'],
    about: 'Helping engineers transition into management. I share frameworks and practical advice from my journey.',
    nextAvailableSlots: ['2025-12-14T16:00:00Z', '2025-12-15T11:00:00Z', '2025-12-16T15:00:00Z', '2025-12-17T10:00:00Z', '2025-12-18T14:00:00Z'],
    totalReviews: 176,
    isPremium: false,
  },
]

const MOCK_CATEGORIES: Category[] = [
  { id: 'all', name: 'All Mentors', icon: '🎯', count: 523 },
  { id: 'engineering', name: 'Software Engineering', icon: '💻', count: 142 },
  { id: 'product', name: 'Product Management', icon: '📊', count: 87 },
  { id: 'data', name: 'Data Science & AI', icon: '🤖', count: 64 },
  { id: 'career', name: 'Career Growth', icon: '🚀', count: 156 },
  { id: 'leadership', name: 'Leadership', icon: '👔', count: 89 },
  { id: 'premium', name: 'Premium', icon: '⭐', count: 74 },
]

const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    mentorId: '1',
    userName: 'Ahmed K.',
    userAvatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    comment: 'Dr. Weber helped me prepare for my FSP exam perfectly. Passed on first attempt! Highly recommend.',
    createdAt: '2025-11-28T10:00:00Z',
  },
  {
    id: '2',
    mentorId: '1',
    userName: 'Maria S.',
    userAvatar: 'https://i.pravatar.cc/150?img=26',
    rating: 5,
    comment: 'Very professional and knowledgeable. She understands the struggles of international doctors.',
    createdAt: '2025-11-15T14:00:00Z',
  },
  {
    id: '3',
    mentorId: '1',
    userName: 'Raj P.',
    userAvatar: 'https://i.pravatar.cc/150?img=68',
    rating: 4,
    comment: 'Great mentor, helped me a lot with medical German vocabulary.',
    createdAt: '2025-10-22T09:00:00Z',
  },
]

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function getMentors(filters: MentorFilters = {}): Promise<{ mentors: Mentor[]; total: number }> {
  await delay(300) // Simulate API delay

  let filtered = [...MOCK_MENTORS]

  // Apply filters
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(m => m.category.toLowerCase() === filters.category?.toLowerCase())
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(m => m.pricePerSession >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(m => m.pricePerSession <= filters.maxPrice!)
  }

  if (filters.languages && filters.languages.length > 0) {
    filtered = filtered.filter(m =>
      filters.languages!.some(lang => m.languages.includes(lang))
    )
  }

  if (filters.availableNow) {
    filtered = filtered.filter(m => m.availableToday)
  }

  if (filters.minRating !== undefined) {
    filtered = filtered.filter(m => m.rating >= filters.minRating!)
  }

  if (filters.search) {
    const search = filters.search.toLowerCase()
    filtered = filtered.filter(m =>
      m.name.toLowerCase().includes(search) ||
      m.headline.toLowerCase().includes(search) ||
      m.expertise.some(e => e.toLowerCase().includes(search))
    )
  }

  // Pagination
  const page = filters.page || 1
  const limit = filters.limit || 12
  const start = (page - 1) * limit
  const end = start + limit

  return {
    mentors: filtered.slice(start, end),
    total: filtered.length,
  }
}

export async function getMentor(id: string): Promise<Mentor | null> {
  await delay(300)

  const mentor = MOCK_MENTORS.find(m => m.id === id)
  return mentor || null
}

export async function getMentorAvailability(id: string): Promise<string[]> {
  await delay(200)

  const mentor = MOCK_MENTORS.find(m => m.id === id)
  return mentor?.nextAvailableSlots || []
}

export async function getMentorReviews(mentorId: string): Promise<Review[]> {
  await delay(300)

  return MOCK_REVIEWS.filter(r => r.mentorId === mentorId)
}

export async function getSimilarMentors(mentorId: string): Promise<Mentor[]> {
  await delay(400)

  const mentor = MOCK_MENTORS.find(m => m.id === mentorId)
  if (!mentor) return []

  // Return mentors in same category
  return MOCK_MENTORS
    .filter(m => m.id !== mentorId && m.category === mentor.category)
    .slice(0, 3)
}

export async function likeMentor(id: string): Promise<boolean> {
  await delay(200)

  // TODO: Implement actual API call when backend is ready
  // const response = await fetch(`${API_URL}/mentors/${id}/like`, {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${token}`,
  //   },
  // })
  // return response.ok

  return true
}

export async function saveMentor(id: string): Promise<boolean> {
  await delay(200)

  // Store in localStorage for now
  if (typeof window !== 'undefined') {
    const saved = JSON.parse(localStorage.getItem('dz_saved_mentors') || '[]')
    if (!saved.includes(id)) {
      saved.push(id)
      localStorage.setItem('dz_saved_mentors', JSON.stringify(saved))
    }
  }

  return true
}

export async function unsaveMentor(id: string): Promise<boolean> {
  await delay(200)

  // Remove from localStorage
  if (typeof window !== 'undefined') {
    const saved = JSON.parse(localStorage.getItem('dz_saved_mentors') || '[]')
    const updated = saved.filter((savedId: string) => savedId !== id)
    localStorage.setItem('dz_saved_mentors', JSON.stringify(updated))
  }

  return true
}

export async function getCategories(): Promise<Category[]> {
  await delay(200)
  return MOCK_CATEGORIES
}

export async function isMentorSaved(id: string): Promise<boolean> {
  if (typeof window !== 'undefined') {
    const saved = JSON.parse(localStorage.getItem('dz_saved_mentors') || '[]')
    return saved.includes(id)
  }
  return false
}
