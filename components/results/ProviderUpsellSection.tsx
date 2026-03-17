'use client'

export default function ProviderUpsellSection() {
  const handleBookScroll = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('book-consultation')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSelfScroll = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="py-24 px-6 text-center" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[720px] mx-auto flex flex-col items-center gap-7">
          <p
            className="text-[11px] tracking-widest uppercase"
            style={{ color: '#8A8580' }}
          >
            Want Expert Guidance?
          </p>

          <h2
            className="text-4xl font-light text-balance"
            style={{ color: '#F0EDE8', letterSpacing: '-0.03em', lineHeight: '1.2' }}
          >
            Speak with a provider before you start.
          </h2>

          <p
            className="text-sm leading-relaxed max-w-[560px]"
            style={{ color: '#8A8580' }}
          >
            Your quiz results are a starting point. A short consultation ensures your protocol is
            dialed in for your specific biology, history, and goals.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['Free 15-minute consultation', 'No obligation to purchase'].map((pill) => (
              <span
                key={pill}
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  border: '1px solid rgba(200,169,110,0.2)',
                  color: '#C8A96E',
                }}
              >
                {pill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleBookScroll}
            className="btn-gold px-8 py-4 rounded-md text-sm tracking-wider uppercase"
          >
            Book My Free Consultation →
          </button>

          {/* Secondary link */}
          <a
            href="#"
            onClick={handleSelfScroll}
            className="text-sm underline underline-offset-4 transition-colors hover:text-[#F0EDE8]"
            style={{ color: '#8A8580' }}
          >
            I'll figure it out myself →
          </a>
        </div>
      </section>

      {/* Thin separator */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
    </>
  )
}
