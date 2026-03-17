import { TESTIMONIALS } from '@/lib/copy'

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#E8541A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ background: '#FEF0E9', color: '#E8541A' }}
          >
            Customer Results
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-black text-balance" style={{ letterSpacing: '-0.025em', color: '#1A1A1A' }}>
            What our customers are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-5 p-7 rounded-2xl"
              style={{ background: '#F9F9F9', border: '1px solid #E5E7EB' }}
            >
              <StarRow count={t.stars} />
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#1A1A1A', lineHeight: '1.8' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid #E5E7EB' }}>
                <div>
                  <div className="text-sm font-bold" style={{ color: '#1A1A1A' }}>{t.name}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#6B7280' }}>
                    {t.city} · {t.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
