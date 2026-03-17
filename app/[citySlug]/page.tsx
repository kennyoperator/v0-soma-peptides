import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { CheckCircle2, MapPin, Zap, Package } from 'lucide-react'
import { CITY_PAGES } from '@/lib/cities'
import { PRODUCTS, BRAND } from '@/lib/copy'
import { MessageCircle } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = CITY_PAGES.find((c) => c.slug === slug)
  if (!page) return {}
  return {
    title: `Peptides in ${page.city} Vietnam | Fast Delivery | Soma Solutions`,
    description: `Buy lab-tested peptides in ${page.city}, Vietnam. ${page.delivery} delivery. English support. COA verified by TrustPointe Analytics. Tirzepatide, Retatrutide, and GLOW available.`,
    openGraph: {
      title: `Peptides in ${page.city} | Soma Solutions`,
      description: `Lab-tested peptides delivered to ${page.city}. ${page.delivery}. English support. Discreet packaging.`,
    },
  }
}

export function generateStaticParams() {
  return CITY_PAGES.map((c) => ({ slug: c.slug }))
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params
  const page = CITY_PAGES.find((c) => c.slug === slug)
  if (!page) notFound()

  return (
    <>
      {/* LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Soma Solutions',
            description: `Lab-tested peptide supplier in ${page.city}, Vietnam`,
            url: `https://somasolutions.com/${page.slug}`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: page.schema.addressLocality,
              addressRegion: page.schema.addressRegion,
              addressCountry: 'VN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: ['English', 'Vietnamese'],
            },
          }),
        }}
      />

      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} style={{ color: '#E8541A' }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#E8541A' }}>
                {page.city}, Vietnam
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              Peptides in {page.city} — {page.isHCMC ? 'Same-Day' : '2–4 Day'} Delivery
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280', maxWidth: '640px' }}>
              {page.intro}
            </p>

            {/* Delivery badge */}
            <div className="flex items-center gap-3">
              {page.isHCMC ? (
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: '#E8541A' }}
                >
                  <Zap size={14} className="text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wide">Same-Day Delivery in {page.city}</span>
                </div>
              ) : (
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ background: '#FEF0E9' }}
                >
                  <Package size={14} style={{ color: '#E8541A' }} />
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: '#E8541A' }}>2–4 Day Delivery to {page.city}</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-7 py-4 text-sm gap-2 w-full sm:w-auto"
              >
                <MessageCircle size={16} />
                Order on WhatsApp →
              </a>
              <Link href="/products" className="btn-outline px-7 py-4 text-sm w-full sm:w-auto">
                View Products
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-2">
              {['99.9% Purity Verified', 'US Lab Tested', 'English Support', 'Discreet Packaging'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} style={{ color: '#E8541A' }} />
                  <span className="text-xs font-medium" style={{ color: '#6B7280' }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-14 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-black mb-8" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
              Products available in {page.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="rounded-2xl p-6 flex flex-col gap-4"
                  style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
                >
                  <div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: '#FEF0E9', color: '#E8541A' }}
                    >
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-black" style={{ color: '#1A1A1A' }}>{product.name}</h3>
                  <div className="text-xl font-black" style={{ color: '#E8541A' }}>{product.priceVnd}</div>
                  <div className="text-xs mt-auto" style={{ color: '#9CA3AF' }}>
                    {page.isHCMC ? 'Same-day delivery available' : `Ships to ${page.city} in 2–4 days`}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={BRAND.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 py-3 text-xs gap-1.5"
                    >
                      <MessageCircle size={13} />
                      Order
                    </a>
                    <Link href={product.slug} className="btn-outline flex-1 py-3 text-xs">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City FAQ */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-black mb-8" style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}>
              Questions about delivery to {page.city}
            </h2>
            <div className="flex flex-col gap-4">
              {page.faq.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col gap-3"
                  style={{ background: '#F9F9F9', border: '1px solid #E5E7EB' }}
                >
                  <h3 className="text-sm font-bold" style={{ color: '#1A1A1A' }}>{item.q}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          headline={`Order peptides in ${page.city} today`}
          sub={`Message us on WhatsApp or Telegram. ${page.isHCMC ? 'Same-day delivery in HCMC.' : `We ship to ${page.city} in 2–4 days.`} English support always.`}
          cta="Order on WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
