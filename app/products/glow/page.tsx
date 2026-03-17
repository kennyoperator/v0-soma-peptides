import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProductHero from '@/components/product/ProductHero'
import ProductBenefitGrid from '@/components/product/ProductBenefitGrid'
import ProductFAQ from '@/components/product/ProductFAQ'
import CTASection from '@/components/CTASection'

const benefits = [
  {
    label: 'GHK-Cu Complex',
    description: 'Copper peptide known for its role in skin repair, collagen support, and regenerative signaling.',
  },
  {
    label: 'BPC-157',
    description: 'Body Protection Compound commonly associated with tissue repair, gut health, and healing support.',
  },
  {
    label: 'TB-500',
    description: 'Thymosin Beta-4 fragment. Supports cellular regeneration, mobility, and healing at a systemic level.',
  },
  {
    label: 'Inside-Out Radiance',
    description: 'Formulated to address the cellular roots of aging, not just surface-level aesthetics.',
  },
  {
    label: '80mg Presentation',
    description: 'Single-size 80mg formulation optimized for a multi-peptide protocol delivery.',
  },
  {
    label: 'Provider Oversight',
    description: 'All Glow protocols are provider-initiated and supported throughout your journey.',
  },
]

const faqs = [
  {
    id: 'q1',
    question: 'What peptides are in the Glow formulation?',
    answer:
      'Glow Peptide combines GHK-Cu (copper peptide), BPC-157 (Body Protection Compound), and TB-500 (Thymosin Beta-4 fragment). Each is selected for its role in cellular repair, skin support, and regenerative processes.',
  },
  {
    id: 'q2',
    question: 'Who is this protocol designed for?',
    answer:
      'Glow is designed for those prioritizing skin quality, cellular rejuvenation, and a visible improvement in their complexion. It is commonly chosen by individuals in their 30s–50s noticing changes in skin firmness, texture, or radiance.',
  },
  {
    id: 'q3',
    question: 'How long before I see results?',
    answer:
      'Individual results vary. Many clients report noticeable improvements in skin quality within 4–8 weeks of consistent use, with continued improvement over a 3–6 month protocol.',
  },
  {
    id: 'q4',
    question: 'Is this a prescription product?',
    answer: '',
    isCompliance: true,
  },
]

export default function GlowPage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Nav />
      <ProductHero
        tag="SKIN & REJUVENATION"
        name="Glow Peptide"
        tagline="GHK-Cu + BPC-157 + TB-500. Cellular repair from the inside out."
        sizes={['80mg']}
        accentColor="teal"
      />
      <ProductBenefitGrid benefits={benefits} accentColor="teal" />
      <ProductFAQ items={faqs} />
      <CTASection
        headline="Ready to start your skin protocol?"
        sub="Take the 7-question assessment to see if Glow Peptide matches your goals."
        cta="Start My Assessment"
        href="/quiz?goal=glow"
      />
      <Footer />
    </main>
  )
}
