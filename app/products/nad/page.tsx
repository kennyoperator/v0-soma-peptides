import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProductHero from '@/components/product/ProductHero'
import ProductBenefitGrid from '@/components/product/ProductBenefitGrid'
import ProductFAQ from '@/components/product/ProductFAQ'
import CTASection from '@/components/CTASection'

const benefits = [
  {
    label: 'Cellular Energy Production',
    description: 'NAD+ is a critical coenzyme in mitochondrial energy metabolism. Levels decline significantly with age.',
  },
  {
    label: 'Cognitive Clarity',
    description: 'Commonly associated with improved mental sharpness, focus, and reduction in cognitive fog.',
  },
  {
    label: 'DNA Repair Support',
    description: 'NAD+ is a substrate for sirtuins and PARPs — proteins that regulate DNA repair and gene expression.',
  },
  {
    label: 'Longevity Pathway Activation',
    description: 'Supports key cellular pathways linked to healthspan and longevity research.',
  },
  {
    label: '500mg Presentation',
    description: 'High-potency 500mg formulation for protocols requiring meaningful NAD+ repletion.',
  },
  {
    label: 'Provider-Guided',
    description: 'Protocol initiation and ongoing oversight by a licensed provider for your safety.',
  },
]

const faqs = [
  {
    id: 'q1',
    question: 'What is NAD+ and why does it matter?',
    answer:
      'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every cell of the body. It plays a central role in energy metabolism, DNA repair, and the regulation of aging-related pathways. NAD+ levels naturally decline with age, making supplementation a focus of modern longevity medicine.',
  },
  {
    id: 'q2',
    question: 'How is NAD+ administered?',
    answer:
      'NAD+ can be administered via subcutaneous injection or IV infusion depending on your provider\'s protocol. Your assigned provider will recommend the approach best suited to your goals and health status.',
  },
  {
    id: 'q3',
    question: 'Who typically uses this protocol?',
    answer:
      'NAD+ is commonly chosen by individuals experiencing fatigue, cognitive decline, or those focused on proactive longevity and cellular health. It is also popular among high-performance individuals and biohackers.',
  },
  {
    id: 'q4',
    question: 'Is this a prescription product?',
    answer: '',
    isCompliance: true,
  },
]

export default function NadPage() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Nav />
      <ProductHero
        tag="VITALITY & LONGEVITY"
        name="NAD+"
        tagline="Cellular energy support. Cognitive clarity. The long game."
        sizes={['500mg']}
        accentColor="gold"
      />
      <ProductBenefitGrid benefits={benefits} />
      <ProductFAQ items={faqs} />
      <CTASection
        headline="Ready to start your vitality protocol?"
        sub="Take the 7-question assessment to see if NAD+ matches your goals."
        cta="Start My Assessment"
        href="/quiz?goal=vitality"
      />
      <Footer />
    </main>
  )
}
