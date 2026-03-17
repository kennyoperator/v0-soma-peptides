import Link from 'next/link'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { BRAND, TRUST_BADGES } from '@/lib/copy'

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
          style={{ background: '#FEF0E9', color: '#E8541A' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Vietnam&apos;s #1 Peptide Source
        </span>

        {/* H1 */}
        <h1
          className="text-4xl md:text-6xl font-black text-balance leading-tight"
          style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
        >
          {BRAND.tagline}
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: '#6B7280' }}>
          {BRAND.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm gap-2 w-full sm:w-auto"
          >
            <MessageCircle size={16} />
            Order on WhatsApp →
          </a>
          <Link
            href="/products"
            className="btn-outline px-8 py-4 text-sm w-full sm:w-auto"
          >
            View Products
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-1.5">
              <CheckCircle2 size={14} style={{ color: '#E8541A' }} />
              <span className="text-xs font-medium" style={{ color: '#6B7280' }}>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
