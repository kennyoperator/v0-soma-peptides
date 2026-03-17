import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProductHero from '@/components/product/ProductHero'
import ProductBenefitGrid from '@/components/product/ProductBenefitGrid'
import ProductFAQ from '@/components/product/ProductFAQ'
import CTASection from '@/components/CTASection'

const benefits = [
  {
    label: 'Triple Agonist Action',
    description: 'Targets GLP-1, GIP, and glucagon receptors simultaneously for comprehensive metabolic support.',
  },
  {
    label: 'Body Composition',
    description: 'Commonly chosen by those pursuing meaningful, sustained changes in body composition.',
  },
  {
    label: 'Provider-Guided Protocol',
    description: 'Every protocol is initiated and overseen by a licensed provider for your safety and results.',
  },
  {
    label: 'Flexible Dosing',
    description: 'Available in 10mg, 15mg, and 20mg sizes to accommodate personalized titration schedules.',
  },
  {
    label: 'Research-Referenced',
    description: 'Formulation aligned with published data on triple agonist metabolic research.',
  },
  {
    label: 'Ongoing Support',
    description: 'Access to clinical guidance and check-ins throughout your protocol.',
  },
]

const faqs = [
  {
    id: 'q1',
    question: 'What is Retatrutide?',
    answer:
      'Retatrutide is a next-generation triple agonist peptide that simultaneously targets GLP-1, GIP, and glucagon receptors. It is commonly chosen for metabolic support, weight management, and body recomposition goals.',
  },
  {
    id: 'q2',
    question: 'How is it administered?',
    answer:
      'Retatrutide is administered via subcutaneous injection, typically once weekly. Your assigned provider will give you full administration guidance during onboarding.',
  },
  {
    id: 'q3',
    question: 'What sizes are available?',
    answer:
      'We offer 10mg, 15mg, and 20mg presentations to support proper titration and individualized dosing based on your provider\'s protocol.',
  },
  {
    id: 'q4',
    question: 'Is this a prescription product?',
    answer: '',
    isCompliance: true,
  },
]

export default function RetatrutidePage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Nav />
      <ProductHero
        tag="WEIGHT LOSS"
        name="Retatrutide"
        tagline="A next-generation GLP-1/GIP/glucagon triple agonist. Commonly chosen for metabolic and body composition goals."
        sizes={['10mg', '15mg', '20mg']}
        accentColor="gold"
      />
      <ProductBenefitGrid benefits={benefits} />
      <ProductFAQ items={faqs} />
      <CTASection
        headline="Ready to start your metabolic protocol?"
        sub="Take the 7-question assessment to see if Retatrutide matches your goals."
        cta="Start My Assessment"
        href="/quiz?goal=weight-loss"
      />
      <Footer />
    </main>
  )
}
