export type Goal = 'weight-loss' | 'recovery' | 'glow' | 'vitality'

export interface Product {
  id: string
  name: string
  slug: string
  tag: string
  tagline: string
  sizes: string[]
  goalMatch: Goal
  description: string
  copy: string
}

export const products: Product[] = [
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    slug: '/products/retatrutide',
    tag: 'WEIGHT LOSS',
    tagline: 'A next-generation metabolic support formulation.',
    sizes: ['10mg', '15mg', '20mg'],
    goalMatch: 'weight-loss',
    description: 'A next-generation GLP-1/GIP/glucagon triple agonist. Commonly chosen for metabolic and body composition goals.',
    copy: 'A next-generation GLP-1/GIP/glucagon triple agonist. Commonly chosen for metabolic and body composition goals.',
  },
  {
    id: 'glow',
    name: 'Glow Peptide',
    slug: '/products/glow',
    tag: 'SKIN & REJUVENATION',
    tagline: 'GHK-Cu + BPC-157 + TB-500. Cellular repair from the inside out.',
    sizes: ['80mg'],
    goalMatch: 'glow',
    description: 'A precision blend of GHK-Cu, BPC-157, and TB-500. Designed for cellular repair, skin support, and radiance.',
    copy: 'A precision blend of GHK-Cu, BPC-157, and TB-500. Designed for cellular repair, skin support, and radiance.',
  },
  {
    id: 'nad',
    name: 'NAD+',
    slug: '/products/nad',
    tag: 'VITALITY & LONGEVITY',
    tagline: 'Cellular energy support for the long game.',
    sizes: ['500mg'],
    goalMatch: 'vitality',
    description: 'Nicotinamide adenine dinucleotide. Supports cellular energy, cognitive clarity, and long-term vitality.',
    copy: 'Nicotinamide adenine dinucleotide. Supports cellular energy, cognitive clarity, and long-term vitality.',
  },
  {
    id: 'bpc-tb',
    name: 'BPC + TB',
    slug: '/products/bpc-tb',
    tag: 'RECOVERY',
    tagline: 'BPC-157 and TB-500. Recovery and tissue support combined.',
    sizes: ['10mg'],
    goalMatch: 'recovery',
    description: 'BPC-157 and TB-500 combined. Commonly chosen for recovery support, tissue repair, and joint wellness.',
    copy: 'BPC-157 and TB-500 combined. Commonly chosen for recovery support, tissue repair, and joint wellness.',
  },
]

export const testimonials = [
  {
    id: 1,
    quote: "I didn't know where to start. The assessment pointed me straight to what I needed.",
    name: 'Marcus T.',
    goal: 'Weight Loss',
  },
  {
    id: 2,
    quote: 'My skin has genuinely never looked better. Three months in and I\'m not stopping.',
    name: 'Priya S.',
    goal: 'Glow',
  },
  {
    id: 3,
    quote: 'Back in the gym consistently for the first time in two years.',
    name: 'Jake M.',
    goal: 'Recovery',
  },
]

export const quizQuestions = [
  {
    id: 1,
    question: "What's your primary goal right now?",
    options: [
      'Lose weight / change body composition',
      'Repair and recover (joints, tissue, performance)',
      'Look and feel better in my skin',
      'Boost energy, longevity, and overall vitality',
    ],
  },
  {
    id: 2,
    question: 'How would you describe your current activity level?',
    options: [
      'Sedentary / mostly desk-based',
      'Light activity / occasional exercise',
      'Regularly active / gym 3–4x week',
      'High performance / daily training',
    ],
  },
  {
    id: 3,
    question: 'How long have you been struggling with this goal?',
    options: [
      'Just starting to think about it',
      'A few months',
      'Over a year',
      "It's been an ongoing battle",
    ],
  },
  {
    id: 4,
    question: 'Have you tried anything before to address this goal?',
    options: [
      'No, this is new for me',
      'Yes — diet/exercise changes',
      'Yes — other supplements or protocols',
      'Yes — medical or clinical interventions',
    ],
  },
  {
    id: 5,
    question: 'Which of these resonates most with how you feel right now?',
    options: [
      'My weight is holding me back',
      'My body doesn\'t recover the way it used to',
      'My skin and appearance have changed and I want it back',
      'I feel depleted, foggy, or like I\'ve lost my edge',
    ],
  },
  {
    id: 6,
    question: 'What matters most to you in a wellness protocol?',
    options: [
      'Fast, visible results',
      'Long-term health and prevention',
      'Natural / low-intervention approaches',
      'Clinically-backed formulations',
    ],
  },
  {
    id: 7,
    question: 'Which timeline fits your goals?',
    options: [
      'I want results in the next 30 days',
      'I\'m playing a 3–6 month game',
      'I\'m thinking long-term (1 year+)',
      "I'm not sure yet",
    ],
  },
]

export const quizResultsMap: Record<Goal, { name: string; slug: string; tag: string; rationale: string }> = {
  'weight-loss': {
    name: 'Retatrutide',
    slug: '/products/retatrutide',
    tag: 'WEIGHT LOSS',
    rationale: 'Based on your goal of metabolic support and body recomposition, Retatrutide is commonly chosen to support weight management. This formulation is designed for those seeking a provider-guided approach to metabolic wellness.',
  },
  recovery: {
    name: 'BPC + TB',
    slug: '/products/bpc-tb',
    tag: 'RECOVERY',
    rationale: 'Based on your goal of recovery and tissue support, BPC + TB is commonly chosen to support joint and performance repair. This formulation is designed for those focused on getting back to peak physical function.',
  },
  glow: {
    name: 'Glow Peptide',
    slug: '/products/glow',
    tag: 'SKIN & GLOW',
    rationale: 'Based on your goal of skin and cellular rejuvenation, Glow Peptide is commonly chosen to support radiance and cellular repair. This formulation is designed for those prioritizing a visible, inside-out transformation.',
  },
  vitality: {
    name: 'NAD+',
    slug: '/products/nad',
    tag: 'VITALITY',
    rationale: 'Based on your goal of energy and long-term vitality, NAD+ is commonly chosen to support cellular energy and cognitive clarity. This formulation is designed for those playing the long game in wellness.',
  },
}
