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

// Real mentors from PlanBeta.in
const MOCK_MENTORS: Mentor[] = [
  {
    id: '1',
    name: 'Deepak Bos',
    headline: 'Doctor doing Specialisation in Germany',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 4.9,
    sessionCount: 127,
    pricePerSession: 25,
    category: 'Healthcare',
    languages: ['English', 'German', 'Hindi', 'Malayalam'],
    availableToday: true,
    expertise: ['Medical Career in Germany', 'Approbation Process', 'FSP Exam Preparation', 'Hospital Applications'],
    about: 'Currently pursuing medical specialization in Germany. I guide doctors through the entire journey - from Approbation to finding the right hospital for specialization.',
    nextAvailableSlots: ['2025-12-17T10:00:00Z', '2025-12-17T14:00:00Z', '2025-12-18T09:00:00Z', '2025-12-19T11:00:00Z', '2025-12-20T15:00:00Z'],
    totalReviews: 89,
    isPremium: true,
  },
  {
    id: '2',
    name: 'Dhanya Krishnan',
    headline: 'IT Specialist in Germany',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 4.8,
    sessionCount: 98,
    pricePerSession: 25,
    category: 'Engineering',
    languages: ['English', 'German', 'Malayalam'],
    availableToday: true,
    expertise: ['IT Jobs in Germany', 'Blue Card Process', 'Tech Interview Prep', 'Visa & Immigration'],
    about: 'Working as an IT Specialist in Germany. I help tech professionals navigate the German job market and immigration process.',
    nextAvailableSlots: ['2025-12-17T16:00:00Z', '2025-12-18T10:00:00Z', '2025-12-19T14:00:00Z', '2025-12-20T09:00:00Z', '2025-12-21T11:00:00Z'],
    totalReviews: 67,
    isPremium: false,
  },
  {
    id: '3',
    name: 'Tharun Suresh Kumar',
    headline: 'Mechanical Engineer in Germany',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 4.85,
    sessionCount: 76,
    pricePerSession: 25,
    category: 'Engineering',
    languages: ['English', 'German', 'Malayalam', 'Tamil'],
    availableToday: false,
    expertise: ['Engineering Jobs in Germany', 'Mechanical Engineering', 'Job Applications', 'Career Transition'],
    about: 'Mechanical Engineer working in Germany. I mentor engineers looking to build their career in the German automotive and manufacturing industry.',
    nextAvailableSlots: ['2025-12-18T13:00:00Z', '2025-12-19T10:00:00Z', '2025-12-20T14:00:00Z', '2025-12-21T09:00:00Z', '2025-12-22T16:00:00Z'],
    totalReviews: 54,
    isPremium: false,
  },
  {
    id: '4',
    name: 'Jithin Mathew',
    headline: 'Nursing Ausbildung in Germany',
    avatar: 'https://i.pravatar.cc/150?img=53',
    rating: 4.95,
    sessionCount: 156,
    pricePerSession: 40,
    category: 'Healthcare',
    languages: ['English', 'German', 'Malayalam'],
    availableToday: true,
    expertise: ['Nursing in Germany', 'Ausbildung Process', 'B1/B2 German Prep', 'Healthcare Migration'],
    about: 'Completed Nursing Ausbildung in Germany. I guide nurses through the entire process from language learning to finding the right training program.',
    nextAvailableSlots: ['2025-12-17T11:00:00Z', '2025-12-17T15:00:00Z', '2025-12-18T13:00:00Z', '2025-12-19T10:00:00Z', '2025-12-20T14:00:00Z'],
    totalReviews: 112,
    isPremium: true,
  },
  {
    id: '5',
    name: 'Jomon Kulathil Sunny',
    headline: 'Registered Nurse in Germany',
    avatar: 'https://i.pravatar.cc/150?img=14',
    rating: 4.7,
    sessionCount: 89,
    pricePerSession: 25,
    category: 'Healthcare',
    languages: ['English', 'German', 'Malayalam'],
    availableToday: true,
    expertise: ['Nursing Recognition', 'Kenntnisprüfung', 'Hospital Jobs', 'Work-Life Balance'],
    about: 'Working as a Registered Nurse in Germany. I help nurses with the recognition process and finding good hospitals to work in.',
    nextAvailableSlots: ['2025-12-17T14:00:00Z', '2025-12-18T10:00:00Z', '2025-12-19T11:00:00Z', '2025-12-20T15:00:00Z', '2025-12-21T09:00:00Z'],
    totalReviews: 71,
    isPremium: false,
  },
  {
    id: '6',
    name: 'Guru Kurakula',
    headline: 'Doctor doing Specialisation in Germany',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 4.8,
    sessionCount: 134,
    pricePerSession: 25,
    category: 'Healthcare',
    languages: ['English', 'German', 'Telugu', 'Hindi'],
    availableToday: false,
    expertise: ['Medical Specialization', 'FSP Preparation', 'German Medical System', 'Residency Applications'],
    about: 'Pursuing medical specialization in Germany. I provide guidance on FSP exam, Approbation, and finding the right specialization program.',
    nextAvailableSlots: ['2025-12-18T14:00:00Z', '2025-12-19T10:00:00Z', '2025-12-20T11:00:00Z', '2025-12-22T15:00:00Z', '2025-12-23T09:00:00Z'],
    totalReviews: 98,
    isPremium: false,
  },
  {
    id: '7',
    name: 'Rajeevan Rajagopal',
    headline: 'Software Engineer in Germany',
    avatar: 'https://i.pravatar.cc/150?img=60',
    rating: 4.85,
    sessionCount: 112,
    pricePerSession: 25,
    category: 'Engineering',
    languages: ['English', 'German', 'Malayalam', 'Hindi'],
    availableToday: true,
    expertise: ['Software Development', 'Tech Jobs Germany', 'Salary Negotiation', 'Startup vs Corporate'],
    about: 'Software Engineer in Germany with experience in both startups and corporate. I help developers find the right opportunities and negotiate better offers.',
    nextAvailableSlots: ['2025-12-17T16:00:00Z', '2025-12-18T11:00:00Z', '2025-12-19T15:00:00Z', '2025-12-20T10:00:00Z', '2025-12-21T14:00:00Z'],
    totalReviews: 86,
    isPremium: false,
  },
  {
    id: '8',
    name: 'Devdath Kishore',
    headline: 'Bachelors in Psychology - Germany',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 4.75,
    sessionCount: 67,
    pricePerSession: 25,
    category: 'Education',
    languages: ['English', 'German', 'Malayalam'],
    availableToday: true,
    expertise: ['Studying in Germany', 'University Applications', 'Student Visa', 'Student Life'],
    about: 'Completed Bachelors in Psychology in Germany. I guide students through university applications, visa process, and adapting to student life in Germany.',
    nextAvailableSlots: ['2025-12-17T13:00:00Z', '2025-12-18T10:00:00Z', '2025-12-19T14:00:00Z', '2025-12-20T09:00:00Z', '2025-12-21T11:00:00Z'],
    totalReviews: 45,
    isPremium: false,
  },
]

const MOCK_CATEGORIES: Category[] = [
  { id: 'all', name: 'All Mentors', icon: '🎯', count: 8 },
  { id: 'healthcare', name: 'Healthcare & Medicine', icon: '🏥', count: 4 },
  { id: 'engineering', name: 'Engineering & IT', icon: '💻', count: 3 },
  { id: 'education', name: 'Education & Studies', icon: '🎓', count: 1 },
  { id: 'premium', name: 'Premium Mentors', icon: '⭐', count: 2 },
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
