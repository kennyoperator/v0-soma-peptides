'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { BRAND, TRUST_BADGES, PRODUCTS } from '@/lib/copy'

export default function Hero() {
  const [left, center, right] = PRODUCTS.slice(0, 3)

  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white overflow-hidden">
      {/* Self-contained keyframes — guaranteed to be in the DOM */}
      <style>{`
        @keyframes float-center {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-18px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-side {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-11px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-up-in {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1);    opacity: 0.55; }
          50%       { transform: scale(1.07); opacity: 0.38; }
        }
        .vial-float-center {
          animation: float-center 3.8s ease-in-out infinite;
        }
        .vial-float-left {
          animation: float-side 5.1s ease-in-out 0.65s infinite;
        }
        .vial-float-right {
          animation: float-side 4.6s ease-in-out 1.2s infinite;
        }
        .hero-enter {
          animation: fade-up-in 0.8s cubic-bezier(0.22,1,0.36,1) both;
        }
        .hero-enter-delayed {
          animation: fade-up-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.12s both;
        }
        .circle-breathe {
          animation: breathe 5.5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div className="hero-enter flex flex-col items-start gap-6">
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
        <div className="hero-enter-delayed relative flex items-center justify-center md:justify-end">

          {/* Pulsing bg circles */}
          <div
            className="circle-breathe absolute rounded-full pointer-events-none"
            style={{ width: 380, height: 380, background: '#FEF0E9' }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ width: 280, height: 280, background: '#FDE8DC', opacity: 0.4 }}
          />

          {/* Vial trio */}
          <div className="relative flex items-end justify-center gap-4 pb-6 z-10">

            {/* Left vial — rotate wrapper stays static, float wrapper animates */}
            <div style={{ transform: 'rotate(-7deg)', transformOrigin: 'bottom center', marginBottom: -14 }}>
              <div className="vial-float-left">
                <Image
                  src={left.imageUrl!}
                  alt={`${left.name} ${left.quantity} vial`}
                  width={125}
                  height={165}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Center vial — tallest, front */}
            <div style={{ zIndex: 2 }}>
              <div className="vial-float-center">
                <Image
                  src={center.imageUrl!}
                  alt={`${center.name} ${center.quantity} vial`}
                  width={170}
                  height={220}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Right vial */}
            <div style={{ transform: 'rotate(7deg)', transformOrigin: 'bottom center', marginBottom: -14 }}>
              <div className="vial-float-right">
                <Image
                  src={right.imageUrl!}
                  alt={`${right.name} ${right.quantity} vial`}
                  width={125}
                  height={165}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
