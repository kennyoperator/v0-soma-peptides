import Link from 'next/link'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { BRAND } from '@/lib/copy'

export default function LabTesting() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black" style={{ letterSpacing: '-0.025em', color: '#1A1A1A' }}>
            Third-Party Lab Verified
          </h2>
          <p className="mt-3 text-base" style={{ color: '#6B7280' }}>
            Every batch is tested by TrustPointe Analytics LLC, an independent US laboratory.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* COA Card */}
          <div
            className="w-full max-w-sm rounded-2xl overflow-hidden"
            style={{ border: '2px solid #E8541A', background: '#FFFFFF' }}
          >
            {/* Header */}
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: '#FEF0E9', borderBottom: '1px solid #E8541A' }}
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#E8541A' }}>
                  Certificate of Analysis
                </div>
                <div className="text-sm font-bold mt-0.5" style={{ color: '#1A1A1A' }}>
                  TrustPointe Analytics LLC
                </div>
              </div>
              <CheckCircle2 size={28} style={{ color: '#E8541A' }} />
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-3">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #F3F4F6' }}>
                <span className="text-xs font-medium" style={{ color: '#6B7280' }}>Product</span>
                <span className="text-sm font-bold" style={{ color: '#1A1A1A' }}>Tirzepatide 30mg</span>
              </div>
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #F3F4F6' }}>
                <span className="text-xs font-medium" style={{ color: '#6B7280' }}>Client</span>
                <span className="text-sm font-bold" style={{ color: '#1A1A1A' }}>Soma Solutions</span>
              </div>
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #F3F4F6' }}>
                <span className="text-xs font-medium" style={{ color: '#6B7280' }}>Purity</span>
                <span className="text-xl font-black" style={{ color: '#E8541A' }}>99.594%</span>
              </div>
              <div className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid #F3F4F6' }}>
                <span className="text-xs font-medium" style={{ color: '#6B7280' }}>Published</span>
                <span className="text-sm font-bold" style={{ color: '#1A1A1A' }}>2025-12-30</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs font-medium" style={{ color: '#6B7280' }}>Sample ID</span>
                <span className="text-sm font-mono" style={{ color: '#6B7280' }}>SPL-2720</span>
              </div>

              {/* View Full COA */}
              <a
                href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2FD90504-5838-4B29-91EC-B2EB5CF00AD1.JPG-q86ui0geFn1k8xoXFMLoqOSm7ps2e6.jpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3 text-xs mt-2 gap-1.5"
              >
                <ExternalLink size={13} />
                View Full COA
              </a>
            </div>
          </div>

          {/* Trust copy */}
          <div className="flex flex-col gap-6 max-w-md">
            <div className="flex flex-col gap-4">
              {[
                "We don't just tell you it's pure. We prove it.",
                'Every batch is independently tested before it ships.',
                'Results are verifiable at TrustPointeLIMS.com using the key on your COA.',
                'COAs available for all products — request via WhatsApp.',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: '#E8541A' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#1A1A1A' }}>{line}</span>
                </div>
              ))}
            </div>

            <Link
              href="/lab-testing"
              className="btn-outline px-6 py-3 text-xs self-start"
            >
              Learn More About Our Testing
            </Link>

            <p className="text-xs" style={{ color: '#9CA3AF' }}>
              Tested by TrustPointe Analytics LLC · 1743 142nd Ave Suite 4, Dorr, MI 49323
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
