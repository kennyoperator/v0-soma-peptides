import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sample Research Protocols | Soma Solutions Vietnam',
  description:
    'Sample community research protocols for Tirzepatide, Retatrutide, and GLOW. For educational purposes only. Not medical advice.',
}

const PROTOCOLS = [
  {
    id: 'tirzepatide',
    name: 'Tirzepatide',
    tag: 'GLP-1 / GIP Dual Agonist',
    href: '/products/tirzepatide',
    startDose: '2.5mg/week',
    escalation: [
      { week: 'Weeks 1–4', dose: '2.5mg once weekly' },
      { week: 'Weeks 5–8', dose: '5mg once weekly' },
      { week: 'Weeks 9–12', dose: '7.5mg once weekly (optional)' },
      { week: 'Weeks 13+', dose: 'Maintain or titrate to tolerance' },
    ],
    cycleLength: '12–24 weeks typical community cycle',
    observations: [
      'Appetite suppression typically noticeable within first 1–2 weeks',
      'Nausea most common in weeks 1–4, usually subsides as body adjusts',
      'Most community reports show significant weight reduction by week 8–12',
      'Blood glucose stabilisation observed in users with metabolic concerns',
    ],
  },
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    tag: 'GLP-1 / GIP / Glucagon Triple Agonist',
    href: '/products/retatrutide',
    startDose: '0.5–1mg/week',
    escalation: [
      { week: 'Weeks 1–4', dose: '0.5mg once weekly' },
      { week: 'Weeks 5–8', dose: '1mg once weekly' },
      { week: 'Weeks 9–12', dose: '2mg once weekly' },
      { week: 'Weeks 13+', dose: 'Up to 4mg with careful titration' },
    ],
    cycleLength: '12–20 weeks typical community cycle',
    observations: [
      'More aggressive fat mobilisation reported vs. tirzepatide at equivalent weeks',
      'Slower start dose recommended — triple agonism more potent than dual',
      'Energy expenditure effects noticeable alongside appetite reduction',
      'Phase 3 trial data showed up to 24% body weight reduction over 48 weeks',
    ],
  },
  {
    id: 'glow',
    name: 'GLOW',
    tag: 'GHK-Cu + BPC-157 + TB-500 Blend',
    href: '/products/glow',
    startDose: '100–200mcg GHK-Cu daily',
    escalation: [
      { week: 'Week 1–2', dose: 'GHK-Cu 100mcg + BPC-157 250mcg daily' },
      { week: 'Week 3–4', dose: 'GHK-Cu 200mcg + BPC-157 500mcg daily' },
      { week: 'Week 5+', dose: 'Maintain or adjust per tolerance' },
      { week: 'TB-500', dose: '2.5mg twice weekly (separate from daily dose)' },
    ],
    cycleLength: '6–12 weeks typical community cycle',
    observations: [
      'Skin texture improvements typically reported within 3–4 weeks',
      'GHK-Cu drives collagen pathway signalling — results compound over time',
      'BPC-157 component often noted for gut and joint comfort improvements',
      'TB-500 supports systemic repair and flexibility alongside topical benefits',
    ],
  },
]

export default function ProtocolsPage() {
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
              Sample Protocols
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Community research protocols
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              These are sample protocols shared within the research community. They are provided
              for educational reference only. Always consult a licensed healthcare professional
              before beginning any peptide protocol.
            </p>
          </div>
        </section>

        {/* Disclaimer banner */}
        <div className="px-6 pb-4 bg-white">
          <div className="max-w-3xl mx-auto rounded-2xl p-5 flex items-start gap-4"
            style={{ background: '#FEF9C3', border: '1px solid #FDE047' }}>
            <AlertTriangle size={18} className="shrink-0 mt-0.5" style={{ color: '#92400E' }} />
            <p className="text-sm leading-relaxed" style={{ color: '#92400E' }}>
              <strong>For educational purposes only. Not medical advice.</strong> Soma Solutions
              does not prescribe, diagnose, or provide medical guidance. The protocols below are
              community-reported observations. Consult a licensed healthcare professional before
              use. Individual results vary.
            </p>
          </div>
        </div>

        {/* Protocols */}
        <section className="py-12 pb-24 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {PROTOCOLS.map((protocol) => (
              <div
                key={protocol.id}
                className="rounded-2xl overflow-hidden"
                style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
              >
                {/* Header */}
                <div
                  className="px-7 py-5 flex items-center justify-between gap-4"
                  style={{ background: '#FEF0E9', borderBottom: '1px solid rgba(232,84,26,0.15)' }}
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: '#E8541A' }}>
                      {protocol.tag}
                    </div>
                    <h2 className="text-xl font-black" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                      {protocol.name}
                    </h2>
                  </div>
                  <a
                    href={protocol.href}
                    className="btn-primary px-4 py-2 text-xs shrink-0"
                  >
                    Buy {protocol.name}
                  </a>
                </div>

                <div className="px-7 py-6 flex flex-col gap-7">
                  {/* Starting dose */}
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>
                      Starting Dose
                    </div>
                    <div className="text-lg font-black" style={{ color: '#E8541A' }}>
                      {protocol.startDose}
                    </div>
                  </div>

                  {/* Escalation schedule */}
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>
                      Escalation Schedule
                    </div>
                    <div className="flex flex-col gap-2">
                      {protocol.escalation.map((row, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 py-3 px-4 rounded-xl"
                          style={{ background: '#F9F9F9' }}
                        >
                          <div className="w-28 shrink-0 text-xs font-bold" style={{ color: '#6B7280' }}>
                            {row.week}
                          </div>
                          <div className="text-sm font-bold" style={{ color: '#1A1A1A' }}>
                            {row.dose}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cycle length */}
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: '#9CA3AF' }}>
                      Typical Cycle Length
                    </div>
                    <div className="text-sm font-bold" style={{ color: '#1A1A1A' }}>
                      {protocol.cycleLength}
                    </div>
                  </div>

                  {/* Community observations */}
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: '#9CA3AF' }}>
                      Community-Reported Observations
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {protocol.observations.map((obs, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                          <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#E8541A' }} />
                          {obs}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
              All protocols above are community-sourced research references. Not medical advice.
              Consult a licensed healthcare professional before beginning any protocol.
            </p>
          </div>
        </section>

        <CTASection
          headline="Ready to order?"
          sub="Message us on WhatsApp. We will send your COA and answer any questions before you commit."
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
