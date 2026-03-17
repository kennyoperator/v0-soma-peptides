// Soma Solutions — centralized copy strings
// All user-facing text lives here for easy i18n swap

export const BRAND = {
  name: 'Soma Solutions',
  short: 'SOMA.',
  tagline: "Vietnam's Trusted Peptide Source",
  sub: 'Lab-tested peptides delivered same-day in HCMC. English support. Discreet packaging. Real results.',
  whatsapp: 'https://wa.me/84000000000?text=Hi%20Soma%20Solutions%2C%20I%27m%20interested%20in%20ordering.',
  telegram: 'https://t.me/somasolutions',
  zalo: 'https://zalo.me/somasolutions',
  email: 'hello@somasolutions.com',
  disclaimer:
    'Products are sold for research purposes only. Not intended for human consumption. Not evaluated by any regulatory authority. Consult a licensed healthcare professional before use.',
}

export const TRUST_BADGES = [
  { label: '99.9% Purity Verified' },
  { label: 'US Lab Tested (TrustPointe Analytics)' },
  { label: 'Same-Day Delivery in HCMC' },
  { label: 'English Support' },
  { label: 'Discreet Shipping' },
]

export const PRODUCTS = [
  {
    id: 'tirzepatide',
    name: 'Tirzepatide',
    slug: '/products/tirzepatide',
    tag: 'GLP-1 / GIP',
    descriptor: 'GLP-1/GIP dual agonist for weight management research',
    quantity: '30mg vial',
    priceVnd: '5,000,000 VND',
    priceUsd: '~$200 USD',
    included: ['1x 30mg vial', '1x 1mL insulin syringe', '1x 3mL bacteriostatic water'],
    purity: '99.594%',
    coaPublished: '2025-12-30',
  },
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    slug: '/products/retatrutide',
    tag: 'GLP-1 / GIP / Glucagon',
    descriptor: 'Triple agonist — the next generation in metabolic research',
    quantity: '20mg vial',
    priceVnd: '5,500,000 VND',
    priceUsd: '~$220 USD',
    included: ['1x 20mg vial', '1x 1mL insulin syringe', '1x 3mL bacteriostatic water'],
    purity: '99.5%+',
    coaPublished: '2025-12-30',
  },
  {
    id: 'glow',
    name: 'GLOW',
    slug: '/products/glow',
    tag: 'GHK-Cu / BPC-157 / TB-500',
    descriptor: 'Skin, glow, and cellular health support blend',
    quantity: '50/10/10 blend',
    priceVnd: '2,000,000 VND',
    priceUsd: '~$80 USD',
    included: ['1x GLOW blend vial', '1x 1mL insulin syringe', '1x 3mL bacteriostatic water'],
    purity: '99%+',
    coaPublished: '2025-12-30',
  },
]

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Choose Your Product',
    description: 'Browse our products or message us on WhatsApp or Telegram — we\'ll help you find the right fit for your goals.',
  },
  {
    number: '02',
    title: 'Order via WhatsApp or Checkout',
    description: 'Place your order on our site, or message us directly. We confirm within minutes and answer any questions.',
  },
  {
    number: '03',
    title: 'Delivered to Your Door',
    description: 'Same-day delivery in HCMC (1–4 hours after confirmation). Nationwide delivery in 2–4 days, fully tracked.',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Down 8kg in 3 months. The ordering process was so simple and the delivery was at my door within 2 hours. Genuinely impressive.',
    name: 'James H.',
    city: 'Ho Chi Minh City',
    product: 'Tirzepatide',
    stars: 5,
  },
  {
    id: 2,
    quote:
      'As an expat here I was nervous about sourcing peptides but Soma made it easy. COA on file, English support, fast delivery. Highly recommend.',
    name: 'Sarah M.',
    city: 'HCMC',
    product: 'Retatrutide',
    stars: 5,
  },
  {
    id: 3,
    quote:
      'My skin looks incredible. Been on GLOW for 6 weeks and the difference is noticeable. Everyone is asking what I\'m doing.',
    name: 'Linh T.',
    city: 'Hanoi',
    product: 'GLOW',
    stars: 5,
  },
]

export const FAQ_ITEMS = [
  {
    id: 'q1',
    question: 'Are your peptides lab-tested?',
    answer:
      'Yes. Every batch is tested by TrustPointe Analytics LLC, an independent US-based laboratory. Certificates of Analysis (COA) are available for all products and can be verified directly at TrustPointeLIMS.com.',
  },
  {
    id: 'q2',
    question: 'How do I order?',
    answer:
      'You can order directly through this website, or message us on WhatsApp or Telegram. We confirm all orders within minutes and walk you through any questions before shipping.',
  },
  {
    id: 'q3',
    question: 'How fast is delivery in HCMC?',
    answer:
      'Same-day delivery in Ho Chi Minh City — typically 1–4 hours after order confirmation, 7 days a week. You will receive a tracking number with your order.',
  },
  {
    id: 'q4',
    question: 'Do you ship to Hanoi, Da Nang, or Nha Trang?',
    answer:
      'Yes. We ship nationwide across Vietnam. Delivery to Hanoi, Da Nang, Nha Trang, and all other cities takes 2–4 business days via tracked courier. Packaging is always discreet.',
  },
  {
    id: 'q5',
    question: 'What is included with each order?',
    answer:
      'Every order includes: 1x peptide vial, 1x 1mL insulin syringe, and 1x 3mL bacteriostatic water for reconstitution. Everything you need to get started is included.',
  },
  {
    id: 'q6',
    question: 'How do I reconstitute and inject?',
    answer:
      'We have full step-by-step mixing and injection guides on our website. You can also message us on WhatsApp and our team will walk you through the process in English.',
  },
  {
    id: 'q7',
    question: 'Do you offer protocols or dosing guidance?',
    answer:
      'We provide sample community research protocols on our website for educational reference. These are not medical advice. We strongly recommend consulting a licensed healthcare professional for personal dosing guidance.',
  },
  {
    id: 'q8',
    question: 'Is packaging discreet?',
    answer:
      'Yes. All orders are shipped in plain, unmarked packaging with no branding or product identifiers on the outside. Your privacy is our priority.',
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    slug: '/blog/tirzepatide-guide-vietnam',
    category: 'Guide',
    title: 'Tirzepatide in Vietnam: A Complete Beginner\'s Guide',
    readTime: '7 min read',
  },
  {
    id: 2,
    slug: '/blog/retatrutide-vs-tirzepatide',
    category: 'Research',
    title: 'Retatrutide vs Tirzepatide: What the Research Shows',
    readTime: '9 min read',
  },
  {
    id: 3,
    slug: '/blog/peptides-hcmc-expat-guide',
    category: 'Expat Guide',
    title: 'Peptides in Ho Chi Minh City: The Expat\'s Guide to Safe Sourcing',
    readTime: '5 min read',
  },
]

export const CITIES = [
  { name: 'Ho Chi Minh City', slug: 'peptides-ho-chi-minh-city', delivery: 'Same-Day (1–4 hrs)' },
  { name: 'Hanoi', slug: 'peptides-hanoi', delivery: '2–4 Days' },
  { name: 'Da Nang', slug: 'peptides-da-nang', delivery: '2–4 Days' },
  { name: 'Nha Trang', slug: 'peptides-nha-trang', delivery: '2–4 Days' },
]
