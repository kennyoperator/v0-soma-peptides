const steps = [
  {
    number: '01',
    headline: 'Take the Assessment',
    description: '7 questions, about 2 minutes.',
  },
  {
    number: '02',
    headline: 'Get Your Protocol',
    description: 'Matched to your specific goals.',
  },
  {
    number: '03',
    headline: 'Start Your Journey',
    description: 'Provider-guided from here on.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label-caps">The Process</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            Three steps to your protocol
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-5 px-6 py-4">
              {/* Number badge */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                style={{ border: '1px solid rgba(200,169,110,0.35)', background: '#0A0A0A' }}
              >
                <span className="text-xs font-light" style={{ color: '#C8A96E', letterSpacing: '0.1em' }}>{step.number}</span>
              </div>
              <h3 className="text-base font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.01em' }}>
                {step.headline}
              </h3>
              <p className="text-sm" style={{ color: '#8A8580', lineHeight: '1.7' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
