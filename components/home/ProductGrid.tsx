import Link from 'next/link'
import { products } from '@/lib/mock-data'

interface ProductCardProps {
  tag: string
  name: string
  copy: string
  sizes: string[]
  slug: string
}

export function ProductCard({ tag, name, copy, sizes, slug }: ProductCardProps) {
  return (
    <div
      className="group relative flex flex-col gap-5 p-6 rounded-sm transition-all duration-300"
      style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ border: '1px solid rgba(200,169,110,0.25)' }} />

      <div className="flex flex-col gap-3">
        <span className="label-caps" style={{ color: '#C8A96E' }}>{tag}</span>
        <h3 className="text-xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.02em' }}>{name}</h3>
        <p className="text-sm" style={{ color: '#8A8580', lineHeight: '1.7' }}>{copy}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {sizes.map((size) => (
          <span
            key={size}
            className="text-xs px-2.5 py-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#8A8580', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {size}
          </span>
        ))}
      </div>

      <Link
        href={slug}
        className="text-xs mt-1 transition-colors hover:text-[#F0EDE8]"
        style={{ color: '#C8A96E', letterSpacing: '0.08em' }}
      >
        Learn More →
      </Link>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 px-6" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="label-caps">The Formulations</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light" style={{ color: '#F0EDE8', letterSpacing: '-0.03em' }}>
            The Protocol Suite
          </h2>
          <p className="mt-4 text-sm" style={{ color: '#8A8580' }}>
            Four formulations. Each built for a specific purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              tag={p.tag}
              name={p.name}
              copy={p.copy}
              sizes={p.sizes}
              slug={p.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
