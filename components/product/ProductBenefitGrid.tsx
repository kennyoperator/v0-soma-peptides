interface Benefit {
  headline: string
  description: string
}

interface ProductBenefitGridProps {
  productName: string
  benefits: Benefit[]
}

export default function ProductBenefitGrid({ productName, benefits }: ProductBenefitGridProps) {
  return (
    <section className="py-20 px-6" style={{ background: '#0A0A0A' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="label-caps">Benefits</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            Why people choose {productName}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-5 rounded-sm"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-sm font-medium mb-2" style={{ color: '#F0EDE8', letterSpacing: '-0.01em' }}>
                {b.headline}
              </h3>
              <p className="text-xs" style={{ color: '#8A8580', lineHeight: '1.7' }}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
