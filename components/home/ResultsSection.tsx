import Image from 'next/image'
import Link from 'next/link'

export default function ResultsSection() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ background: '#E8541A' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}
          >
            Real Results
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-black text-white text-balance" style={{ letterSpacing: '-0.025em' }}>
            Real customers. Real transformations.
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Individual results vary. Not a guarantee of outcomes.
          </p>
        </div>

        {/* Featured before/after — uses the exact brand-style image */}
        <div className="flex justify-center mb-10">
          <div
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {/* SOMA logo overlay at the top */}
            <div className="flex justify-center pt-6 pb-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20Text%20%20Logo%2C%20No%20BG-erWvdz6BfTYdbutqZkb28jP3K9H4P8.png"
                alt="SOMA."
                width={80}
                height={32}
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>

            {/* The actual before/after photo */}
            <div className="px-4 pb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-17%20at%207.52.19%E2%80%AFPM-e09A2no7MuDXoH3CgDPuQXSg9WiAK3.png"
                alt="Soma Solutions customer transformation — before and after using Tirzepatide"
                width={900}
                height={900}
                className="w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: '8kg', label: 'Avg. loss in 12 weeks' },
            { value: '99.5%+', label: 'Average purity' },
            { value: '2 hrs', label: 'Avg. HCMC delivery' },
            { value: '100%', label: 'Discreet packaging' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5 text-center"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <div className="text-2xl font-black text-white" style={{ letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div className="text-xs text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/results" className="btn-white px-8 py-4 text-sm">
            View All Results
          </Link>
        </div>
      </div>
    </section>
  )
}
