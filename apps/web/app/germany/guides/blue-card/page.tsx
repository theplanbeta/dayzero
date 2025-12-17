import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EU Blue Card Germany 2025: Complete Guide | Requirements, Salary, Process',
  description: 'The definitive guide to getting an EU Blue Card in Germany in 2025. Updated salary thresholds (€43,759), requirements, application process, and path to permanent residence.',
  keywords: 'eu blue card germany, blue card germany 2025, germany work visa, blue card requirements, blue card salary germany',
  openGraph: {
    title: 'EU Blue Card Germany 2025: Complete Guide',
    description: 'Everything you need to know about the EU Blue Card - requirements, salary, and application process.',
    type: 'article',
    publishedTime: '2024-12-01',
    modifiedTime: '2024-12-15',
  },
}

export default function BlueCardGuidePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/germany" className="hover:text-white">Germany</Link>
          <span>/</span>
          <Link href="/germany/guides" className="hover:text-white">Guides</Link>
          <span>/</span>
          <span className="text-gray-300">Blue Card</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
              Visa Guide
            </span>
            <span className="text-gray-500 text-sm">Updated December 2024</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            EU Blue Card Germany 2025: The Complete Guide
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            The EU Blue Card is Germany's premium work visa for skilled professionals.
            With the 2024 reforms, it's now easier to qualify than ever. This guide covers
            everything: requirements, salary thresholds, application process, and the fast-track
            to permanent residence.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400">€43,759</div>
              <div className="text-xs text-gray-400">Salary threshold (shortage)</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-green-400">21 months</div>
              <div className="text-xs text-gray-400">To permanent residence</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">113K+</div>
              <div className="text-xs text-gray-400">Blue Card holders in Germany</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">2-4 mo</div>
              <div className="text-xs text-gray-400">Processing time</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">In This Guide</h2>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            {[
              'What is the EU Blue Card?',
              'Requirements in 2025',
              'Salary Thresholds',
              'Shortage Occupations',
              'IT Specialists Without Degree',
              'Application Process',
              'Required Documents',
              'Permanent Residence Path',
              'Family Reunification',
              'Blue Card vs Other Visas',
            ].map((item, i) => (
              <li key={i}>
                <a href={`#section-${i + 1}`} className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <span className="text-yellow-500">{i + 1}.</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">1. What is the EU Blue Card?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The EU Blue Card is a residence permit for highly qualified non-EU nationals who want to work
              in Germany (and most other EU countries). Think of it as Europe's answer to the US H-1B visa,
              but with better conditions.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Key benefits:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong className="text-white">Fast-track to permanent residence</strong> — 21-33 months instead of the usual 5 years</li>
              <li><strong className="text-white">Family can work</strong> — Your spouse gets an unrestricted work permit</li>
              <li><strong className="text-white">EU mobility</strong> — After 12 months, you can move to another EU country</li>
              <li><strong className="text-white">Job flexibility</strong> — Change jobs freely after 12 months (with notification)</li>
              <li><strong className="text-white">No German required</strong> — For the visa application (though learning helps long-term)</li>
            </ul>
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>2024 Update:</strong> Germany significantly reformed the Blue Card rules in November 2023.
                Salary thresholds are lower, IT specialists no longer need degrees, and the path to permanent
                residence is shorter.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">2. Requirements in 2025</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To qualify for an EU Blue Card in Germany, you need:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ University Degree</h3>
                <p className="text-gray-400 text-sm">
                  A completed university degree (Bachelor's or higher) recognized in Germany.
                  Check your degree on <a href="https://anabin.kmk.org" target="_blank" rel="noopener" className="text-yellow-400 hover:underline">anabin.kmk.org</a>.
                  <br /><br />
                  <strong className="text-gray-300">Exception:</strong> IT specialists with 3+ years of experience don't need a degree (new since Nov 2023).
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Job Offer in Germany</h3>
                <p className="text-gray-400 text-sm">
                  A concrete job offer or employment contract from a German employer.
                  The job must match your qualifications.
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Minimum Salary</h3>
                <p className="text-gray-400 text-sm">
                  Your gross annual salary must meet the threshold (see next section).
                  For 2025, this is €43,759 for shortage occupations or €48,300 for others.
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">✓ Health Insurance</h3>
                <p className="text-gray-400 text-sm">
                  Proof of health insurance coverage in Germany. Most employers automatically
                  enroll you in statutory health insurance (Gesetzliche Krankenversicherung).
                </p>
              </div>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-300 text-sm">
                <strong>Good news:</strong> You do NOT need German language skills to apply for a Blue Card.
                However, learning German will help you integrate and is required for permanent residence.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">3. Salary Thresholds 2025</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The salary thresholds are based on the annual contribution assessment ceiling for pension insurance.
              For 2025:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 text-gray-300 font-semibold">Category</th>
                    <th className="py-3 px-4 text-gray-300 font-semibold">Annual Salary</th>
                    <th className="py-3 px-4 text-gray-300 font-semibold">Monthly (Gross)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <span className="font-medium text-white">Shortage Occupations</span>
                      <br />
                      <span className="text-xs">(IT, Engineering, Healthcare, Science)</span>
                    </td>
                    <td className="py-3 px-4 text-yellow-400 font-bold">€43,759.80</td>
                    <td className="py-3 px-4">~€3,647</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">
                      <span className="font-medium text-white">New Graduates</span>
                      <br />
                      <span className="text-xs">(First job after university)</span>
                    </td>
                    <td className="py-3 px-4 text-yellow-400 font-bold">€43,759.80</td>
                    <td className="py-3 px-4">~€3,647</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <span className="font-medium text-white">Standard</span>
                      <br />
                      <span className="text-xs">(All other professions)</span>
                    </td>
                    <td className="py-3 px-4 text-white font-bold">€48,300</td>
                    <td className="py-3 px-4">~€4,025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-300 text-sm">
                <strong>Pro tip:</strong> These are gross salaries before tax. After German taxes and social contributions,
                expect ~60-65% take-home pay. Use a German salary calculator to see your net income.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">4. Shortage Occupations (Lower Threshold)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These professions qualify for the lower €43,759 salary threshold:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { icon: '💻', title: 'IT & Technology', examples: 'Software developers, data scientists, IT security, DevOps' },
                { icon: '🔧', title: 'Engineering', examples: 'Mechanical, electrical, civil, automotive engineers' },
                { icon: '🏥', title: 'Healthcare', examples: 'Doctors, pharmacists, nurses (with recognition)' },
                { icon: '🔬', title: 'Natural Sciences', examples: 'Physicists, chemists, biologists, researchers' },
                { icon: '📊', title: 'Mathematics', examples: 'Mathematicians, statisticians, actuaries' },
                { icon: '🏗️', title: 'Architecture', examples: 'Architects, urban planners' },
              ].map((field, i) => (
                <div key={i} className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{field.icon}</span>
                    <span className="font-bold text-white">{field.title}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{field.examples}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 - IT Specialists */}
          <section id="section-5" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">5. IT Specialists Without a Degree</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-yellow-400">This is big.</strong> Since November 2023, IT specialists can get
              an EU Blue Card without a university degree if they have:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>At least <strong className="text-white">3 years of professional IT experience</strong> in the last 7 years</li>
              <li>A job offer in an IT role with at least <strong className="text-white">€43,759</strong> salary</li>
              <li>The experience must be comparable to a university-level qualification</li>
            </ul>

            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl mb-6">
              <p className="text-purple-300 text-sm">
                <strong>What counts as "IT"?</strong> Software development, data science/ML, cybersecurity,
                cloud/DevOps, IT project management, systems administration. If you write code or manage IT
                systems professionally, you likely qualify.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">How to prove 3 years experience:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Employment contracts and reference letters from previous employers</li>
              <li>LinkedIn profile showing your work history</li>
              <li>GitHub/portfolio demonstrating technical work</li>
              <li>Certifications (AWS, Google Cloud, etc.) help but aren't required</li>
            </ul>
          </section>

          {/* Section 6 - Application Process */}
          <section id="section-6" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">6. Application Process</h2>

            <div className="space-y-6 mb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Get a Job Offer</h3>
                  <p className="text-gray-400 text-sm">
                    Apply to German companies. Use LinkedIn, StepStone, XING, and company career pages.
                    Make sure the salary meets the threshold. The contract must specify job title, salary,
                    start date, and working hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Check Degree Recognition</h3>
                  <p className="text-gray-400 text-sm">
                    Look up your university and degree on <a href="https://anabin.kmk.org" target="_blank" rel="noopener" className="text-yellow-400 hover:underline">anabin.kmk.org</a>.
                    If it's recognized (H+), you're good. If not, you may need a formal recognition assessment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Schedule Embassy Appointment</h3>
                  <p className="text-gray-400 text-sm">
                    Book an appointment at the German embassy/consulate in your country.
                    <strong className="text-white"> Do this early</strong> — wait times can be 4-8 weeks or more.
                    Many embassies now offer online appointment booking.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Prepare Documents</h3>
                  <p className="text-gray-400 text-sm">
                    Gather all required documents (see Section 7). Some may need to be apostilled
                    or officially translated into German.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-gray-900 font-bold shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Attend Visa Interview</h3>
                  <p className="text-gray-400 text-sm">
                    Bring all documents. The interview is usually straightforward — they'll verify
                    your documents and ask about your job and plans. Conducted in German or English.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-gray-900 font-bold shrink-0">6</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Receive Visa & Travel</h3>
                  <p className="text-gray-400 text-sm">
                    Processing takes 2-8 weeks. Once approved, you'll get a visa sticker in your passport.
                    Travel to Germany and register your address (Anmeldung) within 14 days.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 - Documents */}
          <section id="section-7" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Required Documents</h2>

            <div className="bg-gray-800/30 rounded-xl border border-gray-700 p-6 mb-6">
              <ul className="space-y-3 text-gray-300">
                {[
                  { doc: 'Valid passport', note: 'At least 6 months validity' },
                  { doc: 'Completed visa application form', note: 'Download from embassy website' },
                  { doc: 'Biometric photos', note: '2 passport-size photos (35x45mm)' },
                  { doc: 'Employment contract', note: 'Signed, showing salary and job details' },
                  { doc: 'University degree certificate', note: 'Original + certified translation if not in German/English' },
                  { doc: 'Degree recognition', note: 'Anabin printout or official recognition letter' },
                  { doc: 'CV/Resume', note: 'Preferably in German format (Lebenslauf)' },
                  { doc: 'Proof of health insurance', note: 'Or confirmation from employer' },
                  { doc: 'Visa fee payment', note: '~€75' },
                  { doc: 'For IT specialists: work experience proof', note: 'Reference letters, contracts, LinkedIn' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-white">{item.doc}</span>
                      <span className="text-gray-500 text-sm ml-2">— {item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <p className="text-orange-300 text-sm">
                <strong>Important:</strong> Requirements vary by embassy. Always check your specific embassy's
                website for the exact document list and any country-specific requirements (apostille, etc.).
              </p>
            </div>
          </section>

          {/* Section 8 - Permanent Residence */}
          <section id="section-8" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">8. Path to Permanent Residence</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              One of the Blue Card's biggest advantages is the fast track to permanent residence (Niederlassungserlaubnis):
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                <div className="text-3xl font-bold text-green-400 mb-2">21 Months</div>
                <div className="text-white font-medium mb-2">With B1 German</div>
                <p className="text-gray-400 text-sm">
                  If you reach B1 German level, you can apply for permanent residence after just 21 months.
                </p>
              </div>
              <div className="p-5 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">33 Months</div>
                <div className="text-white font-medium mb-2">With A1 German</div>
                <p className="text-gray-400 text-sm">
                  With basic A1 German, you can apply after 33 months. Still much faster than the standard 5 years.
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Additional requirements for permanent residence:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Continuous employment during the entire period</li>
              <li>60 months of pension contributions (or equivalent)</li>
              <li>Adequate living space</li>
              <li>No criminal record</li>
            </ul>
          </section>

          {/* Section 9 - Family */}
          <section id="section-9" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">9. Family Reunification</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Blue Card holders can bring their family to Germany:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">👫 Spouse/Partner</h3>
                <p className="text-gray-400 text-sm">
                  Your spouse can join you and gets an <strong className="text-white">unrestricted work permit</strong> —
                  they can work any job without limitations. No German language requirement for the initial visa
                  (though it helps for integration).
                </p>
              </div>
              <div className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">👶 Children</h3>
                <p className="text-gray-400 text-sm">
                  Minor children (under 18) can join you. They can attend German schools (free, including
                  university later). Children are automatically entitled to stay as long as you do.
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>Tip:</strong> Apply for family visas at the same time as your Blue Card application.
                This speeds up the process and ensures your family can travel with you.
              </p>
            </div>
          </section>

          {/* Section 10 - Comparison */}
          <section id="section-10" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">10. Blue Card vs Other Visas</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-3 text-gray-300 font-semibold">Feature</th>
                    <th className="py-3 px-3 text-blue-400 font-semibold">EU Blue Card</th>
                    <th className="py-3 px-3 text-gray-400 font-semibold">Skilled Worker (§18)</th>
                    <th className="py-3 px-3 text-gray-400 font-semibold">Opportunity Card</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-gray-300">Job offer required</td>
                    <td className="py-3 px-3 text-green-400">Yes</td>
                    <td className="py-3 px-3">Yes</td>
                    <td className="py-3 px-3">No</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-gray-300">Salary threshold</td>
                    <td className="py-3 px-3 text-yellow-400">€43-48K</td>
                    <td className="py-3 px-3">None</td>
                    <td className="py-3 px-3">N/A</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-gray-300">Permanent residence</td>
                    <td className="py-3 px-3 text-green-400">21-33 months</td>
                    <td className="py-3 px-3">4 years</td>
                    <td className="py-3 px-3">Must convert first</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-gray-300">EU mobility</td>
                    <td className="py-3 px-3 text-green-400">After 12 months</td>
                    <td className="py-3 px-3">Limited</td>
                    <td className="py-3 px-3">Germany only</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-gray-300">German required</td>
                    <td className="py-3 px-3 text-green-400">No</td>
                    <td className="py-3 px-3">Sometimes</td>
                    <td className="py-3 px-3">A1 or B2 English</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* CTA Box */}
        <div className="mt-12 p-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Blue Card Journey?</h3>
          <p className="text-gray-300 mb-6">
            Take our free eligibility check to see if you qualify, or talk to someone who's been through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/germany"
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold rounded-xl text-center transition-colors"
            >
              Check Your Eligibility
            </Link>
            <Link
              href="/mentors?category=life-in-germany"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold rounded-xl text-center transition-colors"
            >
              Talk to a Mentor
            </Link>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-white mb-6">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Opportunity Card 2025', href: '/germany/guides/opportunity-card', desc: 'The new job seeker visa' },
              { title: 'Move from India to Germany', href: '/germany/guides/india-to-germany', desc: 'Country-specific guide' },
            ].map((guide, i) => (
              <Link
                key={i}
                href={guide.href}
                className="p-4 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 rounded-xl transition-colors"
              >
                <h4 className="font-bold text-white mb-1">{guide.title}</h4>
                <p className="text-gray-400 text-sm">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  )
}
