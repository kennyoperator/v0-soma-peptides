'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-16"
      style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Logo */}
      <Link href="/" className="text-sm font-medium tracking-[0.2em] uppercase" style={{ color: '#F0EDE8', letterSpacing: '0.2em' }}>
        PROTOCOL
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {['Products', 'About', 'FAQ'].map((item) => (
          <Link
            key={item}
            href={item === 'Products' ? '/#products' : item === 'FAQ' ? '/#faq' : '#'}
            className="text-sm transition-colors hover:text-[#C8A96E]"
            style={{ color: '#8A8580', letterSpacing: '0.03em' }}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* CTA + mobile hamburger */}
      <div className="flex items-center gap-4">
        <Link href="/quiz" className="hidden md:inline-flex btn-gold px-5 py-2 rounded text-xs tracking-widest uppercase">
          Start Assessment
        </Link>
        <button
          className="md:hidden p-1"
          style={{ color: '#8A8580' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 flex flex-col gap-0 md:hidden"
          style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {['Products', 'About', 'FAQ'].map((item) => (
            <Link
              key={item}
              href={item === 'Products' ? '/#products' : item === 'FAQ' ? '/#faq' : '#'}
              className="px-6 py-4 text-sm border-b"
              style={{ color: '#8A8580', borderColor: 'rgba(255,255,255,0.06)' }}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/quiz"
              className="btn-gold w-full block text-center px-5 py-3 rounded text-xs tracking-widest uppercase"
              onClick={() => setOpen(false)}
            >
              Start Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
