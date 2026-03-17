import { Zap, Package } from 'lucide-react'

export default function DeliverySection() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#F9F9F9' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black" style={{ letterSpacing: '-0.025em', color: '#1A1A1A' }}>
            Fast, Discreet Local Delivery
          </h2>
          <p className="mt-3 text-base" style={{ color: '#6B7280' }}>
            Same-day in HCMC. Nationwide across Vietnam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HCMC */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{ background: '#E8541A', color: '#FFFFFF' }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <Zap size={24} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                Ho Chi Minh City / Saigon
              </div>
              <h3 className="text-2xl font-black text-white" style={{ letterSpacing: '-0.02em' }}>
                Same-Day Delivery
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              {[
                '1–4 hours after order confirmation',
                'Available 7 days a week',
                'Tracking number provided',
                'Plain, discreet packaging',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Nationwide */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: '#FEF0E9' }}
            >
              <Package size={24} style={{ color: '#E8541A' }} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#9CA3AF' }}>
                Nationwide Vietnam
              </div>
              <h3 className="text-2xl font-black" style={{ letterSpacing: '-0.02em', color: '#1A1A1A' }}>
                2–4 Day Delivery
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              {[
                'Hanoi | Da Nang | Nha Trang | and more',
                'Fully tracked shipment',
                'Discreet plain packaging',
                'Complies with applicable local regulations',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#6B7280' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#E8541A' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: '#9CA3AF' }}>
          All shipments comply with applicable local regulations.
        </p>
      </div>
    </section>
  )
}
