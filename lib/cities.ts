// lib/cities.ts — city SEO data

export const CITY_PAGES = [
  {
    slug: 'peptides-ho-chi-minh-city',
    city: 'Ho Chi Minh City',
    shortName: 'Saigon / HCMC',
    delivery: 'Same-Day (1–4 hrs)',
    isHCMC: true,
    intro: `Ho Chi Minh City is home to a fast-growing expat and wellness community — and Soma Solutions was built specifically for this market. Whether you are a resident expat, a visitor, or a local wellness professional, we offer lab-tested peptides with same-day delivery anywhere across Saigon and the greater HCMC metro area. Order before 5pm and your peptides arrive at your door in as little as one hour. No clinic visits. No complicated import processes. Just lab-verified quality, delivered discreetly.`,
    faq: [
      { q: 'Can you deliver to District 1, District 2, or District 7?', a: 'Yes. We deliver to all districts across Ho Chi Minh City, including Districts 1, 2, 3, 7, Binh Thanh, Thu Duc, and all others. Same-day delivery available 7 days a week.' },
      { q: 'How quickly can you deliver in HCMC?', a: 'Typically 1–4 hours after order confirmation. For orders placed before 5pm, same-day delivery is guaranteed.' },
      { q: 'Do you support English-speaking customers?', a: 'Yes. All of our team communicates in English. WhatsApp and Telegram support is available 7 days a week.' },
    ],
    schema: {
      addressLocality: 'Ho Chi Minh City',
      addressRegion: 'Ho Chi Minh',
    },
  },
  {
    slug: 'peptides-hanoi',
    city: 'Hanoi',
    shortName: 'Hanoi',
    delivery: '2–4 Days',
    isHCMC: false,
    intro: `Hanoi is Vietnam's capital and home to a growing international community. Soma Solutions delivers lab-tested peptides to Hanoi via tracked nationwide courier, typically arriving within 2–4 business days of order confirmation. All shipments are fully tracked and arrive in plain, discreet packaging. Our team is available via WhatsApp and Telegram in English for any questions before or after your order.`,
    faq: [
      { q: 'How long does delivery to Hanoi take?', a: '2–4 business days via tracked courier from HCMC. You will receive a tracking number at dispatch.' },
      { q: 'Is packaging discreet for delivery to Hanoi?', a: 'Yes. All orders are shipped in plain, unmarked packaging with no product identifiers on the outside.' },
      { q: 'Can I request a COA before ordering?', a: 'Yes. Message us on WhatsApp or Telegram and we will send the Certificate of Analysis for any product immediately.' },
    ],
    schema: {
      addressLocality: 'Hanoi',
      addressRegion: 'Hanoi',
    },
  },
  {
    slug: 'peptides-da-nang',
    city: 'Da Nang',
    shortName: 'Da Nang',
    delivery: '2–4 Days',
    isHCMC: false,
    intro: `Da Nang is one of Vietnam's most popular destinations for digital nomads and long-stay expats. Soma Solutions ships lab-tested peptides to Da Nang via tracked courier, arriving in 2–4 business days. Whether you are a resident or a visitor, our English-speaking team is available on WhatsApp to help you choose the right product and guide you through your order from start to finish.`,
    faq: [
      { q: 'Do you ship to Da Nang?', a: 'Yes. We deliver nationwide across Vietnam. Da Nang orders typically arrive in 2–4 business days via tracked courier.' },
      { q: 'Can I order while visiting Da Nang?', a: 'Absolutely. Many of our customers are visitors or digital nomads. Order via WhatsApp and we will deliver to your hotel or accommodation.' },
      { q: 'What is the ordering process?', a: 'Message us on WhatsApp or Telegram with your order, or use our website checkout. We confirm within minutes and dispatch the same day.' },
    ],
    schema: {
      addressLocality: 'Da Nang',
      addressRegion: 'Da Nang',
    },
  },
  {
    slug: 'peptides-nha-trang',
    city: 'Nha Trang',
    shortName: 'Nha Trang',
    delivery: '2–4 Days',
    isHCMC: false,
    intro: `Nha Trang attracts a growing international community of expats, retirees, and health-conscious visitors. Soma Solutions ships lab-tested peptides to Nha Trang via fully tracked nationwide courier, typically arriving within 2–4 business days. Our team speaks English and is available on WhatsApp 7 days a week for guidance, COA requests, and order support.`,
    faq: [
      { q: 'Do you deliver to Nha Trang?', a: 'Yes. We ship nationwide. Nha Trang orders are delivered in 2–4 business days via tracked courier with discreet packaging.' },
      { q: 'How do I order if I am in Nha Trang?', a: 'Message us on WhatsApp or Telegram. We will confirm your order within minutes and dispatch from HCMC the same day.' },
      { q: 'Are your products lab-tested?', a: 'Yes. All products are tested by TrustPointe Analytics LLC, a US-based independent laboratory. COAs are available on request.' },
    ],
    schema: {
      addressLocality: 'Nha Trang',
      addressRegion: 'Khanh Hoa',
    },
  },
]

export const SEO_PRODUCT_PAGES = [
  {
    slug: 'tirzepatide-vietnam',
    productName: 'Tirzepatide',
    productSlug: '/products/tirzepatide',
    title: 'Buy Tirzepatide in Vietnam | Lab-Tested 30mg | Soma Solutions',
    description: 'Buy lab-tested Tirzepatide in Vietnam. 30mg vial, 99.594% purity, COA verified by TrustPointe Analytics. Same-day delivery in HCMC.',
    intro: `Tirzepatide is a dual GLP-1 and GIP receptor agonist — the same mechanism behind Eli Lilly's Mounjaro. Soma Solutions supplies lab-tested Tirzepatide (30mg per vial) to researchers and wellness professionals across Vietnam, with same-day delivery in HCMC and 2–4 day nationwide shipping. Every batch is independently tested by TrustPointe Analytics LLC and reaches 99.594% purity on our most recent COA.`,
    price: '5,000,000 VND (~$200 USD)',
  },
  {
    slug: 'retatrutide-vietnam',
    productName: 'Retatrutide',
    productSlug: '/products/retatrutide',
    title: 'Buy Retatrutide in Vietnam | Lab-Tested 20mg | Soma Solutions',
    description: 'Buy lab-tested Retatrutide in Vietnam. 20mg vial, triple GLP-1/GIP/Glucagon agonist, COA verified. Same-day HCMC delivery.',
    intro: `Retatrutide is a triple agonist targeting GLP-1, GIP, and glucagon receptors simultaneously — representing the next generation of metabolic peptide research. Soma Solutions supplies lab-tested Retatrutide (20mg per vial) to researchers across Vietnam. Same-day delivery in Ho Chi Minh City. Nationwide shipping in 2–4 days. All batches independently tested and COA-verified.`,
    price: '5,500,000 VND (~$220 USD)',
  },
  {
    slug: 'peptides-vietnam',
    productName: 'Peptides',
    productSlug: '/products',
    title: 'Peptides in Vietnam | Lab-Tested | Same-Day HCMC | Soma Solutions',
    description: 'Buy lab-tested peptides in Vietnam. Tirzepatide, Retatrutide, and GLOW. Same-day delivery in Ho Chi Minh City. English support. COA verified.',
    intro: `Soma Solutions is Vietnam's leading supplier of lab-tested peptides. We serve the English-speaking expat and international community across Ho Chi Minh City, Hanoi, Da Nang, Nha Trang, and all cities nationwide. Our products — Tirzepatide, Retatrutide, and the GLOW blend — are independently tested by TrustPointe Analytics LLC in the United States. Every batch comes with a Certificate of Analysis verifiable at TrustPointeLIMS.com. Order via WhatsApp or Telegram for same-day delivery in HCMC.`,
    price: 'From 2,000,000 VND',
  },
]
