'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { FAQ_ITEMS, BRAND } from '@/lib/copy'

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>('q1')

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
              Can&apos;t find the answer you need? Message us on{' '}
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold transition-opacity hover:opacity-70"
                style={{ color: '#E8541A' }}
              >
                WhatsApp
              </a>{' '}
              or{' '}
              <a
                href={BRAND.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold transition-opacity hover:opacity-70"
                style={{ color: '#E8541A' }}
              >
                Telegram
              </a>{' '}
              and we will respond within minutes.
            </p>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="py-12 pb-24 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: open === item.id ? '2px solid #E8541A' : '2px solid #E5E7EB',
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 transition-colors"
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                  aria-expanded={open === item.id}
                >
                  <span className="text-sm font-bold leading-snug" style={{ color: '#1A1A1A' }}>
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: '#E8541A',
                      flexShrink: 0,
                      transform: open === item.id ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>
                {open === item.id && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280', lineHeight: '1.8' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
