import Link from 'next/link'
import { MessageCircle, CheckCircle2, FlaskConical } from 'lucide-react'
import { PRODUCTS, BRAND } from '@/lib/copy'

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black" style={{ letterSpacing: '-0.025em', color: '#1A1A1A' }}>
            Our Products
          </h2>
          <p className="mt-3 text-base" style={{ color: '#6B7280' }}>
            Lab-verified. Priced in VND. Everything included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl"
              style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: '#FEF0E9', color: '#E8541A' }}
                >
                  {product.tag}
                </span>
                <span
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{ background: '#F0FFF4', color: '#16A34A' }}
                >
                  <CheckCircle2 size={10} />
                  Lab Verified
                </span>
              </div>

              {/* Name & descriptor */}
              <div>
                <h3 className="text-2xl font-black" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
                  {product.name}
                </h3>
                <p className="mt-1 text-sm" style={{ color: '#6B7280' }}>{product.descriptor}</p>
              </div>

              {/* Price */}
              <div>
                <div className="text-2xl font-black" style={{ color: '#E8541A' }}>
                  {product.priceVnd}
                </div>
                <div className="text-sm font-medium mt-0.5" style={{ color: '#9CA3AF' }}>
                  {product.priceUsd}
                </div>
              </div>

              {/* Quantity */}
              <div
                className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg self-start"
                style={{ background: '#F9F9F9', color: '#6B7280' }}
              >
                {product.quantity}
              </div>

              {/* What's included */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#9CA3AF' }}>
                  What&apos;s Included
                </span>
                {product.included.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#E8541A' }} />
                    <span className="text-xs" style={{ color: '#6B7280' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-2 mt-auto">
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 py-3 text-xs gap-1.5"
                >
                  <MessageCircle size={13} />
                  Order Now
                </a>
                <Link
                  href={product.slug}
                  className="btn-outline flex-1 py-3 text-xs"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
