import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import ProductGrid from '@/components/home/ProductGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Soma Solutions Vietnam',
  description: 'Lab-tested peptides including Tirzepatide, Retatrutide, and GLOW. Available with same-day delivery in HCMC and nationwide shipping across Vietnam.',
}

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <div className="px-6 py-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-balance" style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}>
            Our Products
          </h1>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#6B7280' }}>
            Every product is independently lab-tested by TrustPointe Analytics LLC. COAs are available for all batches and verifiable online.
          </p>
        </div>
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
