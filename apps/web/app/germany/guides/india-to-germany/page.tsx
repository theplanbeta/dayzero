import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Move to Germany from India 2025: Complete Guide | Visa, Jobs, Salary',
  description: 'Step-by-step guide for Indian professionals moving to Germany. Blue Card from India, job search, salary expectations (₹25-60 LPA equivalent), and tips from Indians in Germany.',
  keywords: 'move to germany from india, germany visa for indians, blue card india, work in germany from india, germany jobs for indian',
  openGraph: {
    title: 'Move to Germany from India 2025: Complete Guide',
    description: 'Everything Indian professionals need to know about relocating to Germany.',
    type: 'article',
  },
}

export default function IndiaToGermanyGuidePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/germany" className="hover:text-white">Germany</Link>
          <span>/</span>
          <Link href="/germany/guides" className="hover:text-white">Guides</Link>
          <span>/</span>
          <span className="text-gray-300">India to Germany</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-2xl">→</span>
            <span className="text-2xl">🇩🇪</span>
            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium ml-2">
              Country Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Move to Germany from India: The Complete 2025 Guide
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            India is the #1 source country for EU Blue Cards in Germany, with 33,000+ Indian professionals
            already working there. This guide is specifically for Indian IT professionals, engineers, and
            healthcare workers looking to make the move.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-orange-400">33,000+</div>
              <div className="text-xs text-gray-400">Indians with Blue Card</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-green-400">₹25-60 LPA</div>
              <div className="text-xs text-gray-400">Typical salary range</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">#1</div>
              <div className="text-xs text-gray-400">Source country</div>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">4-6 mo</div>
              <div className="text-xs text-gray-400">Typical timeline</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
          <h2 className="text-lg font-bold text-white mb-4">What We'll Cover</h2>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            {[
              'Why Germans Love Indian Tech Talent',
              'Visa Options for Indians',
              'Salary: India vs Germany',
              'Job Search Strategy',
              'Embassy Process (Delhi, Mumbai, etc.)',
              'Documents & Apostille',
              'Learning German',
              'Life in Germany for Indians',
              'Common Mistakes to Avoid',
              'Success Stories',
            ].map((item, i) => (
              <li key={i}>
                <a href={`#section-${i + 1}`} className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="text-orange-500">{i + 1}.</span>
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
            <h2 className="text-2xl font-bold text-white mb-4">1. Why Germans Love Indian Tech Talent</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              India is Germany's top source of Blue Card holders for a reason. German companies actively recruit
              Indian professionals because of:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li><strong className="text-white">Strong technical education</strong> — IITs, NITs, and top engineering colleges are well-respected</li>
              <li><strong className="text-white">English proficiency</strong> — Most German tech companies work in English</li>
              <li><strong className="text-white">Work culture compatibility</strong> — Indians adapt well to German workplace expectations</li>
              <li><strong className="text-white">Cost efficiency</strong> — Companies can hire experienced talent at competitive salaries</li>
              <li><strong className="text-white">Existing community</strong> — Large Indian diaspora makes onboarding easier</li>
            </ul>

            <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <p className="text-orange-300 text-sm">
                <strong>Fun fact:</strong> Berlin has such a large Indian tech community that there's a running joke:
                "Half of Berlin's startups run on chai and code." Companies like Delivery Hero, N26, and Zalando
                have significant Indian engineering teams.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">2. Visa Options for Indians</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As an Indian citizen, you have several pathways to work in Germany:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-5 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <h3 className="font-bold text-white mb-2">🔷 EU Blue Card (Recommended)</h3>
                <p className="text-gray-400 text-sm mb-3">
                  The best option for most Indian professionals. Requires:
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Bachelor's/Master's degree (or 3+ years IT experience)</li>
                  <li>• Job offer with €43,759+ salary (tech/engineering) or €48,300 (others)</li>
                  <li>• Fastest path to permanent residence (21-33 months)</li>
                </ul>
              </div>

              <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="font-bold text-white mb-2">🎯 Opportunity Card (Chancenkarte)</h3>
                <p className="text-gray-400 text-sm mb-3">
                  New in 2024! Come to Germany without a job offer and search for up to 1 year.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Points-based: education, experience, age, German/English</li>
                  <li>• Need 6+ points and proof of funds (~€12,000)</li>
                  <li>• Good if you want to interview in person</li>
                </ul>
              </div>

              <div className="p-5 bg-gray-800/50 border border-gray-700 rounded-xl">
                <h3 className="font-bold text-white mb-2">🔧 Skilled Worker Visa (§18a/18b)</h3>
                <p className="text-gray-400 text-sm mb-3">
                  For vocational qualifications or when Blue Card requirements aren't met.
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• No minimum salary threshold</li>
                  <li>• Requires qualification recognition</li>
                  <li>• Longer path to permanent residence (4 years)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-300 text-sm">
                <strong>Our recommendation:</strong> If you have a degree and can get a job offer above €44K,
                always go for the Blue Card. It's the fastest path to permanent residence and gives you
                the most flexibility.
              </p>
            </div>
          </section>

          {/* Section 3 - Salary */}
          <section id="section-3" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">3. Salary: India vs Germany</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Let's talk real numbers. Here's what you can expect in Germany vs India:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-3 text-gray-300 font-semibold">Role</th>
                    <th className="py-3 px-3 text-gray-300 font-semibold">India (LPA)</th>
                    <th className="py-3 px-3 text-blue-400 font-semibold">Germany (€/year)</th>
                    <th className="py-3 px-3 text-green-400 font-semibold">Germany (₹ LPA equiv)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-white">Junior Dev (0-2 yrs)</td>
                    <td className="py-3 px-3">₹6-12 LPA</td>
                    <td className="py-3 px-3">€45-55K</td>
                    <td className="py-3 px-3 text-green-400">₹40-50 LPA</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-white">Mid-Level Dev (3-5 yrs)</td>
                    <td className="py-3 px-3">₹15-25 LPA</td>
                    <td className="py-3 px-3">€55-70K</td>
                    <td className="py-3 px-3 text-green-400">₹50-63 LPA</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-white">Senior Dev (5-8 yrs)</td>
                    <td className="py-3 px-3">₹25-45 LPA</td>
                    <td className="py-3 px-3">€70-90K</td>
                    <td className="py-3 px-3 text-green-400">₹63-81 LPA</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-3 text-white">Tech Lead/Architect</td>
                    <td className="py-3 px-3">₹40-70 LPA</td>
                    <td className="py-3 px-3">€85-120K</td>
                    <td className="py-3 px-3 text-green-400">₹77-108 LPA</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-white">Engineering Manager</td>
                    <td className="py-3 px-3">₹50-90 LPA</td>
                    <td className="py-3 px-3">€100-140K</td>
                    <td className="py-3 px-3 text-green-400">₹90-126 LPA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-4">
              <p className="text-red-300 text-sm">
                <strong>Reality check on taxes:</strong> German taxes are HIGH. On a €60K salary, you'll take home
                about €38-40K (~63-67%). But you get: free healthcare, 30 days vacation, job security,
                and access to all of Europe.
              </p>
            </div>

            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-300 text-sm">
                <strong>Purchasing power:</strong> Don't just convert salaries. A €50K salary in Berlin gives
                you a comfortable lifestyle — nice apartment, eating out, travel. The equivalent lifestyle
                in Bangalore would cost ₹20-25 LPA. Plus, you're saving in Euros.
              </p>
            </div>
          </section>

          {/* Section 4 - Job Search */}
          <section id="section-4" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">4. Job Search Strategy for Indians</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here's how to find a job in Germany from India:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">📱 Best Platforms</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><strong className="text-white">LinkedIn</strong> — #1 for remote applications. Set location to "Germany" and turn on "Open to Work"</li>
                  <li><strong className="text-white">StepStone.de</strong> — Germany's Indeed. Filter by "English" language</li>
                  <li><strong className="text-white">Glassdoor</strong> — Good for company research and salary data</li>
                  <li><strong className="text-white">AngelList</strong> — For Berlin startups (they're most open to visa sponsorship)</li>
                  <li><strong className="text-white">Germany Tech Jobs</strong> — Niche board for English-speaking tech roles</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">🎯 Companies That Hire Indians</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• <strong className="text-white">Big Tech:</strong> Google, Amazon, Microsoft, SAP (huge presence in Germany)</li>
                  <li>• <strong className="text-white">Unicorns:</strong> Delivery Hero, N26, Zalando, HelloFresh, AUTO1</li>
                  <li>• <strong className="text-white">Traditional:</strong> Siemens, Bosch, BMW, Mercedes (need more German)</li>
                  <li>• <strong className="text-white">Consulting:</strong> McKinsey, BCG, Big 4 (German offices)</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <h3 className="font-bold text-yellow-400 mb-2">💡 Pro Tips</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Apply directly to company career pages — they often prioritize direct applications</li>
                  <li>• In your cover letter, explicitly mention you're seeking visa sponsorship and have researched the Blue Card</li>
                  <li>• Network on LinkedIn with Indian engineers already in Germany — referrals are powerful</li>
                  <li>• Be ready for 4-5 round interviews (technical + cultural fit)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 - Embassy */}
          <section id="section-5" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">5. Embassy Process in India</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Germany has embassies/consulates in Delhi, Mumbai, Chennai, Bangalore, and Kolkata.
              Here's what to expect:
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Book Appointment (4-8 weeks out)</h3>
                  <p className="text-gray-400 text-sm">
                    Use VFS Global website for your jurisdiction. Appointments fill up fast —
                    book as soon as you have a job offer. Check multiple consulates; sometimes
                    Chennai has earlier slots than Mumbai.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Gather Documents</h3>
                  <p className="text-gray-400 text-sm">
                    All documents must be in German or English. Indian documents need apostille
                    from MEA (Ministry of External Affairs). Start this process early — it can take 2-3 weeks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Attend Interview</h3>
                  <p className="text-gray-400 text-sm">
                    Usually 10-15 minutes. They verify documents and ask basic questions about your
                    job and plans. Dress formally. Interview is in English or German.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-white mb-2">Wait for Processing (2-6 weeks)</h3>
                  <p className="text-gray-400 text-sm">
                    Your passport stays with VFS. You can track status online.
                    Once approved, you'll get a visa sticker valid for 3-6 months (you get the full Blue Card in Germany).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>Timeline reality:</strong> From job offer to landing in Germany typically takes 3-5 months
                for Indians. The biggest delays are embassy appointment availability and document preparation.
              </p>
            </div>
          </section>

          {/* Section 6 - Documents */}
          <section id="section-6" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">6. Documents & Apostille</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Indian documents need special attention. Here's the full list:
            </p>

            <div className="bg-gray-800/30 rounded-xl border border-gray-700 p-6 mb-6">
              <h3 className="font-bold text-white mb-4">Documents Checklist for Indians</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                {[
                  { doc: 'Valid passport', note: '2 blank pages, 6+ months validity' },
                  { doc: 'Visa application form', note: 'Download from German embassy India website' },
                  { doc: 'Passport photos', note: '2 photos, 35x45mm, white background' },
                  { doc: 'Job contract', note: 'Signed by both parties, shows salary' },
                  { doc: 'Degree certificate', note: 'Original + apostille + translation if needed' },
                  { doc: 'Mark sheets / transcripts', note: 'All semesters, apostilled' },
                  { doc: 'CV/Resume', note: 'German format preferred (with photo)' },
                  { doc: 'Proof of previous employment', note: 'Experience letters on company letterhead' },
                  { doc: 'Health insurance', note: 'Travel insurance for initial period (employer covers later)' },
                  { doc: 'Cover letter', note: 'Explaining your plans in Germany' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <span className="font-medium text-white">{item.doc}</span>
                      <span className="text-gray-500 ml-2">— {item.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl mb-4">
              <h3 className="font-bold text-orange-400 mb-2">📋 Apostille Process</h3>
              <p className="text-gray-300 text-sm">
                Indian educational documents need apostille from MEA:
              </p>
              <ol className="text-gray-400 text-sm mt-2 space-y-1 list-decimal list-inside">
                <li>Get documents notarized by notary public</li>
                <li>Get State Home Department attestation</li>
                <li>Apply for MEA apostille (online at meaappostille.gov.in)</li>
                <li>Submit documents to MEA or authorized agency</li>
                <li>Takes 5-7 working days + shipping</li>
              </ol>
            </div>
          </section>

          {/* Section 7 - German Language */}
          <section id="section-7" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Learning German</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">The honest truth:</strong> You don't need German to get a tech job in Germany,
              but learning it will make your life significantly better.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="font-bold text-green-400 mb-2">Jobs WITHOUT German</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Software development</li>
                  <li>• Data science / ML</li>
                  <li>• Product management (some)</li>
                  <li>• International companies</li>
                  <li>• Startups in Berlin</li>
                </ul>
              </div>
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h3 className="font-bold text-red-400 mb-2">Jobs NEEDING German</h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Customer-facing roles</li>
                  <li>• Healthcare / Nursing (B1-B2)</li>
                  <li>• Traditional German companies</li>
                  <li>• Government / Public sector</li>
                  <li>• Legal / Finance (often)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl mb-4">
              <h3 className="font-bold text-blue-400 mb-2">Our Recommendation</h3>
              <p className="text-gray-300 text-sm">
                Start learning A1 German while job hunting. It shows employers you're serious about
                integration, and you'll need it for permanent residence anyway. Use our app to get started
                — it's designed for busy professionals.
              </p>
              <Link
                href="/vocabulary-review"
                className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                Start learning German free →
              </Link>
            </div>
          </section>

          {/* Section 8 - Life in Germany */}
          <section id="section-8" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">8. Life in Germany for Indians</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              What to expect as an Indian in Germany:
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">🏠 Housing</h3>
                <p className="text-gray-400 text-sm">
                  Finding apartments is HARD, especially in Berlin/Munich. Budget €800-1500/month for a 1-2 bedroom.
                  Use WG-Gesucht, ImmoScout24, and Facebook groups. Expect to need 3 months rent upfront (deposit + 2 months).
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">🍛 Indian Food</h3>
                <p className="text-gray-400 text-sm">
                  Every major city has Indian grocery stores (look for "Asia Laden"). Good Indian restaurants exist
                  but are expensive (€12-18 for curry). Most Indians end up cooking at home. Pro tip: bring
                  your favorite spices from India.
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">👥 Indian Community</h3>
                <p className="text-gray-400 text-sm">
                  Strong Indian communities in Berlin, Munich, Frankfurt. Find them on:
                  Indians in Berlin/Munich Facebook groups, Desi meetups, temple events, and cricket clubs.
                  Diwali celebrations are huge!
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">❄️ Weather</h3>
                <p className="text-gray-400 text-sm">
                  The biggest adjustment for most Indians. Winters are cold (0 to -10°C), dark (4pm sunset),
                  and long (Nov-Mar). Invest in good winter clothes. Summers are beautiful though!
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <h3 className="font-bold text-white mb-2">🎉 Work-Life Balance</h3>
                <p className="text-gray-400 text-sm">
                  This is where Germany shines. 30 days vacation, no weekend work culture, shops closed on Sundays
                  (yes, really), and leaving at 5pm is normal. Coming from Indian IT culture, this takes adjustment.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 - Mistakes */}
          <section id="section-9" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">9. Common Mistakes Indians Make</h2>

            <div className="space-y-4 mb-6">
              {[
                {
                  mistake: 'Waiting to start German until after arrival',
                  fix: 'Start A1 now. Even basic German helps with daily life and shows commitment to employers.'
                },
                {
                  mistake: 'Underestimating visa timeline',
                  fix: 'Start 6 months before your target move date. Embassy appointments and document prep take time.'
                },
                {
                  mistake: 'Not negotiating salary',
                  fix: 'German employers expect negotiation. Always counter-offer. 10-15% bump is normal.'
                },
                {
                  mistake: 'Ignoring health insurance details',
                  fix: 'Understand the difference between public (Gesetzlich) and private (Privat) insurance. Public is usually better long-term.'
                },
                {
                  mistake: 'Not building network before moving',
                  fix: 'Connect with Indians in Germany on LinkedIn. They can refer you, help with housing, and share practical tips.'
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-gray-800/30 rounded-xl border border-gray-700">
                  <h3 className="font-bold text-red-400 mb-2">❌ {item.mistake}</h3>
                  <p className="text-gray-400 text-sm">
                    <span className="text-green-400">✓ Better approach:</span> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10 - Success Stories */}
          <section id="section-10" className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-4">10. Success Stories</h2>

            <div className="space-y-6">
              <div className="p-5 bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-xl">👨‍💻</div>
                  <div>
                    <div className="font-bold text-white">Rahul S., Bangalore → Berlin</div>
                    <div className="text-sm text-gray-400">Senior Software Engineer at Delivery Hero</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "I applied to 50+ companies over 3 months. Got 5 interviews, 2 offers. The key was
                  applying directly on company websites and having my GitHub profile ready. Now earning
                  €75K, working 40 hours, and exploring Europe on weekends."
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-xl">👩‍⚕️</div>
                  <div>
                    <div className="font-bold text-white">Priya M., Chennai → Munich</div>
                    <div className="text-sm text-gray-400">Nurse at Klinikum Munich</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "The nursing recognition process took 8 months and required B2 German. It was hard,
                  but worth it. Triple Win program helped with the paperwork. Now I earn €4000/month
                  with great work conditions."
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-xl">👨‍🔬</div>
                  <div>
                    <div className="font-bold text-white">Arjun K., Mumbai → Frankfurt</div>
                    <div className="text-sm text-gray-400">Data Scientist at Deutsche Bank</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "Coming from TCS, the culture shock was real — no late nights, actual work-life balance.
                  I used the Opportunity Card to come here and found a job in 2 months. Learning German
                  on the side now."
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-300 mb-6">
            Take our free eligibility check or connect with an Indian mentor who's already in Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/germany"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl text-center transition-colors"
            >
              Check Your Eligibility
            </Link>
            <Link
              href="/mentors?category=life-in-germany"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold rounded-xl text-center transition-colors"
            >
              Talk to an Indian Mentor in Germany
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
