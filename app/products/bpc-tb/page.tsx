import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProductHero from '@/components/product/ProductHero'
import ProductBenefitGrid from '@/components/product/ProductBenefitGrid'
import ProductFAQ from '@/components/product/ProductFAQ'
import CTASection from '@/components/CTASection'

const benefits = [
  {
    label: 'BPC-157',
    description: 'Body Protection Compound. Widely researched for its role in tissue healing, joint support, and recovery signaling.',
  },
  {
    label: 'TB-500 (Thymosin Beta-4)',
    description: 'Supports cellular regeneration and migration. Commonly associated with reduced inflammation and improved healing.',
  },
  {
    label: 'Synergistic Stack',
    description: 'BPC-157 and TB-500 are frequently combined in recovery protocols for their complementary mechanisms.',
  },
  {
    label: 'Joint & Connective Tissue',
    description: 'Commonly chosen by athletes, those recovering from injury, or anyone whose body isn\'t bouncing back the way it used to.',
  },
  {
    label: '10mg Presentation',
    description: 'Precision 10mg formulation supporting accurate dosing and flexible protocol design.',
  },
  {
    label: 'Provider-Overseen',
    description: 'All recovery protocols include licensed provider oversight from start to finish.',
  },
]

const faqs = [
  {
    id: 'q1',
    question: 'What is BPC-157?',
    answer:
      'BPC-157 (Body Protection Compound 157) is a synthetic peptide derived from a protein found in gastric juice. It is widely researched for its role in healing tissues including tendons, ligaments, muscles, and the GI tract.',
  },
  {
    id: 'q2',
    question: 'What is TB-500?',
    answer:
      'TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring peptide that promotes cellular regeneration, angiogenesis, and reduced inflammation. It is often combined with BPC-157 in recovery protocols.',
  },
  {
    id: 'q3',
    question: 'Who is this protocol designed for?',
    answer:
      'BPC + TB is commonly chosen by athletes recovering from acute injury, individuals with chronic joint or tendon issues, or anyone who feels their body no longer recovers the way it used to. A provider assessment helps determine fit.',
  },
  {
    id: 'q4',
    question: 'Is this a prescription product?',
    answer: '',
    isCompliance: true,
  },
]

export default function BpcTbPage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Nav />
      <ProductHero
        tag="RECOVERY"
        name="BPC + TB"
        tagline="BPC-157 and TB-500. The go-to recovery stack for tissue repair and performance."
        sizes={['10mg']}
        accentColor="teal"
      />
      <ProductBenefitGrid benefits={benefits} accentColor="teal" />
      <ProductFAQ items={faqs} />
      <CTASection
        headline="Ready to start your recovery protocol?"
        sub="Take the 7-question assessment to see if BPC + TB matches your goals."
        cta="Start My Assessment"
        href="/quiz?goal=recovery"
      />
      <Footer />
    </main>
  )
}
