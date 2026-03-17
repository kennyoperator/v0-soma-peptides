import Link from 'next/link'

interface ProductHeroProps {
  tag: string
  name: string
  subheadline: string
  sizes: string[]
}

export default function ProductHero({ tag, name, subheadline, sizes }: ProductHeroProps) {
  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(200,169,110,0.07) 0%, transparent 70%)',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex flex-col gap-5">
          <span className="label-caps" style={{ color: '#C8A96E' }}>{tag}</span>
          <h1 className="text-5xl md:text-6xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.04em' }}>
            {name}
          </h1>
          <p className="text-base md:text-lg max-w-xl" style={{ color: '#8A8580', lineHeight: '1.7' }}>
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
            <a href="#" className="btn-gold px-8 py-3 rounded-sm text-sm tracking-wider uppercase self-start">
              Get Started
            </a>
            <Link href="/quiz" className="btn-ghost-gold px-6 py-3 rounded-sm text-xs tracking-wider uppercase self-start">
              Take the Assessment First →
            </Link>
          </div>

          {/* Sizes */}
          <div className="flex flex-wrap gap-2 mt-1">
            {sizes.map((size) => (
              <span
                key={size}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.04)', color: '#8A8580', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
