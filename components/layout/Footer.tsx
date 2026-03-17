import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.07)' }} className="px-6 md:px-10 py-14">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium tracking-[0.2em] uppercase" style={{ color: '#F0EDE8' }}>PROTOCOL</span>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#8A8580' }}>
              Personalized protocols. Premium formulations.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {[
              { label: 'Products', href: '/#products' },
              { label: 'Quiz', href: '/quiz' },
              { label: 'FAQ', href: '/#faq' },
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm transition-colors hover:text-[#C8A96E]"
                style={{ color: '#8A8580' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Compliance disclaimer */}
        <div className="compliance-box mb-8">
          COMPLIANCE DISCLAIMER — PENDING REVIEW · These statements have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure, or prevent any disease. All product information is for educational purposes only. Consult with a licensed healthcare provider before beginning any wellness protocol.
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: '#3A3A3A', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Protocol. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
