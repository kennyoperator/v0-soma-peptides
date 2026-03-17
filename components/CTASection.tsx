import Link from 'next/link'

interface CTASectionProps {
  headline?: string
  sub?: string
  cta?: string
  href?: string
}

export default function CTASection({
  headline = 'Ready to find your protocol?',
  sub = 'It takes 2 minutes. No account required.',
  cta = 'Start My Assessment →',
  href = '/quiz',
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 text-center relative overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 600px 300px at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-balance" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
          {headline}
        </h2>
        <p className="text-base" style={{ color: '#8A8580', lineHeight: '1.7' }}>
          {sub}
        </p>
        <Link
          href={href}
          className="btn-gold px-8 py-3 rounded-sm text-sm tracking-wider uppercase inline-block"
        >
          {cta}
        </Link>
      </div>
    </section>
  )
}
