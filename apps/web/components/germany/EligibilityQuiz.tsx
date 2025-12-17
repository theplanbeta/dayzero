'use client'

import { useState } from 'react'
import Link from 'next/link'

interface QuizProps {
  onClose: () => void
}

interface QuizAnswers {
  education: string
  field: string
  experience: string
  age: string
  germanLevel: string
  englishLevel: string
  currentCountry: string
  hasJobOffer: string
  salary: string
  familyStatus: string
  spouseEducation: string
  children: string
}

interface FamilyInfo {
  spouseVisa: string
  spouseWorkRights: string
  spouseGermanNeeded: string
  childrenInfo: string
  familyBenefits: string[]
  taxBenefits: string[]
}

interface PRCitizenshipPath {
  prTimeline: string
  prRequirements: string[]
  citizenshipTimeline: string
  citizenshipRequirements: string[]
  fastTrackTip: string
}

interface OpportunityCardScore {
  total: number
  breakdown: { category: string; points: number; maxPoints: number; detail: string }[]
  qualifies: boolean
}

interface EligibilityResult {
  eligible: boolean
  visaTypes: {
    name: string
    match: 'high' | 'medium' | 'low'
    description: string
    requirements: string[]
    nextSteps: string[]
  }[]
  opportunityCardScore: OpportunityCardScore | null
  roadmap: {
    phase: string
    title: string
    duration: string
    tasks: string[]
  }[]
  prCitizenshipPath: PRCitizenshipPath
  familyInfo: FamilyInfo | null
  germanNeeded: string
  estimatedTimeline: string
}

const questions = [
  {
    id: 'education',
    question: 'What is your highest level of education?',
    options: [
      { value: 'masters', label: "Master's degree or PhD" },
      { value: 'bachelors', label: "Bachelor's degree" },
      { value: 'vocational', label: 'Vocational training / Diploma (2+ years)' },
      { value: 'none', label: 'No formal degree' },
    ]
  },
  {
    id: 'field',
    question: 'What is your professional field?',
    options: [
      { value: 'it', label: 'IT / Software Development / Data Science' },
      { value: 'engineering', label: 'Engineering (Mechanical, Electrical, Civil, etc.)' },
      { value: 'healthcare', label: 'Healthcare / Nursing / Medicine' },
      { value: 'science', label: 'Natural Sciences / Mathematics / Research' },
      { value: 'finance', label: 'Finance / Accounting / Business' },
      { value: 'other', label: 'Other field' },
    ]
  },
  {
    id: 'experience',
    question: 'How many years of relevant work experience do you have?',
    options: [
      { value: '0-2', label: '0-2 years' },
      { value: '2-5', label: '2-5 years' },
      { value: '5-10', label: '5-10 years' },
      { value: '10+', label: 'More than 10 years' },
    ]
  },
  {
    id: 'age',
    question: 'What is your age?',
    helpText: 'Age affects Opportunity Card points and some visa options',
    options: [
      { value: 'under30', label: 'Under 30 years' },
      { value: '30-35', label: '30-35 years' },
      { value: '35-40', label: '35-40 years' },
      { value: '40-45', label: '40-45 years' },
      { value: '45+', label: '45 years or older' },
    ]
  },
  {
    id: 'germanLevel',
    question: 'What is your German language level?',
    helpText: 'Having a certificate (Goethe, telc, etc.) is recommended',
    options: [
      { value: 'none', label: 'No German knowledge' },
      { value: 'a1', label: 'A1 - Beginner' },
      { value: 'a2', label: 'A2 - Elementary' },
      { value: 'b1', label: 'B1 - Intermediate' },
      { value: 'b2', label: 'B2 - Upper Intermediate' },
      { value: 'c1+', label: 'C1 or higher - Advanced' },
    ]
  },
  {
    id: 'englishLevel',
    question: 'What is your English level?',
    helpText: 'Relevant for Opportunity Card if German is limited',
    options: [
      { value: 'basic', label: 'Basic / Conversational' },
      { value: 'b2', label: 'B2 - Professional working proficiency' },
      { value: 'c1+', label: 'C1+ / Native level' },
    ]
  },
  {
    id: 'currentCountry',
    question: 'Where are you currently located?',
    options: [
      { value: 'india', label: 'India' },
      { value: 'brazil', label: 'Brazil' },
      { value: 'philippines', label: 'Philippines' },
      { value: 'turkey', label: 'Turkey / Turkiye' },
      { value: 'nigeria', label: 'Nigeria' },
      { value: 'pakistan', label: 'Pakistan' },
      { value: 'egypt', label: 'Egypt' },
      { value: 'eu', label: 'EU/EEA country' },
      { value: 'other', label: 'Other country' },
    ]
  },
  {
    id: 'hasJobOffer',
    question: 'Do you have a job offer from a German company?',
    options: [
      { value: 'yes', label: 'Yes, I have a signed job offer/contract' },
      { value: 'interviewing', label: 'Currently in interview process' },
      { value: 'no', label: 'Not yet, still searching' },
    ]
  },
  {
    id: 'salary',
    question: 'What is your expected/offered gross annual salary in Germany?',
    helpText: 'This determines which visa types you qualify for',
    options: [
      { value: 'under40', label: 'Under €40,000/year' },
      { value: '40-44', label: '€40,000 - €43,999/year' },
      { value: '44-48', label: '€44,000 - €48,299/year (Blue Card shortage threshold)' },
      { value: '48-60', label: '€48,300 - €60,000/year (Blue Card standard threshold)' },
      { value: '60+', label: 'Over €60,000/year' },
      { value: 'unsure', label: 'Not sure yet' },
    ]
  },
  {
    id: 'familyStatus',
    question: 'What is your family situation?',
    helpText: 'This helps us provide family reunification guidance',
    options: [
      { value: 'single', label: 'Single, no dependents' },
      { value: 'married-no-kids', label: 'Married/Partner, no children' },
      { value: 'married-kids', label: 'Married/Partner with children' },
      { value: 'single-parent', label: 'Single parent with children' },
    ]
  },
  {
    id: 'spouseEducation',
    question: 'Does your spouse/partner have a university degree or professional qualification?',
    showIf: (answers: Partial<QuizAnswers>) =>
      answers.familyStatus === 'married-no-kids' || answers.familyStatus === 'married-kids',
    options: [
      { value: 'degree', label: 'Yes, university degree' },
      { value: 'vocational', label: 'Vocational qualification' },
      { value: 'none', label: 'No formal qualification' },
      { value: 'homemaker', label: 'Homemaker / Not planning to work' },
    ]
  },
  {
    id: 'children',
    question: 'How many children do you have, and what are their ages?',
    showIf: (answers: Partial<QuizAnswers>) =>
      answers.familyStatus === 'married-kids' || answers.familyStatus === 'single-parent',
    options: [
      { value: 'young', label: '1-2 children, under 6 years old' },
      { value: 'school-age', label: '1-2 children, 6-18 years old' },
      { value: 'mixed', label: 'Multiple children of different ages' },
      { value: 'adult', label: 'Children are 18+ (adults)' },
    ]
  },
]

function calculateOpportunityCardScore(answers: QuizAnswers): OpportunityCardScore {
  const breakdown: OpportunityCardScore['breakdown'] = []
  let total = 0

  // Qualification (max 4 points)
  let qualPoints = 0
  let qualDetail = ''
  if (answers.education === 'masters') {
    qualPoints = 4
    qualDetail = "Master's/PhD from recognized institution"
  } else if (answers.education === 'bachelors') {
    qualPoints = 3
    qualDetail = "Bachelor's degree recognized in Germany"
  } else if (answers.education === 'vocational') {
    qualPoints = 2
    qualDetail = 'Vocational qualification (if recognized)'
  } else {
    qualDetail = 'No recognized qualification'
  }
  breakdown.push({ category: 'Qualification', points: qualPoints, maxPoints: 4, detail: qualDetail })
  total += qualPoints

  // Work Experience (max 3 points)
  let expPoints = 0
  let expDetail = ''
  if (answers.experience === '10+' || answers.experience === '5-10') {
    expPoints = 3
    expDetail = '5+ years in last 7 years'
  } else if (answers.experience === '2-5') {
    expPoints = 2
    expDetail = '2-5 years relevant experience'
  } else {
    expDetail = 'Less than 2 years experience'
  }
  breakdown.push({ category: 'Work Experience', points: expPoints, maxPoints: 3, detail: expDetail })
  total += expPoints

  // German Language (max 4 points)
  let germanPoints = 0
  let germanDetail = ''
  if (answers.germanLevel === 'c1+') {
    germanPoints = 4
    germanDetail = 'C1+ German (excellent!)'
  } else if (answers.germanLevel === 'b2') {
    germanPoints = 3
    germanDetail = 'B2 German'
  } else if (answers.germanLevel === 'b1') {
    germanPoints = 2
    germanDetail = 'B1 German'
  } else if (answers.germanLevel === 'a2') {
    germanPoints = 1
    germanDetail = 'A2 German'
  } else {
    germanDetail = 'A1 or no German (need A1 OR B2 English)'
  }
  breakdown.push({ category: 'German Language', points: germanPoints, maxPoints: 4, detail: germanDetail })
  total += germanPoints

  // Age (max 2 points)
  let agePoints = 0
  let ageDetail = ''
  if (answers.age === 'under30' || answers.age === '30-35') {
    agePoints = 2
    ageDetail = 'Under 35 years old'
  } else if (answers.age === '35-40') {
    agePoints = 1
    ageDetail = '35-40 years old'
  } else {
    ageDetail = 'Over 40 (no age points, but still eligible)'
  }
  breakdown.push({ category: 'Age', points: agePoints, maxPoints: 2, detail: ageDetail })
  total += agePoints

  // Shortage occupation (1 point)
  let shortagePoints = 0
  let shortageDetail = ''
  if (['it', 'engineering', 'healthcare', 'science'].includes(answers.field)) {
    shortagePoints = 1
    shortageDetail = 'Field is in high demand in Germany'
  } else {
    shortageDetail = 'Not a designated shortage occupation'
  }
  breakdown.push({ category: 'Shortage Occupation', points: shortagePoints, maxPoints: 1, detail: shortageDetail })
  total += shortagePoints

  // English B2 bonus (if German is low)
  if (germanPoints < 2 && answers.englishLevel === 'b2' || answers.englishLevel === 'c1+') {
    // Note: English doesn't add points but satisfies the language requirement
    breakdown.push({
      category: 'English Proficiency',
      points: 0,
      maxPoints: 0,
      detail: 'B2+ English satisfies language requirement (no extra points)'
    })
  }

  return {
    total,
    breakdown,
    qualifies: total >= 6 && (answers.germanLevel !== 'none' || answers.englishLevel === 'b2' || answers.englishLevel === 'c1+')
  }
}

function calculateFamilyInfo(answers: QuizAnswers): FamilyInfo | null {
  if (answers.familyStatus === 'single') return null

  const hasSpouse = answers.familyStatus === 'married-no-kids' || answers.familyStatus === 'married-kids'
  const hasChildren = answers.familyStatus === 'married-kids' || answers.familyStatus === 'single-parent'

  let spouseVisa = ''
  let spouseWorkRights = ''
  let spouseGermanNeeded = ''

  if (hasSpouse) {
    spouseVisa = 'Your spouse can apply for a family reunification visa (Familiennachzug) at the same time as your visa, or join you after you arrive.'

    // Work rights depend on your visa type
    spouseWorkRights = 'With Blue Card: Your spouse gets UNLIMITED work permit - can work any job without restrictions. With Skilled Worker visa: Same unlimited work rights. With Opportunity Card: Spouse can work up to 20h/week.'

    if (answers.spouseEducation === 'degree') {
      spouseGermanNeeded = 'No German required for visa if joining Blue Card holder. However, learning German will help with job search and integration. If spouse wants their own work visa, German A1-B1 may be needed depending on field.'
    } else {
      spouseGermanNeeded = 'Basic German (A1) is officially required for family reunification, but often waived for spouses of Blue Card holders. Strongly recommend starting German lessons for better integration and job prospects.'
    }
  }

  let childrenInfo = ''
  if (hasChildren) {
    if (answers.children === 'young') {
      childrenInfo = 'Children under 6: Free daycare (Kita) available in most cities (though waitlists exist). No school enrollment needed yet. Children automatically get residence permit tied to yours.'
    } else if (answers.children === 'school-age') {
      childrenInfo = 'School-age children: Will attend German public school (free). Many cities have "welcome classes" (Willkommensklassen) for non-German speakers. Children typically become fluent within 1-2 years. Consider international schools in big cities if budget allows (€10-20K/year).'
    } else if (answers.children === 'mixed') {
      childrenInfo = 'Mixed ages: Younger children adapt faster to German. School-age children will attend public school with language support. The German education system has excellent support for immigrant children.'
    } else {
      childrenInfo = 'Adult children (18+): Cannot come on family reunification. Would need their own visa (student visa, work visa, etc.).'
    }
  }

  const familyBenefits = [
    'Kindergeld: €250/month per child (tax-free!) regardless of your income',
    'Elterngeld: Up to 67% of salary (max €1,800/month) if parent takes parental leave',
    'Free public schooling from age 6 through university',
    'Subsidized daycare (Kita) - often €0-400/month depending on city and income',
    'Family health insurance: Spouse and children covered under your insurance at no extra cost',
  ]

  const taxBenefits = []
  if (hasSpouse) {
    taxBenefits.push('Ehegattensplitting: Married couples can file jointly, potentially saving €5,000-15,000/year in taxes if one spouse earns significantly less')
    taxBenefits.push('Tax class optimization: You can choose tax classes (III/V or IV/IV) to optimize monthly take-home pay')
  }
  if (hasChildren) {
    taxBenefits.push('Kinderfreibetrag: Tax deduction of €8,952 per child (alternative to Kindergeld, whichever is higher)')
    taxBenefits.push('Childcare costs: Up to €4,000/year per child tax deductible')
    taxBenefits.push('School supplies and extracurriculars may be partially deductible')
  }

  return {
    spouseVisa,
    spouseWorkRights,
    spouseGermanNeeded,
    childrenInfo,
    familyBenefits,
    taxBenefits,
  }
}

function calculatePRCitizenshipPath(answers: QuizAnswers): PRCitizenshipPath {
  const hasBlueCard = ['44-48', '48-60', '60+'].includes(answers.salary) ||
    (answers.field === 'it' && ['2-5', '5-10', '10+'].includes(answers.experience))

  let prTimeline = ''
  let prRequirements: string[] = []
  let fastTrackTip = ''

  if (hasBlueCard) {
    if (['b1', 'b2', 'c1+'].includes(answers.germanLevel)) {
      prTimeline = '21 months with B1 German'
      fastTrackTip = 'You could have permanent residence in under 2 years! This is one of the fastest paths in all of Europe.'
    } else {
      prTimeline = '33 months with A1 German (or 21 months if you reach B1)'
      fastTrackTip = 'Start German now! Reaching B1 cuts your PR timeline by a full year.'
    }
    prRequirements = [
      'Continuous employment in Germany for the full period',
      '33 months pension contributions (reduced to 21 with B1 German)',
      'Adequate living space for your family',
      'Basic German (A1 minimum, B1 for fast-track)',
      'No serious criminal record',
      'Valid health insurance',
    ]
  } else {
    prTimeline = '4 years (standard path)'
    prRequirements = [
      '4 years of continuous residence in Germany',
      '48 months of pension contributions',
      'B1 German language certificate',
      'Basic knowledge of German legal/social system',
      'Adequate living space',
      'Ability to support yourself without public benefits',
    ]
    fastTrackTip = 'If you can negotiate a salary above €44K, you\'d qualify for Blue Card and could get PR in 21-33 months instead of 4 years!'
  }

  // Citizenship
  const citizenshipTimeline = answers.germanLevel === 'c1+'
    ? '6 years (reduced from 8 with excellent German)'
    : answers.germanLevel === 'b2' || answers.germanLevel === 'b1'
    ? '7 years (reduced with good integration)'
    : '8 years (standard path)'

  const citizenshipRequirements = [
    `${citizenshipTimeline.split(' ')[0]} of legal residence in Germany`,
    'B1 German certificate (C1 for reduced timeline)',
    'Pass citizenship test (Einbürgerungstest) - 33 questions about Germany',
    'Financial self-sufficiency',
    'No criminal record',
    'Renounce previous citizenship (with some exceptions for EU, Switzerland, and hardship cases)',
    'Commitment to German constitution (Grundgesetz)',
  ]

  return {
    prTimeline,
    prRequirements,
    citizenshipTimeline,
    citizenshipRequirements,
    fastTrackTip,
  }
}

function calculateEligibility(answers: QuizAnswers): EligibilityResult {
  const visaTypes: EligibilityResult['visaTypes'] = []

  const hasDegree = ['bachelors', 'masters'].includes(answers.education)
  const isShortageField = ['it', 'engineering', 'healthcare', 'science'].includes(answers.field)
  const hasHighSalary = ['48-60', '60+'].includes(answers.salary)
  const hasMidSalary = ['44-48'].includes(answers.salary)
  const hasJobOffer = answers.hasJobOffer === 'yes'
  const hasExperience = ['2-5', '5-10', '10+'].includes(answers.experience)
  const hasSignificantExperience = ['5-10', '10+'].includes(answers.experience)

  // EU Blue Card - IT Specialist (no degree needed)
  if (answers.field === 'it' && hasExperience && (hasMidSalary || hasHighSalary || answers.salary === '40-44')) {
    visaTypes.push({
      name: 'EU Blue Card (IT Specialist Route)',
      match: hasJobOffer ? 'high' : 'medium',
      description: 'Since Nov 2023, IT specialists with 3+ years experience can get Blue Card WITHOUT a degree. This is your best path.',
      requirements: [
        '3+ years of IT work experience (verifiable)',
        'Job offer with minimum €43,759 gross salary',
        'No German language required for application',
        'No degree required for IT specialists',
      ],
      nextSteps: [
        'Gather proof of IT experience (reference letters, contracts, LinkedIn)',
        'Prepare GitHub portfolio or technical documentation',
        hasJobOffer ? 'Schedule embassy appointment immediately' : 'Focus job search on companies that sponsor visas',
        'Start A1 German for faster path to permanent residence',
      ]
    })
  }

  // Standard EU Blue Card
  if (hasDegree && (hasHighSalary || (isShortageField && hasMidSalary))) {
    visaTypes.push({
      name: 'EU Blue Card',
      match: hasJobOffer ? 'high' : 'medium',
      description: `The premium work visa. Fast-track to PR in ${['b1', 'b2', 'c1+'].includes(answers.germanLevel) ? '21' : '33'} months. Family gets full work rights.`,
      requirements: [
        'Recognized university degree',
        isShortageField ? 'Min €43,759 salary (shortage occupation)' : 'Min €48,300 salary',
        'No German required for visa',
        'Job matching your qualification',
      ],
      nextSteps: [
        'Verify degree on anabin.kmk.org',
        hasJobOffer ? 'Prepare visa documents' : 'Job search: LinkedIn, StepStone, company career pages',
        'Schedule embassy appointment (book early - 4-8 week wait)',
        'Start German A1 for faster PR path',
      ]
    })
  }

  // Opportunity Card calculation
  const opportunityCardScore = calculateOpportunityCardScore(answers)
  if (opportunityCardScore.qualifies) {
    visaTypes.push({
      name: 'Opportunity Card (Chancenkarte)',
      match: hasJobOffer ? 'low' : (answers.hasJobOffer === 'no' ? 'high' : 'medium'),
      description: `Job seeker visa - come to Germany and search for up to 1 year. You score ${opportunityCardScore.total} points (need 6).`,
      requirements: [
        `6+ points required (you have ${opportunityCardScore.total})`,
        'A1 German OR B2 English certificate',
        'Proof of funds (~€12,324 in blocked account)',
        'Health insurance coverage',
      ],
      nextSteps: [
        answers.germanLevel === 'none' ? 'Get A1 German OR B2 English certificate' : 'Prepare language certificate',
        'Open German blocked account (Expatrio, Fintiba)',
        'Book embassy appointment for Chancenkarte',
        'Plan job search strategy for when you arrive',
      ]
    })
  }

  // Skilled Worker Visa
  if ((answers.education === 'vocational' && hasExperience) ||
      (hasDegree && answers.salary === '40-44' && !isShortageField)) {
    visaTypes.push({
      name: 'Skilled Worker Visa (§18a/18b)',
      match: hasJobOffer ? 'medium' : 'low',
      description: 'For qualified professionals when Blue Card threshold isn\'t met. No salary minimum but needs qualification recognition.',
      requirements: [
        'Recognized qualification (degree or vocational)',
        'Job offer matching your qualification',
        'Qualification recognition may be needed',
        'German often required depending on role',
      ],
      nextSteps: [
        'Apply for qualification recognition (Anerkennung)',
        'Check if partial recognition possible',
        answers.field === 'healthcare' ? 'Start B1-B2 German immediately' : 'Improve German to B1',
        'Target jobs that match your exact qualification',
      ]
    })
  }

  // Healthcare specific path
  if (answers.field === 'healthcare') {
    visaTypes.push({
      name: 'Healthcare Professional Path',
      match: ['b1', 'b2', 'c1+'].includes(answers.germanLevel) ? 'high' : 'medium',
      description: 'Germany desperately needs healthcare workers. Special programs exist (Triple Win for nurses). B1-B2 German is mandatory.',
      requirements: [
        'Nursing/medical qualification',
        'B1-B2 German (non-negotiable for patient care)',
        'Qualification recognition (Anerkennung)',
        'May need adaptation course (Anpassungslehrgang)',
      ],
      nextSteps: [
        ['b1', 'b2', 'c1+'].includes(answers.germanLevel)
          ? 'Apply for Anerkennung immediately'
          : 'Priority #1: Reach B1 German (this is your biggest hurdle)',
        'Research Triple Win program (for nurses from select countries)',
        'Check anabin for your qualification',
        'Connect with German healthcare recruiters',
      ]
    })
  }

  // Generate comprehensive roadmap
  const roadmap = generateComprehensiveRoadmap(answers, visaTypes)
  const prCitizenshipPath = calculatePRCitizenshipPath(answers)
  const familyInfo = calculateFamilyInfo(answers)
  const germanNeeded = getGermanRequirement(answers)
  const estimatedTimeline = getTimeline(answers, visaTypes)

  return {
    eligible: visaTypes.length > 0,
    visaTypes: visaTypes.slice(0, 3),
    opportunityCardScore: opportunityCardScore.qualifies || opportunityCardScore.total >= 4 ? opportunityCardScore : null,
    roadmap,
    prCitizenshipPath,
    familyInfo,
    germanNeeded,
    estimatedTimeline,
  }
}

function generateComprehensiveRoadmap(answers: QuizAnswers, visaTypes: EligibilityResult['visaTypes']): EligibilityResult['roadmap'] {
  const roadmap: EligibilityResult['roadmap'] = []
  const needsGerman = ['none', 'a1'].includes(answers.germanLevel)
  const needsJob = answers.hasJobOffer !== 'yes'
  const hasFamily = answers.familyStatus !== 'single'

  // Phase 1: Preparation
  const prepTasks = [
    'Verify degree/qualification recognition on anabin.kmk.org',
    'Gather documents: certificates, work references, passport (6+ months validity)',
  ]
  if (needsGerman) {
    prepTasks.push('Start German course - aim for A1 minimum (we can help!)')
  }
  if (hasFamily) {
    prepTasks.push('Gather family documents: marriage certificate, birth certificates')
    prepTasks.push('Research family visa requirements at your embassy')
  }
  prepTasks.push('Open blocked bank account if going Opportunity Card route')

  roadmap.push({
    phase: '1',
    title: 'Preparation',
    duration: '1-2 months',
    tasks: prepTasks,
  })

  // Phase 2: Job Search (if needed)
  if (needsJob) {
    roadmap.push({
      phase: '2',
      title: 'Job Search',
      duration: '2-4 months',
      tasks: [
        'Update LinkedIn with German-focused profile',
        'Apply daily: LinkedIn, StepStone, Glassdoor, XING',
        'Target companies known to sponsor: SAP, Siemens, Delivery Hero, N26, Zalando',
        'Prepare for video interviews (common for international hiring)',
        'Negotiate salary above €44K threshold if possible (for Blue Card)',
      ],
    })
  }

  // Phase 3: Visa Application
  const visaPhase = needsJob ? '3' : '2'
  const visaTasks = [
    'Book embassy appointment ASAP (4-8 weeks wait in most countries)',
    'Prepare visa documents (check specific list for your embassy)',
    'Get documents apostilled/legalized if required',
  ]
  if (hasFamily) {
    visaTasks.push('Apply for family visas simultaneously (spouse + children)')
    visaTasks.push('Prepare proof of relationship (marriage certificate, etc.)')
  }
  visaTasks.push('Attend visa interview')

  roadmap.push({
    phase: visaPhase,
    title: 'Visa Application',
    duration: '2-4 months',
    tasks: visaTasks,
  })

  // Phase 4: Arrival & Settlement
  const arrivalPhase = needsJob ? '4' : '3'
  const arrivalTasks = [
    'Anmeldung (register address) within 14 days - CRITICAL!',
    'Open German bank account (N26, Commerzbank)',
    'Activate health insurance',
    'Apply for residence permit at Ausländerbehörde',
    'Get tax ID (Steuer-ID) - sent automatically after Anmeldung',
  ]
  if (hasFamily) {
    arrivalTasks.push('Register family members (Anmeldung for all)')
    if (answers.familyStatus === 'married-kids' || answers.familyStatus === 'single-parent') {
      arrivalTasks.push('Apply for Kindergeld (€250/month per child)')
      arrivalTasks.push('Register children for Kita/school')
    }
  }

  roadmap.push({
    phase: arrivalPhase,
    title: 'Land & Settle',
    duration: 'First 2-4 weeks',
    tasks: arrivalTasks,
  })

  // Phase 5: Integration & PR Path
  const prPhase = needsJob ? '5' : '4'
  roadmap.push({
    phase: prPhase,
    title: 'Integration & Path to PR',
    duration: 'Months 1-21/33',
    tasks: [
      'Continue German learning - aim for B1 for faster PR',
      'Build professional network in Germany',
      'Explore German culture, join local groups/sports clubs',
      hasFamily ? 'Support family integration: spouse German classes, children school adaptation' : 'Build social connections',
      'Track pension contributions (needed for PR)',
      'After 21-33 months: Apply for permanent residence (Niederlassungserlaubnis)',
    ],
  })

  return roadmap
}

function getGermanRequirement(answers: QuizAnswers): string {
  if (answers.field === 'healthcare') {
    return 'B1-B2 German is MANDATORY for healthcare roles. This is your #1 priority. Patient communication requires fluent German. Start immediately - it takes 6-12 months to reach B1.'
  }
  if (answers.field === 'it') {
    return 'Not required for most tech jobs - English is common. However, A2-B1 German helps with: daily life, faster permanent residence (21 vs 33 months), career growth, and actually enjoying life in Germany.'
  }
  if (['engineering', 'science'].includes(answers.field)) {
    return 'A2-B1 recommended. Many engineering roles involve German documentation, client meetings, or teamwork with German colleagues. The higher your German, the more job options you have.'
  }
  return 'A2-B1 recommended for daily life and career growth. While you can start work in English at international companies, German opens more opportunities and helps you integrate.'
}

function getTimeline(answers: QuizAnswers, visaTypes: EligibilityResult['visaTypes']): string {
  if (answers.hasJobOffer === 'yes') {
    return '3-5 months to arrival in Germany'
  }
  if (visaTypes.some(v => v.match === 'high')) {
    return '5-8 months including job search'
  }
  return '6-12 months depending on job search and visa processing'
}

export default function EligibilityQuiz({ onClose }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [result, setResult] = useState<EligibilityResult | null>(null)
  const [email, setEmail] = useState('')
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [activeResultTab, setActiveResultTab] = useState<'visa' | 'pr' | 'family'>('visa')

  // Filter questions based on conditional logic
  const activeQuestions = questions.filter(q => {
    if (!q.showIf) return true
    return q.showIf(answers)
  })

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    // Track quiz progress
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Quiz Progress', { props: { step: currentQuestion + 1, question: questionId } })
    }

    // Find next question index
    const currentQuestionObj = activeQuestions[currentQuestion]
    const remainingQuestions = questions.slice(questions.indexOf(currentQuestionObj) + 1)
    const nextQuestion = remainingQuestions.find(q => !q.showIf || q.showIf(newAnswers))

    if (nextQuestion && activeQuestions.indexOf(currentQuestionObj) < activeQuestions.length - 1) {
      // Move to next applicable question
      const newActiveQuestions = questions.filter(q => !q.showIf || q.showIf(newAnswers))
      const nextIndex = newActiveQuestions.indexOf(nextQuestion)
      setCurrentQuestion(nextIndex !== -1 ? Math.min(currentQuestion + 1, newActiveQuestions.length - 1) : currentQuestion + 1)
    } else if (currentQuestion < activeQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate result
      const eligibilityResult = calculateEligibility(newAnswers as QuizAnswers)
      setResult(eligibilityResult)
      setShowEmailCapture(true)

      // Track quiz completion
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('Quiz Completed', {
          props: {
            eligible: eligibilityResult.eligible,
            topVisa: eligibilityResult.visaTypes[0]?.name || 'none',
            hasFamily: newAnswers.familyStatus !== 'single',
            opportunityCardPoints: eligibilityResult.opportunityCardScore?.total || 0,
          }
        })
      }
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email captured:', email, 'Answers:', answers)

    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Email Captured', { props: { source: 'eligibility-quiz' } })
    }

    setEmailSubmitted(true)
    setShowEmailCapture(false)
  }

  const progress = ((currentQuestion + 1) / activeQuestions.length) * 100

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🇩🇪</span>
            <div>
              <span className="font-bold text-white">Germany Eligibility Check</span>
              <span className="text-xs text-gray-400 block">Comprehensive assessment</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!result ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Question {currentQuestion + 1} of {activeQuestions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-2">
                  {activeQuestions[currentQuestion].question}
                </h2>
                {activeQuestions[currentQuestion].helpText && (
                  <p className="text-sm text-gray-400 mb-4">
                    {activeQuestions[currentQuestion].helpText}
                  </p>
                )}

                <div className="space-y-3">
                  {activeQuestions[currentQuestion].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(activeQuestions[currentQuestion].id, option.value)}
                      className="w-full p-4 text-left bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-yellow-500/50 rounded-xl text-white transition-all duration-200"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Back Button */}
              {currentQuestion > 0 && (
                <button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  className="text-gray-400 hover:text-white text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}
            </>
          ) : (
            /* Results */
            <div>
              {/* Email Capture */}
              {showEmailCapture && !emailSubmitted && (
                <div className="mb-8 p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Get Your Complete Roadmap via Email
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Receive your personalized visa guide, document checklist, PR timeline, and family integration resources.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold rounded-lg transition-colors"
                    >
                      Send
                    </button>
                  </form>
                  <button
                    onClick={() => setShowEmailCapture(false)}
                    className="mt-3 text-sm text-gray-400 hover:text-white"
                  >
                    Skip for now
                  </button>
                </div>
              )}

              {emailSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-300">Check your email for your complete guide!</span>
                </div>
              )}

              {/* Eligibility Status */}
              <div className={`mb-6 p-6 rounded-xl border ${result.eligible ? 'bg-green-500/10 border-green-500/30' : 'bg-yellow-500/10 border-yellow-500/30'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${result.eligible ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
                    {result.eligible ? '✓' : '⚡'}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${result.eligible ? 'text-green-400' : 'text-yellow-400'}`}>
                      {result.eligible ? 'Great news! You have multiple options.' : 'You may need more preparation'}
                    </h3>
                    <p className="text-gray-300">
                      Estimated timeline: <span className="font-semibold">{result.estimatedTimeline}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 border-b border-gray-700 pb-2">
                {[
                  { id: 'visa', label: 'Visa Options', icon: '📋' },
                  { id: 'pr', label: 'PR & Citizenship', icon: '🏠' },
                  ...(result.familyInfo ? [{ id: 'family', label: 'Family', icon: '👨‍👩‍👧' }] : []),
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveResultTab(tab.id as any)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeResultTab === tab.id
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content: Visa Options */}
              {activeResultTab === 'visa' && (
                <div className="space-y-6">
                  {/* Opportunity Card Score */}
                  {result.opportunityCardScore && (
                    <div className="p-5 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-white">Opportunity Card Points</h4>
                        <span className={`text-2xl font-bold ${result.opportunityCardScore.qualifies ? 'text-green-400' : 'text-yellow-400'}`}>
                          {result.opportunityCardScore.total}/14
                        </span>
                      </div>
                      <div className="space-y-2">
                        {result.opportunityCardScore.breakdown.map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{item.category}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 text-xs">{item.detail}</span>
                              <span className={`font-bold ${item.points > 0 ? 'text-green-400' : 'text-gray-500'}`}>
                                +{item.points}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-purple-500/30">
                        <p className={`text-sm ${result.opportunityCardScore.qualifies ? 'text-green-400' : 'text-yellow-400'}`}>
                          {result.opportunityCardScore.qualifies
                            ? '✓ You qualify for Opportunity Card (6+ points)'
                            : `Need ${6 - result.opportunityCardScore.total} more points for Opportunity Card`}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Visa Options */}
                  {result.visaTypes.map((visa, index) => (
                    <div
                      key={index}
                      className={`p-5 rounded-xl border ${
                        visa.match === 'high'
                          ? 'bg-green-500/10 border-green-500/30'
                          : visa.match === 'medium'
                          ? 'bg-blue-500/10 border-blue-500/30'
                          : 'bg-gray-800/50 border-gray-700'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-white">{visa.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          visa.match === 'high'
                            ? 'bg-green-500/20 text-green-400'
                            : visa.match === 'medium'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-gray-700 text-gray-400'
                        }`}>
                          {visa.match === 'high' ? 'Best Match' : visa.match === 'medium' ? 'Good Option' : 'Alternative'}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{visa.description}</p>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-xs font-semibold text-gray-400 uppercase mb-2">Requirements</h5>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {visa.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-gray-500">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-gray-400 uppercase mb-2">Next Steps</h5>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {visa.nextSteps.map((step, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-yellow-500">{i + 1}.</span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* German Language */}
                  <div className="p-5 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">🇩🇪</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-2">German Language Requirement</h4>
                        <p className="text-gray-300 text-sm">{result.germanNeeded}</p>
                        <Link
                          href="/vocabulary-review"
                          onClick={onClose}
                          className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 text-sm font-medium"
                        >
                          Start learning German free →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: PR & Citizenship */}
              {activeResultTab === 'pr' && (
                <div className="space-y-6">
                  {/* Fast Track Tip */}
                  {result.prCitizenshipPath.fastTrackTip && (
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                      <p className="text-yellow-300 text-sm">
                        <strong>💡 Tip:</strong> {result.prCitizenshipPath.fastTrackTip}
                      </p>
                    </div>
                  )}

                  {/* Permanent Residence */}
                  <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🏠</span>
                      <div>
                        <h4 className="font-bold text-white">Permanent Residence (Niederlassungserlaubnis)</h4>
                        <span className="text-green-400 font-semibold">{result.prCitizenshipPath.prTimeline}</span>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-2">
                      {result.prCitizenshipPath.prRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Citizenship */}
                  <div className="p-5 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🇩🇪</span>
                      <div>
                        <h4 className="font-bold text-white">German Citizenship</h4>
                        <span className="text-purple-400 font-semibold">{result.prCitizenshipPath.citizenshipTimeline}</span>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-2">
                      {result.prCitizenshipPath.citizenshipRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-purple-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline Visualization */}
                  <div className="p-5 bg-gray-800/50 border border-gray-700 rounded-xl">
                    <h4 className="font-bold text-white mb-4">Your Long-Term Path</h4>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />
                      {[
                        { time: 'Day 1', title: 'Arrive in Germany', color: 'yellow' },
                        { time: result.prCitizenshipPath.prTimeline.split(' ')[0], title: 'Permanent Residence Eligible', color: 'green' },
                        { time: result.prCitizenshipPath.citizenshipTimeline.split(' ')[0], title: 'Citizenship Eligible', color: 'purple' },
                      ].map((milestone, i) => (
                        <div key={i} className="flex items-center gap-4 mb-6 last:mb-0">
                          <div className={`w-8 h-8 rounded-full bg-${milestone.color}-500/20 border-2 border-${milestone.color}-500 flex items-center justify-center z-10`}>
                            <div className={`w-3 h-3 rounded-full bg-${milestone.color}-500`} />
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">{milestone.time}</div>
                            <div className="font-medium text-white">{milestone.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content: Family */}
              {activeResultTab === 'family' && result.familyInfo && (
                <div className="space-y-6">
                  {/* Spouse Information */}
                  {result.familyInfo.spouseVisa && (
                    <div className="p-5 bg-pink-500/10 border border-pink-500/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">👫</span>
                        <h4 className="font-bold text-white">Spouse/Partner</h4>
                      </div>
                      <div className="space-y-4 text-sm">
                        <div>
                          <h5 className="font-semibold text-pink-400 mb-1">Visa Process</h5>
                          <p className="text-gray-300">{result.familyInfo.spouseVisa}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-pink-400 mb-1">Work Rights</h5>
                          <p className="text-gray-300">{result.familyInfo.spouseWorkRights}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-pink-400 mb-1">German Language</h5>
                          <p className="text-gray-300">{result.familyInfo.spouseGermanNeeded}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Children Information */}
                  {result.familyInfo.childrenInfo && (
                    <div className="p-5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">👶</span>
                        <h4 className="font-bold text-white">Children</h4>
                      </div>
                      <p className="text-gray-300 text-sm">{result.familyInfo.childrenInfo}</p>
                    </div>
                  )}

                  {/* Family Benefits */}
                  <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🎁</span>
                      <h4 className="font-bold text-white">Family Benefits in Germany</h4>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-2">
                      {result.familyInfo.familyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tax Benefits */}
                  {result.familyInfo.taxBenefits.length > 0 && (
                    <div className="p-5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">💰</span>
                        <h4 className="font-bold text-white">Tax Benefits for Families</h4>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-2">
                        {result.familyInfo.taxBenefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-yellow-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Roadmap (always visible at bottom) */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Your Complete Roadmap</h3>
                <div className="space-y-4">
                  {result.roadmap.map((phase, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-gray-900 font-bold text-sm">
                          {phase.phase}
                        </div>
                        {index < result.roadmap.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-700 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-white">{phase.title}</h4>
                          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                            {phase.duration}
                          </span>
                        </div>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/mentors?category=life-in-germany"
                  onClick={onClose}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-gray-900 font-bold rounded-xl text-center transition-colors"
                >
                  Talk to Someone Who Did It
                </Link>
                <Link
                  href="/vocabulary-review"
                  onClick={onClose}
                  className="flex-1 px-6 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white font-bold rounded-xl text-center transition-colors"
                >
                  Start Learning German
                </Link>
              </div>

              {/* Disclaimer */}
              <p className="mt-6 text-xs text-gray-500 text-center">
                This assessment is for informational purposes only. Immigration laws change frequently.
                Verify with official sources (make-it-in-germany.com) and consult an immigration lawyer for your specific case.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
