import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { BRAND, TRUST_BADGES, PRODUCTS } from '@/lib/copy'

export default function Hero() {
  const featuredProducts = PRODUCTS.slice(0, 3)
  // Order: tirzepatide (left), retatrutide (center/featured), glow (right)
  const [left, center, right] = featuredProducts

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div className="hero-copy-enter flex flex-col items-start gap-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{ background: '#FEF0E9', color: '#E8541A' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Vietnam&apos;s #1 Peptide Source
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-balance leading-tight"
            style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
          >
            {BRAND.tagline}
          </h1>

          <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: '#6B7280' }}>
            {BRAND.sub}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-sm gap-2"
            >
              <MessageCircle size={16} />
              Order on WhatsApp →
            </a>
            <Link
              href="/products"
              className="btn-outline px-8 py-4 text-sm"
            >
              View Products
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5">
                <CheckCircle2 size={13} style={{ color: '#E8541A' }} />
                <span className="text-xs font-medium" style={{ color: '#6B7280' }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — animated product vials */}
        <div className="hero-vials-enter relative flex items-center justify-center md:justify-end">

          {/* Pulsing background circle */}
          <div
            className="hero-ring-pulse absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full"
            style={{ background: '#FEF0E9' }}
          />

          {/* Second, slightly larger static ring for depth */}
          <div
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
            style={{ background: '#FDE8DC', opacity: 0.45 }}
          />

          {/* Three vials arranged in a slight arc */}
          <div className="relative flex items-end justify-center gap-4 pb-4">

            {/* Left vial */}
            <div className="vial-left relative z-10 -mb-4">
              <Image
                src={left.imageUrl!}
                alt={`${left.name} ${left.quantity} vial`}
                width={130}
                height={170}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Center vial — largest / front */}
            <div className="vial-center relative z-20">
              <Image
                src={center.imageUrl!}
                alt={`${center.name} ${center.quantity} vial`}
                width={175}
                height={225}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Right vial */}
            <div className="vial-right relative z-10 -mb-4">
              <Image
                src={right.imageUrl!}
                alt={`${right.name} ${right.quantity} vial`}
                width={130}
                height={170}
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
