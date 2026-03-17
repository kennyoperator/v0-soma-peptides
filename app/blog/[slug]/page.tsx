import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { AlertTriangle, ArrowLeft, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

const ARTICLES: Record<string, {
  title: string
  category: string
  readTime: string
  publishedDate: string
  description: string
  content: { heading?: string; body: string }[]
}> = {
  'tirzepatide-guide-vietnam': {
    title: "Tirzepatide in Vietnam: A Complete Beginner's Guide",
    category: 'Guide',
    readTime: '7 min read',
    publishedDate: 'December 2025',
    description: 'Everything you need to know about Tirzepatide in Vietnam — how it works, how to source it safely, and what to expect.',
    content: [
      {
        body: 'Tirzepatide has become one of the most researched peptides in the wellness community over the past few years — and for good reason. As a dual GLP-1 and GIP receptor agonist, it works through two separate hormonal pathways to support appetite regulation and metabolic function simultaneously.',
      },
      {
        heading: 'What is Tirzepatide?',
        body: 'Tirzepatide is the active compound in Eli Lilly\'s FDA-approved medication Mounjaro (and later Zepbound). In research settings, it is used as a lyophilised (freeze-dried) powder that must be reconstituted with bacteriostatic water before use. It is administered subcutaneously — typically once per week.',
      },
      {
        heading: 'How does it work?',
        body: 'The GLP-1 receptor agonist component signals to the brain that the body is full, reducing appetite. The GIP component amplifies the insulin response and has additional effects on fat tissue. Together, they produce stronger metabolic effects than GLP-1 agonists alone.',
      },
      {
        heading: 'Sourcing Tirzepatide safely in Vietnam',
        body: 'The key consideration when sourcing any peptide in Vietnam is third-party laboratory verification. Every Soma Solutions batch of Tirzepatide is tested by TrustPointe Analytics LLC — an independent US laboratory — and comes with a Certificate of Analysis showing 99.594% purity. You can verify this result directly at TrustPointeLIMS.com.',
      },
      {
        heading: 'What comes with your order?',
        body: 'Every Soma Solutions Tirzepatide order includes: a 30mg lyophilised peptide vial, a 3mL bacteriostatic water vial, and a 1mL insulin syringe. Everything you need to get started, delivered same-day in Ho Chi Minh City or within 2–4 days anywhere in Vietnam.',
      },
      {
        heading: 'Community research protocols',
        body: 'Community research protocols for Tirzepatide typically start at 2.5mg per week and titrate upward every 4 weeks based on tolerance. This is for educational reference only — not medical advice. Always consult a licensed healthcare professional before use.',
      },
    ],
  },
  'retatrutide-vs-tirzepatide': {
    title: 'Retatrutide vs Tirzepatide: What the Research Shows',
    category: 'Research',
    readTime: '9 min read',
    publishedDate: 'January 2026',
    description: 'A detailed comparison of Retatrutide and Tirzepatide — mechanisms, community protocols, and what the latest research data shows.',
    content: [
      {
        body: 'Both Tirzepatide and Retatrutide are incretin-based peptides developed by Eli Lilly, but they operate through different receptor mechanisms and produce meaningfully different results in research settings.',
      },
      {
        heading: 'The core difference: dual vs. triple agonism',
        body: 'Tirzepatide targets two receptors — GLP-1 and GIP. Retatrutide adds a third: the glucagon receptor. This triple agonism means Retatrutide not only controls appetite and insulin response, but also directly increases energy expenditure via glucagon signalling.',
      },
      {
        heading: 'What the Phase 2 trial data showed',
        body: 'Phase 2 trials of Retatrutide (published in The New England Journal of Medicine, 2023) showed up to 24% mean body weight reduction over 48 weeks in the highest-dose cohort. For context, Tirzepatide\'s Phase 3 trials showed approximately 20-22% over a similar period. Both are dramatically more effective than earlier GLP-1-only compounds.',
      },
      {
        heading: 'Starting dose and titration',
        body: 'Community research protocols for Retatrutide start lower than Tirzepatide — typically 0.5mg/week — because the triple mechanism is more potent. Tirzepatide community protocols typically start at 2.5mg/week. In both cases, slow titration is strongly recommended to allow the body to adjust.',
      },
      {
        heading: 'Which is right for you?',
        body: 'This is ultimately a conversation for you and your healthcare provider. For educational reference: Tirzepatide is the more well-documented option with extensive Phase 3 and real-world data. Retatrutide is the next generation, with more aggressive effects but less long-term data available. Both are available from Soma Solutions with full COA documentation.',
      },
    ],
  },
  'peptides-hcmc-expat-guide': {
    title: "Peptides in Ho Chi Minh City: The Expat's Guide to Safe Sourcing",
    category: 'Expat Guide',
    readTime: '5 min read',
    publishedDate: 'November 2025',
    description: 'A practical guide for expats and foreigners in HCMC on how to source peptides safely, what to look for, and what to avoid.',
    content: [
      {
        body: 'Ho Chi Minh City has become a hub for health-conscious expats — and demand for research peptides has grown accordingly. But the market is unregulated, and sourcing safely requires knowing what to look for.',
      },
      {
        heading: 'The most important thing: lab verification',
        body: 'The only way to verify that a peptide is what it claims to be is through third-party mass spectrometry testing. Look for suppliers who provide a Certificate of Analysis (COA) from an independent laboratory — not an internal test, and not a generic "purity certificate" without traceable batch data.',
      },
      {
        heading: 'What to look for in a COA',
        body: 'A legitimate COA should include: the name and address of the testing laboratory, the specific sample ID, purity percentage (99%+ is considered research grade), identity confirmation by retention time and spectral analysis, and a verifiable key so you can confirm the result directly with the laboratory.',
      },
      {
        heading: 'Delivery and discretion in HCMC',
        body: 'Most reputable suppliers in HCMC deliver same-day via motorbike courier. Orders should arrive in plain, unmarked packaging. Soma Solutions delivers within 1–4 hours of order confirmation, 7 days a week, anywhere in HCMC.',
      },
      {
        heading: 'English support matters',
        body: 'For English-speaking expats, access to English-language support is critical — especially if you are new to peptide research. Our team communicates in English across WhatsApp, Telegram, and email, 7 days a week.',
      },
    ],
  },
  'what-is-retatrutide': {
    title: 'What Is Retatrutide? The Triple Agonist Explained',
    category: 'Research',
    readTime: '8 min read',
    publishedDate: 'February 2026',
    description: 'A comprehensive explainer on Retatrutide — the triple GLP-1/GIP/Glucagon agonist that represents the next generation of metabolic peptide research.',
    content: [
      {
        body: 'Retatrutide (also known by its development code LY3437943) is a triagonist peptide developed by Eli Lilly. It simultaneously activates three distinct receptors — GLP-1, GIP, and glucagon — making it the most advanced metabolic research compound currently in active development.',
      },
      {
        heading: 'The three mechanisms',
        body: 'GLP-1 agonism reduces appetite and slows gastric emptying. GIP agonism enhances insulin secretion and supports fat tissue metabolism. Glucagon agonism directly increases energy expenditure — the metabolic "burn" component. Together these three pathways produce effects significantly more aggressive than dual or single agonists.',
      },
      {
        heading: 'Clinical trial results',
        body: 'Phase 2 trial results published in 2023 showed 24.2% mean body weight reduction in the 12mg/week cohort over 48 weeks. Phase 3 trials (TRIUMPH program) are currently ongoing. These numbers would represent the largest weight reduction of any single compound in clinical history.',
      },
      {
        heading: 'How it differs from Tirzepatide',
        body: 'Tirzepatide targets GLP-1 and GIP only. Adding glucagon agonism means Retatrutide additionally increases energy expenditure at rest — not just reducing calories in, but also increasing calories out. This is the key mechanistic advantage.',
      },
    ],
  },
  'peptide-storage-vietnam': {
    title: "How to Store Peptides in Vietnam's Heat & Humidity",
    category: 'Guide',
    readTime: '4 min read',
    publishedDate: 'March 2026',
    description: "Vietnam's heat and humidity require specific peptide storage practices. This guide covers everything you need to keep your peptides stable.",
    content: [
      {
        body: "Vietnam's tropical climate — with temperatures regularly above 35°C and humidity often exceeding 80% — creates unique challenges for peptide storage. Lyophilised (freeze-dried) peptides are sensitive to heat and moisture. Proper storage is essential for maintaining potency.",
      },
      {
        heading: 'Unreconstituted peptide vials',
        body: 'Lyophilised peptide powder in a sealed vial can be stored at room temperature for short periods (days to weeks), but refrigeration is strongly recommended in Vietnam\'s heat. Ideally: refrigerate at 2–8°C in a sealed container away from light. Do not freeze lyophilised peptides — the freeze-thaw cycle can cause degradation.',
      },
      {
        heading: 'Reconstituted peptides',
        body: 'Once you have added bacteriostatic water to the peptide vial, the solution must be kept refrigerated at 2–8°C at all times. In Vietnam\'s heat, leaving a reconstituted vial at room temperature for more than a few hours significantly accelerates degradation. Reconstituted peptides are typically stable for 4–6 weeks when properly refrigerated.',
      },
      {
        heading: 'Power outages and travel',
        body: 'HCMC occasionally experiences brief power outages. If your fridge loses power for a few hours, reconstituted peptides should still be fine — the key is not leaving them out consistently. For travel within Vietnam, keep vials in a small cooler bag with an ice pack. Never check peptide vials in luggage.',
      },
    ],
  },
  'glow-peptide-blend-guide': {
    title: 'The GLOW Blend: GHK-Cu, BPC-157, and TB-500 Explained',
    category: 'Guide',
    readTime: '6 min read',
    publishedDate: 'February 2026',
    description: 'A complete breakdown of the Soma Solutions GLOW blend — GHK-Cu 50mg, BPC-157 10mg, and TB-500 10mg — and what the research says about each component.',
    content: [
      {
        body: 'The GLOW blend combines three research peptides with complementary mechanisms: GHK-Cu (copper peptide) at 50mg, BPC-157 at 10mg, and TB-500 at 10mg. Each component has been independently researched for tissue repair, regeneration, and cellular health.',
      },
      {
        heading: 'GHK-Cu: The copper peptide',
        body: 'GHK-Cu is a naturally occurring tripeptide (glycyl-L-histidyl-L-lysine) that is bound to copper. It has been studied for its strong affinity for collagen synthesis pathways, wound healing, and skin restoration. Research suggests it activates genes involved in tissue repair and has antioxidant properties.',
      },
      {
        heading: 'BPC-157: The body protection compound',
        body: 'BPC-157 is a synthetic pentadecapeptide derived from a protective protein found in stomach acid. It has been studied extensively for gut lining protection, joint repair, tendon and ligament healing, and systemic anti-inflammatory effects. It is one of the most-researched peptides in the community.',
      },
      {
        heading: 'TB-500: The systemic healer',
        body: 'TB-500 (Thymosin Beta-4) is a naturally occurring peptide that promotes cell migration and differentiation. Research focuses on its role in wound healing, cardiovascular protection, neurological repair, and systemic flexibility and recovery.',
      },
      {
        heading: 'Community protocol',
        body: 'Community research protocols for the GLOW blend typically start with 100–200mcg GHK-Cu daily and 250–500mcg BPC-157 daily, with TB-500 at 2.5mg twice weekly. Most users report visible skin texture improvements within 3–4 weeks. As always, these are educational references only — consult a healthcare professional before use.',
      },
    ],
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) return {}
  return {
    title: `${article.title} | Soma Solutions Vietnam Peptide Guide`,
    description: article.description,
  }
}

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) notFound()

  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 md:py-16 px-6 bg-white">
          <div className="max-w-2xl mx-auto flex flex-col gap-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: '#6B7280' }}
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              {article.category}
            </span>

            <h1
              className="text-3xl md:text-4xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              {article.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock size={13} style={{ color: '#9CA3AF' }} />
                <span className="text-xs" style={{ color: '#9CA3AF' }}>{article.readTime}</span>
              </div>
              <span className="text-xs" style={{ color: '#9CA3AF' }}>{article.publishedDate}</span>
            </div>

            {/* Disclaimer */}
            <div
              className="rounded-2xl p-4 flex items-start gap-3 mt-2"
              style={{ background: '#FEF9C3', border: '1px solid #FDE047' }}
            >
              <AlertTriangle size={15} className="shrink-0 mt-0.5" style={{ color: '#92400E' }} />
              <p className="text-xs leading-relaxed" style={{ color: '#92400E' }}>
                <strong>Educational content only.</strong> This article is for informational purposes. Not medical advice. Consult a licensed healthcare professional before use.
              </p>
            </div>
          </div>
        </section>

        {/* Thumbnail */}
        <div className="px-6 pb-0 bg-white">
          <div className="max-w-2xl mx-auto">
            <div
              className="w-full h-52 rounded-2xl flex items-center justify-center"
              style={{ background: '#E8541A' }}
            >
              <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                {article.category}
              </span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <section className="py-12 pb-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto flex flex-col gap-8">
            {article.content.map((block, i) => (
              <div key={i} className="flex flex-col gap-3">
                {block.heading && (
                  <h2
                    className="text-xl font-black"
                    style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
                  >
                    {block.heading}
                  </h2>
                )}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#374151', lineHeight: '1.85' }}
                >
                  {block.body}
                </p>
              </div>
            ))}

            {/* Disclaimer footer */}
            <div
              className="rounded-2xl p-5 flex flex-col gap-2 mt-4"
              style={{ background: '#F9F9F9', border: '1px solid #E5E7EB' }}
            >
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>
                <strong style={{ color: '#6B7280' }}>Disclaimer:</strong> All content on this site is for educational and informational purposes only. Products sold by Soma Solutions are for research purposes only. Not intended for human consumption. Not evaluated by any regulatory authority. Consult a licensed healthcare professional before use.
              </p>
            </div>

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-70"
              style={{ color: '#E8541A' }}
            >
              <ArrowLeft size={14} />
              Back to all guides
            </Link>
          </div>
        </section>

        <CTASection
          headline="Ready to order?"
          sub="Lab-tested peptides. Same-day delivery in HCMC. English support on WhatsApp."
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
