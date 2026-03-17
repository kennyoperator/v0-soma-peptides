import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { BRAND } from '@/lib/copy'
import { MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Subscribe | Soma Solutions Vietnam',
  description: 'Subscribe to Soma Solutions for regular delivery and priority access to new products. Coming soon.',
}

export default function SubscribePage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Coming Soon
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Subscribe &amp; save
            </h1>
            <p className="text-base leading-relaxed max-w-md" style={{ color: '#6B7280' }}>
              A subscription programme with automatic monthly delivery and priority pricing is in development. To be notified when it launches, message us on WhatsApp and let us know you are interested.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={`${BRAND.whatsapp}&text=Hi%20Soma%20Solutions%2C%20I%27m%20interested%20in%20the%20subscription%20programme.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-sm gap-2"
              >
                <MessageCircle size={16} />
                Register Interest →
              </a>
            </div>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              No commitment required. We will notify you when the programme launches.
            </p>
          </div>
        </section>

        <CTASection
          headline="Order now, subscribe later"
          sub="Place a one-time order today and switch to a subscription plan when it launches."
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
