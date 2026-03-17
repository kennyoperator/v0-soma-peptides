'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { BRAND, TRUST_BADGES, PRODUCTS } from '@/lib/copy'

export default function Hero() {
  const [left, center, right] = PRODUCTS.slice(0, 3)

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div
          className="flex flex-col items-start gap-6"
          style={{ animation: 'hero-fade-up 0.75s cubic-bezier(0.22,1,0.36,1) both' }}
        >
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
            <Link href="/products" className="btn-outline px-8 py-4 text-sm">
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
        <div
          className="relative flex items-center justify-center md:justify-end"
          style={{ animation: 'hero-fade-up 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s both' }}
        >
          {/* Pulsing background circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: '380px',
              height: '380px',
              background: '#FEF0E9',
              animation: 'pulse-ring 6s ease-in-out infinite',
            }}
          />
          {/* Inner ring for depth */}
          <div
            className="absolute rounded-full"
            style={{
              width: '300px',
              height: '300px',
              background: '#FDE8DC',
              opacity: 0.5,
            }}
          />

          {/* Three vials arranged in a slight arc */}
          <div className="relative flex items-end justify-center gap-4 pb-4">

            {/* Left vial */}
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                marginBottom: '-16px',
                animation: 'vial-float-side 5.2s ease-in-out 0.6s infinite',
                transform: 'rotate(-6deg)',
              }}
            >
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
            <div
              style={{
                position: 'relative',
                zIndex: 20,
                animation: 'vial-float-center 4s ease-in-out infinite',
              }}
            >
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
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                marginBottom: '-16px',
                animation: 'vial-float-side 4.7s ease-in-out 1.1s infinite',
                transform: 'rotate(6deg)',
              }}
            >
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
