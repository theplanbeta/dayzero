import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Opportunity Card Germany 2025 (Chancenkarte): Complete Guide | Points, Requirements',
  description: 'Germany\'s new Opportunity Card (Chancenkarte) explained. How to qualify with 6 points, requirements, application process, and how to find a job once you arrive.',
  keywords: 'opportunity card germany, chancenkarte, germany job seeker visa 2025, points system germany visa, work in germany without job offer',
  openGraph: {
    title: 'Opportunity Card Germany 2025 (Chancenkarte): Complete Guide',
    description: 'The new points-based job seeker visa for Germany. Calculate your points and apply.',
    type: 'article',
  },
}

export default function OpportunityCardGuidePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/germany" className="hover:text-white">Germany</Link>
          <span>/</span>
          <Link href="/germany/guides" className="hover:text-white">Guides</Link>
          <span>/</span>
          <span className="text-gray-300">Opportunity Card</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
              NEW in 2024
            </span>
            <span className="text-gray-500 text-sm">Updated December 2024</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Opportunity Card (Chancenkarte): Germany's New Job Seeker Visa
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Launched in June 2024, the Opportunity Card lets you come to Germany without a job offer
            and search for work for up to one year. It's a points-based system — if you score 6+ points,
            you can apply.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-green-400">6 Points</div>
              <div className="text-xs text-gray-400">Minimum to qualify</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">12 Months</div>
              <div className="text-xs text-gray-400">Validity period</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400">€12,000</div>
              <div className="text-xs text-gray-400">Proof of funds needed</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">20h/week</div>
              <div className="text-xs text-gray-400">Work allowed while searching</div>
            </div>
          </div>
        </header>

        {/* TOC */}
        <nav className="mb-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">In This Guide</h2>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            {[
              'What is the Opportunity Card?',
              'The Points System',
              'Calculate Your Points',
              'Requirements',
              'Application Process',
              'What Can You Do With It?',
              'Finding a Job in Germany',
              'Converting to a Work Visa',
              'Pros and Cons',
              'Who Should Apply?',
            ].map((item, i) => (
              <li key={i}>
                <a href={`#section-${i + 1}`} className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2">
                  <span className="text-green-500">{i + 1}.</span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Section 1 */}
          <section id="section-1" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">1. What is the Opportunity Card?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The <strong className="text-white">Opportunity Card</strong> (German: <em>Chancenkarte</em>) is Germany's new
              points-based job seeker visa that came into effect on <strong className="text-green-400">June 1, 2024</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Unlike the EU Blue Card or Skilled Worker Visa, you <strong className="text-white">don't need a job offer</strong> to apply.
              Instead, you earn points based on your qualifications, experience, language skills, and age. Score 6 points or more,
              and you can come to Germany to search for work on-site.
            </p>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl mb-4">
              <p className="text-green-300 text-sm">
                <strong>Why it matters:</strong> Before 2024, coming to Germany without a job offer was extremely difficult.
                The Opportunity Card opens a new pathway, especially useful if you want to interview in-person or
                explore the job market before committing.
              </p>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-300 text-sm">
                <strong>Important:</strong> The Opportunity Card is temporary (12 months). You must find a job and convert
                to a proper work visa (like Blue Card) before it expires. It's a stepping stone, not a final destination.
              </p>
            </div>
          </section>

          {/* Section 2 - Points System */}
          <section id="section-2" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">2. The Points System</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You need <strong className="text-green-400">at least 6 points</strong> to qualify. Here's how points are awarded:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-gray-300 font-semibold">Category</th>
                    <th className="py-3 px-4 text-gray-300 font-semibold">Criteria</th>
                    <th className="py-3 px-4 text-green-400 font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-white font-medium" rowSpan={3}>Qualification</td>
                    <td className="py-3 px-4">Degree from German university</td>
                    <td className="py-3 px-4 text-green-400 font-bold">4</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Foreign degree (recognized)</td>
                    <td className="py-3 px-4 text-green-400 font-bold">3</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Vocational qualification (recognized)</td>
                    <td className="py-3 px-4 text-green-400 font-bold">2</td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-white font-medium" rowSpan={3}>Work Experience</td>
                    <td className="py-3 px-4">5+ years in last 7 years</td>
                    <td className="py-3 px-4 text-green-400 font-bold">3</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">2-5 years in last 7 years</td>
                    <td className="py-3 px-4 text-green-400 font-bold">2</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Previous stay in Germany (6+ months)</td>
                    <td className="py-3 px-4 text-green-400 font-bold">1</td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-white font-medium" rowSpan={3}>German Language</td>
                    <td className="py-3 px-4">B2 or higher</td>
                    <td className="py-3 px-4 text-green-400 font-bold">3</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">B1 level</td>
                    <td className="py-3 px-4 text-green-400 font-bold">2</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">A2 level</td>
                    <td className="py-3 px-4 text-green-400 font-bold">1</td>
                  </tr>

                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4 text-white font-medium" rowSpan={2}>Age</td>
                    <td className="py-3 px-4">Under 35</td>
                    <td className="py-3 px-4 text-green-400 font-bold">2</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">35-40</td>
                    <td className="py-3 px-4 text-green-400 font-bold">1</td>
                  </tr>

                  <tr>
                    <td className="py-3 px-4 text-white font-medium">Shortage Occupation</td>
                    <td className="py-3 px-4">IT, Engineering, Healthcare, etc.</td>
                    <td className="py-3 px-4 text-green-400 font-bold">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>Note:</strong> You can only count points from each category once.
                For example, you can't get points for both "2-5 years experience" AND "5+ years experience".
              </p>
            </div>
          </section>

          {/* Section 3 - Calculator */}
          <section id="section-3" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">3. Calculate Your Points</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Let's see some common profiles:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="font-bold text-green-400 mb-2">Example 1: Indian IT Professional (28 years old)</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Bachelor's degree (recognized): <span className="text-green-400">3 points</span></li>
                  <li>• 4 years experience: <span className="text-green-400">2 points</span></li>
                  <li>• A1 German: <span className="text-gray-500">0 points</span></li>
                  <li>• Under 35: <span className="text-green-400">2 points</span></li>
                  <li>• IT (shortage): <span className="text-green-400">1 point</span></li>
                </ul>
                <div className="mt-3 pt-3 border-t border-green-500/30">
                  <span className="font-bold text-white">Total: 8 points</span>
                  <span className="text-green-400 ml-2">✓ Qualifies</span>
                </div>
              </div>

              <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="font-bold text-green-400 mb-2">Example 2: Brazilian Engineer (32 years old)</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Master's degree (recognized): <span className="text-green-400">3 points</span></li>
                  <li>• 6 years experience: <span className="text-green-400">3 points</span></li>
                  <li>• B1 German: <span className="text-green-400">2 points</span></li>
                  <li>• Under 35: <span className="text-green-400">2 points</span></li>
                </ul>
                <div className="mt-3 pt-3 border-t border-green-500/30">
                  <span className="font-bold text-white">Total: 10 points</span>
                  <span className="text-green-400 ml-2">✓ Easily qualifies</span>
                </div>
              </div>

              <div className="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <h3 className="font-bold text-yellow-400 mb-2">Example 3: Fresh Graduate (24 years old)</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Bachelor's degree (recognized): <span className="text-green-400">3 points</span></li>
                  <li>• No experience: <span className="text-gray-500">0 points</span></li>
                  <li>• A2 German: <span className="text-green-400">1 point</span></li>
                  <li>• Under 35: <span className="text-green-400">2 points</span></li>
                </ul>
                <div className="mt-3 pt-3 border-t border-yellow-500/30">
                  <span className="font-bold text-white">Total: 6 points</span>
                  <span className="text-yellow-400 ml-2">✓ Just qualifies</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>Not sure about your points?</strong> Take our eligibility quiz for a personalized assessment.
              </p>
              <Link
                href="/germany"
                className="inline-flex items-center gap-2 mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Check your eligibility →
              </Link>
            </div>
          </section>

          {/* Section 4 - Requirements */}
          <section id="section-4" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">4. Requirements</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Beyond the points, you need:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Recognized Qualification</h3>
                <p className="text-gray-400 text-sm">
                  Your degree or vocational qualification must be recognized in Germany.
                  Check on <a href="https://anabin.kmk.org" target="_blank" className="text-green-400 hover:underline">anabin.kmk.org</a>.
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Language Skills</h3>
                <p className="text-gray-400 text-sm">
                  Either <strong className="text-white">A1 German</strong> OR <strong className="text-white">B2 English</strong>.
                  You need a certificate (Goethe, telc, TestDaF for German; IELTS, TOEFL for English).
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Proof of Funds</h3>
                <p className="text-gray-400 text-sm">
                  Approximately <strong className="text-white">€12,324</strong> for 12 months (€1,027/month).
                  This can be a blocked bank account (Sperrkonto), scholarship proof, or employment contract for part-time work.
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Health Insurance</h3>
                <p className="text-gray-400 text-sm">
                  Valid health insurance coverage for your stay. Travel health insurance works initially.
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Clean Record</h3>
                <p className="text-gray-400 text-sm">
                  No serious criminal convictions. You may need a police clearance certificate from your home country.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Application */}
          <section id="section-5" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Application Process</h2>

            <div className="space-y-6 mb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Check Eligibility</h3>
                  <p className="text-gray-400 text-sm">
                    Calculate your points. Verify your qualification is recognized on anabin.
                    Take a German A1 test if you don't have English B2.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Open Blocked Account</h3>
                  <p className="text-gray-400 text-sm">
                    Open a German blocked account (Sperrkonto) with providers like Expatrio, Fintiba, or Coracle.
                    Deposit ~€12,324 (€1,027 × 12 months).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Gather Documents</h3>
                  <p className="text-gray-400 text-sm">
                    Passport, degree certificates, language certificate, blocked account proof,
                    health insurance, CV, motivation letter. Get translations/apostille as needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Book Embassy Appointment</h3>
                  <p className="text-gray-400 text-sm">
                    Schedule appointment at your local German embassy. Wait times vary by country
                    (2-8 weeks is common). Apply for "Chancenkarte" specifically.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Attend Interview & Wait</h3>
                  <p className="text-gray-400 text-sm">
                    Interview is usually straightforward. Processing takes 2-6 weeks.
                    Once approved, you get a 6-month visa (extendable to 12 in Germany).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 - What You Can Do */}
          <section id="section-6" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">6. What Can You Do With the Opportunity Card?</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="font-bold text-green-400 mb-2">✓ You CAN</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Stay in Germany for up to 12 months</li>
                  <li>• Work up to 20 hours/week in any job</li>
                  <li>• Attend interviews across Germany</li>
                  <li>• Do trial work (Probearbeit)</li>
                  <li>• Travel within the Schengen area</li>
                  <li>• Extend once (total max 24 months)</li>
                  <li>• Bring family (with restrictions)</li>
                </ul>
              </div>

              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h3 className="font-bold text-red-400 mb-2">✗ You CANNOT</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Work full-time (40 hours/week)</li>
                  <li>• Start a business</li>
                  <li>• Claim unemployment benefits</li>
                  <li>• Stay permanently (must convert to work visa)</li>
                  <li>• Apply for permanent residence directly</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-300 text-sm">
                <strong>The 20h/week rule:</strong> This lets you take mini-jobs or part-time work to support yourself
                while job searching. Many people work in cafes, delivery, or freelance to cover living costs.
              </p>
            </div>
          </section>

          {/* Section 7 - Finding a Job */}
          <section id="section-7" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Finding a Job in Germany</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have 12 months. Here's how to make them count:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">Month 1-2: Settle & Network</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Register address (Anmeldung)</li>
                  <li>• Open bank account</li>
                  <li>• Update LinkedIn with German location</li>
                  <li>• Attend meetups, tech events, job fairs</li>
                  <li>• Join expat Facebook groups, Slack communities</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">Month 2-6: Intensive Job Search</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Apply to 10-20 jobs per week</li>
                  <li>• Use LinkedIn, StepStone, Indeed, company career pages</li>
                  <li>• Work with recruiters (Michael Page, Hays, Robert Half)</li>
                  <li>• Tailor your CV to German format</li>
                  <li>• Practice German interview scenarios</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">Month 6-12: Expand Strategy</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Consider roles outside your comfort zone</li>
                  <li>• Look at smaller cities (less competition)</li>
                  <li>• Consider contract work (can convert to permanent)</li>
                  <li>• If needed, extend your card for another year</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 - Converting */}
          <section id="section-8" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">8. Converting to a Work Visa</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Once you find a job, you need to convert your Opportunity Card to a proper work visa
              <strong className="text-white"> before it expires</strong>.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <h3 className="font-bold text-blue-400 mb-2">→ EU Blue Card</h3>
                <p className="text-gray-400 text-sm">
                  If your salary is €43,759+ (shortage) or €48,300+ (other).
                  Best option — fastest path to permanent residence.
                </p>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h3 className="font-bold text-purple-400 mb-2">→ Skilled Worker Visa</h3>
                <p className="text-gray-400 text-sm">
                  If salary is below Blue Card threshold but job matches your qualification.
                  Longer path to permanent residence (4 years).
                </p>
              </div>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-300 text-sm">
                <strong>Process:</strong> Visit the local Ausländerbehörde (immigration office) with your job contract.
                The conversion usually takes 2-4 weeks. You can keep working while it's processed.
              </p>
            </div>
          </section>

          {/* Section 9 - Pros and Cons */}
          <section id="section-9" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">9. Pros and Cons</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="font-bold text-green-400 mb-3">Advantages</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>✓ No job offer needed to enter Germany</li>
                  <li>✓ Interview in-person (major advantage)</li>
                  <li>✓ Network and explore before committing</li>
                  <li>✓ Work part-time to support yourself</li>
                  <li>✓ Relatively low points threshold</li>
                  <li>✓ Can bring family (with some restrictions)</li>
                </ul>
              </div>

              <div className="p-5 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h3 className="font-bold text-red-400 mb-3">Disadvantages</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>✗ Need €12K+ upfront for blocked account</li>
                  <li>✗ Only 20h/week work allowed</li>
                  <li>✗ Risk: what if you don't find a job?</li>
                  <li>✗ Not a path to permanent residence by itself</li>
                  <li>✗ Family members have work restrictions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 10 - Who Should Apply */}
          <section id="section-10" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">10. Who Should Apply?</h2>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="font-bold text-green-400 mb-2">Great For:</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• People who want to interview in-person</li>
                  <li>• Those who want to explore Germany before committing</li>
                  <li>• Career changers who need to build local network</li>
                  <li>• People with savings who want flexibility</li>
                  <li>• Those from countries with slow embassy processing</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <h3 className="font-bold text-yellow-400 mb-2">Maybe Not Ideal If:</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• You already have a job offer (get Blue Card directly)</li>
                  <li>• You can't afford €12K blocked account</li>
                  <li>• You have family that needs to work full-time</li>
                  <li>• You're risk-averse about finding a job</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Calculate Your Points?</h3>
          <p className="text-gray-300 mb-6">
            Take our free eligibility quiz to see if you qualify for the Opportunity Card — or if another visa is better for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/germany"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl text-center transition-colors"
            >
              Check Your Eligibility
            </Link>
            <Link
              href="/mentors?category=life-in-germany"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold rounded-xl text-center transition-colors"
            >
              Talk to Someone Who Did It
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
