import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { MessageSquare, Zap, Package, CheckCircle2 } from 'lucide-react'
import { HOW_IT_WORKS_STEPS, BRAND } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'How It Works | Soma Solutions Vietnam',
  description:
    'Order peptides in 3 simple steps. Browse products, order via WhatsApp or Telegram, and receive same-day delivery in HCMC. English support. Discreet packaging.',
}

const ICONS = [MessageSquare, Zap, Package]

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Simple Process
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              How to order from Soma Solutions
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              No complicated checkout. No waiting days for a response. Order via WhatsApp or our
              site, get confirmed within minutes, receive delivery same-day in HCMC.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 px-6" style={{ background: '#E8541A' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOW_IT_WORKS_STEPS.map((step, i) => {
                const Icon = ICONS[i]
                return (
                  <div
                    key={step.number}
                    className="flex flex-col gap-5 p-8 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.35)' }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: 'rgba(255,255,255,0.5)' }}
                    >
                      Step {step.number}
                    </div>
                    <h2 className="text-xl font-black text-white" style={{ letterSpacing: '-0.02em' }}>
                      {step.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-white/75">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why order via WhatsApp */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-black mb-10 text-center"
              style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              Why most customers order via WhatsApp
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Fastest confirmation',
                  desc: 'WhatsApp orders are confirmed within minutes by a real person. No automated email delays.',
                },
                {
                  title: 'Ask questions before ordering',
                  desc: 'Our team speaks English and can guide you to the right product for your goals before you commit.',
                },
                {
                  title: 'Real-time delivery updates',
                  desc: 'Your tracking number is sent directly to the same WhatsApp chat. No app downloads required.',
                },
                {
                  title: 'Request COAs instantly',
                  desc: 'Ask for the Certificate of Analysis for any product before or after ordering. Sent immediately.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6 rounded-2xl"
                  style={{ background: '#F9F9F9', border: '1px solid #E5E7EB' }}
                >
                  <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: '#E8541A' }} />
                  <div>
                    <h3 className="text-sm font-black mb-1" style={{ color: '#1A1A1A' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <h2
              className="text-2xl md:text-3xl font-black"
              style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              What arrives with every order
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                { label: 'Peptide vial', desc: 'Your chosen peptide, lab-tested and sealed' },
                { label: '1mL insulin syringe', desc: 'For precise subcutaneous administration' },
                { label: 'Bacteriostatic water', desc: '3mL for reconstitution — included in every kit' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-6 flex flex-col gap-2"
                  style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
                >
                  <div className="text-sm font-black" style={{ color: '#1A1A1A' }}>{item.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              Need help with reconstitution or injection? See our{' '}
              <a href="/mixing-guide" className="transition-colors hover:opacity-70" style={{ color: '#E8541A' }}>
                mixing guide
              </a>{' '}
              and{' '}
              <a href="/injection-guide" className="transition-colors hover:opacity-70" style={{ color: '#E8541A' }}>
                injection guide
              </a>
              , or message us directly.
            </p>
          </div>
        </section>

        <CTASection
          headline="Ready to place your first order?"
          sub="Message us on WhatsApp. We confirm within minutes and deliver same-day in HCMC."
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
