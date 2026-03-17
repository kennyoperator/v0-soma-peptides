import Link from 'next/link'

const RESULTS_PLACEHOLDERS = [
  { product: 'Tirzepatide', duration: '12 weeks', city: 'HCMC' },
  { product: 'Retatrutide', duration: '10 weeks', city: 'Hanoi' },
  { product: 'Tirzepatide', duration: '16 weeks', city: 'HCMC' },
  { product: 'GLOW', duration: '8 weeks', city: 'Da Nang' },
]

export default function ResultsSection() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#E8541A' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: '-0.025em' }}>
            Real Results from Real Customers
          </h2>
          <p className="mt-3 text-sm text-white/70">
            These are actual Soma customers. Individual results vary.
          </p>
        </div>

        {/* Featured result — styled to match brand imagery */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Orange bg card with two white-framed photos */}
            <div
              className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-8"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {/* Before */}
              <div className="flex flex-col items-start gap-3 flex-1">
                <span className="italic text-white/80 text-lg" style={{ fontFamily: 'Georgia, serif' }}>before</span>
                <div
                  className="w-full aspect-[3/4] rounded-3xl overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '4px solid rgba(255,255,255,0.9)' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-white/40 text-center px-4">
                      Before photo<br />coming soon
                    </span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="flex flex-col items-end gap-3 flex-1 mt-8 md:mt-0">
                <div
                  className="w-full aspect-[3/4] rounded-3xl overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '4px solid rgba(255,255,255,0.9)' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-white/40 text-center px-4">
                      After photo<br />coming soon
                    </span>
                  </div>
                </div>
                <span className="italic text-white/80 text-lg" style={{ fontFamily: 'Georgia, serif' }}>after</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of result cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESULTS_PLACEHOLDERS.map((result, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex gap-5"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {/* Before frame */}
              <div className="flex flex-col items-center gap-1.5 flex-1">
                <span className="italic text-white/60 text-sm" style={{ fontFamily: 'Georgia, serif' }}>before</span>
                <div
                  className="w-full aspect-[3/4] rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '3px solid rgba(255,255,255,0.85)' }}
                />
              </div>
              {/* After frame */}
              <div className="flex flex-col items-center gap-1.5 flex-1 mt-4">
                <div
                  className="w-full aspect-[3/4] rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '3px solid rgba(255,255,255,0.85)' }}
                />
                <span className="italic text-white/60 text-sm" style={{ fontFamily: 'Georgia, serif' }}>after</span>
              </div>
              {/* Meta */}
              <div className="flex flex-col justify-end gap-1 ml-2">
                <span className="text-xs font-bold text-white">{result.product}</span>
                <span className="text-xs text-white/60">{result.duration}</span>
                <span className="text-xs text-white/50">{result.city}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-xs text-white/50">
          Individual results vary. Not a guarantee of outcomes.
        </p>

        <div className="text-center mt-8">
          <Link
            href="/results"
            className="btn-white px-8 py-4 text-sm"
          >
            View All Results
          </Link>
        </div>
      </div>
    </section>
  )
}
