import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Subcutaneous Injection Guide | Soma Solutions Vietnam',
  description:
    'Step-by-step subcutaneous injection guide for peptides. Site rotation, safety, storage notes. English instructions included with every Soma Solutions order.',
}

const STEPS = [
  {
    num: '01',
    title: 'Wash your hands thoroughly',
    details: [
      'Use soap and water for at least 20 seconds',
      'Dry with a clean towel',
      'Do not touch the injection site after washing',
    ],
  },
  {
    num: '02',
    title: 'Prepare your dose',
    details: [
      'Remove the reconstituted peptide vial from the refrigerator and allow it to reach room temperature for 5–10 minutes',
      'Wipe the vial stopper with a fresh alcohol swab and allow to air dry',
      'Draw your calculated dose slowly into the insulin syringe',
      'Remove any air bubbles by tapping and gently pushing the plunger',
    ],
  },
  {
    num: '03',
    title: 'Choose your injection site',
    details: [
      'Subcutaneous injections go into the layer of fat just beneath the skin',
      'Best sites: lower abdomen (2 inches from navel), outer thigh, or upper outer arm',
      'Rotate injection sites with each injection — do not use the same spot twice in a row',
      'Avoid areas with bruising, scarring, or irritation',
    ],
  },
  {
    num: '04',
    title: 'Clean the injection site',
    details: [
      'Wipe the chosen area with a fresh alcohol swab in a circular motion',
      'Allow to air dry fully before injecting — 15–30 seconds',
      'Do not touch the cleaned area after wiping',
    ],
  },
  {
    num: '05',
    title: 'Administer the injection',
    details: [
      'Pinch up a small fold of skin at the injection site between your thumb and index finger',
      'Insert the needle at a 45-degree angle (or 90° for higher body fat areas)',
      'Push the plunger slowly and steadily — do not rush',
      'Once fully injected, withdraw the needle at the same angle it was inserted',
    ],
  },
  {
    num: '06',
    title: 'After the injection',
    details: [
      'Gently press the site with a clean swab — do not rub',
      'Dispose of the used needle safely into a sharps container or sealed hard plastic bottle',
      'Note the injection site and date in a log to ensure proper rotation',
      'Refrigerate the peptide vial immediately if there is remaining solution',
    ],
  },
]

const SITES = [
  { area: 'Lower abdomen', notes: 'Most common. Avoid the belly button area by 2 inches.' },
  { area: 'Outer thigh', notes: 'Easy to self-administer. Rotate left and right each time.' },
  { area: 'Upper outer arm', notes: 'Best administered by another person for this site.' },
]

export default function InjectionGuidePage() {
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
              Injection Guide
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Subcutaneous injection guide
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              A step-by-step guide to self-administering a subcutaneous injection. If you are
              new to this, message us on WhatsApp and we will walk you through it in real time.
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
              reference. Soma Solutions does not provide medical advice. Consult a licensed
              healthcare professional before use. Safety and sterile technique are paramount.
            </p>
          </div>
        </div>

        {/* Site rotation */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-black mb-6" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
              Recommended injection sites
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SITES.map((site) => (
                <div
                  key={site.area}
                  className="rounded-2xl p-6 flex flex-col gap-2"
                  style={{ background: '#F9F9F9', border: '2px solid #E5E7EB' }}
                >
                  <div className="text-sm font-black" style={{ color: '#1A1A1A' }}>
                    {site.area}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                    {site.notes}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ color: '#9CA3AF' }}>
              Always rotate sites. Using the same location repeatedly causes lipodystrophy (fat tissue damage).
            </p>
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

          {/* Storage note */}
          <div className="max-w-3xl mx-auto mt-8">
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: '#FEF0E9', border: '1px solid rgba(232,84,26,0.2)' }}
            >
              <h3 className="text-sm font-black uppercase tracking-widest" style={{ color: '#E8541A' }}>
                Storage reminder
              </h3>
              <ul className="flex flex-col gap-2">
                {[
                  'Unreconstituted peptide vials: store in a cool, dark place or refrigerate',
                  'Reconstituted peptides: refrigerate at 2–8°C — do not freeze',
                  'Reconstituted stability: typically 4–6 weeks refrigerated',
                  'Always inspect for cloudiness or particles before use',
                ].map((note, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#E8541A' }} />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CTASection
          headline="New to injections? We will help."
          sub="Message us on WhatsApp before your first injection. Our team will guide you through it step by step in English."
          cta="Chat on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
