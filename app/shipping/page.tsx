import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { Zap, Package, MapPin, Clock, Shield } from 'lucide-react'
import { CITIES } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Shipping & Delivery | Soma Solutions Vietnam',
  description:
    'Same-day delivery in Ho Chi Minh City (1–4 hours). Nationwide delivery to Hanoi, Da Nang, Nha Trang and all cities across Vietnam. Fully tracked. Discreet packaging.',
}

export default function ShippingPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Fast & Discreet
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Delivered to your door across Vietnam
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Same-day delivery in HCMC. Nationwide shipping to every city in Vietnam.
              Plain, discreet packaging. Full tracking on every order.
            </p>
          </div>
        </section>

        {/* Delivery options */}
        <section className="py-16 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* HCMC */}
              <div
                className="rounded-2xl p-8 flex flex-col gap-6"
                style={{ background: '#E8541A' }}
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
                  <h2 className="text-2xl font-black text-white" style={{ letterSpacing: '-0.02em' }}>
                    Same-Day Delivery
                  </h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    '1–4 hours after order confirmation',
                    'Available 7 days a week',
                    'Tracking number sent via WhatsApp',
                    'Discreet plain packaging, no branding',
                    'Order by 5pm for same-day guarantee',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nationwide */}
              <div
                className="rounded-2xl p-8 flex flex-col gap-6"
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
                    All of Vietnam
                  </div>
                  <h2 className="text-2xl font-black" style={{ letterSpacing: '-0.02em', color: '#1A1A1A' }}>
                    2–4 Day Delivery
                  </h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    'Hanoi, Da Nang, Nha Trang and all cities',
                    'Fully tracked via courier',
                    'Tracking number sent at dispatch',
                    'Discreet plain packaging',
                    'Complies with applicable local regulations',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#6B7280' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: '#E8541A' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cities served */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-black mb-10 text-center"
              style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              Cities we deliver to
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {CITIES.map((city) => (
                <div
                  key={city.slug}
                  className="rounded-2xl p-5 flex flex-col gap-2"
                  style={{ background: '#F9F9F9', border: '1px solid #E5E7EB' }}
                >
                  <MapPin size={18} style={{ color: '#E8541A' }} />
                  <div className="text-sm font-bold" style={{ color: '#1A1A1A' }}>
                    {city.name}
                  </div>
                  <div className="text-xs" style={{ color: '#6B7280' }}>
                    {city.delivery}
                  </div>
                </div>
              ))}
              <div
                className="rounded-2xl p-5 flex flex-col gap-2 col-span-2 md:col-span-4"
                style={{ background: '#FEF0E9', border: '1px solid rgba(232,84,26,0.2)' }}
              >
                <div className="text-sm font-bold" style={{ color: '#E8541A' }}>
                  Don&apos;t see your city?
                </div>
                <div className="text-sm" style={{ color: '#6B7280' }}>
                  We ship to all cities and provinces in Vietnam. Message us on WhatsApp or Telegram and we will confirm delivery to your location.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packaging & Privacy */}
        <section className="py-16 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-black mb-10 text-center"
              style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              Discreet by design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Plain packaging',
                  desc: 'All orders are shipped in unmarked, plain packaging. No Soma Solutions branding or product identifiers on the outside.',
                },
                {
                  icon: Clock,
                  title: 'Fast processing',
                  desc: 'Orders confirmed via WhatsApp are processed immediately. HCMC orders are typically dispatched within 30 minutes.',
                },
                {
                  icon: MapPin,
                  title: 'Full tracking',
                  desc: 'Every order receives a tracking number, sent directly to you via WhatsApp at the time of dispatch.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-7 flex flex-col gap-4"
                  style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
                >
                  <Icon size={22} style={{ color: '#E8541A' }} />
                  <h3 className="text-base font-black" style={{ color: '#1A1A1A' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-xs" style={{ color: '#9CA3AF' }}>
              All shipments comply with applicable local regulations.
            </p>
          </div>
        </section>

        <CTASection
          headline="Ready to order?"
          sub="Message us on WhatsApp or Telegram. Same-day delivery in HCMC."
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
