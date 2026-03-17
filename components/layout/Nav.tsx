'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/copy'

const NAV_LINKS = [
  { label: 'Products', href: '/products' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'Lab Testing', href: '/lab-testing' },
  { label: 'Shipping', href: '/shipping' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 h-16 bg-white"
        style={{ borderBottom: '1px solid #E5E7EB' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Orange%20Text%20%20Logo%2C%20No%20BG-zXwGSR5Kaul2u8ZhsSAiQJxtOHmQJW.png"
            alt="SOMA."
            width={100}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              style={{ color: '#6B7280' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary px-5 py-2.5 text-xs gap-2"
          >
            <MessageCircle size={14} />
            Order on WhatsApp
          </a>
          <button
            className="lg:hidden p-2 rounded-lg transition-colors hover:bg-surface"
            style={{ color: '#6B7280' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed top-16 left-0 right-0 z-40 flex flex-col bg-white lg:hidden"
          style={{ borderBottom: '1px solid #E5E7EB', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-6 py-4 text-sm font-medium border-b transition-colors hover:text-primary hover:bg-surface"
              style={{ color: '#1A1A1A', borderColor: '#E5E7EB' }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4 flex flex-col gap-3">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 text-sm w-full gap-2"
              onClick={() => setOpen(false)}
            >
              <MessageCircle size={16} />
              Order on WhatsApp
            </a>
            <a
              href={BRAND.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-6 py-3 text-sm w-full"
              onClick={() => setOpen(false)}
            >
              Order on Telegram
            </a>
          </div>
        </div>
      )}

      {/* Mobile sticky bottom bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden"
        style={{ background: '#E8541A', borderTop: '1px solid rgba(255,255,255,0.2)' }}
      >
        <a
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm uppercase tracking-wide border-r border-white/20"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href={BRAND.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-bold text-sm uppercase tracking-wide"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          Telegram
        </a>
      </div>
    </>
  )
}
