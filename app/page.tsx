import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import HowItWorks from '@/components/home/HowItWorks'
import GoalCards from '@/components/home/GoalCards'
import ProductGrid from '@/components/home/ProductGrid'
import Testimonials from '@/components/home/Testimonials'
import AccordionFAQ from '@/components/home/FAQ'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <GoalCards />
      <ProductGrid />
      <Testimonials />
      <AccordionFAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
