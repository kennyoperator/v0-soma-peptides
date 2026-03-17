import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import ProductGrid from '@/components/home/ProductGrid'
import HowItWorks from '@/components/home/HowItWorks'
import GoalCards from '@/components/home/GoalCards'
import ResultsSection from '@/components/home/ResultsSection'
import LabTesting from '@/components/home/LabTesting'
import DeliverySection from '@/components/home/DeliverySection'
import Testimonials from '@/components/home/Testimonials'
import AccordionFAQ from '@/components/home/FAQ'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustStrip />
      <ProductGrid />
      <HowItWorks />
      <ResultsSection />
      <GoalCards />
      <LabTesting />
      <DeliverySection />
      <Testimonials />
      <AccordionFAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
