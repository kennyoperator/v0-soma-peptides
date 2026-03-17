import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Gold radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(200,169,110,0.10) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <span className="label-caps">Personalized Peptide Protocols</span>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-light text-balance" style={{ letterSpacing: '-0.04em', lineHeight: '1.08', color: '#F0EDE8' }}>
          Your biology is unique.{' '}
          <br className="hidden md:block" />
          Your protocol should be too.
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg max-w-lg" style={{ color: '#8A8580', lineHeight: '1.7' }}>
          Answer 7 questions. Get a personalized peptide recommendation designed around your goals.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link href="/quiz" className="btn-gold px-8 py-3 rounded-sm text-sm tracking-wider uppercase">
            Start My Assessment →
          </Link>
          <a href="#products" className="btn-ghost-gold px-8 py-3 rounded-sm text-sm tracking-wider uppercase">
            Explore Products
          </a>
        </div>

        {/* Trust line */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-2" style={{ color: '#3A3A3A' }}>
          {['Provider-guided protocols', 'Research-referenced formulations', 'Premium quality'].map((item, i) => (
            <span key={item} className="flex items-center gap-2 text-xs" style={{ color: '#5A5652', letterSpacing: '0.04em' }}>
              {i > 0 && <span style={{ color: '#2A2A2A' }}>·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
