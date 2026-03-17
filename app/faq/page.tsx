import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import FAQAccordion from '@/components/home/FAQAccordion'
import { FAQ_ITEMS, BRAND } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'FAQ | Soma Solutions Vietnam',
  description:
    'Frequently asked questions about Soma Solutions peptides — lab testing, ordering, delivery times, packaging, and more.',
}

export default function FAQPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              FAQ
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Frequently asked questions
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              {"Can't find the answer you need? Message us on "}
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold transition-opacity hover:opacity-70"
                style={{ color: '#E8541A' }}
              >
                WhatsApp
              </a>
              {' or '}
              <a
                href={BRAND.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold transition-opacity hover:opacity-70"
                style={{ color: '#E8541A' }}
              >
                Telegram
              </a>
              {' and we will respond within minutes.'}
            </p>
          </div>
        </section>

        {/* FAQ accordion — client component */}
        <section className="py-12 pb-24 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-2xl mx-auto">
            <FAQAccordion items={FAQ_ITEMS} defaultOpen="q1" />
          </div>
        </section>

        <CTASection
          headline="Still have questions?"
          sub="Our team is available 7 days a week on WhatsApp and Telegram. English support always."
          cta="Message Us →"
        />
      </main>
      <Footer />
    </>
  )
}
