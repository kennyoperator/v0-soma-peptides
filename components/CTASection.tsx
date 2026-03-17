import { MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/copy'

interface CTASectionProps {
  headline?: string
  sub?: string
  cta?: string
  href?: string
}

export default function CTASection({
  headline = 'Ready to get started?',
  sub = 'Message us on WhatsApp or Telegram. We answer within minutes.',
  cta = 'Order on WhatsApp →',
  href,
}: CTASectionProps) {
  const target = href ?? BRAND.whatsapp

  return (
    <section
      className="py-20 md:py-28 px-6 text-center"
      style={{ background: '#E8541A' }}
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-black text-white text-balance" style={{ letterSpacing: '-0.025em' }}>
          {headline}
        </h2>
        <p className="text-base text-white/80 leading-relaxed">
          {sub}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={target}
            target={href ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="btn-white px-8 py-4 text-sm gap-2"
          >
            <MessageCircle size={16} style={{ color: '#E8541A' }} />
            {cta}
          </a>
          <a
            href={BRAND.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white px-8 py-4 text-sm gap-2"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.4)' }}
          >
            Order on Telegram
          </a>
        </div>
        <p className="text-xs text-white/50 mt-2">
          Same-day delivery in HCMC. English support. Discreet packaging.
        </p>
      </div>
    </section>
  )
}
