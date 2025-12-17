import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import ServiceWorkerRegister from '@/components/ServiceWorkerRegister'
import NavigationWrapper from '@/components/NavigationWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DayZero - Germany Relocation & Mentoring',
  description: 'Move to Germany successfully. Eligibility check, German learning, visa guides, and mentorship from people who\'ve done it.',
  manifest: '/manifest.json',
  icons: {
    icon: '/icon-192x192.svg',
    apple: '/icon-192x192.svg',
  },
  keywords: 'germany relocation, blue card germany, move to germany, german visa, learn german, germany mentorship',
  openGraph: {
    title: 'DayZero - Move to Germany Successfully',
    description: 'Eligibility check, German learning, visa guides, and mentorship from people who\'ve done it.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#1F2937',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Plausible Analytics - Privacy-friendly, no cookies */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <NavigationWrapper />
        <main className="pt-0 min-h-screen">
          {children}
        </main>
        <ServiceWorkerRegister />
      </body>
    </html>
  )
}
