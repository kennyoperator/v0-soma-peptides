import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import CTASection from '@/components/CTASection'
import { CheckCircle2, ExternalLink } from 'lucide-react'
import { BRAND } from '@/lib/copy'

export const metadata: Metadata = {
  title: 'Lab Testing & COA | Soma Solutions Vietnam',
  description:
    'Every Soma Solutions batch is tested by TrustPointe Analytics LLC, an independent US laboratory. View our Certificates of Analysis and verify results online.',
}

export default function LabTestingPage() {
  return (
    <>
      <Nav />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span
              className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full self-center"
              style={{ background: '#FEF0E9', color: '#E8541A' }}
            >
              Third-Party Tested
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-balance"
              style={{ letterSpacing: '-0.03em', color: '#1A1A1A' }}
            >
              We don&apos;t just tell you it&apos;s pure. We prove it.
            </h1>
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>
              Every batch of Soma Solutions peptides is independently tested by TrustPointe Analytics
              LLC — a certified US laboratory — before it ships. Results are publicly verifiable.
            </p>
          </div>
        </section>

        {/* What COA proves */}
        <section className="py-16 px-6" style={{ background: '#F9F9F9' }}>
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-black mb-10 text-center"
              style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              What a Certificate of Analysis proves
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Purity',
                  desc: 'The COA confirms the exact purity percentage of the peptide. Our Tirzepatide batch tested at 99.594%.',
                },
                {
                  title: 'Identity',
                  desc: 'Spectral and RT analysis confirms the compound is exactly what it says it is — no substitutions.',
                },
                {
                  title: 'System Suitability',
                  desc: 'Confirms the testing equipment and methodology were functioning correctly during the analysis.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-7 flex flex-col gap-3"
                  style={{ background: '#FFFFFF', border: '2px solid #E5E7EB' }}
                >
                  <CheckCircle2 size={24} style={{ color: '#E8541A' }} />
                  <h3 className="text-lg font-black" style={{ color: '#1A1A1A' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COA viewer */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-black mb-10 text-center"
              style={{ color: '#1A1A1A', letterSpacing: '-0.02em' }}
            >
              Current Certificates of Analysis
            </h2>

            <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
              {/* COA card */}
              <div
                className="w-full max-w-sm rounded-2xl overflow-hidden shrink-0"
                style={{ border: '2px solid #E8541A' }}
              >
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ background: '#FEF0E9', borderBottom: '1px solid #E8541A' }}
                >
                  <div>
                    <div
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: '#E8541A' }}
                    >
                      Certificate of Analysis
                    </div>
                    <div className="text-sm font-bold mt-0.5" style={{ color: '#1A1A1A' }}>
                      TrustPointe Analytics LLC
                    </div>
                  </div>
                  <CheckCircle2 size={24} style={{ color: '#E8541A' }} />
                </div>

                {/* COA image thumbnail */}
                <a
                  href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2FD90504-5838-4B29-91EC-B2EB5CF00AD1.JPG-q86ui0geFn1k8xoXFMLoqOSm7ps2e6.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2FD90504-5838-4B29-91EC-B2EB5CF00AD1.JPG-q86ui0geFn1k8xoXFMLoqOSm7ps2e6.jpeg"
                    alt="TrustPointe Analytics Certificate of Analysis — Tirzepatide 30mg, 99.594% purity"
                    width={600}
                    height={800}
                    className="w-full object-cover"
                  />
                </a>

                <div className="px-5 py-4 flex flex-col gap-2">
                  {[
                    ['Product', 'Tirzepatide 30mg'],
                    ['Client', 'Soma Solutions'],
                    ['Purity', '99.594%'],
                    ['Published', '2025-12-30'],
                    ['Sample ID', 'SPL-2720'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between py-1.5"
                      style={{ borderBottom: '1px solid #F3F4F6' }}
                    >
                      <span className="text-xs" style={{ color: '#6B7280' }}>
                        {label}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: label === 'Purity' ? '#E8541A' : '#1A1A1A' }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                  <a
                    href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2FD90504-5838-4B29-91EC-B2EB5CF00AD1.JPG-q86ui0geFn1k8xoXFMLoqOSm7ps2e6.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full py-3 text-xs mt-3 gap-1.5"
                  >
                    <ExternalLink size={13} />
                    View Full COA
                  </a>
                </div>
              </div>

              {/* Trust points */}
              <div className="flex flex-col gap-6 max-w-md">
                <div className="flex flex-col gap-5">
                  {[
                    {
                      title: 'Independent Testing',
                      desc: 'TrustPointe Analytics LLC is a fully independent laboratory with no financial relationship with Soma Solutions beyond testing fees.',
                    },
                    {
                      title: 'Publicly Verifiable',
                      desc: 'Every COA includes a unique verification key. You can confirm the result directly at TrustPointeLIMS.com using the key printed on your document.',
                    },
                    {
                      title: 'Per-Batch Testing',
                      desc: 'We do not test once and reuse the results. Each new batch receives its own independent COA before it is made available for sale.',
                    },
                    {
                      title: 'COAs for All Products',
                      desc: 'COAs are available for all Soma Solutions products. Request a copy for any product via WhatsApp or Telegram before ordering.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: '#E8541A' }} />
                      <div>
                        <div className="text-sm font-bold mb-1" style={{ color: '#1A1A1A' }}>
                          {item.title}
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-2xl p-5 mt-2"
                  style={{ background: '#F9F9F9', border: '1px solid #E5E7EB' }}
                >
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>
                    <span className="font-bold" style={{ color: '#1A1A1A' }}>TrustPointe Analytics LLC</span>
                    <br />
                    1743 142nd Ave Suite 4, Dorr, MI 49323
                    <br />
                    <a
                      href="https://trustpointeanalytics.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:opacity-70"
                      style={{ color: '#E8541A' }}
                    >
                      trustpointeanalytics.com →
                    </a>
                  </p>
                </div>

                <a
                  href={BRAND.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 text-xs self-start gap-2"
                >
                  Request a COA via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          headline="Have questions about our testing?"
          sub="Message us on WhatsApp or Telegram. We will send you the COA for any product before you order."
          cta="Ask via WhatsApp →"
        />
      </main>
      <Footer />
    </>
  )
}
