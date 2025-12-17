// Analytics utility for tracking events
// Uses Plausible Analytics (privacy-friendly, no cookies)

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> }
    ) => void
  }
}

// Track custom events
export function trackEvent(
  event: string,
  props?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible(event, { props })
  }
}

// Pre-defined events for Germany relocation funnel
export const analytics = {
  // Quiz events
  quizStarted: () => trackEvent('Quiz Started'),
  quizProgress: (step: number) => trackEvent('Quiz Progress', { step }),
  quizCompleted: (eligible: boolean, topVisa: string) =>
    trackEvent('Quiz Completed', { eligible, topVisa }),

  // Lead capture
  emailCaptured: (source: string) => trackEvent('Email Captured', { source }),

  // Content engagement
  guideViewed: (guide: string) => trackEvent('Guide Viewed', { guide }),
  mentorClicked: (from: string) => trackEvent('Mentor Clicked', { from }),

  // German learning
  lessonStarted: (level: string) => trackEvent('Lesson Started', { level }),
  lessonCompleted: (level: string) => trackEvent('Lesson Completed', { level }),

  // Conversions
  bookingStarted: (mentorId: string) => trackEvent('Booking Started', { mentorId }),
  bookingCompleted: (mentorId: string, amount: number) =>
    trackEvent('Booking Completed', { mentorId, amount }),
}

export default analytics
