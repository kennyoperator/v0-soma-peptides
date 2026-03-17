import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { BRAND } from '@/lib/copy'
import { MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Consultation | Soma Solutions Vietnam',
  description: 'Book a free consultation with the Soma Solutions team. Get product guidance, protocol questions answered, and COA documentation. English support.',
}

export default function ConsultationPage() {
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
              Book a consultation
            </h1>
            <p className="text-base leading-relaxed max-w-md" style={{ color: '#6B7280' }}>
              A structured consultation booking system is coming soon. In the meantime, our team is available 7 days a week on WhatsApp and Telegram — message us now to get personalised guidance on products, protocols, and your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-sm gap-2"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp →
              </a>
              <a
                href={BRAND.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-4 text-sm"
              >
                Chat on Telegram
              </a>
            </div>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              English support available 8am–10pm Vietnam Time, 7 days a week.
            </p>
          </div>
        </section>

        <CTASection
          headline="Have questions right now?"
          sub="Message us on WhatsApp — we reply within minutes and can guide you through product selection and protocols."
          cta="Message Us →"
        />
      </main>
      <Footer />
    </>
  )
}
