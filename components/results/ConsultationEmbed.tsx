import { Calendar } from 'lucide-react'

export default function ConsultationEmbed() {
  return (
    <section id="book-consultation" className="py-16 px-6" style={{ background: '#0D0D0D' }}>
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#8A8580' }}>
            Schedule Your Call
          </p>
          <h3
            className="text-2xl font-light"
            style={{ color: '#F0EDE8', letterSpacing: '-0.025em' }}
          >
            Find a time that works for you
          </h3>
        </div>

        {/* Calendly placeholder */}
        <div
          className="w-full rounded-xl flex flex-col items-center justify-center gap-4 text-center px-6"
          style={{
            height: 500,
            border: '1px dashed rgba(200,169,110,0.27)',
            background: '#111111',
          }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: '1px solid rgba(200,169,110,0.27)' }}
          >
            <Calendar className="w-5 h-5" style={{ color: '#C8A96E' }} />
          </div>

          <p className="text-xs tracking-widest uppercase" style={{ color: '#C8A96E' }}>
            Calendly Embed — Placeholder
          </p>

          <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#8A8580' }}>
            Booking calendar will load here once connected. Replace this block with the Calendly
            inline widget when ready.
          </p>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline underline-offset-4 transition-colors hover:text-[#F0EDE8]"
            style={{ color: '#8A8580' }}
          >
            Set up Calendly →
          </a>
        </div>

        <p
          className="text-center text-xs mt-6 max-w-md mx-auto leading-relaxed"
          style={{ color: '#8A8580' }}
        >
          [COMPLIANCE PLACEHOLDER — Insert consultation disclaimer here.]
        </p>

      </div>
    </section>
  )
}
