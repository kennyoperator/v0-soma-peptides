import Link from 'next/link'
import Image from 'next/image'
import { BRAND, CITIES } from '@/lib/copy'

const FOOTER_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'Lab Testing', href: '/lab-testing' },
  { label: 'Shipping', href: '/shipping' },
  { label: 'Protocols', href: '/protocols' },
  { label: 'Mixing Guide', href: '/mixing-guide' },
  { label: 'Injection Guide', href: '/injection-guide' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Wholesale', href: '/wholesale' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', color: '#FFFFFF' }} className="px-6 md:px-10 pt-16 pb-24 lg:pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:max-w-xs">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/White%20Text%20%20Logo%2C%20No%20BG-erWvdz6BfTYdbutqZkb28jP3K9H4P8.png"
              alt="SOMA."
              width={100}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
              Vietnam&apos;s trusted source for lab-tested peptides. Same-day delivery in HCMC. English support. Real results.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-2 mt-2">
              <a href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary" style={{ color: '#E8541A' }}>
                WhatsApp →
              </a>
              <a href={BRAND.telegram} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary" style={{ color: '#E8541A' }}>
                Telegram →
              </a>
              <a href={`mailto:${BRAND.email}`}
                className="text-sm transition-colors" style={{ color: '#9CA3AF' }}>
                {BRAND.email}
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
            {FOOTER_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: '#9CA3AF' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Cities */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#6B7280' }}>Cities Served</span>
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="text-sm transition-colors hover:text-white"
                style={{ color: '#9CA3AF' }}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="rounded-2xl p-5 mb-8 text-xs leading-relaxed"
          style={{ background: '#111111', border: '1px dashed rgba(255,255,255,0.15)', color: '#6B7280' }}
        >
          <span className="font-bold uppercase tracking-widest text-[10px]" style={{ color: '#E8541A' }}>Legal Disclaimer · </span>
          {BRAND.disclaimer}
        </div>

        <p className="text-xs" style={{ color: '#374151' }}>
          &copy; {new Date().getFullYear()} Soma Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
