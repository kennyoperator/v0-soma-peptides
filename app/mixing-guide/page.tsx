import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Peptide Mixing Guide | Soma Solutions Vietnam',
  description:
    'Step-by-step guide to reconstituting your peptide vial with bacteriostatic water. Easy to follow. English instructions included with every order.',
}

const STEPS = [
  {
    num: '01',
    title: 'Gather your materials',
    details: [
      'Peptide vial (from Soma Solutions)',
      '3mL bacteriostatic water (included in your order)',
      '1mL insulin syringe (included in your order)',
      'Alcohol swabs',
      'Clean flat surface',
    ],
  },
  {
    num: '02',
    title: 'Wipe vial tops with alcohol swab',
    details: [
      'Wipe the rubber stopper on both the peptide vial and the bacteriostatic water vial with a fresh alcohol swab',
      'Allow to air dry for 15–30 seconds — do not blow or fan dry',
    ],
  },
  {
    num: '03',
    title: 'Draw bacteriostatic water into the syringe',
    details: [
      'Insert the syringe needle into the bacteriostatic water vial',
      'Draw back the plunger to pull the appropriate amount of water',
      'For a 30mg tirzepatide vial, 1.5–3mL of bac water is standard (this determines your concentration)',
      'Remove any air bubbles by gently tapping and pushing the plunger slightly',
    ],
  },
  {
    num: '04',
    title: 'Inject water slowly into the peptide vial',
    details: [
      'Insert the needle into the peptide vial at an angle so the water runs down the side of the vial',
      'Push the plunger slowly — do not inject forcefully directly onto the powder',
      'Running water down the glass side prevents degrading the peptide',
    ],
  },
  {
    num: '05',
    title: 'Gently swirl to dissolve',
    details: [
      'Gently roll the vial between your palms or swirl slowly',
      'Do NOT shake the vial — shaking can denature the peptide',
      'Continue until the powder is fully dissolved and the solution is clear',
      'If solution remains cloudy after 2–3 minutes, contact us via WhatsApp',
    ],
  },
  {
    num: '06',
    title: 'Your peptide is ready to use',
    details: [
      'The reconstituted vial should be refrigerated immediately (2–8°C)',
      'Do not freeze a reconstituted peptide',
      'Reconstituted peptides are typically stable for 4–6 weeks when refrigerated',
      'Always check for cloudiness or particles before each use',
    ],
  },
]

export default function MixingGuidePage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Mixing Guide
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              How to reconstitute your peptide vial
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Everything you need to reconstitute your peptide is included in your Soma
              Solutions order. Follow these steps carefully or message us on WhatsApp for
              real-time guidance.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="px-6 pb-2 bg-white">
          <div
            className="max-w-3xl mx-auto rounded-2xl p-5 flex items-start gap-4"
            style={{ background: '#FEF9C3', border: '1px solid #FDE047' }}
          >
            <AlertTriangle size={18} className="shrink-0 mt-0.5" style={{ color: '#92400E' }} />
            <p className="text-sm leading-relaxed" style={{ color: '#92400E' }}>
              <strong>For research purposes only.</strong> This guide is provided for educational
              reference. Soma Solutions does not provide medical advice. Consult a healthcare
              professional before use.
            </p>
          </div>
        </div>

        {/* Materials checklist */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: '#F9F9F9', border: '2px solid #E5E7EB' }}
            >
              <h2 className="text-base font-black uppercase tracking-widest" style={{ color: '#1A1A1A' }}>
                What you will need
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { item: 'Peptide vial', note: 'Included with your order' },
                  { item: 'Bacteriostatic water (3mL)', note: 'Included with your order' },
                  { item: 'Insulin syringe (1mL)', note: 'Included with your order' },
                  { item: 'Alcohol swabs', note: 'Not included — available at any pharmacy' },
                ].map(({ item, note }) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: '#E8541A' }} />
                    <div>
                      <div className="text-sm font-bold" style={{ color: '#1A1A1A' }}>{item}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-8 pb-24 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-5">
            {STEPS.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl overflow-hidden"
                style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
              >
                <div
                  className="px-7 py-5 flex items-center gap-5"
                  style={{ borderBottom: '1px solid #F3F4F6' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-black"
                    style={{ background: '#E8541A', color: '#FFFFFF' }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-base font-black" style={{ color: '#1A1A1A' }}>
                    {step.title}
                  </h3>
                </div>
                <ul className="px-7 py-5 flex flex-col gap-2.5">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#E8541A' }} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8 flex flex-col gap-3 text-center">
            <p className="text-sm font-bold" style={{ color: '#1A1A1A' }}>
              Need help? We are here.
            </p>
            <p className="text-sm" style={{ color: '#6B7280' }}>
              Message us on WhatsApp and our team will walk you through reconstitution in real time — in English.
            </p>
          </div>
        </section>

        <CTASection
          headline="Questions about your order?"
          sub="Message us on WhatsApp and we will guide you through every step — before and after delivery."
          cta="Chat on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
