import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Contact Soma Solutions | WhatsApp, Telegram, Zalo',
  description:
    'Contact Soma Solutions via WhatsApp, Telegram, or Zalo. English support 7 days a week. Same-day delivery in HCMC. Response within minutes.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-5">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Get in Touch
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              We reply within minutes
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              English support available 7 days a week. Order, ask questions, or request a COA — we are here for all of it.
            </p>
          </div>
        </section>

        {/* Contact channels */}
        <section className="py-12 pb-24 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-2xl mx-auto flex flex-col gap-4">

            {/* WhatsApp */}
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-7 rounded-2xl transition-shadow hover:shadow-lg"
              style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: '#22C55E' }}
              >
                <MessageCircle size={24} className="text-white" />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="text-base font-black" style={{ color: '#1A1A1A' }}>WhatsApp</div>
                <div className="text-sm" style={{ color: '#6B7280' }}>Fastest response. Order, ask questions, request COAs.</div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider shrink-0" style={{ color: '#E8541A' }}>Message →</span>
            </a>

            {/* Telegram */}
            <a
              href={BRAND.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-7 rounded-2xl transition-shadow hover:shadow-lg"
              style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: '#2AABEE' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="text-base font-black" style={{ color: '#1A1A1A' }}>Telegram</div>
                <div className="text-sm" style={{ color: '#6B7280' }}>Alternative to WhatsApp. Same fast response times.</div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider shrink-0" style={{ color: '#E8541A' }}>Message →</span>
            </a>

            {/* Zalo */}
            <a
              href={BRAND.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-7 rounded-2xl transition-shadow hover:shadow-lg"
              style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: '#0068FF' }}
              >
                <span className="text-white font-black text-sm">Zalo</span>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="text-base font-black" style={{ color: '#1A1A1A' }}>Zalo</div>
                <div className="text-sm" style={{ color: '#6B7280' }}>Preferred by local Vietnamese customers.</div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider shrink-0" style={{ color: '#E8541A' }}>Message →</span>
            </a>

            {/* Email */}
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-5 p-7 rounded-2xl transition-shadow hover:shadow-lg"
              style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: '#F9F9F9', border: '2px solid #E5E7EB' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="text-base font-black" style={{ color: '#1A1A1A' }}>Email</div>
                <div className="text-sm" style={{ color: '#6B7280' }}>{BRAND.email}</div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider shrink-0" style={{ color: '#E8541A' }}>Email →</span>
            </a>

            {/* Response time note */}
            <div
              className="rounded-2xl p-6 mt-2"
              style={{ background: '#FEF0E9', border: '1px solid rgba(232,84,26,0.2)' }}
            >
              <h3 className="text-sm font-black mb-2" style={{ color: '#E8541A' }}>Response time</h3>
              <ul className="flex flex-col gap-1.5">
                {[
                  'WhatsApp & Telegram: within minutes, 7 days a week',
                  'Hours: 8am–10pm Vietnam Time (ICT, UTC+7)',
                  'Email: within 24 hours',
                  'Language: English supported across all channels',
                ].map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm" style={{ color: '#6B7280' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#E8541A' }} />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTASection
          headline="Ready to order?"
          sub="Message us now and we will confirm your order within minutes."
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
