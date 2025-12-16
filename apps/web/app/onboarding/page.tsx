'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, ChevronLeft, Upload, Check } from 'lucide-react';
import LinkedInImportModal from '@/components/linkedin/LinkedInImportModal';
import LinkedInImportButton from '@/components/linkedin/LinkedInImportButton';
import type { LinkedInProfile } from '@/lib/api/linkedin';

type UserRole = 'learner' | 'mentor' | null;

const CATEGORIES = [
  'Software Engineering',
  'Product Management',
  'Data Science & AI',
  'UX/UI Design',
  'Marketing & Growth',
  'Finance & Investing',
  'Career Transitions',
  'Startups & Entrepreneurship',
  'Leadership & Management',
  'Healthcare & Medicine',
  'Legal & Compliance',
  'Immigration & Visa',
];

const EXPERTISE_LEVELS = ['Entry Level (0-2 years)', 'Mid Level (2-5 years)', 'Senior (5-10 years)', 'Expert (10+ years)'];

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const TIME_SLOTS = ['Morning (6-12)', 'Afternoon (12-18)', 'Evening (18-24)'];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<UserRole>(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [expertise, setExpertise] = useState<string[]>([]);
  const [hourlyRate, setHourlyRate] = useState('75');
  const [availability, setAvailability] = useState<Record<string, string[]>>({});
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);

  const totalSteps = role === 'mentor' ? 4 : 2;

  const handleNext = () => {
    if (step === 1 && !role) {
      alert('Please select a role');
      return;
    }
    if (step === 2 && !name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    // TODO: Call onboarding API
    console.log('Onboarding data:', {
      role,
      name,
      bio,
      ...(role === 'mentor' && {
        categories,
        expertise,
        hourlyRate,
        availability,
      }),
    });

    // Update profile with role and name
    const existingProfile = JSON.parse(localStorage.getItem('dz_profile') || '{}')
    localStorage.setItem('dz_profile', JSON.stringify({
      ...existingProfile,
      name: name || existingProfile.name,
      role: role || 'mentee',
      bio,
      ...(role === 'mentor' && {
        categories,
        expertise,
        hourlyRate,
      }),
    }))

    // Redirect based on role
    if (role === 'mentor') {
      router.push('/dashboard/mentor');
    } else {
      router.push('/mentors');
    }
  };

  const toggleCategory = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleExpertise = (level: string) => {
    setExpertise((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const toggleAvailability = (day: string, slot: string) => {
    setAvailability((prev) => {
      const daySlots = prev[day] || [];
      const updated = daySlots.includes(slot)
        ? daySlots.filter((s) => s !== slot)
        : [...daySlots, slot];
      return { ...prev, [day]: updated };
    });
  };

  const handleLinkedInImport = (profile: LinkedInProfile) => {
    // Pre-fill form with LinkedIn data
    setName(profile.name);
    setBio(profile.summary || profile.headline || '');

    // Map LinkedIn skills/experience to our categories
    const skillKeywords: Record<string, string[]> = {
      'Software Engineering': ['software', 'programming', 'developer', 'engineer', 'coding', 'javascript', 'python', 'react', 'backend', 'frontend', 'fullstack'],
      'Product Management': ['product', 'pm', 'roadmap', 'agile', 'scrum', 'strategy'],
      'Data Science & AI': ['data', 'machine learning', 'ai', 'analytics', 'statistics', 'python', 'sql', 'ml'],
      'UX/UI Design': ['design', 'ux', 'ui', 'figma', 'user experience', 'user interface', 'prototype'],
      'Marketing & Growth': ['marketing', 'growth', 'seo', 'content', 'social media', 'brand', 'advertising'],
      'Finance & Investing': ['finance', 'investment', 'banking', 'accounting', 'trading', 'portfolio'],
      'Career Transitions': ['career', 'transition', 'coaching', 'resume', 'interview'],
      'Startups & Entrepreneurship': ['startup', 'entrepreneur', 'founder', 'venture', 'business'],
      'Leadership & Management': ['leadership', 'management', 'team', 'director', 'executive', 'ceo', 'cto'],
      'Healthcare & Medicine': ['healthcare', 'medical', 'doctor', 'nurse', 'hospital', 'clinical', 'health'],
      'Legal & Compliance': ['legal', 'law', 'attorney', 'compliance', 'regulation', 'lawyer'],
      'Immigration & Visa': ['immigration', 'visa', 'relocation', 'expat', 'international'],
    };

    const allText = [
      ...profile.skills,
      profile.headline || '',
      ...(profile.experience?.map(e => `${e.title} ${e.company}`) || [])
    ].join(' ').toLowerCase();

    const matchedCategories = CATEGORIES.filter(category => {
      const keywords = skillKeywords[category] || [];
      return keywords.some(keyword => allText.includes(keyword));
    }).slice(0, 4);

    if (matchedCategories.length > 0) {
      setCategories(matchedCategories);
    }

    // Show success feedback
    alert('LinkedIn profile imported successfully! Review and edit the information below.');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm text-gray-400">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8">
          {/* Step 1: Role Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Welcome to DayZero!</h2>
              <p className="text-gray-400 mb-8">Connect with experts who've been where you want to go. What brings you here?</p>

              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setRole('learner')}
                  className={`p-8 rounded-xl border-2 transition-all text-left ${
                    role === 'learner'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold mb-2">I'm looking for guidance</h3>
                  <p className="text-gray-400 text-sm">
                    Find mentors who can help with career growth, skill development, or life transitions
                  </p>
                </button>

                <button
                  onClick={() => setRole('mentor')}
                  className={`p-8 rounded-xl border-2 transition-all text-left ${
                    role === 'mentor'
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold mb-2">I want to mentor others</h3>
                  <p className="text-gray-400 text-sm">
                    Share your expertise, help others grow, and earn money doing it
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Profile Basics */}
          {step === 2 && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Create Your Profile</h2>
              <p className="text-gray-400 mb-8">Tell us a bit about yourself</p>

              {/* LinkedIn Import - Only for mentors */}
              {role === 'mentor' && (
                <div className="mb-6">
                  <LinkedInImportButton
                    onClick={() => setIsLinkedInModalOpen(true)}
                    variant="secondary"
                    size="md"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Save time by importing your professional info from LinkedIn
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {/* Profile Photo */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Profile Photo (Optional)
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                      {name.charAt(0).toUpperCase() || '?'}
                    </div>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Upload Photo
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Bio {role === 'mentor' ? '*' : '(Optional)'}
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder={
                      role === 'mentor'
                        ? 'Share your background, expertise, and what you can help mentees with...'
                        : 'Tell us about your goals and what guidance you are looking for...'
                    }
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Mentor Details (Mentor Only) */}
          {step === 3 && role === 'mentor' && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Your Expertise</h2>
              <p className="text-gray-400 mb-8">
                Help mentees find you by sharing your areas of expertise
              </p>

              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Areas of Expertise *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          categories.includes(category)
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{category}</span>
                          {categories.includes(category) && (
                            <Check className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Expertise Levels */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Experience Level You Can Mentor *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {EXPERTISE_LEVELS.map((level) => (
                      <button
                        key={level}
                        onClick={() => toggleExpertise(level)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          expertise.includes(level)
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{level}</span>
                          {expertise.includes(level) && (
                            <Check className="w-4 h-4 text-blue-400" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hourly Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Hourly Rate ($) *
                  </label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    min="10"
                    max="500"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Recommended: $50-150 per hour based on expertise. You'll earn 85% after platform fees.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Availability (Mentor Only) */}
          {step === 4 && role === 'mentor' && (
            <div>
              <h2 className="text-3xl font-bold mb-2">Set Your Availability</h2>
              <p className="text-gray-400 mb-8">
                When are you typically available for sessions? You can adjust this later.
              </p>

              <div className="space-y-3">
                {DAYS.map((day) => (
                  <div key={day} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                    <div className="font-medium text-white mb-3">{day}</div>
                    <div className="grid grid-cols-3 gap-2">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = availability[day]?.includes(slot);
                        return (
                          <button
                            key={slot}
                            onClick={() => toggleAvailability(day, slot)}
                            className={`px-3 py-2 rounded-lg text-sm transition-all ${
                              isSelected
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                          >
                            {slot.split(' ')[0]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-700">
            <button
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              onClick={() => router.push('/')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skip for now
            </button>

            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              {step === totalSteps ? 'Complete' : 'Next'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* LinkedIn Import Modal */}
      <LinkedInImportModal
        isOpen={isLinkedInModalOpen}
        onClose={() => setIsLinkedInModalOpen(false)}
        onImport={handleLinkedInImport}
      />
    </div>
  );
}
