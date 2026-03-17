import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { BRAND, TRUST_BADGES, PRODUCTS } from '@/lib/copy'

export default function Hero() {
  const featuredProducts = PRODUCTS.slice(0, 3)

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div className="flex flex-col items-start gap-6">
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

        {/* Right — product vials */}
        <div className="relative flex items-center justify-center md:justify-end">
          {/* Background circle */}
          <div
            className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full"
            style={{ background: '#FEF0E9', opacity: 0.6 }}
          />

          {/* Three vials arranged in a slight arc */}
          <div className="relative flex items-end justify-center gap-4">
            {/* Left vial — smaller / behind */}
            <div className="relative z-10 -mb-4" style={{ transform: 'rotate(-6deg)' }}>
              <Image
                src={featuredProducts[0].imageUrl!}
                alt={`${featuredProducts[0].name} ${featuredProducts[0].quantity} vial`}
                width={130}
                height={170}
                className="object-contain drop-shadow-lg"
              />
            </div>

            {/* Center vial — largest / front */}
            <div className="relative z-20" style={{ transform: 'rotate(0deg)' }}>
              <Image
                src={featuredProducts[1].imageUrl!}
                alt={`${featuredProducts[1].name} ${featuredProducts[1].quantity} vial`}
                width={165}
                height={215}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right vial — smaller / behind */}
            <div className="relative z-10 -mb-4" style={{ transform: 'rotate(6deg)' }}>
              <Image
                src={featuredProducts[2].imageUrl!}
                alt={`${featuredProducts[2].name} ${featuredProducts[2].quantity} vial`}
                width={130}
                height={170}
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
