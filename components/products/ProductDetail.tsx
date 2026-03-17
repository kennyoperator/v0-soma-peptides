import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, CheckCircle2, ExternalLink, ArrowLeft } from 'lucide-react'
import { BRAND } from '@/lib/copy'
import type { PRODUCTS } from '@/lib/copy'
import CTASection from '@/components/CTASection'

type Product = (typeof PRODUCTS)[number]

const PRODUCT_DETAILS: Record<string, {
  mechanism: string
  research: string[]
  dosing: string
  coaImageUrl?: string
}> = {
  tirzepatide: {
    mechanism: 'Tirzepatide is a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist. It works by activating both receptor types simultaneously, supporting satiety signalling, insulin response, and metabolic regulation.',
    research: [
      'GLP-1 / GIP dual receptor agonism',
      'Supports satiety and appetite regulation',
      'Metabolic and insulin response modulation',
      'Commercially available as Mounjaro (Eli Lilly) in multiple countries',
      '99.594% purity verified — Batch SPL-2720',
    ],
    dosing: 'Community research protocols typically start at 2.5mg/week and titrate up over several weeks. This is for educational reference only — consult a licensed healthcare professional before use.',
    coaImageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2FD90504-5838-4B29-91EC-B2EB5CF00AD1.JPG-q86ui0geFn1k8xoXFMLoqOSm7ps2e6.jpeg',
  },
  retatrutide: {
    mechanism: 'Retatrutide is a triple agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. This triple mechanism makes it the most advanced metabolic peptide in active research, with more aggressive effects on energy expenditure and fat mobilisation.',
    research: [
      'GLP-1 / GIP / Glucagon triple receptor agonism',
      'Enhanced energy expenditure vs. dual agonists',
      'Accelerated fat mobilisation and body recomposition',
      'Phase 3 trials underway (Eli Lilly) — early results showed 24%+ body weight reduction',
      '99.5%+ purity per batch COA',
    ],
    dosing: 'Community research protocols typically start at 0.5–1mg/week and titrate carefully. This is for educational reference only — consult a licensed healthcare professional before use.',
    coaImageUrl: undefined,
  },
  glow: {
    mechanism: 'GLOW is a blend of GHK-Cu (50mg), BPC-157 (10mg), and TB-500 (10mg). GHK-Cu is a naturally occurring copper peptide with strong affinity for collagen synthesis pathways. BPC-157 and TB-500 are widely researched for tissue repair and regeneration.',
    research: [
      'GHK-Cu: collagen synthesis and wound healing support',
      'BPC-157: tissue repair, gut health, and joint protection research',
      'TB-500: systemic healing, flexibility, and cellular repair',
      'Combined blend designed for skin, glow, and cellular health',
      '99%+ purity per batch COA',
    ],
    dosing: 'Community research protocols typically use 100–200mcg GHK-Cu daily, and 250–500mcg BPC-157/TB-500 daily or every other day. This is for educational reference only — consult a licensed healthcare professional before use.',
    coaImageUrl: undefined,
  },
}

export default function ProductDetail({ product }: { product: Product }) {
  const detail = PRODUCT_DETAILS[product.id]

  return (
    <main>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 px-6 max-w-6xl mx-auto">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-primary" style={{ color: '#6B7280' }}>
          <ArrowLeft size={14} />
          Back to Products
        </Link>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <div className="flex flex-col gap-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: '#FEF0E9', color: '#E8541A' }}
              >
                {product.tag}
              </span>
              <span
                className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: '#F0FFF4', color: '#16A34A' }}
              >
                <CheckCircle2 size={10} />
                {product.purity} Purity
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-balance" style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}>
              {product.name}
            </h1>

            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              {product.descriptor}
            </p>

            {/* Pricing */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-3"
              style={{ background: '#F9F9F9', border: '2px solid #E5E7EB' }}
            >
              <div className="flex items-end gap-3">
                <div className="text-3xl font-black" style={{ color: '#E8541A' }}>{product.priceVnd}</div>
                <div className="text-base font-medium mb-0.5" style={{ color: '#9CA3AF' }}>{product.priceUsd}</div>
              </div>
              <div className="text-sm font-semibold" style={{ color: '#6B7280' }}>{product.quantity}</div>

              <div className="flex flex-col gap-1.5 mt-2">
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

              <div className="flex gap-2 mt-3">
                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 py-4 text-sm gap-2"
                >
                  <MessageCircle size={16} />
                  Order on WhatsApp
                </a>
                <a
                  href={BRAND.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 py-4 text-sm"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Right — COA + research points */}
          <div className="flex flex-col gap-6">
            {/* Research points */}
            <div
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
            >
              <h3 className="text-sm font-black uppercase tracking-widest" style={{ color: '#1A1A1A' }}>
                Research Highlights
              </h3>
              {detail.research.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: '#E8541A' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{point}</span>
                </div>
              ))}
            </div>

            {/* COA thumbnail if available */}
            {detail.coaImageUrl && (
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '2px solid #E8541A' }}
              >
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ background: '#FEF0E9', borderBottom: '1px solid #E8541A' }}
                >
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#E8541A' }}>
                    Certificate of Analysis
                  </span>
                  <a
                    href={detail.coaImageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold transition-opacity hover:opacity-70"
                    style={{ color: '#E8541A' }}
                  >
                    View Full <ExternalLink size={11} />
                  </a>
                </div>
                <a href={detail.coaImageUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={detail.coaImageUrl}
                    alt="Certificate of Analysis — TrustPointe Analytics"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mechanism section */}
      <section className="py-16 px-6" style={{ background: '#F9F9F9' }}>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <h2 className="text-2xl font-black" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
            Mechanism of Action
          </h2>
          <p className="text-base leading-relaxed" style={{ color: '#6B7280', lineHeight: '1.8' }}>
            {detail.mechanism}
          </p>
        </div>
      </section>

      {/* Dosing note */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-7 flex flex-col gap-3"
            style={{ background: '#FEF0E9', border: '1px solid rgba(232,84,26,0.2)' }}
          >
            <h3 className="text-sm font-black uppercase tracking-widest" style={{ color: '#E8541A' }}>
              Community Research Protocols
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7280', lineHeight: '1.8' }}>
              {detail.dosing}
            </p>
            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              For research purposes only. Not medical advice. Consult a licensed healthcare professional before use.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Ready to order ${product.name}?`}
        sub="Message us on WhatsApp or Telegram. We confirm within minutes and deliver same-day in HCMC."
        cta="Order on WhatsApp →"
      />
    </main>
  )
}
