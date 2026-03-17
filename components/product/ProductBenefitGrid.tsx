interface Benefit {
  label: string
  description: string
}

interface ProductBenefitGridProps {
  benefits: Benefit[]
  accentColor?: 'gold' | 'teal'
}

export default function ProductBenefitGrid({ benefits, accentColor = 'gold' }: ProductBenefitGridProps) {
  const accent = accentColor === 'teal' ? '#7B9EA6' : '#C8A96E'
  const accentBg = accentColor === 'teal' ? 'rgba(123,158,166,0.08)' : 'rgba(200,169,110,0.08)'

  return (
    <section id="benefits" className="py-20 px-6" style={{ background: '#0A0A0A' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="label-caps">Benefits</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            What to expect
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-5 rounded-sm"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                <h3 className="text-sm font-medium" style={{ color: '#F0EDE8', letterSpacing: '-0.01em' }}>
                  {b.label}
                </h3>
              </div>
              <p className="text-xs pl-4" style={{ color: '#8A8580', lineHeight: '1.7' }}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
