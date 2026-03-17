import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Customer Results | Soma Solutions Vietnam',
  description:
    'Real before and after results from Soma Solutions customers using Tirzepatide, Retatrutide, and GLOW peptides. Individual results vary.',
}

const PLACEHOLDER_RESULTS = [
  { id: 1, product: 'Tirzepatide', duration: '12 weeks', city: 'Ho Chi Minh City' },
  { id: 2, product: 'Retatrutide', duration: '10 weeks', city: 'HCMC' },
  { id: 3, product: 'Tirzepatide', duration: '16 weeks', city: 'Hanoi' },
  { id: 4, product: 'GLOW', duration: '8 weeks', city: 'Ho Chi Minh City' },
  { id: 5, product: 'Retatrutide', duration: '14 weeks', city: 'Da Nang' },
  { id: 6, product: 'Tirzepatide', duration: '20 weeks', city: 'HCMC' },
  { id: 7, product: 'GLOW', duration: '6 weeks', city: 'Ho Chi Minh City' },
  { id: 8, product: 'Retatrutide', duration: '12 weeks', city: 'Nha Trang' },
]

export default function ResultsPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero — orange brand background */}
        <section className="py-16 md:py-20 px-6" style={{ background: '#E8541A' }}>
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
            >
              Real Results
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-white text-balance"
              style={{ letterSpacing: '-0.03em' }}
            >
              Real customers. Real transformations.
            </h1>
            <p className="text-base text-white/75 leading-relaxed">
              These are actual Soma Solutions customers. Individual results vary and are not a
              guarantee of outcomes.
            </p>
          </div>
        </section>

        {/* Featured brand image */}
        <section className="pb-16 px-6" style={{ background: '#E8541A' }}>
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div className="flex justify-center pt-6 pb-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20Text%20%20Logo%2C%20No%20BG-erWvdz6BfTYdbutqZkb28jP3K9H4P8.png"
                  alt="SOMA."
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain opacity-80"
                />
              </div>
              <div className="px-4 pb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-17%20at%207.52.19%E2%80%AFPM-e09A2no7MuDXoH3CgDPuQXSg9WiAK3.png"
                  alt="Soma Solutions customer before and after transformation"
                  width={900}
                  height={900}
                  className="w-full rounded-2xl"
                  priority
                />
              </div>
            </div>
            <p className="text-center mt-4 text-xs text-white/50">
              Individual results vary. Not a guarantee of outcomes.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '8kg+', label: 'Avg. weight loss in 12 weeks (GLP-1 users)' },
              { value: '99.5%+', label: 'Average batch purity across all products' },
              { value: '2 hrs', label: 'Average HCMC delivery time' },
              { value: '100%', label: 'Discreet packaging on every order' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 text-center flex flex-col gap-2"
                style={{ background: '#F9F9F9', border: '1px solid #E5E7EB' }}
              >
                <div
                  className="text-3xl font-black"
                  style={{ color: '#E8541A', letterSpacing: '-0.03em' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery grid — 8 placeholder slots matching brand style */}
        <section className="py-16 md:py-20 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-black mb-3 text-center"
              style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              Customer transformations
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: '#9CA3AF' }}>
              More results coming soon. Individual results vary.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PLACEHOLDER_RESULTS.map((result) => (
                <div
                  key={result.id}
                  className="rounded-2xl overflow-hidden"
                  style={{ background: '#E8541A' }}
                >
                  {/* Before/after pair — brand style: orange bg, white rounded frames */}
                  <div className="grid grid-cols-2 gap-3 p-5">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs italic font-medium text-white/70 pl-1">before</span>
                      <div
                        className="rounded-2xl aspect-[3/4] flex items-center justify-center"
                        style={{
                          background: 'rgba(255,255,255,0.12)',
                          border: '2px solid rgba(255,255,255,0.3)',
                        }}
                      >
                        <span className="text-[10px] text-white/30 uppercase tracking-widest text-center px-3">
                          Photo<br />coming soon
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-7">
                      <div
                        className="rounded-2xl aspect-[3/4] flex items-center justify-center"
                        style={{
                          background: 'rgba(255,255,255,0.12)',
                          border: '2px solid rgba(255,255,255,0.3)',
                        }}
                      >
                        <span className="text-[10px] text-white/30 uppercase tracking-widest text-center px-3">
                          Photo<br />coming soon
                        </span>
                      </div>
                      <span className="text-xs italic font-medium text-white/70 pr-1 self-end">after</span>
                    </div>
                  </div>
                  <div
                    className="px-5 py-3 flex items-center justify-between"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
                  >
                    <span className="text-xs font-bold text-white">{result.product}</span>
                    <span className="text-xs text-white/55">
                      {result.duration} · {result.city}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-xs" style={{ color: '#9CA3AF' }}>
              Individual results vary. Soma Solutions does not guarantee specific outcomes.
            </p>
          </div>
        </section>

        <CTASection
          headline="Ready to start your transformation?"
          sub="Order today. Same-day delivery in HCMC. English support. Discreet packaging."
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
